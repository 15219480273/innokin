from vote.models import VoteModel
from django.db import models

from users.models import CustomUser


# Create your models here.
class Design(VoteModel, models.Model):
    design_image = models.ImageField()
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

