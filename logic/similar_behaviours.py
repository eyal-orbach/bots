import config.config as conf
import numpy as np
import itertools
import pickle
from logic.distance_functions import *
from db.db_manager import *
import logging
import datetime
import multiprocessing
from errors.UserError import UserError

MAX_TWEETS = 10


class behaviour_request_obj:
    def __init__(self, k_tweets, userid, startdate, enddate, dist_method="euclidean"):
        self.k_users= int(k_tweets)
        self.userid = userid
        self.dist_method = dist_method
        self.startDate = datetime.datetime.fromtimestamp(startdate)
        self.endDate = datetime.datetime.fromtimestamp(enddate)


MIN_TWEETS = 5
all_timed_tweets = None
all_timed_tweets_vecs_magnitudes = None
users_to_tweets = None
dist_method = None



def load_data():
    global all_timed_tweets, all_timed_tweets_vecs_magnitudes, users_to_tweets
    logging.debug("started loading sb data")
    all_timed_tweets = np.load(conf.timed_tweets_vecs_file)
    users_to_tweets = pickle.load(open(conf.users_to_tweets_pkl, "rb"))
    all_timed_tweets_vecs_magnitudes = np.linalg.norm(all_timed_tweets, axis=1)
    logging.debug("finished loading sb data")

def get_user_tweets_extended_vecs(user, startdate, enddate):
    selectTweets = Tweet.select(Tweet.idx).where((Tweet.userid==user.userid)&(Tweet.time > startdate) & (Tweet.time < enddate))
    return [all_timed_tweets[t.idx] for t in selectTweets]


def get_users_min_distance_to_vec(vec):
    all_tweets_distances = dist_method(vec, all_timed_tweets, all_timed_tweets_vecs_magnitudes)
    users_min_distances = []
    users_argmins = []
    logging.debug("sb - iterating over all users")
    for user, twts_indices in users_to_tweets.items():
        u_distances = np.take(all_tweets_distances, twts_indices)
        users_min_distances.append(u_distances.min())
        users_argmins.append(twts_indices[u_distances.argmin()])
    logging.debug("sb - finished iterating")
    return users_min_distances, users_argmins



def get_distances_per_user(user_tweets_vecs):
    users_distances = []
    users_argmins = []
    nuser_tweets_vecs = np.array(user_tweets_vecs)
    c = parallel_apply_along_axis(get_mins_per_vec, 1, nuser_tweets_vecs)
    [dists, indices] = np.split(c,2,axis=1)
    amount_of_original_user_tweets = len(user_tweets_vecs)
    amount_of_users = len(users_to_tweets)
    return dists.reshape(amount_of_original_user_tweets, amount_of_users), \
           indices.reshape(amount_of_original_user_tweets, amount_of_users)

def get_mins_per_vec( vec):
    logging.debug("sb - started origin user tweet")
    users_min_distance_to_vec, users_argmin = get_users_min_distance_to_vec(vec)
    logging.debug("sb - got distances")
    return np.array([np.array(users_min_distance_to_vec),np.array(users_argmin)])


vf = np.vectorize(get_mins_per_vec)

def calc_scores(user_ditances_arrays):
    #sum per each user
    return user_ditances_arrays.transpose().sum(axis=1)


def get_similar_behaviour_user_indices(user_tweets_vecs, startdate, enddate):
    user_ditances_arrays, users_argmins = get_distances_per_user(user_tweets_vecs)
    logging.debug("sb - got all users distances arrays")
    users_scores = calc_scores(user_ditances_arrays)
    logging.debug("sb - calculated scores")
    return  iter(np.argsort(users_scores)), users_argmins


def get_user(userid):
    user = None
    if userid.isdigit():
        user = User.get_or_none(userid=userid)

    if user is None:
        if userid[0] == "@":
            name = userid[1:]
        else:
            name = userid
        user = User.get_or_none(name=name)
    return user


def get_tweet_vecs(req_object):
    user = get_user(req_object.userid)
    if user is None:
        raise UserError('User not found in database')

    user_tweets_vecs = get_user_tweets_extended_vecs(user, req_object.startDate, req_object.endDate)
    if len(user_tweets_vecs) == 0:
        raise UserError('User has no tweets in this time range')

    if len(user_tweets_vecs) > MAX_TWEETS:
        raise UserError('User has too many tweets in this time range (limit is '+str(MAX_TWEETS)+')')

    return user_tweets_vecs


def get_similar_behaviour_users(request_obj:behaviour_request_obj):
    global dist_method
    dist_method = get_dist_method(request_obj.dist_method)
    user_tweets_vecs = get_tweet_vecs(request_obj)
    logging.debug("sb- loaded user")
    sorted_user_indices, users_argmins = get_similar_behaviour_user_indices(user_tweets_vecs, request_obj.startDate, request_obj.endDate)
    logging.debug("sb- got all sorted users")


    k_indics = list(itertools.islice(sorted_user_indices, request_obj.k_users))

    all_close_tweets_idx = []
    close_tweets_indices = {}
    for uidx in k_indics:
        indices_set = set()
        for v in range(len(users_argmins)):
            tidx = users_argmins[v][uidx]
            indices_set.add(tidx)
            all_close_tweets_idx.append(tidx)
        close_tweets_indices[uidx] = indices_set
    logging.debug("mapped used tweets")


    releventTweets = Tweet.select(User.name, User.userid, User.idx, Tweet.tweetid, Tweet.msg, Tweet.time, Tweet.idx)\
        .join(User, on=(User.userid==Tweet.userid)).where((User.idx << k_indics) & (Tweet.time>request_obj.startDate) & (Tweet.time < request_obj.endDate) & (Tweet.idx << all_close_tweets_idx))
    logging.debug("loaded relevanttweets")
    print("loaded relevanttweets")
    print(datetime.datetime.now())




    final_users_dict = {}
    for rt in releventTweets:
        user_dict = final_users_dict.get(rt.user.idx, {})
        user_dict["name"] = rt.user.name
        user_dict["tweeter_id"] = str(rt.user.userid)
        user_tweets = user_dict.get("tweets", [])

        used_for_similarity = rt.idx in close_tweets_indices[rt.user.idx]
        user_tweets.append({"tweetid": str(rt.tweetid), "msg":rt.msg, "time":rt.time, "used":used_for_similarity})
        user_dict["tweets"] = user_tweets
        final_users_dict[rt.user.idx] = user_dict

    return [final_users_dict[k] for k in k_indics]

def unpacking_apply_along_axis(p):
    (func1d, axis, arr, args, kwargs) = p
    """
    Like numpy.apply_along_axis(), but and with arguments in a tuple
    instead.

    This function is useful with multiprocessing.Pool().map(): (1)
    map() only handles functions that take a single argument, and (2)
    this function can generally be imported from a module, as required
    by map().
    """
    return np.apply_along_axis(func1d, 1, arr, *args, **kwargs)

def parallel_apply_along_axis(func1d, axis, arr, *args, **kwargs):
    """
    Like numpy.apply_along_axis(), but takes advantage of multiple
    cores.
    """
    # Effective axis where apply_along_axis() will be applied by each
    # worker (any non-zero axis number would work, so as to allow the use
    # of `np.array_split()`, which is only done on axis 0):
    effective_axis = 1 if axis == 0 else axis
    if effective_axis != axis:
        arr = arr.swapaxes(axis, effective_axis)


    # Chunks for the mapping (only a few chunks):
    chunks = [(func1d, 0, sub_arr, args, kwargs)
              for sub_arr in np.array_split(arr, len(arr), 0)]

    pool = multiprocessing.Pool()
    individual_results = pool.map(unpacking_apply_along_axis, chunks)
    # Freeing the workers:
    pool.close()
    pool.join()

    return np.concatenate(individual_results)

