import numpy as np
import utils.yoav_tokenizer as yoav_tokenizer
from tools.data_parser import TYPES
import db.db_manager as dbm
from tools.embeddings_loader import IDF_TWEETS_COUNT as IDF_TWEETS_COUNT


def eucleadean_dist(base_vec, target_vec):
    return np.linalg.norm(target_vec - base_vec)


def cos_dist(base_vec, target_vec):
    return np.dot(base_vec, target_vec)/(np.linalg.norm(base_vec)*np.linalg.norm(target_vec))

class Tweet2Vec:

    total_tweets = None
    word_embeddings_cache = {}

    def __init__(self):
        self.total_tweets = self.get_total_tweets()

    def get_vec(self, tweet):
        tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(tweet)]
        tweet_vec = np.zeros(100)
        terms = {}
        for (type, tok) in tokenized:
            if type in TYPES and tok in w2v:
                if tok in terms:
                    terms[tok]["tf"] += 1
                else:
                    idf = np.log(float(total_tweets)/float(word_counts[tok]))
                    terms[tok] = {"tf": 1, "vec": np.array(w2v[tok]), "idf": idf}

        for term in terms.values():
            tfidf = term["tf"] * term["idf"]
            vec = tfidf * term["vec"]
            tweet_vec += vec

        return tweet_vec

    def get_idf_total_tweets(self):
        c = dbm.tweeter_db_connection.cursor()
        c.execute('select val from %s where param ="%s"', dbm.METADATA_TABLE, IDF_TWEETS_COUNT)



