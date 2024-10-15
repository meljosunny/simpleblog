from django.db import models

# Create your models here.
class BlogPost(models.Model):
    title=models.CharField(max_length=20)
    content=models.CharField(max_length=200)
    tags = models.CharField(max_length=20, blank=True)  # Optional field

    def __str__(self):
        return self.title