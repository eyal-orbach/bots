#!/usr/bin/env python
# encoding: utf8

import datetime
import pickle
import sys

import numpy as np

from logic import tweet2vec

INPUTIDX_ARG = "--inputidx"
INPUT_ARG = "--input"
INDEX_ARG = "--index"

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
    tweet = (tweet_obj[tweet2vec.TWEET].decode('utf-8_sig')).encode("utf_8_sig")
    print("tweet: %s" % tweet)


def get_close_tweets(tweet_vec):
    twts_matrix = load_matrix(twts)
    ids = get_closets_ids(tweet_vec, twts_matrix, 10)
    for id in ids:
        print_tweet(id, twts[id])


def print_original_tweet(idx):
    print("original tweet")
    print_tweet(idx, twts[idx])
    print("*****\n\n")



if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ) )

    line_tweet_vec = None
    if INDEX_ARG in sys.argv:
        arg_index = sys.argv.index(INDEX_ARG)
        twt_id = int(sys.argv[arg_index+1])
        print_original_tweet(twt_id)
        line_tweet_vec = twts[twt_id][tweet2vec.VECTOR]
        get_close_tweets(line_tweet_vec)
    elif INPUTIDX_ARG in sys.argv:
        arg_index = sys.argv.index(INPUTIDX_ARG)
        stop = False
        while not stop:
            nb = input('Choose a tweet index: ')
            idx = int(nb)
            if idx <  0:
                stop = True
            else:
                print_original_tweet(idx)
                line_tweet_vec = twts[idx][tweet2vec.VECTOR]
                get_close_tweets(line_tweet_vec)
    elif INPUT_ARG in sys.argv:
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("started at %s\n" %(time))
        w2v = pickle.load(open(tweet2vec.w2v_pkl_file, "rb"))
        word_counts, total_tweets = pickle.load(open(tweet2vec.idf_pkl_file, "rb"))
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("finished loading at %s\n" %(time))
        arg_index = sys.argv.index(INPUT_ARG)
        stop = False
        while not stop:
            nb = input('Enter line: ')
            if nb == "-1":
                stop = True
            else:
                vec = tweet2vec.get_vec(nb, w2v, word_counts, total_tweets)
                get_close_tweets(line_tweet_vec)



    # input_f = sys.argv[1]
    # line = ""
    # with open(input_f) as f:
    #     line = f.readlines()[0]
    #
    # print("original line: " + line)
    # line_tweet_vec = tweet2vec.get_vec(line)
    # get_close_tweets(line_tweet_vec)


    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))
