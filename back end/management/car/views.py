from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import models
from . import serializers
# Create your views here.

class CarViewSet(viewsets.ModelViewSet):
    """ This is carViewset it helps to do POST GET PUT DELETE to cars"""
    queryset = models.Car.objects.all()
    serializer_class = serializers.CarSerializer


class ShowroomViewSet(viewsets.ModelViewSet):
    """ This is showroomViewset it helps to do POST GET PUT DELETE to showroom"""
    queryset = models.Showroom.objects.all()
    serializer_class = serializers.ShowroomSerializer


class ManufactureViewSet(viewsets.ModelViewSet):
    """ This is manufactureViewset it helps to do POST GET PUT DELETE to manufacturer"""
    queryset = models.Manufactor.objects.all()
    serializer_class = serializers.ManufactureSerializer

    # def create(self, *args, **kwargs):
    #     serializers.ManufactureSerializer()
    #     print(self.request.data)
    #     return Response(data={})


class ManufactorModelViewSet(viewsets.ModelViewSet):
    """ This is manufactotModelViewset it helps to do POST GET PUT DELETE to model"""
    queryset = models.ManufactorModel.objects.all()
    serializer_class = serializers.ManufactorModelSerializer