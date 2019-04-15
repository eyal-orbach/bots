import datetime
import logging
from db.db_manager import *

PRINT_EVERY_I_ITERATION = 1
LAMBDA_DIST = 1

user_eucleadean_centroids = []
user_cosine_centroids = []
user_eucledean_densitys = []
user_cosine_densitys_to_eucleadean_centroid = []
user_cosine_densitys_to_cosine_centroid = []

def calc_euclidean_density(i):
    user = User.get(idx=i)
    user_tweets = Tweet.select().where(Tweet.userid == user.userid)
    sum = np.zeros((100,))
    count = 0
    for twt in user_tweets:
        count += 1
        sum += twt.vec
    centroid = sum/float(count)
    user_eucleadean_centroids.append(centroid)
    euclidean_variance = get_variance([t.vec for t in user_tweets], centroid, euclidean_dist)
    cosine_variance = get_variance([t.vec for t in user_tweets], centroid, cosine_dist)
    user_eucledean_densitys.append(euclidean_variance)
    user_cosine_densitys_to_eucleadean_centroid.append(cosine_variance)
    User.update(tweetsnum=count, centroid=centroid, density=euclidean_variance, cosine_density=cosine_variance).where(User.idx == i).execute()

def euclidean_dist(vec_a, vec_b):
    return np.linalg.norm(vec_a - vec_b)

def cosine_dist(vec_a, vec_b):
    cosine_val = np.dot(vec_a, vec_b) / (np.linalg.norm(vec_a)* np.linalg.norm(vec_b))
    return 0.5 *(1-cosine_val)

def get_variance(vecs, centroid, dist_func):
    sum_dist = 0
    c = 0
    for vec in vecs:
        sum_dist += dist_func(vec, centroid)
        c += 1
        logging.debug("calc variance via tweet %d" % c)
    return sum_dist/float(len(vecs))

def calc_cosine_density(i):
    user = User.get(idx=i)
    user_tweets = Tweet.select().where(Tweet.userid == user.userid)
    logging.debug("tweets: %d" % (len(user_tweets)))
    cosine_centroid = np.zeros((100,))
    count = 0
    normalized_twts = []
    for twt in user_tweets:
        count += 1
        vec_magnitude = np.linalg.norm(twt.vec)
        normalized_vec = twt.vec / vec_magnitude
        normalized_twts.append(normalized_vec)
        cosine_centroid += normalized_vec
        logging.debug("calc centroid via tweet %d" % count)

    cosine_centroid /= float(count)
    user_cosine_centroids.append(cosine_centroid)
    avg = get_variance([t.vec for t in user_tweets], cosine_centroid, cosine_dist)
    user_eucledean_densitys.append(avg)
    Cosinecentroid.insert(idx=i, userid=user.userid, cos_centroid=cosine_centroid, cos_density=avg).execute()


def append_cosine_density_from_euc_centroid(i):
    user = User.get(idx=i)
    user_tweets = Tweet.select().where(Tweet.userid == user.userid)
    cosine_variance = get_variance([t.vec for t in user_tweets], user.centroid, cosine_dist)
    user_cosine_densitys_to_eucleadean_centroid.append(cosine_variance)
    User.update(cosine_density=cosine_variance).where(User.idx == i).execute()



def calc_for_users():
    logging.debug("started")
    maxidx = User.select(fn.max(User.idx)).scalar()
    for i in range(maxidx):
        logging.debug("calculating user %d" % i)
        if i % PRINT_EVERY_I_ITERATION == 0:
            print("calculating user %d" % i)
        # calc_euclidean_density(i)
        calc_cosine_density(i)
        append_cosine_density_from_euc_centroid(i)

    np.save(conf.centroids_file, np.array(user_eucleadean_centroids))
    np.save(conf.denstitys_file, np.array(user_eucledean_densitys))
    np.save(conf.cosine_centroids_file, np.array(user_cosine_centroids))
    np.save(conf.cosine_densitys_to_euc_file, np.array(user_cosine_densitys_to_eucleadean_centroid))
    np.save(conf.cosine_densitys, np.array(user_cosine_densitys_to_cosine_centroid))


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    db.drop_tables([Cosinecentroid])
    db.create_tables([Cosinecentroid])
    print("started  at %s\n" %(time))

    calc_for_users()

    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))