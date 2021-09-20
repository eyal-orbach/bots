
## About

This application provides a set of tools that helps screening, filtering and viewing pre-downloanded data from Twitter.
It was developed by Eyal Orbach at the Bar Ilan University NLP Lab under the supervision of Prof. Yoav Goldberg, and as part of [The Big Bots Project](https://botim.online/),
a project set to expose un-organic activity on the web, attempting to influence the Israeli 2019 elections.
The Big Bots Project has gained significant global and local news coverage.

This code, along with data composed of 5 million tweets from December 30, 2018 to March 26th, 2019, is hoseted as a service on the Bar Ilan NLP lab servers
https://nlp.biu.ac.il/~eyalo/twitter-analyzer/

This application does not claim to make the final classification between bots, puppets, fake or real users,
rather, it helps sort and view Twitter data according to the below described logic which can assist the end user, or downstream applications to further 
investigate and classify users or interactions.
It is easy to follow the links here to the actual Twitter accounts/comments and highly advised, to make your own mind according to your findings.

The project currently supports Hebrew data but a should work for any language as long as:
* Significanly large amount of tweets is collected.
* Word vector embeddings for the language are supplied.

## Details

The application works with pre-trained word-embeddings and offline-calculated tf/idf values.

* __Tweet similarity__ - Calculate similarity by a tf/idf weighted sum of w2v embeddings, and cosine/euclidean distance
* __Subject Density__ - Meta parameter sets a weight value between density of tweets and similarity to an origin sentence.
Density is calculated as the varience of the above described tweet vectors subject to their centroid.
Similarity to origin is the euclidean distance from centroid to given sentence.
* __Behaviour Similarity__ - The tweet vector here is modified by a pre-configured number of dimensions with its timestamp
value, normalized by the minimal timestamp in the data. Users are ranked bby the sum of min distances between origin user's
tweets and their various tweets.

## Contact
Feel free to contact me at eyalorbach@gmail.com

