import sys
import pickle
import yoav_tokenizer
import numpy as np

W2V_PKL = "--w2v_pkl"

TWTS_ARG = "--twts"

W2V_ARG = "--w2v"

TYPES = ["HEB", "URL"]

def load_w2v(w2v_file):
    w2v ={}
    with open(w2v_file) as f:
        content = f.readlines()
        for line_num, line in enumerate(content):
            if line_num % 1000 == 0:
                print("reading line %d" % line_num)
            split = line.split()
            word = split[0]
            vec = [float(x) for x in split[1:]]
            w2v[word] = vec
    return w2v


def calc_tf_idf(twts_file, word_list=None):
    word_doc_counts = {}
    total_tweets = 0
    unk_count = 0
    with open(twts_file) as f:
        content = f.readlines()
        for i, line in enumerate(content):
            total_tweets += 1
            if i % 1000 == 0:
                print ("line: %d tweet: %d" % (i, total_tweets))
            tf = {}
            tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(line)]
            for (type, tok) in tokenized:
                if type in TYPES:
                    if not word_list or tok in word_list:
                        tf[tok] = tf.get(tok, 0) + 1
                        if tf[tok] == 1:
                            word_doc_counts[tok] = word_doc_counts.get(tok, 0) + 1
                    else:
                        unk_count += 1




    return (word_doc_counts, total_tweets, unk_count)


def print_tfidf_results(word_doc_counts, total_tweets, unk_count, words):
    print ("finished calculating tfidf for %d tweets, %d words calculated %d unkown occurences"
        % (total_tweets, len(words), unk_count))

    pickle.dump( (word_doc_counts, total_tweets), open( "words_count.pkl", "wb" ) )
    with open("tfidf_stats", "w") as f:
        f.writelines("finished calculating tfidf for %d tweets, %d words calculated %d unkown occurences"
                     % (total_tweets, len(words), unk_count))

    with open("idf.words", "w") as f:
        for word in words:
            idf = np.log(float(total_tweets)/float(word_doc_counts[word]))
            f.writelines("%s: %f" % (word, idf))


if __name__ == '__main__':
    w2v = {}
    data_w2v_file = w2v_pkl_file = twts_file = None
    if W2V_ARG in sys.argv:
        arg_index = sys.argv.index(W2V_ARG)
        data_w2v_file = sys.argv[arg_index+1]

    if W2V_PKL in sys.argv:
        arg_index = sys.argv.index(W2V_PKL)
        w2v_pkl_file = sys.argv[arg_index+1]

    if TWTS_ARG in sys.argv:
        arg_index = sys.argv.index(TWTS_ARG)
        twts_file = sys.argv[arg_index+1]


    if data_w2v_file:
        w2v = load_w2v(data_w2v_file)
        pickle.dump( w2v, open( "w2v.pkl", "wb" ) )

    if w2v_pkl_file:
        w2v = pickle.load( open( w2v_pkl_file, "rb" ) )

    if twts_file:
        (word_doc_counts, total_tweets, unk_count) = calc_tf_idf(twts_file, w2v.keys())
        print_tfidf_results(word_doc_counts, total_tweets, unk_count, w2v.keys())

