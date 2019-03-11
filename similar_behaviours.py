import pickle

import datetime
import numpy as np
import dense_users
import tweet2vec

AMOUNT_OF_TWEETS_FACTOR = 2

DIST = "dist"

MATRIX = "matrix"

TIMED_VECTOR = "timed_vector"

TIME_DIMENSIONS = 4


def dist_between_users(user_a, user_b):
    accumelator = 0
    if len(user_a[dense_users.TWEETS]) < len(user_b[dense_users.TWEETS]):
        u1 = user_a
        u2 = user_b
    else:
        u1 = user_b
        u2 = user_a

    min_tweets = len(u1[dense_users.TWEETS])


    for atwt in u1[dense_users.TWEETS]:
        vec = atwt[TIMED_VECTOR]
        min_dist = 1-np.amax(u2[MATRIX].dot(vec/np.linalg.norm(vec)))
        accumelator += min_dist

    return float(accumelator) / (min_tweets ** AMOUNT_OF_TWEETS_FACTOR)





def add_timed_vec(twt):
    from dense_users import min_timestamp, diff
    time = float(twt[tweet2vec.DETAILS][1])
    normalized_time = (time - min_timestamp) / diff
    vec = twt[tweet2vec.VECTOR]
    time_dims = np.ones(TIME_DIMENSIONS) * normalized_time
    timed_vec = np.concatenate((vec, time_dims), axis=0)
    twt[TIMED_VECTOR] = timed_vec
    return twt




def add_time_to_vectors(users):
    for user in users.values():
        timed_vecs = []
        utwts = user[dense_users.TWEETS]
        for i, twt in enumerate(utwts):
            t = add_timed_vec(twt)
            utwts[i] = t
            vec =t[TIMED_VECTOR]
            timed_vecs.append(vec/np.linalg.norm(vec))
        user[MATRIX] = np.array(timed_vecs)
    return users

def is_farther_from_base_user(u1, u2):
    dist1 = dist_between_users(base_user, u1)
    dist2 = dist_between_users(base_user, u2)
    return -int(np.sign(dist1 - dist2))

def get_top_k_similar_users(users, k):
    sorted_users = sorted(users.items(), key=lambda x:x[1][DIST])
    # sorted_users = sorted(users.items(), cmp = is_farther_from_base_user)
    return sorted_users[:k]

def print_top_similar_users_console(top_k_users, users):
    for i, u in enumerate(top_k_users):
        print("\n\n*********")
        print("user number: %d\n" % i)
        data = users[u[0]]
        print("user name: %s\n" % u[0])
        print("user dist: %f\n" % data[DIST])
        print("---")
        print("\ntweets:\n")
        for t in data[dense_users.TWEETS]:
            epoch = int(float(t[tweet2vec.DETAILS][1]))
            ttime = datetime.datetime.fromtimestamp(epoch)
            print("time: %s\n" % ttime)

            print("tweet: " + t[tweet2vec.TWEET] + "\n")


def add_dist_from_base_user(users):
    for user in users:
        dist = dist_between_users(base_user, users[user])
        users[user][DIST] = dist
    return users


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( dense_users.twts_pkl_file, "rb" ) )
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("loaded twts at %s\n" %(time))
    users = dense_users.map_to_users(twts)
    users = add_time_to_vectors(users)
    global base_user
    # base_user = users['lili2307li2307']
    base_user = users['Vitaliko']
    users = add_dist_from_base_user(users)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("manipulated data %s\n" %(time))

    top_close_users = get_top_k_similar_users(users, 30)
    print_top_similar_users_console(top_close_users, users)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done %s\n" %(time))