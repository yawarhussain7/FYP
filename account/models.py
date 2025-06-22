from django.db import models
from django.contrib.auth.models import AbstractUser

class Profile(AbstractUser):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=15, unique=True)

    image = models.FileField(
        upload_to="userImage/",
        default="userImage/default-user.png",  # Path inside MEDIA folder
        null=False,
        blank=True
    )
    bio = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.username
