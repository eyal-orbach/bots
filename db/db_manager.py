import config.config as conf
import sqlite3
from sqlite3 import Error
import numpy as np
import io


METADATA_TABLE = """metadata"""
WORD_EMBEDDINGS_TABLE = """word_embeddings"""


def adapt_array(arr):
    """
    http://stackoverflow.com/a/31312102/190597 (SoulNibbler)
    """
    out = io.BytesIO()
    np.save(out, arr)
    out.seek(0)
    return sqlite3.Binary(out.read())

def convert_array(text):
    out = io.BytesIO(text)
    out.seek(0)
    return np.load(out)

# Converts np.array to TEXT when inserting
sqlite3.register_adapter(np.ndarray, adapt_array)

# Converts TEXT to np.array when selecting
sqlite3.register_converter("array", convert_array)

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    print(db_file)
    try:
        conn = sqlite3.connect(db_file, detect_types=sqlite3.PARSE_DECLTYPES)
        print(sqlite3.version)
        return conn
    except Error as e:
        print(e)


tweeter_db_connection = create_connection(conf.sqlite_db_file)
