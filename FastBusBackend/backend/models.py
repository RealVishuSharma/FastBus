from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Customer(models.Model) :
    name = models.CharField(max_length=200, null=True)
    user = models.OneToOneField(User, null=True, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


