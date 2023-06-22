from django.forms import ValidationError
from rest_framework import serializers

from service.models import Category, CustomerProfile, Product, ShopProfile, VolunteerProfile

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category_name = serializers.CharField(source='category') 

    class Meta:
        model = Product
        fields= ('id','product_name','quantity_per_unit','units_in_stock','units_on_order','discontinued', 'category_name')

class CategorySerializer(serializers.ModelSerializer):
    product_set = ProductSerializer

    class Meta:
        model = Category
        fields= ('category_name','description', 'product_set')


class ShopProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    company = serializers.CharField(required = True)
    rank = serializers.IntegerField(required = True)
    rating = serializers.IntegerField(required = True)
    class Meta:
        model = ShopProfile 
        fields = ('address','company')


class CustomerProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    class Meta:
        model = CustomerProfile
        fields = ('address')

class VolunteerProfileSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(required = True)
    class Meta:
        model = VolunteerProfile
        fields = ('organization')