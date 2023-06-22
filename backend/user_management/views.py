from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from user_management.serializers import UserSignUpSerializer
from rest_framework import generics, status

# Create your views here.
def mainPage(req):
    return HttpResponse('hello')

class RegisterView(APIView):
    serializer_class = UserSignUpSerializer

    def post(self, request):
        data = request.data

        serializer = self.serializer_class(data=data)

        if serializer.is_valid():
            serializer.save()

            response = {"message": "USER REGISTERED SUCCESSFULLY", "data": serializer.data}

            return Response(data=response, status=status.HTTP_200_OK)

        return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
