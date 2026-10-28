from django.contrib import admin
from .models import Product  # Убедитесь, что модель называется Product

admin.site.register(Product)