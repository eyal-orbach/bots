import sys
from db.db_manager import *
import logic.tweet2vec as t2v
import datetime

PRINT_EVERY_I_ITERATION = 1


def load_twts(twts_file):
    tweet_vecs = []
    with open(twts_file, "rb") as f:
        content = f.readlines()
        i=0
        tweet_counter = 0
        user_counter = 0
        for line in content:
            i += 1
            if i % PRINT_EVERY_I_ITERATION == 0:
                print("reading line %d" % i)
            arr = line.split()
            user_name = arr[0].decode(encoding="utf_8", errors="ignore")
            details = arr[1:4]
            user_id = int(details[0])
            tweet_time = datetime.datetime.fromtimestamp(float(details[1]))
            tweet_id = int(details[2])
            tweet_msg = " ".join([x.decode(encoding="utf_8", errors="ignore") for x in arr[4:]])
            vector = t2v.instance.get_vec(tweet_msg)

            Tweet(idx=tweet_counter, tweetid=tweet_id, userid=user_id, msg=tweet_msg, vec=vector, time=tweet_time).save()
            tweet_counter += 1
            tweet_vecs.append(vector)

            user_in_db = User.get_or_none(userid=user_id)
            if user_in_db is None:
                User(idx=user_counter, userid=user_id, name=user_name).save()
                user_counter += 1


        np.save(conf.data_files_dir+"/twts_vecs.npy", np.array(tweet_vecs))


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("started at %s\n" %(time))
    db.drop_tables([Tweet, User])
    db.create_tables([Tweet, User])

    tweets_file = sys.argv[1]
    load_twts(tweets_file)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))
