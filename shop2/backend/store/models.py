"""Database models"""
from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """Product category"""
    name = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
