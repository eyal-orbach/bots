import pickle
import sqlite3
from sqlite3 import Error
import numpy as np
import db.db_manager as dbm
from db.db_manager import WORD_EMBEDDINGS_TABLE as WORD_EMBEDDINGS_TABLE
from db.db_manager import METADATA_TABLE as METADATA_TABLE
from db.db_manager import create_connection as create_connection

IDF_TWEETS_COUNT = "idf_tweets_count"


def create_table(conn, create_table_sql):
    """ create a table from the create_table_sql statement
    :param conn: Connection object
    :param create_table_sql: a CREATE TABLE statement
    :return:
    """
    try:
        c = conn.cursor()
        c.execute(create_table_sql)
    except Error as e:
        print(e)


sql_create_word_embeddings_table = """ CREATE TABLE IF NOT EXISTS %s (
                                        word varchar(100) PRIMARY KEY,
                                        idf int NOT NULL,
                                        vec array NOT NULL
                                    ); """ % WORD_EMBEDDINGS_TABLE

sql_create_metadata_table = """ CREATE TABLE IF NOT EXISTS %s (
                                        param varchar(100) PRIMARY KEY,
                                        val int NOT NULL
                                    ); """ % METADATA_TABLE


def load_embeddings_to_db_from_pkl2(conn, tfidf_pkl_path, w2v_pkl_path):

    create_table(conn, sql_create_word_embeddings_table)
    create_table(conn, sql_create_metadata_table)
    conn.commit()

    w2v = pickle.load( open( w2v_pkl_path, "rb" ) , encoding="latin1")
    word_counts, total_tweets = pickle.load( open( tfidf_pkl_path, "rb" ), encoding="latin1" )
    c = conn.cursor()
    c.execute('insert OR IGNORE INTO %s values(?,?)' % METADATA_TABLE, (("%s" % IDF_TWEETS_COUNT), total_tweets))
    c.execute('update %s set val=%s where param = "%s"' % (METADATA_TABLE, total_tweets, IDF_TWEETS_COUNT))
    for word, vec in w2v.items():
        if word in word_counts:
            count = word_counts[word]

            #due to pkl2 encoding
            decoded_word = word.encode("latin1").decode("utf8")

            npvec = np.array(vec)
            c.execute('insert into %s values(?,?,?)'% WORD_EMBEDDINGS_TABLE, (decoded_word, count, npvec))
    conn.commit()


if __name__ == '__main__':
    from config.config import sqlite_db_file, idf_pkl_file, w2v_pkl_file
    cn = dbm.tweeter_db_connection

    cn.cursor().execute("drop table if exists %s" % WORD_EMBEDDINGS_TABLE)
    load_embeddings_to_db_from_pkl2(cn, idf_pkl_file, w2v_pkl_file)