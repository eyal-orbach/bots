import time
import json
from bottle import route, run, get, post, request, HTTPResponse ,hook, response, error
from logic import api
import numpy as np
import config.config as conf

centroids = np.load(conf.centroids_file)
densitys = np.load(conf.denstitys_file)

@route('/bots/api/subjectdensity', method=['POST'])
def subj_density():
    r = request
    data = r.json
    results = api.subject_density(data, centroids, densitys)
    return HTTPResponse(code=200, body=results)

if __name__ == '__main__':

    run(host='localhost', port=8000)