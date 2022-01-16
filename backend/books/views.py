from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from rest_framework import viewsets
from django.http import Http404
from .serializer import BookSerializer
from .models import Book
from django.shortcuts import get_object_or_404
from rest_framework import status
from app.pagination import CustomPagination

class BookView(APIView):

    def get(self, request, pk = None, format = None):
        if pk:
            book = get_object_or_404(Book, pk = pk)
            serializer = BookSerializer(book)
            return Response(serializer.data, status = status.HTTP_200_OK)
        else:
            book = Book.objects.all()
            paginacao = CustomPagination()
            serializer = BookSerializer(paginacao.paginate_queryset(book, request), many= True)
            return paginacao.get_paginated_response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)
        
    def post(self, request):
        data = request.data
        serializer = BookSerializer(data=data)

        if serializer.is_valid():
            serializer.save()          
            return Response(serializer.data,status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk = None):
        books = get_object_or_404(Book, pk =pk)
        serializer = BookSerializer(instance = books, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK )
        return Response(serializer.errors, status =status.HTTP_400_BAD_REQUEST)    



    def delete(self,request, pk=None, format=None):
        book = get_object_or_404(Book, id=pk)
        book.delete()
        return Response({'success': 'Done!'}, status=status.HTTP_204_NO_CONTENT)


    
