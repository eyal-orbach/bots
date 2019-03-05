#!/usr/bin/env python
# encoding: utf8

## Copyright 2010 Yoav Goldberg
##
##    This program is free software: you can redistribute it and/or modify
##    it under the terms of the GNU General Public License as published by
##    the Free Software Foundation, either version 3 of the License, or
##    (at your option) any later version.
##
##    This program is distributed in the hope that it will be useful,
##    but WITHOUT ANY WARRANTY; without even the implied warranty of
##    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
##    GNU General Public License for more details.
##
##    You should have received a copy of the GNU General Public License
##    along with this program.  If not, see <http://www.gnu.org/licenses/>.



"""
 Robust Hebrew Tokenizer

 works as a filter:
   hebtokenizer.py < in > out

 run as:
   hebtokenizer.py -h
 for options

 KNOWN ISSUES:
     - NOT VERY FAST!!!

     - transition from hebrew words to numbers: ׳‘-23:00  will be cut as ׳‘-23 :00
     - deliberately not segmenting ׳׳©׳”׳•׳›׳׳‘ from start of words before numbers/quotes/dashes
     - emoticons are not supported (treated as punctuation)
     - ' is always kept at end of hebrew chunks (a document level pre/post processing could help here)
     - !!!!!!!111111 are split to !!!!!!!! 1111111
"""
#########
import re
import codecs

def heb(s,t): return ('HEB',t)
def eng(s,t): return ('ENG',t)
def num(s,t): return ('NUM',t)
def emoji(s,t): return ('EMOJI',t)
def atsign(s,t): return ('AT',t)
def hashtag(s,t): return ('HASHTAG',t)
def url(s,t): return ('URL',t)
def punct(s,t): return ('PUNCT',t)
def junk(s,t): return ('JUNK',t)

#### patterns
#_EMOJI = u"U+0080-02AF, U+0300-03FF, U+0600-06FF, U+0C00-0C7F, U+1DC0-1DFF, U+1E00-1EFF, U+2000-209F, U+20D0-214F, U+2190-23FF, U+2460-25FF, U+2600-27EF, U+2900-29FF, U+2B00-2BFF, U+2C60-2C7F, U+2E00-2E7F, U+3000-303F, U+A490-A4CF, U+E000-F8FF, U+FE00-FE0F, U+FE30-FE4F, U+1F000-1F02F, U+1F0A0-1F0FF, U+1F100-1F64F, U+1F680-1F6FF, U+1F910-1F96B, U+1F980-1F9E0"
_NIKUD = u"\u05b0-\u05c4"
_TEAMIM= u"\u0591-\u05af"

undigraph = lambda x:x.replace(u"\u05f0",u"׳•׳•").replace(u"\u05f1",u"׳•׳™").replace("\u05f2","׳™׳™").replace("\ufb4f","׳׳").replace(u"\u200d","")

_heb_letter = ur"([׳-׳×%s]|[׳“׳’׳–׳¦׳×׳˜]')" % _NIKUD

# a heb word including single quotes, dots and dashes  / this leaves last-dash out of the word
_heb_word_plus = ur"[׳-׳×%s]([.'`\"\-/\\]?['`]?[׳-׳×%s0-9'`])*" % (_NIKUD,_NIKUD)

# english/latin words  (do not care about abbreviations vs. eos for english)
_eng_word = ur"[a-zA-Z][a-zA-Z0-9'.]*"

_hashtag ="(#[^\s]+)"
_atsign ="(@[^\s]+)"

_emoji = u"(\ud83d[\ude00-\ude4f])|"\
                       u"(\ud83c[\udf00-\uffff])|" \
                       u"(\ud83d[\u0000-\uddff])|" \
                       u"(\ud83d[\ude80-\udeff])|" \
                       u"(\u263a[\ufe0a-\ufeff])|" \
                       u"(\u270b)|" \
                       u"(\ud83c[\udde0-\uddff])"


# numerical expression (numbers and various separators)
#_numeric = r"[+-]?[0-9.,/\-:]*[0-9%]"
_numeric = r"[+-]?([0-9][0-9.,/\-:]*)?[0-9]%?"

# url
_url = r"[a-z]+://\S+"

# punctuations
_opening_punc = r"[\[('`\"{]"
_closing_punc = r"[\])'`\"}]"
_eos_punct = r"[!?.]+"
_internal_punct = r"[,;:\-&]"

# junk
#_junk = ur"[^׳-׳×%sa-zA-Z0-9%%&!?.,;:\-()\[\]{}\"'\/\\+]+" #% _NIKUD
_junk = ur"[^׳-׳×%sa-zA-Z0-9!?.,:;\-()\[\]{}]+" % (_NIKUD) #%%&!?.,;:\-()\[\]{}\"'\/\\+]+" #% _NIKUD

is_all_heb = re.compile(ur"^%s+$" % (_heb_letter),re.UNICODE).match
is_a_number = re.compile(r"^%s$" % _numeric ,re.UNICODE).match
is_all_lat= re.compile(r"^[a-zA-Z]+$",re.UNICODE).match
is_sep = re.compile(r"^\|+$").match
is_punct = re.compile(r"^[.?!]+").match



#### scanner

scanner = re.Scanner([
    (r"\s+", None),
    (_url, url),
    (_heb_word_plus, heb),
    (_eng_word, eng),
    (_numeric,  num),
    (_opening_punc, punct),
    (_closing_punc, punct),
    (_eos_punct, punct),
    (_internal_punct, punct),
    (_emoji, emoji),
    (_atsign, atsign),
    (_hashtag, hashtag),
    (_junk, junk),
])

##### tokenize
def tokenize(sent):
    tok = sent
    parts,reminder = scanner.scan(tok)
    assert(not reminder)
    return parts

if __name__=='__main__':
    import sys
    from itertools import islice

    from optparse import OptionParser
    parser = OptionParser("%prog [options] < in_file > out_file")
    parser.add_option("-i","--ie",help="input encoding [default %default]",dest="in_enc",default="utf_8_sig")
    parser.add_option("-o","--oe",help="output encoding [default %default]",dest="out_enc",default="utf_8")
    opts, args = parser.parse_args()

    #FILTER = set(['JUNK','ENG'])
    FILTER = set()

    f = open("../data/heb_twts.sml")
    for sent in codecs.getreader(opts.in_enc)(f):
        #print u"\n".join(["%s %s" % (which,tok) for which,tok in tokenize(sent) if which not in FILTER]).encode("utf8")
        # for part in sent.split():
        #     print part
        #     for ch in part:
        #         print repr(ch)
        print " ".join([tok + "(" + which + ")" for (which,tok) in tokenize(sent)]).encode(opts.out_enc)
