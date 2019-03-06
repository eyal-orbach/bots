import tweet2vec
import datetime
import pickle
import numpy as np

BASE_TWEET = 64544 #69685

BASE_DIST_FACTOR = 0.7

DENSITY_FACTOR = 0.3

DIST_FROM_BASE = "dist_from_base"

AVG_DIST = "avg_dist"

CENTROID = "centroid"

MINIMUM_TWEETS = 5

LAMBDA_DIST = 1

TWEETS = "tweets"

twts_pkl_file = "twts.pkl"

output_file = "dense.out"



def map_to_users(twts):
    users_map = {}
    for idx in twts:
        twt = twts[idx]
        user = twt[tweet2vec.USER]
        if user not in users_map:
            users_map[user] = {TWEETS:[]}
        users_map[user][TWEETS].append(twt)
    return users_map


def calc_density(users):
    for user in users:
        utwts = users[user][TWEETS]
        sum = np.zeros((100,))
        count = 0
        for twt in utwts:
            count+=1
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


def filter_users(users):
    return {k:u for k, u in users.iteritems() if len(u[TWEETS]) > MINIMUM_TWEETS}


def get_base_vec(twts):
    print("base tweet is: #%d" %BASE_TWEET)
    print(twts[BASE_TWEET][tweet2vec.TWEET])
    return twts[BASE_TWEET][tweet2vec.VECTOR]


def calc_distance_from_base(f_users, base_vec):
    for user in users:
        dist_from_base = (np.linalg.norm(users[user][CENTROID]-base_vec))
        users[user][DIST_FROM_BASE] = dist_from_base

    return users


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ) )
    
    base_vec = get_base_vec(twts)
    
    users = map_to_users(twts)
    f_users = filter_users(users)
    users = calc_density(f_users)
    users = calc_distance_from_base(f_users, base_vec)
    top_k_users = get_top_k(f_users, 100)
    print_top_users(top_k_users, f_users)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))
