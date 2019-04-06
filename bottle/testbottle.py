import time
from bottle import route, run, template, request

memdict={}

def load_dict():
    memdict["eyal"] = "test works"
    memdict["bla"] = "test works"
    memdict["boo"] = "test works"
    memdict["foo"] = "test works"



@route('/bots.api/subject-density')
def subj_density(name):
    data = request.json()


    word = memdict.get(name, "not found")
    time.sleep(10)
    return template('<b>Hello {{name}}</b>!', name=word)


if __name__ == '__main__':
    load_dict()
    run(host='localhost', port=8000)