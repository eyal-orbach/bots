import os
import logging


data_files_dir = os.path.dirname(os.path.abspath(__file__)) + "/../data"
sqlite_db_file = os.path.dirname(os.path.abspath(__file__)) + "/../db/tweeter.db"
static_files = os.path.dirname(os.path.abspath(__file__)) + "/../webserver/static"


w2v_pkl_file = data_files_dir + "/w2v.pkl"
idf_pkl_file = data_files_dir + "/tf_idf.pkl"
# w2v_pkl_file = data_files_dir + "/w2v.sml.pkl"
# idf_pkl_file = data_files_dir + "/tfidf.sml.pkl"


denstitys_file = data_files_dir + "/user_densitys.npy"
centroids_file = data_files_dir + "/user_centroids.npy"
cosine_centroids_file = data_files_dir + "/user_cosine_centroids.npy"
cosine_densitys_to_euc_file = data_files_dir + "/user_cosine_densitys_to_euc.npy"
cosine_densitys = data_files_dir + "/user_cosine_densitys.npy"
users_to_tweets_pkl = data_files_dir + "/users_to_twts_idx"


tweets_vecs_file = data_files_dir + "/twts_vecs.npy"
timed_tweets_vecs_file = data_files_dir + "/timed_twts_vecs.npy"

#logging
log_file = data_files_dir+"/app.log"
logging.basicConfig(format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p', filename=log_file, level=logging.DEBUG)


