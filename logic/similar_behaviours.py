import config.config as conf
import numpy as np
import pickle
from logic.distance_functions import *
from db.db_manager import *
import logging


class behaviour_request_obj:
    def __init__(self, k_tweets, userid, dist_method="euclidean"):
        self.k_users= int(k_tweets)
        self.userid = userid
        self.dist_method = dist_method

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

def get_user_tweets_extended_vecs(user):
    tweets_idx = users_to_tweets[user.idx]
    return [all_timed_tweets[idx] for idx in tweets_idx]


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


def get_similar_behaviour_user_indices(user):
    if user is None:
        return [],[]

    user_tweets_vecs = get_user_tweets_extended_vecs(user)
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


def get_similar_behaviour_users(request_obj:behaviour_request_obj):
    global dist_method
    dist_method = get_dist_method(request_obj.dist_method)
    user = get_user(request_obj.userid)
    logging.debug("sb- loaded user")
    sorted_user_indices, users_argmins = get_similar_behaviour_user_indices(user)
    logging.debug("sb- got all sorted users")
    final_users = []
    counter = 0
    for index in sorted_user_indices:
        dbuser = User.get(idx=index)
        if dbuser.tweetsnum < MIN_TWEETS:
            continue

        close_tweets_indices = [users_argmins[v][index] for v in range(len(users_argmins))]
        user_dict={"name": dbuser.name, "tweeter_id":str(dbuser.userid)}
        db_all_tweets = Tweet.select().where(Tweet.userid == dbuser.userid)
        user_tweets = []
        for db_tweet in db_all_tweets:
            used_for_similarity = db_tweet.idx in close_tweets_indices
            tweet = {"tweetid": str(db_tweet.tweetid), "msg":db_tweet.msg, "time":db_tweet.time, "used":used_for_similarity}
            user_tweets.append(tweet)
        user_dict["tweets"] = user_tweets
        final_users.append(user_dict)
        counter+=1
        if counter >= request_obj.k_users:
            return final_users

    return final_users

