import config.config as conf
import numpy as np
import itertools
import pickle
from logic.distance_functions import *
from db.db_manager import *
import logging
import datetime

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
    tweets_idxes = users_to_tweets[user.idx]
    user_timed_tweets=[]
    for tweet_idx in tweets_idxes:
        tweet = Tweet.get(idx=tweet_idx)
        if tweet.time > startdate and tweet.time < enddate:
            user_timed_tweets.append(all_timed_tweets[tweet_idx])

    return user_timed_tweets


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
    for vec in user_tweets_vecs:
        logging.debug("sb - started origin user tweet")
        users_min_distance_to_vec, users_argmin = get_users_min_distance_to_vec(vec)
        logging.debug("sb - got distances")
        users_distances.append(np.array(users_min_distance_to_vec))
        users_argmins.append(np.array(users_argmin))

    return np.array(users_distances), np.array(users_argmins)


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
        raise ValueError('User not found in database')

    user_tweets_vecs = get_user_tweets_extended_vecs(user, req_object.startDate, req_object.endDate)
    if len(user_tweets_vecs) == 0:
        raise ValueError('User has no tweets in this time range')

    if len(user_tweets_vecs) > MAX_TWEETS:
        raise ValueError('User has too many tweets in this time range (limit is '+str(MAX_TWEETS)+')')

    return user_tweets_vecs


def get_similar_behaviour_users(request_obj:behaviour_request_obj):
    global dist_method
    dist_method = get_dist_method(request_obj.dist_method)
    user_tweets_vecs = get_tweet_vecs(request_obj)
    logging.debug("sb- loaded user")
    sorted_user_indices, users_argmins = get_similar_behaviour_user_indices(user_tweets_vecs, request_obj.startDate, request_obj.endDate)
    logging.debug("sb- got all sorted users")
    final_users = []
    counter = 0

    k_indics = list(itertools.islice(sorted_user_indices, request_obj.k_users))


    releventTweets = Tweet.select(User.name, User.userid, User.idx, Tweet.tweetid, Tweet.msg, Tweet.time, Tweet.idx).join(User, on=(User.userid==Tweet.userid)).where((User.idx << k_indics) & (Tweet.time>request_obj.startDate) & (Tweet.time < request_obj.endDate ))

    for rt in releventTweets:
        print(rt)

    logging.debug("loaded relevanttweets")

    close_tweets_indices = {}
    for uidx in k_indics:
        indices_set = set()
        for v in range(len(users_argmins)):
            indices_set.add(users_argmins[v][uidx])
        close_tweets_indices[uidx] = indices_set


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

