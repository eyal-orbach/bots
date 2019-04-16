import datetime
import pickle
from db.db_manager import *
import numpy as np

from logic import dense_users, tweet2vec

class similarity_request_obj:
    def __init__(self, k_tweets, text):
        self.k_tweets = int(k_tweets)
        self.text = text


tweet_vecs = None
def load_twts(twts):
    global tweet_vecs
    tweet_vecs = twts

DIST_FROM_TWEET = "dist_from_tweet"



def filter_tweets(twts, start, end):
    ordered_twts = sorted(twts.items(), key=lambda x:float(x[1][tweet2vec.DETAILS][1]))
    filtered = [x for x in ordered_twts if float(x[1][tweet2vec.DETAILS][1]) >= start and float(x[1][tweet2vec.DETAILS][1]) <= end]
    return filtered


def calc_tweets_distance_from_base(dtwts, base_vec):
    for twt in dtwts:
        dist_from_base = np.linalg.norm(twt[1][tweet2vec.VECTOR] - base_vec)
        twt[1][DIST_FROM_TWEET] = dist_from_base

    return dtwts

def get_top_k(ts, k):
    # sorted_users = sorted(users.items(), key=lambda x:x[1][AVG_DIST])
    sorted_tweets = sorted(ts, key=lambda x: float(x[1][DIST_FROM_TWEET]))
    return sorted_tweets[:k]


def get_similar_tweets_indices(origin_text):
    base_vec = tweet2vec.instance.get_vec(origin_text)
    #eucleadean distance
    twts_minus_base = tweet_vecs - base_vec
    distances_from_base = np.linalg.norm(twts_minus_base, axis=1)

    return iter(np.argsort(distances_from_base))


def is_valid_date(dbtweet):
    return True


def get_similar_tweets(request_obj:similarity_request_obj):
    indices = get_similar_tweets_indices(request_obj.text)
    final_users = []
    counter = 0
    for index in indices:
        dbtweet = Tweet.get(idx=index)
        if is_valid_date(dbtweet):
            dbuser = User.get(userid = dbtweet.userid)
            user_dict={"name": dbuser.name, "tweeter_id":dbuser.userid}
            tweet = {"tweetid": dbtweet.tweetid, "msg":dbtweet.msg, "time":dbtweet.time, "removed":False}
            user_dict["tweets"] = [tweet]
            final_users.append(user_dict)
            counter += 1

        if counter >= request_obj.k_tweets:
            return final_users

    return final_users






