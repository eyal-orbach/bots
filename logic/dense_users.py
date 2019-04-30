import sys

from db.db_manager import *
from logic import tweet2vec
from logic import distance_functions

MIN_TWEETS = 5
DIST_METHOD_TYPE = distance_functions.COSINE

dist_method = None
centroids = None
centroid_magnitudes = None
densitys = None


def calc_magnitudes_and_modify(centroids):
    n = sys.maxsize
    clean_centroids = np.where(np.isnan(centroids), n, centroids)
    magnitudes = np.linalg.norm(centroids, axis=1)
    return clean_centroids, magnitudes


def load_data():
    global centroids, densitys, dist_method, centroid_magnitudes
    if DIST_METHOD_TYPE == distance_functions.EUCLIDEAN:
        centroids = np.load(conf.centroids_file)
        densitys = np.load(conf.denstitys_file)
    else:
        centroids = np.load(conf.cosine_centroids_file)
        densitys = np.load(conf.cosine_densitys)

    densitys = filter_out_0_densitys(densitys)
    centroids, centroid_magnitudes = calc_magnitudes_and_modify(centroids)
    dist_method = distance_functions.get_dist_method(DIST_METHOD_TYPE)


class density_request_obj:
    def __init__(self, k_users, proximity, density, text):
        self.k_users = int(k_users)
        self.proximity_factor = float(proximity)
        self.density_factor = float(density)
        self.text = text



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


def get_dense_users_indices(request_obj):
    base_vec = tweet2vec.instance.get_vec(request_obj.text)
    distances_from_base = dist_method(base_vec, centroids, centroid_magnitudes)
    factored_array = (distances_from_base * request_obj.proximity_factor) + (densitys * request_obj.density_factor)
    return iter(np.argsort(factored_array))
