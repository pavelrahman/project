from rest_framework import serializers

from . import models

class ManufactureSerializer(serializers.ModelSerializer):
    """ This is manufacturer serializers it will parse to and from JSON """
    class Meta:
        model = models.Manufactor
        fields = '__all__'


class ManufactorModelSerializer(serializers.ModelSerializer):
    """ This is model serializers it will parse to and from JSON """
    class Meta:
        model = models.ManufactorModel
        fields = '__all__'


class CarSerializer(serializers.ModelSerializer):
    """ This is car serializers it will parse to and from JSON """
    class Meta:
        model = models.Car
        fields = '__all__'




class ShowroomSerializer(serializers.ModelSerializer):
    """ This is showroom serializers it will parse to and from JSON """
    class Meta:
        model = models.Showroom
        fields = '__all__'
