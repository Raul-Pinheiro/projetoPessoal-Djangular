from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser): 
    username = models.CharField(max_length=50,null=True,blank=True)   
    data_nascimento = models.DateField(null=True,blank=True)
    sexo = models.CharField(max_length=1,null=True, blank=True)
    data_atualizacao = models.DateTimeField(blank=True, null = True)
    email = models.EmailField(max_length=254, unique=True, error_messages={'unique': "O email cadastrado já existe."})
    
    REQUIRED_FIELDS = ['username']
    USERNAME_FIELD = 'email'
    def __str__(self):
        return self.username