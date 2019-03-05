import sys
import pickle
import yoav_tokenizer

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
    with open(twts_file) as f:
        content = f.readlines()
        for i, line in enumerate(content):
            total_tweets += 1
            if i % 1000 == 0:
                print ("line: %d tweet: %d" % (i, total_tweets))
            tf = {}
            tokenized = [(type, tok) for (type, tok) in yoav_tokenizer.tokenize(line)]
            for (type, tok) in tokenized:
                if type in TYPES and (not word_list or tok in word_list):
                    tf[tok]=tf.get(tok, 0) + 1
                    if tf[tok] == 1:
                        word_doc_counts[tok] = word_doc_counts.get(tok, 0) + 1

    return (word_doc_counts, total_tweets)

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
        tf_idf = calc_tf_idf(twts_file, w2v.keys())
        pickle.dump( tf_idf, open( "tf_idf.pkl", "wb" ) )

