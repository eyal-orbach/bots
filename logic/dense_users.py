import sys

from db.db_manager import *
from logic import tweet2vec
from logic import distance_functions

DENSITY_FACTOR_COEFFICIENT = 1

MIN_TWEETS = 5
DIST_METHOD_TYPE = distance_functions.EUCLIDEAN


euclidean_centroids = None
euclidean_centroids_magnitudes = None
euclidean_densitys = None
cosine_centroids = None
cosine_centroids_magnitudes = None
cosine_densitys = None


def calc_magnitudes_and_modify(centroids):
    magnitudes = np.linalg.norm(centroids, axis=1)
    return centroids, magnitudes


def load_data():
    global cosine_densitys, cosine_centroids, cosine_centroids_magnitudes, \
        euclidean_densitys, euclidean_centroids, euclidean_centroids_magnitudes
    euclidean_centroids, euclidean_centroids_magnitudes = calc_magnitudes_and_modify(np.load(conf.centroids_file))
    euclidean_densitys = filter_out_0_densitys(np.load(conf.denstitys_file))
    cosine_centroids, cosine_centroids_magnitudes = calc_magnitudes_and_modify(np.load(conf.cosine_centroids_file))
    cosine_densitys = filter_out_0_densitys(np.load(conf.cosine_densitys))


class density_request_obj:
    def __init__(self, k_users, proximity, density, text, sim_meth="euiclidean"):
        self.k_users = int(k_users)
        self.proximity_factor = float(proximity)
        self.density_factor = float(density)
        self.text = text
        self.sim_method = distance_functions.EUCLIDEAN if sim_meth=="euiclidean" else distance_functions.COSINE


def get_dense_users(request_obj: density_request_obj):
    sorted_user_indices = get_dense_users_indices(request_obj)
    final_users = []
    counter = 0
    for index in sorted_user_indices:
        dbuser = User.get(idx=index)
        if dbuser.tweetsnum < MIN_TWEETS:
            continue

        user_dict = {"name": dbuser.name, "tweeter_id": str(dbuser.userid)}
        db_all_tweets = Tweet.select().where(Tweet.userid == dbuser.userid)
        user_tweets = []
        for db_tweet in db_all_tweets:
            tweet = {"tweetid": str(db_tweet.tweetid), "msg": db_tweet.msg, "time": db_tweet.time, "removed": False}
            user_tweets.append(tweet)
        user_dict["tweets"] = user_tweets
        final_users.append(user_dict)
        counter += 1
        if counter >= request_obj.k_users:
            return final_users

    return final_users


def filter_out_0_densitys(densitys):
    n = sys.maxsize
    modified = np.nan_to_num(densitys)
    return np.where(modified == 0, n, modified)


def get_data_per_similarity_type(sim_method):
    if sim_method == distance_functions.EUCLIDEAN:
        return euclidean_centroids, euclidean_centroids_magnitudes, euclidean_densitys
    else:
        return cosine_centroids, cosine_centroids_magnitudes, cosine_densitys


def get_dense_users_indices(request_obj):
    centroids, centroid_magnitudes, densitys = get_data_per_similarity_type(request_obj.sim_method)
    dist_method = distance_functions.get_dist_method(request_obj.sim_method)
    base_vec = tweet2vec.instance.get_vec(request_obj.text)
    distances_from_base = dist_method(base_vec, centroids, centroid_magnitudes)
    dens_factor = (request_obj.density_factor * DENSITY_FACTOR_COEFFICIENT)
    prox_factor = 1 #request_obj.proximity_factor
    factored_array = (distances_from_base * prox_factor) + (densitys * dens_factor)
    return iter(np.argsort(factored_array))
