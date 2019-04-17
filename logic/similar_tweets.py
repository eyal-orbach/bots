import datetime
import pickle
from db.db_manager import *
import numpy as np
import logging
from logic import dense_users, tweet2vec




class similarity_request_obj:
    def __init__(self, k_tweets, text, dist_method):
        self.k_tweets = int(k_tweets)
        self.text = text
        self.dist_method = dist_method


tweets_vecs = None
tweets_vecs_magnitudes = None
def load_twts(twts):
    global tweets_vecs, tweets_vecs_magnitudes
    tweets_vecs = twts
    tweets_vecs_magnitudes = np.linalg.norm(tweets_vecs, axis=1)




def get_similar_tweets_indices(origin_text, requested_dist_method):
    base_vec = tweet2vec.instance.get_vec(origin_text)
    dist_method = get_dist_method(requested_dist_method)
    distances_from_base = dist_method(base_vec, tweets_vecs, tweets_vecs_magnitudes)

    return iter(np.argsort(distances_from_base))


def get_eucledan_distances(base_vec: np.ndarray, target_vecs: np.ndarray, ignore):
    targets_minus_base = target_vecs - base_vec
    distances_from_base = np.linalg.norm(targets_minus_base, axis=1)
    return distances_from_base

def get_cosine_distances(base_vec: np.ndarray, target_vecs: np.ndarray, target_vecs_magnitudes: np.ndarray):
    base_magnitude = np.linalg.norm(base_vec)
    denominators = target_vecs_magnitudes * base_magnitude
    numerators = (np.dot(target_vecs, base_vec))
    cosines = numerators / denominators
    return 0.5 * (1 - cosines)


#todo: insert logic to filter dates
def is_valid_date(dbtweet):
    return True


def get_similar_tweets(request_obj:similarity_request_obj):
    indices = get_similar_tweets_indices(request_obj.text, request_obj.dist_method)
    final_users = []
    counter = 0
    for index in indices:
        dbtweet = Tweet.get(idx=index)
        if is_valid_date(dbtweet):
            dbuser = User.get(userid = dbtweet.userid)
            user_dict={"name": dbuser.name, "tweeter_id":str(dbuser.userid)}
            tweet = {"tweetid": str(dbtweet.tweetid), "msg":dbtweet.msg, "time":dbtweet.time, "removed":False}
            user_dict["tweets"] = [tweet]
            final_users.append(user_dict)
            counter += 1

        if counter >= request_obj.k_tweets:
            return final_users

    return final_users

def get_dist_method(requested_dist_method):
    if requested_dist_method == "cosine":
        return get_cosine_distances
    else:
        return get_eucledan_distances

