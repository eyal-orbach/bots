import utils.yoav_tokenizer as yoav_tokenizer
from tools.data_parser import TYPES
from db.db_manager import *
from tools.embeddings_loader import IDF_TWEETS_COUNT as IDF_TWEETS_COUNT


def eucleadean_dist(base_vec, target_vec):
    return np.linalg.norm(target_vec - base_vec)


def cos_dist(base_vec, target_vec):
    return 0.5 * 1 -(np.dot(base_vec, target_vec)/(np.linalg.norm(base_vec)*np.linalg.norm(target_vec)))

class Tweet2Vec:

    total_tweets = None
    word_embeddings_cache = {}

    def __init__(self):
        self.total_tweets = App_metadata.get_or_none(app_param=IDF_TWEETS_COUNT).param_val

    def get_vec(self, tweet):
        tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(tweet)]
        tweet_vec = np.zeros(100)
        terms = {}
        for (type, tok) in tokenized:
            if type in TYPES:
                cached_tup = self.word_embeddings_cache.get(tok, None)
                if cached_tup is None:
                    emb = Embedding.get_or_none(word=tok)
                    if emb is not None:
                        cached_tup = (emb.idf, emb.vec)
                        self.word_embeddings_cache[tok] = cached_tup
                if cached_tup is not None:
                    if tok in terms:
                        terms[tok]["tf"] += 1
                    else:
                        idf = np.log(float(self.total_tweets)/float(cached_tup[0]))
                        terms[tok] = {"tf": 1, "vec": cached_tup[1], "idf": idf}

        for term in terms.values():
            tfidf = term["tf"] * term["idf"]
            vec = tfidf * term["vec"]
            tweet_vec += vec

        return tweet_vec

instance = Tweet2Vec()



