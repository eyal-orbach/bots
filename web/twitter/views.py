import json

from django.http import HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from logic import api


def index(request):
    return HttpResponse("Hello, world. "+ api.testme())


@csrf_exempt
def get_subject_density(request):
    data = json.loads(request.body)
    resultJSON = api.subject_density(data)
    return JsonResponse(resultJSON, safe=False)