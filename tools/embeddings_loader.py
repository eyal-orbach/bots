import pickle
from db.db_manager import *
import datetime

IDF="idf"
WORD_VEC="word_vec"
IDF_TWEETS_COUNT = "idf_tweets_count"


def load_embeddings_to_db_from_pkl2(tfidf_pkl_path, w2v_pkl_path):
    w2v = pickle.load( open( w2v_pkl_path, "rb" ) , encoding="latin1")
    word_counts, total_tweets = pickle.load( open( tfidf_pkl_path, "rb" ), encoding="latin1" )
    App_metadata(app_param=IDF_TWEETS_COUNT, param_val=total_tweets).save()
    embedding_dict = {}
    for word in w2v:
        vector = w2v[word]
        if word in word_counts:
            count = word_counts[word]

            #due to pkl2 encoding
            decoded_word = word.encode("latin1").decode("utf8")
            npvec = np.array(vector)
            Embedding(word=decoded_word, idf=count, vec=npvec).save()
            embedding_dict[word] = {IDF: count, WORD_VEC: npvec}

    pickle.dump(embedding_dict, open(conf.data_files_dir+"/embedding_dict.pkl","wb"))

if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("started at %s\n" %(time))
    from config.config import sqlite_db_file, idf_pkl_file, w2v_pkl_file
    # db.drop_tables([Embedding, App_metadata])
    db.create_tables([Embedding, App_metadata])
    load_embeddings_to_db_from_pkl2(idf_pkl_file, w2v_pkl_file)
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))