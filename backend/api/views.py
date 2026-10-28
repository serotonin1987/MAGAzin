from django.shortcuts import render
from .models import Product
from .serialize import ProductSerializer
from rest_framework.generics import ListAPIView

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
