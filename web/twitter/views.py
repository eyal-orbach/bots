from django.shortcuts import render
from logic import api

from django.http import HttpResponse



def index(request):
    return HttpResponse("Hello, world. "+ api.testme())