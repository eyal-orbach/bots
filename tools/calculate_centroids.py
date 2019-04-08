import datetime
from db.db_manager import *

PRINT_EVERY_I_ITERATION = 1
LAMBDA_DIST = 1

user_centroids = []
user_densitys = []

def calc_density(i):

    user = User.get(idx=i)
    user_tweets = Tweet.select().where(Tweet.userid == user.userid)
    sum = np.zeros((100,))
    count = 0
    for twt in user_tweets:
        count += 1
        sum += twt.vec
    centroid = sum/float(count)
    user_centroids.append(centroid)
    sum_dist = 0
    for twt in user_tweets:
        dist = (np.linalg.norm(twt.vec-centroid))
        sum_dist += (dist ** LAMBDA_DIST)
    avg = sum_dist /float(count)

    user_densitys.append(avg)

    User.update(tweetsnum=count,centroid=centroid, density=avg).where(User.idx==i).execute()


def calc_for_users():
    maxidx = User.select(fn.max(User.idx)).scalar()
    for i in range(maxidx):
        if i % PRINT_EVERY_I_ITERATION == 0:
            print("calculating user %d" % i)
        calc_density(i)

    np.save(conf.centroids_file, np.array(user_centroids))
    np.save(conf.denstitys_file, np.array(user_densitys))


if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("started  at %s\n" %(time))

    calc_for_users()

    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))