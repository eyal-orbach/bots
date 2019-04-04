import db.db_manager as dbm

if __name__ == '__main__':
    from config.config import sqlite_db_file, idf_pkl_file, w2v_pkl_file
    cn = dbm.create_connection(sqlite_db_file)

    nb = ""
    while not nb == "q":
        nb = input("enter herew word\n")
        c = cn.cursor()
        results = c.execute("select * from %s where word = ?"%dbm.WORD_EMBEDDINGS_TABLE, (nb,))
        rows = c.fetchall()
        for row in rows:
            print(row)