import logic.dense_users as subject
import json

def testme():
    return "im working and changing"



ORIGIN_TEXT = "originText";
K_USERS = "k_users";
SUBJECT_PROXIMITY = "subjectProximity";
DENSITY = "density";
def subject_density(data, centroids, densitys):
    obj = subject.density_request_obj(data[K_USERS], data[SUBJECT_PROXIMITY], data[DENSITY], data[ORIGIN_TEXT])
    raw_results = subject.get_dense_users(obj, centroids, densitys)
    return json.dumps(raw_results, default=str)
