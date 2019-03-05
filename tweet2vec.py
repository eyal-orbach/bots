import numpy as np
import pickle
import sys

import yoav_tokenizer
from LoadW2V import TYPES

USER = "user"

DETAILS = "details"

TWEET = "tweet"

VECTOR = "vector"

w2v_pkl_file = "w2v.pkl"
idf_pkl_file = "tf_idf.pkl"

w2v = pickle.load( open( w2v_pkl_file, "rb" ) )
word_counts, total_tweets = pickle.load( open( idf_pkl_file, "rb" ) )

def get_vec(tweet):
    tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(tweet)]
    tweet_vec = np.zeros(100)
    terms = {}
    for (type, tok) in tokenized:
        if type in TYPES and tok in w2v:
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
        for i, line in enumerate(content):
            if i % 100:
                print("reading line %d" % i)
            arr = line.split()
            user = arr[0]
            details = arr[1:4]
            tweet = " ".join(arr[4:])
            vector = get_vec(tweet)
            tweets[i] = {USER: user, DETAILS: details, TWEET: tweet, VECTOR: vector}

    return tweets


if __name__ == '__main__':
    twts_file = sys.argv[1]
    twts = load_twts(twts_file)
    pickle.dump( twts, open( "twts.pkl", "wb" ) )