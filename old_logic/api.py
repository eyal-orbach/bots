import logic.dense_users as subject
import json

def testme():
    return "im working and changing"



ORIGIN_TEXT = "originText";
K_USERS = "k_users";
SUBJECT_PROXIMITY = "subjectProximity";
DENSITY = "density";
def subject_density(data):
    raw_results = subject.get_dense_users(data[K_USERS], data[SUBJECT_PROXIMITY], data[DENSITY], data[ORIGIN_TEXT])
    return json.dumps(raw_results)
