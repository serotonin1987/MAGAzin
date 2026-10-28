from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField()
    category = models.CharField(max_length=50)
    is_stok = models.BooleanField(default=False)
    
    def __str__(self):
        return self.title