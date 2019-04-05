from db.db_manager import *

if __name__ == '__main__':
    nb = ""
    while not nb == "q":
        nb = input("enter herew word\n")
        em = Embedding.get_or_none(word=nb)
        if em is not None:
            print(em.word)
            print(em.idf)
            print(em.vec)
    # db.drop_tables([Embedding, App_metadata])
    # db.create_tables([Embedding, App_metadata])
    # arr = [0.3,6.4,98.65]
    # Embedding(word="test", idf=2, vec=np.array(arr)).save()
