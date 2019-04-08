import os

data_files_dir = os.path.dirname(os.path.abspath(__file__)) + "/../data"
sqlite_db_file = os.path.dirname(os.path.abspath(__file__)) + "/../db/tweeter.db"
static_files = os.path.dirname(os.path.abspath(__file__)) + "/../bottle/static"


w2v_pkl_file = data_files_dir + "/w2v.pkl"
idf_pkl_file = data_files_dir + "/tf_idf.pkl"
# w2v_pkl_file = data_files_dir + "/w2v.sml.pkl"
# idf_pkl_file = data_files_dir + "/tfidf.sml.pkl"


denstitys_file = data_files_dir+"/user_densitys.npy"
centroids_file = data_files_dir+"/user_centroids.npy"

