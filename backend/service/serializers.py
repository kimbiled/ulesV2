from django.forms import ValidationError
from rest_framework import serializers

from service.models import Category, CustomerProfile, Product, ShopProfile, VolunteerProfile, Order, OrderDetail
from django.contrib.auth import get_user_model
User = get_user_model()
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

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ('id', 'product', 'quantity')

class OrderSerializer(serializers.ModelSerializer):
    order_details = OrderDetailSerializer(many=True, read_only=True)
    
    class Meta:
        model = Order
        fields = ('id', 'customer', 'volunteer', 'order_date', 'order_details')

class ShopProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    company = serializers.CharField(required = True)
    rating = serializers.IntegerField(required = True)
    class Meta:
        model = ShopProfile 
        fields = ('address','company','rating')


class CustomerProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    class Meta:
        model = CustomerProfile
        fields = ('address',)

class VolunteerProfileSerializer(serializers.ModelSerializer):
    company = serializers.CharField(required = True)
    rating = serializers.IntegerField(required = True)
    class Meta:
        model = VolunteerProfile
        fields = ('company','rating')

class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required = True)
    user_type = serializers.IntegerField(required = True)
    phone = serializers.CharField(required = True)


    class Meta:
        model = User
        fields = ['email', 'user_type', 'phone']