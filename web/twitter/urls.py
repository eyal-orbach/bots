from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('subject-density', views.get_subject_density)
]