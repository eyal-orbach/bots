from db.db_manager import *
from logic import tweet2vec

MIN_TWEETS = 5

TWITTER_STATUS_URL="https://twitter.com/tweeter/status/"

class density_request_obj:
    def __init__(self, k_users, proximity, density, text):
        self.k_users = int(k_users)
        self.proximity_factor = float(proximity)
        self.density_factor = float(density)
        self.text = text

def get_dense_users(request_obj:density_request_obj, centroids, densitys):
    sorted_user_indices = get_dense_users_indices(centroids, densitys, request_obj)
    final_users = []
    counter = 0
    for index in sorted_user_indices:
        dbuser = User.get(idx=index)
        if dbuser.tweetsnum < MIN_TWEETS:
            continue

        user_dict={"name": dbuser.name, "tweeter_id":str(dbuser.userid)}
        db_all_tweets = Tweet.select().where(Tweet.userid==dbuser.userid)
        user_tweets = []
        for db_tweet in db_all_tweets:
            tweet = {"tweetid": str(db_tweet.tweetid), "msg":db_tweet.msg, "time":db_tweet.time, "removed":False}
            user_tweets.append(tweet)
        user_dict["tweets"] = user_tweets
        final_users.append(user_dict)
        counter+=1
        if counter >= request_obj.k_users:
            return final_users

    return final_users


def get_dense_users_indices(centroids, densitys, request_obj):
    base_vec = tweet2vec.instance.get_vec(request_obj.text)
    centroids_minus_base = centroids - base_vec
    distances_from_base = np.linalg.norm(centroids_minus_base, axis=1)
    factored_array = (distances_from_base * request_obj.proximity_factor) + (densitys * request_obj.density_factor)
    return iter(np.argsort(factored_array))






