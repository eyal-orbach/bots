import pickle

w2v = pickle.load( open( "w2v.pkl", "rb" ) )

tfidf = pickle.load( open( "tf_idf.pkl", "rb" ) )

# for key in w2v.keys():
#     print("key is:" + key)
#     print("vector:")
#     print(repr(w2v[key]))
#     print("docs: ")
#     print(tfidf.get(key,0))

counts, total = tfidf
print("total tweets: %d" % total)
for key in counts.keys():
    print ("word: %s count: %d" % (key, counts[key]))