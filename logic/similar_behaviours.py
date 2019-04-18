import config.config as conf
import numpy as np
from logic.distance_functions import *
from db.db_manager import *


class behaviour_request_obj:
    def __init__(self, k_tweets, userid, dist_method):
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
    #load all time tweets
    all_timed_tweets = np.load(conf.timed_tweets_file)
    users_to_tweets = np.load(conf.users_to_tweets_file)
    all_timed_tweets_vecs_magnitudes = np.linalg.norm(all_timed_tweets, axis=1)

def get_user_tweets_extended_vecs(userid):
    #get_vecs_with_time
    return []


def get_users_min_distance_to_vec(vec):
    all_tweets_distances = dist_method(vec, all_timed_tweets, all_timed_tweets_vecs_magnitudes)
    users_min_distances = []
    users_argmins = []
    for user, twts_indices in users_to_tweets:
        u_distances = np.take(all_tweets_distances, twts_indices)
        users_min_distances.append(u_distances.min())
        users_argmins.append(u_distances.argmin())

    return users_min_distances, users_argmins




def get_distances_per_user(user_tweets_vecs):
    users_distances = []
    users_argmins = []
    for vec in user_tweets_vecs:
        users_min_distance_to_vec, users_argmin = get_users_min_distance_to_vec(vec)
        users_distances.append(users_min_distance_to_vec)
        users_argmins.append(users_argmin)

    #nparray?
    return users_distances, users_argmins


def calc_scores(user_ditances_arrays):
    #sum per each user
    return user_ditances_arrays


def get_similar_behaviour_user_indices(userid, req_dist_method="eucleaden"):
    global dist_method
    dist_method = get_dist_method(req_dist_method)
    user_tweets_vecs = get_user_tweets_extended_vecs(userid)
    user_ditances_arrays, users_argmins = get_distances_per_user(user_tweets_vecs)
    users_scores = calc_scores(user_ditances_arrays)
    return  iter(np.argsort(users_scores)), users_argmins

def get_similar_behaviour_users(request_obj:behaviour_request_obj):
    sorted_user_indices, users_argmins = get_similar_behaviour_user_indices(request_obj.userid, request_obj.dist_method)
    final_users = []
    counter = 0
    for index in sorted_user_indices:
        dbuser = User.get(idx=index)
        if dbuser.tweetsnum < MIN_TWEETS:
            continue

        close_tweets_indices = users_argmins[index]
        user_dict={"name": dbuser.name, "tweeter_id":str(dbuser.userid)}
        db_all_tweets = Tweet.select().where(Tweet.userid==dbuser.userid)
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

