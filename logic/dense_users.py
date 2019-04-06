from logic import tweet2vec
import config.config as conf
import numpy as np
from db.db_manager import *

class density_request_obj:
    def __init__(self, k_users, proximity, density, text):
        self.k_users = k_users
        self.proximity_factor = proximity
        self.density_factor = density
        self.text = text

def get_dense_users(request_obj:density_request_obj, centroids, densitys):
    sorted_k_indices = get_dense_users_indices(centroids, densitys, request_obj)
    final_users = []
    for index in sorted_k_indices:
        dbuser = User.get(idx=index)
        user_dict={"name": dbuser.name, "tweeter_id":dbuser.userid}
        db_all_tweets = Tweet.select().where(Tweet.userid==dbuser.userid)
        user_tweets = []
        for db_tweet in db_all_tweets:
            tweet = {"tweetid": db_tweet.tweetid, "msg":db_tweet.msg, "time":db_tweet.time}
            user_tweets.append(tweet)
        user_dict["tweets"] = user_tweets
        final_users.append(user_dict)
    return final_users


def get_dense_users_indices(centroids, densitys, request_obj):
    base_vec = tweet2vec.instance.get_vec(request_obj.text)
    centroids_minus_base = centroids - base_vec
    distances_from_base = np.linalg.norm(centroids_minus_base, axis=1)
    factored_array = (distances_from_base * request_obj.proximity_factor) + (densitys * request_obj.density_factor)
    return np.argmin(factored_array)[:request_obj.k_users]





