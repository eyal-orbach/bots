import tweet2vec
import datetime
import pickle
import numpy as np

AVG_DIST = "avg_dist"

CENTROID = "centroid"

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

# def greater(a, b):
#     return a[AVG_DIST] - b[AVG_DIST]


def get_top_k(users, k):
    sorted_users = sorted(users.items(), key=lambda x:x[1][AVG_DIST])
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
            f.writelines("---")
            f.writelines("\ntweets:\n")
            for t in data[TWEETS]:
                f.writelines("details: " + get_details(t[tweet2vec.DETAILS])+"\n")
                f.writelines("tweet: " + t[tweet2vec.TWEET] + "\n")


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ) )
    users = map_to_users(twts)
    users = calc_density(users)
    top_k_users = get_top_k(users, 30)
    print_top_users(top_k_users, users)
