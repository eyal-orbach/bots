import datetime
import numpy as np
import pickle
import sys

import yoav_tokenizer
from data_parser import TYPES

INPUT_ARG = "--input"

FILE_ARG = "--file"

USER = "user"

DETAILS = "details"

TWEET = "tweet"

VECTOR = "vector"

w2v_pkl_file = "data/w2v.pkl"
idf_pkl_file = "data/tf_idf.pkl"

#
# w2v_pkl_file = "data/w2v.sml.pkl"
# idf_pkl_file = "data/tfidf.sml.pkl"

def get_vec(tweet, w2v, word_counts, total_tweets):
    tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(tweet)]
    tweet_vec = np.zeros(100)
    terms = {}
    for (type, tok) in tokenized:
        if type in TYPES and tok in w2v and tok in word_counts:
            if tok in terms:
                terms[tok]["tf"] += 1
            else:
                idf = np.log(float(total_tweets)/float(word_counts[tok]))
                terms[tok] = {"tf": 1, "vec": np.array(w2v[tok]), "idf": idf}

    for term in terms.values():
        tfidf = term["tf"] * term["idf"]
        vec = tfidf * term["vec"]
        tweet_vec += vec

    return tweet_vec


def load_twts(twts_file):
    tweets = {}
    with open(twts_file) as f:
        content = f.readlines()
        i=0
        for line in content:
            i += 1
            if i % 100:
                print("reading line %d" % i)
            arr = line.split()
            user = arr[0]
            details = arr[1:4]
            tweet = " ".join(arr[4:])
            vector = get_vec(tweet, w2v, word_counts, total_tweets)
            tweets[i] = {USER: user, DETAILS: details, TWEET: tweet, VECTOR: vector}

    return tweets


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("started at %s\n" %(time))
    w2v = pickle.load( open( w2v_pkl_file, "rb" ) )
    word_counts, total_tweets = pickle.load( open( idf_pkl_file, "rb" ) )
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("finished loading at %s\n" %(time))

    if FILE_ARG in sys.argv:
        arg_index = sys.argv.index(FILE_ARG)
        twts_raw_data_file = sys.argv[arg_index+1]
        twts = load_twts(twts_raw_data_file)
        pickle.dump( twts, open( "twts.pkl", "wb" ) )

    if INPUT_ARG in sys.argv:
        arg_index = sys.argv.index(INPUT_ARG)
        stop = False
        while not stop:
            nb = raw_input('enter sentence: ')
            if nb == "-1":
                stop = True
            else:
                vec = get_vec(nb, w2v, word_counts, total_tweets)
                print("vector value is:\n")
                print(vec)


def eucleadean_dist(base_vec, target_vec):
    return np.linalg.norm(target_vec - base_vec)


def cos_dist(base_vec, target_vec):
    return np.dot(base_vec, target_vec)/(np.linalg.norm(base_vec)*np.linalg.norm(target_vec))