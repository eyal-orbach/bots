import datetime
import pickle
import sys

import numpy as np

from utils import yoav_tokenizer

W2V_PKL = "--w2v_pkl"

TWTS_ARG = "--twts"

W2V_ARG = "--w2v"

TYPES = ["HEB", "URL"]

def load_w2v(w2v_file):
    w2v ={}
    with open(w2v_file) as f:
        content = f.readlines()
        line_num = 0
        for line in content:
            line_num += 1
            if line_num % 1000 == 0:
                print("reading line %d" % line_num)
            split = line.split()
            word = split[0]
            vec = [float(x) for x in split[1:]]
            w2v[word] = vec
    return w2v


def calc_tf_idf(twts_file, w2v=None):
    word_doc_counts = {}
    total_tweets = 0
    unk_heb_count = unk_url_count = 0
    with open(twts_file) as f:
        content = f.readlines()
        for line in content:
            total_tweets += 1
            if total_tweets % 1000 == 0:
                print ("tweet: %d" % (total_tweets))
            tf = {}
            tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(line)]
            for (type, tok) in tokenized:
                if type in TYPES:
                    if not w2v or tok in w2v:
                        tf[tok] = tf.get(tok, 0) + 1
                        if tf[tok] == 1:
                            word_doc_counts[tok] = word_doc_counts.get(tok, 0) + 1
                    else:
                        if type == "URL":
                            unk_url_count += 1
                        else:
                            unk_heb_count += 1

    return (word_doc_counts, total_tweets, unk_heb_count, unk_url_count)


def print_tfidf_results(word_doc_counts, total_tweets, unk_heb_count, unk_url_count, words):
    print ("finished calculating tfidf for %d tweets, %d words calculated %d unkown hebrew occurences "
           "%d unkown url occurences"
           % (total_tweets, len(words), unk_heb_count, unk_url_count))

    pickle.dump( (word_doc_counts, total_tweets), open( "words_count.pkl", "wb" ) )
    with open("tfidf_stats", "w") as f:
        f.writelines("finished calculating tfidf for %d tweets, %d words calculated %d unkown hebrew occurences "
                     "%d unkown url occurences"
                     % (total_tweets, len(words), unk_heb_count, unk_url_count))

    with open("idf.words", "w") as f:
        for word in words:
            idf = np.log(float(total_tweets)/float(word_doc_counts.get(word,1)))
            f.writelines("%s: %f" % (word, idf))

"""
README:
To parse w2v file 
    run:
        python data_parser.py --w2v  <path to w2v file>
    output: 
        'w2v.pkl' file
        'tfidf_stats' file


To get tfidf data for words in the w2v file 
    run:
        python data_parser.py --twts   <path to tweets file> --w2v_pkl <w2v pkl file>
    output: 
        words_count.pkl file
        
"""
if __name__ == '__main__':
    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("started at %s\n" %(time))
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
        (word_doc_counts, total_tweets, unk_heb_count, unk_url_count) = calc_tf_idf(twts_file, w2v)
        print_tfidf_results(word_doc_counts, total_tweets, unk_heb_count, unk_url_count, w2v.keys())

    time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print("done at %s\n" %(time))