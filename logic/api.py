import logic.dense_users as subject
import logic.similar_tweets as st
import numpy as np
import config.config as conf
import json


tweets_vecs = None
def init():
    tweets_vecs = np.load(conf.tweets_vecs_file)
    st.load_twts(tweets_vecs)


ORIGIN_TEXT = "originText"
K_USERS = "k_users"
SUBJECT_PROXIMITY = "subjectProximity"
DENSITY = "density"

def subject_density(data, centroids, densitys):
    obj = subject.density_request_obj(data[K_USERS], data[SUBJECT_PROXIMITY], data[DENSITY], data[ORIGIN_TEXT])
    raw_results = subject.get_dense_users(obj, centroids, densitys)
    return json.dumps(raw_results, default=str)



K_TWEETS = "kTweets"
def tweet_similarity(data):
    obj = st.similarity_request_obj(data[K_TWEETS], data[ORIGIN_TEXT])
    raw_results = st.get_similar_tweets(obj)
    return json.dumps(raw_results, default=str)