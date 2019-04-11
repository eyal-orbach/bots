import numpy as np
from bottle import route, run, request, HTTPResponse
from bottle import static_file, template

import config.config as conf
from logic import api

centroids = np.load(conf.centroids_file)
densitys = np.load(conf.denstitys_file)

@route('/bots/api/subjectdensity', method=['POST'])
def subj_density():
    r = request
    data = r.json
    results = api.subject_density(data, centroids, densitys)
    return HTTPResponse(code=200, body=results)


@route('/static/<filename:path>')
def send_static(filename):
    return static_file(filename, root=conf.static_files)

@route('/index', method=['GET'])
def startapp():
    return template("index.html")

if __name__ == '__main__':

    run(host='0.0.0.0', port=8000)