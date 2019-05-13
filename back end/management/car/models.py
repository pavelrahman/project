from django.db import models

# Create your models here.
class Manufactor(models.Model):
    """ It explains car manufacturer """
    manufacturer_name = models.CharField(max_length=50)
    country = models.CharField(max_length=100)
    manufacturer_logo = models.FileField(default='default.jpg', upload_to='manufacturer_logo')

    def __str__(self):
        return self.manufacturer_name



class ManufactorModel(models.Model):
    """ It explains car model """
    manufactor = models.ForeignKey(Manufactor, on_delete=models.CASCADE)
    model_code = models.CharField(max_length=50)
    car_type = models.CharField(max_length=100, default='SUV')
    car_model_image = models.FileField(default='default.jpg', upload_to='car_model_image')
    def __str__(self):
        return self.model_code
    



class Car(models.Model):
    """ It explains car """
    manufacturer = models.ForeignKey(Manufactor, on_delete=models.CASCADE)
    tagline = models.CharField(max_length=100)
    model = models.ForeignKey(ManufactorModel, on_delete=models.CASCADE)
    mileage = models.CharField(max_length=50)
    year = models.CharField(max_length=50)
    status = models.BooleanField(default=False)
    transmission = models.CharField(max_length=50)
    price = models.FloatField()
    horse_power = models.CharField(max_length=50)
    propellant = models.CharField(max_length=100)
    car_image = models.FileField(default='default.jpg', upload_to='car_image')

    
    def __str__(self):
        return self.tagline






class Showroom(models.Model):
    """ It explains car showroom """
    showroom_name = models.CharField(max_length=100)
    address = models.CharField(max_length=150)
    owner = models.CharField(max_length=100)
    cars = models.ManyToManyField(Car)

    def __str__(self):
        return self.showroom_name



class User(models.Model):
    """ It explains user """
    user_name = models.CharField(max_length=100)

    def __str__(self):
        return self.user_name