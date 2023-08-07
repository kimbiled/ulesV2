from django.forms import ValidationError
from rest_framework import serializers

from service.models import Category, CustomerProfile, Product, ShopProfile, VolunteerProfile, Order, OrderDetail
from django.contrib.auth import get_user_model
User = get_user_model()

class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(required=False)
    category_name = serializers.CharField(source='category') 
    unit_of_measurement = serializers.CharField(source='category.unit_of_measurement', required=False)
    class Meta:
        model = Product
        fields= ('id','product_name','quantity_per_unit','units_in_stock','units_on_order','discontinued', 'category_name', 'unit_of_measurement')

class CategorySerializer(serializers.ModelSerializer):
    product_set = ProductSerializer

    class Meta:
        model = Category
        fields= ('category_name','description', 'unit_of_measurement', 'product_set')

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderDetail
        fields = ('id', 'product', 'quantity')

        depth = 2

class OrderSerializer(serializers.ModelSerializer):
    order_details = serializers.SerializerMethodField()
    
    def get_order_details(self, order):
        order_details = order.orderdetail_set.all()
        serializer = OrderDetailSerializer(order_details, many=True)
        return serializer.data

    class Meta:
        model = Order
        fields = ('id', 'customer', 'volunteer', 'order_date', 'order_details')

        depth = 1

class ShopProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    company = serializers.CharField(required = True)
    rating = serializers.IntegerField(default=0)
    orders = OrderSerializer(many=True, read_only=True, source='order_set')
    class Meta:
        model = ShopProfile 
        fields = ('address','company','rating','orders')


class CustomerProfileSerializer(serializers.ModelSerializer):
    address = serializers.CharField(required = True)
    norm = serializers.CharField(   required = False)
    class Meta:
        model = CustomerProfile
        fields = ('address','norm')

class VolunteerProfileSerializer(serializers.ModelSerializer):
    company = serializers.CharField(required = True)
    rating = serializers.IntegerField(default=0)
    
    class Meta:
        model = VolunteerProfile
        fields = ('company','rating')

class UserSerializer(serializers.ModelSerializer):
    email = serializers.CharField(required = True)
    user_type = serializers.IntegerField(required = True)
    phone = serializers.CharField(required = True)
    name = serializers.CharField(required = True)

    class Meta:
        model = User
        fields = ['email', 'user_type', 'phone', 'name']