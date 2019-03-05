#!/usr/bin/env python
# encoding: utf8

import pickle
import sys

import datetime

import tweet2vec
import numpy as np

twts_pkl_file = "twts.pkl"


def load_matrix(twts):
    m = []
    for id in twts:
        vec = twts[id][tweet2vec.VECTOR]
        if np.count_nonzero(vec):
            vec = vec/np.linalg.norm(vec)
        m.append(vec)

    matrix= np.array(m)
    return matrix


def get_closets_ids(line_tweet_vec, twts_matrix, amount):
    dot_products = twts_matrix.dot(line_tweet_vec)
    most_similar_ids = dot_products.argsort()[-1:-amount:-1]
    return most_similar_ids


def print_tweet(id, tweet_obj):
    print("printing tweet id: %d" % id)
    print("user: %s" % tweet_obj[tweet2vec.USER])
    print("details: %s" % tweet_obj[tweet2vec.DETAILS])
    tweet = "".join(tweet_obj[tweet2vec.TWEET].decode('utf-8')).encode("utf_8_sig")
    print("tweet: %s" % tweet)


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ) )
    input_f = sys.argv[1]
    line = ""
    with open(input_f) as f:
        line = f.readlines()[0]

    print("original line: " + line)
    line_tweet_vec = tweet2vec.get_vec(line)

    twts_matrix = load_matrix(twts)
    ids = get_closets_ids(line_tweet_vec, twts_matrix, 10)
    for id in ids:
        print_tweet(id, twts[id])
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))
