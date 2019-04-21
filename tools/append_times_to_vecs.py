import datetime
import logging

from db.db_manager import *
import pickle

PRINT_EVERY_I_ITERATION = 1
TIME_DIMENSIONS = 4

all_timed_tweets = []
users_to_tweets = {}

def append_time_to_tweet(tweet_idx, min_time):
    tweet = Tweet.get(idx = tweet_idx)
    timeval = tweet.time.timestamp()
    normalized_time_val = timeval - min_time
    timevec = np.zeros(TIME_DIMENSIONS) + normalized_time_val
    modified_vec =  np.concatenate((tweet.vec, timevec), axis=0)
    TimedTweetVec.insert(idx=tweet_idx, vec=modified_vec).execute()
    all_timed_tweets.append(modified_vec)

    #manage users_to_tweets
    useridx = User.get(userid = tweet.userid).idx
    usertweets = users_to_tweets.get(useridx, [])
    usertweets.append(tweet_idx)
    users_to_tweets[useridx] = usertweets




def append_to_all_tweets():
    logging.debug("started")
    maxidx = Tweet.select(fn.max(Tweet.idx)).scalar()
    min_time = Tweet.select(fn.min(Tweet.time)).scalar()
    logging.debug("max idx %d" % maxidx)
    logging.debug("min time: %s" % min_time )
    min_time = min_time.timestamp()
    logging.debug("min time val %f" % min_time)

    for i in range(maxidx):
        logging.debug("calculating tweet %d" % i)
        if i % PRINT_EVERY_I_ITERATION == 0:
            print("calculating tweet %d" % i)
        append_time_to_tweet(i, min_time)


if __name__ == '__main__':
    db.drop_tables([TimedTweetVec])
    db.create_tables([TimedTweetVec])
    append_to_all_tweets()
    np.save(conf.timed_tweets_vecs_file, np.array(all_timed_tweets))
    pickle.dump(users_to_tweets, open(conf.users_to_tweets_pkl,"wb"))