from django.shortcuts import render
from rest_framework.views import APIView
from core.models import BlogPost
from core.serializers import blogpostSerializer,userserializer
from rest_framework import viewsets
from  django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
# Create your views here.
class blogviewset(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticated,]
    queryset = BlogPost.objects.all()
    serializer_class=blogpostSerializer

#for registeration:
class userviewset(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=userserializer
