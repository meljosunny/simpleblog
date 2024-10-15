
from core.models import BlogPost
from rest_framework import serializers
from django.contrib.auth.models import User


class blogpostSerializer(serializers.ModelSerializer):
    class Meta:
        model=BlogPost
        fields=['id','title','content','tags']

class userserializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)

    def create(self,validated_data):
        u=User.objects.create(username=validated_data['username'])
        u.set_password(validated_data['password'])
        u.save()
        return u
    class Meta:
        model=User
        fields=['id','username','password']