import numpy as np
import time
from bottle import route, run, request, HTTPResponse
from bottle import static_file, template

import config.config as conf
from logic import api

centroids = np.load(conf.centroids_file)
densitys = np.load(conf.denstitys_file)

API_HEADERS = {'Content-Type': 'application/json; charset=utf-8'}

api.init()

@route('/bots/api/subjectdensity', method=['POST'])
def subj_density():
    r = request
    data = r.json
    results = api.subject_density(data, centroids, densitys)
    return HTTPResponse(code=200, body=results, headers=API_HEADERS)

@route('/bots/api/tweetsimilarity', method=['POST'])
def tweet_similarity():
    r = request
    data = r.json
    results = api.tweet_similarity(data)
    return HTTPResponse(code=200, body=results, headers=API_HEADERS)

@route('/bots/api/behavioursimilarity', method=['POST'])
def behaviour_similarity():
    r = request
    data = r.json
    results = api.behavior_similrity(data)
    return HTTPResponse(code=200, body=results, headers=API_HEADERS)

@route('/index', method=['GET'])
def startapp():
    return static_file("bots/index.html", root=conf.static_files)

@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root=conf.static_files)



@route('/test', method=['GET'])
def testapp():
    return template('<b>Hello {{name}}</b>!', name="eyal")

if __name__ == '__main__':

    run(host='0.0.0.0', port=8000)