import datetime
import pickle
import sys
import logic.tweet2vec as tweet2vec
import logic.dense_users as dense_users
from logic.dense_users import twts_pkl_file, map_to_users, filter_users, calc_density



#notice this works but needs handling (encode("latin1").decode("utf8"))
#for all strings
if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("Started at %s\n" %(time))
    twts = pickle.load( open( twts_pkl_file, "rb" ), encoding="latin1")


    users = map_to_users(twts)
    f_users = filter_users(users)
    d_users = calc_density(f_users)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("finished loading tweets at %s\n" %(time))
    if "--input" in sys.argv:
        w2v = pickle.load(open(tweet2vec.w2v_pkl_file, "rb") , encoding="latin1")
        word_counts, total_tweets = pickle.load(open(tweet2vec.idf_pkl_file, "rb"), encoding="latin1")
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("finished loading model at %s\n" %(time))
        stop = False
        while not stop:
            density_f = input('Enter weight for density([0-1]): ')
            DENSITY_FACTOR = float(density_f)
            sim_f = input('Enter weight for similarity to sentence([0-1]): ')
            BASE_DIST_FACTOR = float(sim_f)
            nb = input('Enter line: ')
            if nb == "-1":
                stop = True
            else:
                base_vec = tweet2vec.get_vec(nb, w2v, word_counts, total_tweets)
                print(base_vec)
                print("*************")
                final_users = dense_users.calc_distance_from_base(d_users, base_vec)
                top_k_users = dense_users.get_top_k(final_users, 40)
                dense_users.print_top_users_console(top_k_users, final_users)
    else:
        base_vec = dense_users.get_base_vec(twts)
        users = dense_users.calc_distance_from_base(f_users, base_vec)
        top_k_users = dense_users.get_top_k(f_users, 100)
        dense_users.print_top_users(top_k_users, f_users)
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        print("done at %s\n" %(time))
