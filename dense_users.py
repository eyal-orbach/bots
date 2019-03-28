#!/usr/bin/env python
# encoding: utf8

import datetime
import pickle
import sys

import numpy as np

import tweet2vec
from tweet2vec import eucleadean_dist

BASE_TWEET = 64544 #69685

BASE_DIST_FACTOR = 0.7

DENSITY_FACTOR = 0.3

DIST_FROM_BASE = "dist_from_base"

AVG_DIST = "avg_dist"

CENTROID = "centroid"

MINIMUM_TWEETS = 5

LAMBDA_DIST = 1

TWEETS = "tweets"

twts_pkl_file = "data/twts.pkl"

output_file = "dense.out"

max_timestamp = 0
min_timestamp = float("inf")
diff = 0


def map_to_users(twts):
    global max_timestamp, min_timestamp, diff
    users_map = {}
    for idx in twts:
        twt = twts[idx]
        max_timestamp = max([max_timestamp, float(twt[tweet2vec.DETAILS][1])])
        min_timestamp = min([min_timestamp, float(twt[tweet2vec.DETAILS][1])])
        user = twt[tweet2vec.USER]
        if user not in users_map:
            users_map[user] = {TWEETS:[]}
        users_map[user][TWEETS].append(twt)
    diff = max_timestamp - min_timestamp
    return users_map


def calc_density(users):
    for user in users:
        utwts = users[user][TWEETS]
        sum = np.zeros((100,))
        count = 0
        for twt in utwts:
            count += 1
            sum += twt[tweet2vec.VECTOR]
        centroid = sum/float(count)
        users[user][CENTROID] = centroid
        sum_dist = 0
        for twt in utwts:
            dist = (np.linalg.norm(twt[tweet2vec.VECTOR]-centroid))
            sum_dist += (dist ** LAMBDA_DIST)
        avg = sum_dist /float(count)
        users[user][AVG_DIST] = avg
    return users

def compare_by_dens_and_dist(a, b):
    density_diff = a[1][AVG_DIST] - b[1][AVG_DIST]
    dist_from_base_diff = a[1][DIST_FROM_BASE] - b[1][DIST_FROM_BASE]
    return int((DENSITY_FACTOR * density_diff) + (BASE_DIST_FACTOR * dist_from_base_diff))


def get_top_k(users, k):
    # sorted_users = sorted(users.items(), key=lambda x:x[1][AVG_DIST])
    sorted_users = sorted(users.items(), cmp = compare_by_dens_and_dist)
    return sorted_users[:k]


def get_details(details):
    return " ".join(details)


def print_top_users(top_k_users, users):
    with open(output_file, "w") as f:
        for i, u in enumerate(top_k_users):
            f.writelines("\n\n*********")
            f.writelines("user number: %d\n" % i)
            data = users[u[0]]
            f.writelines("user name: %s\n" % u[0])
            f.writelines("avg_dist: %f\n" % data[AVG_DIST])
            f.writelines("base_dist: %f\n" % data[DIST_FROM_BASE])
            f.writelines("---")
            f.writelines("\ntweets:\n")
            for t in data[TWEETS]:
                f.writelines("details: " + get_details(t[tweet2vec.DETAILS])+"\n")
                f.writelines("tweet: " + t[tweet2vec.TWEET] + "\n")

def print_top_users_console(top_k_users, users):
    for i, u in enumerate(top_k_users):
        print("\n\n*********")
        print("user number: %d\n" % i)
        data = users[u[0]]
        print("user name: %s\n" % u[0])
        print("avg_dist: %f\n" % data[AVG_DIST])
        print("base_dist: %f\n" % data[DIST_FROM_BASE])
        print("---")
        print("\ntweets:\n")
        for t in data[TWEETS]:
            print("details: " + get_details(t[tweet2vec.DETAILS])+"\n")
            print("tweet: " + t[tweet2vec.TWEET] + "\n")



def filter_users(users):
    return {k:u for k, u in users.iteritems() if len(u[TWEETS]) > MINIMUM_TWEETS}


def get_base_vec(twts):
    print("base tweet is: #%d" %BASE_TWEET)
    print(twts[BASE_TWEET][tweet2vec.TWEET])
    return twts[BASE_TWEET][tweet2vec.VECTOR]


def calc_distance_from_base(f_users, base_vec):
    for user, data in f_users.iteritems():
        dist_from_base = eucleadean_dist(base_vec, data[CENTROID])
        f_users[user][DIST_FROM_BASE] = dist_from_base

    return f_users



# example usage
# density weight 0.2
# similarity weight 0.8
# sentence: "ביבי מבטיח נאום "חד כתער" באסיפה הכללית מחר. מה יהיה שם? איראן? טרור?? צדקת דרכנו??? שואה???? שרה והשגריר המיקרונזי לא יכולים לחכות."
#


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ) )


    users = map_to_users(twts)
    f_users = filter_users(users)
    d_users = calc_density(f_users)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("finished loading tweets at %s\n" %(time))
    if "--input" in sys.argv:
        w2v = pickle.load( open( tweet2vec.w2v_pkl_file, "rb" ) )
        word_counts, total_tweets = pickle.load( open( tweet2vec.idf_pkl_file, "rb" ) )
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("finished loading model at %s\n" %(time))
        stop = False
        while not stop:
            density_f = raw_input('Enter weight for density([0-1]): ')
            DENSITY_FACTOR = float(density_f)
            sim_f = raw_input('Enter weight for similarity to sentence([0-1]): ')
            BASE_DIST_FACTOR = float(sim_f)
            nb = raw_input('Enter line: ')
            if nb == "-1":
                stop = True
            else:
                base_vec = tweet2vec.get_vec(nb, w2v, word_counts, total_tweets)
                print(base_vec)
                print("*************")
                final_users = calc_distance_from_base(d_users, base_vec)
                top_k_users = get_top_k(final_users, 40)
                print_top_users_console(top_k_users, final_users)
    else:
        base_vec = get_base_vec(twts)
        users = calc_distance_from_base(f_users, base_vec)
        top_k_users = get_top_k(f_users, 100)
        print_top_users(top_k_users, f_users)
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("done at %s\n" %(time))
