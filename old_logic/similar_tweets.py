import datetime
import pickle

import numpy as np

from logic import dense_users, tweet2vec

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

def print_top_similar_tweets_console(topk):
    for i, u in enumerate(topk):
        print("\n\n*********")
        print("tweet number: %d\n" % i)
        data = u[1]
        print("user name: %s\n" % data[tweet2vec.USER])
        epoch = int(float(data[tweet2vec.DETAILS][1]))
        ttime = datetime.datetime.fromtimestamp(epoch)
        print("time: %s\n" % ttime)
        print("tweet: " + data[tweet2vec.TWEET] + "\n")
        print("distance: %f \n" % data[DIST_FROM_TWEET])





if __name__ == '__main__':

    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load(open(dense_users.twts_pkl_file, "rb"), encoding="latin1")
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("loaded twts at %s\n" %(time))
    w2v = pickle.load(open(tweet2vec.w2v_pkl_file, "rb"), encoding="latin1")
    word_counts, total_tweets = pickle.load(open(tweet2vec.idf_pkl_file, "rb"), encoding="latin1")
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("finished loading model at %s\n" %(time))

    base_tweet = ""
    while base_tweet != "-1":
        base_tweet = input("Enter text:")
        end_time_str = input("Enter time window upper bound (YYYYMMDD)")
        end_time = datetime.datetime(int(end_time_str[0:4]),int(end_time_str[4:6]),int(end_time_str[6:8])).strftime('%s')
        start_time_str = input("Enter time window lower bound (YYYYMMDD)")
        start_time = datetime.datetime(int(start_time_str[0:4]),int(start_time_str[4:6]),int(start_time_str[6:8])).strftime('%s')
        filtered_tweets = filter_tweets(twts,int(start_time), int(end_time) )
        base_vec = tweet2vec.get_vec(base_tweet, w2v, word_counts, total_tweets)
        otwts = calc_tweets_distance_from_base(filtered_tweets, base_vec)
        topk = get_top_k(otwts, 30)
        print_top_similar_tweets_console(topk)


