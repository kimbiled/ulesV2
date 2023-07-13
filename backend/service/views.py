from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.views import APIView
from service.models import Category, Product, ShopProfile, VolunteerProfile, Order
from rest_framework import status, permissions, viewsets
from service.serializers import CustomerProfileSerializer, ProductSerializer, ShopProfileSerializer, VolunteerProfileSerializer, UserSerializer, OrderSerializer
from rest_framework import mixins
from rest_framework.generics import GenericAPIView

class ProductViewSet(viewsets.ViewSet):
    permission_classes=[permissions.IsAuthenticated]

    def list(self, request):
        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO SHOP'})

        queryset = request.user.shop_profile.product_set.all()
        serializer = ProductSerializer(queryset, many=True)
        return Response(status= status.HTTP_200_OK, data= serializer.data)

    def retrieve(self, request, pk=None):
        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        queryset = request.user.shop_profile.product_set.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = ProductSerializer(user)        
        return Response(status= status.HTTP_200_OK, data= serializer.data)


class CreateNewProduct(APIView):
    serializer_class = ProductSerializer
    permission_classes=[permissions.IsAuthenticated]    

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO SHOP'})

        if serializer.is_valid():
            categ = Category.objects.filter(category_name = serializer.data['category_name'])[:1].get()
            if not categ:
                return Response(data={'message': 'FAILED TO FIND THE CATEGORY'}, status=status.HTTP_400_BAD_REQUEST)

            product = Product.objects.create(category = categ, shop = request.user.shop_profile, 
                                            product_name= serializer.data['product_name'], 
                                            quantity_per_unit=serializer.data['quantity_per_unit'],
                                            units_in_stock=serializer.data['units_in_stock'],   
                                            units_on_order=serializer.data['units_on_order'],
                                            discontinued=serializer.data['discontinued'])
            
            if not product:
                return Response(data={'message': 'FAILED TO CREATE THE PRODUCT'}, status=status.HTTP_400_BAD_REQUEST)

            return Response(data={'message': 'PRODUCT WAS UPDATED SUCCESSFULLY', 'data':serializer.data}, status=status.HTTP_200_OK)
        
        return Response(data={"message": "INVALID DATA"}, status=status.HTTP_400_BAD_REQUEST)

class UpdateProduct(APIView):
    serializer_class = ProductSerializer
    permission_classes=[permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO SHOP'})

        if serializer.is_valid():
            categ = Category.objects.filter(category_name = serializer.data['category_name'])[:1].get()

            if not categ:
                return Response(data={'message': 'FAILED TO FIND THE CATEGORY'}, status=status.HTTP_400_BAD_REQUEST)

            product = Product.objects.filter(id = serializer.data['id'], shop = request.user.shop_profile)[:1].get()
            
            if not product:
                return Response(data={'message': 'FAILED TO UPDATE THE PRODUCT (PROBABLY YOU HAVE NO ACCESS TO IT)'}, status=status.HTTP_400_BAD_REQUEST)

            product.product_name = serializer.data['product_name']
            product.quantity_per_unit = serializer.data['quantity_per_unit']
            product.units_in_stock = serializer.data['units_in_stock']
            product.units_on_order = serializer.data['units_on_order']
            product.discontinued = serializer.data['discontinued']
            product.category = categ

            product.save()


            return Response(data={'message': 'PRODUCT WAS UPDATED SUCCESSFULLY', 'data':serializer.data}, status=status.HTTP_200_OK)
        
        return Response(data={"message": "INVALID DATA"}, status=status.HTTP_400_BAD_REQUEST)


class UpdateShopProfile(APIView):
    serializer_class = ShopProfileSerializer
    permission_classes=[permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO SHOP'})

        if serializer.is_valid():
            if (request.user.shop_profile.address == serializer.data['address'] or request.user.shop_profile.company == serializer.data['company']):
                return Response(data={'message': 'YOU CANNOT ENTER THE SAME DATA FOR YOUR SHOP PROFILE', 'data':serializer.data}, status=status.HTTP_406_NOT_ACCEPTABLE)

            request.user.shop_profile.address = serializer.data['address']
            request.user.shop_profile.company = serializer.data['company']
            request.user.shop_profile.save()

            return Response(data={'message': 'SHOP PROFILE WAS UPDATED SUCCESSFULLY', 'data':serializer.data}, status=status.HTTP_200_OK)
        
        return Response(data={"message": "INVALID DATA", 'error' : serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class UpdateCustomerProfile(APIView):
    serializer_class = CustomerProfileSerializer
    permission_classes=[permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if not hasattr(request.user, 'customer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO CUSTOMER'})

        if serializer.is_valid():
            if (request.user.customer_profile.address == serializer.data['address']):
                return Response(data={'message': 'YOU CANNOT ENTER THE SAME DATA FOR YOUR CUSTOMER PROFILE', 'data':serializer.data}, status=status.HTTP_406_NOT_ACCEPTABLE)

            request.user.customer_profile.address = serializer.data['address']
            request.user.customer_profile.save()
            
            return Response(data={'message': 'CUSTOMER PROFILE WAS UPDATED SUCCESSFULLY', 'data':serializer.data}, status=status.HTTP_200_OK)
        
        return Response(data={"message": "INVALID DATA", 'error' : serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
    
class UpdateVolunteerProfile(APIView):
    serializer_class = VolunteerProfileSerializer
    permission_classes=[permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = self.serializer_class(data=data)

        if not hasattr(request.user, 'volunteer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO VOLUNTEER'})

        if serializer.is_valid():
            if (request.user.volunteer_profile.company == serializer.data['company']):
                return Response(data={'message': 'YOU CANNOT ENTER THE SAME DATA FOR YOUR VOLUNTEER PROFILE', 'data':serializer.data}, status=status.HTTP_406_NOT_ACCEPTABLE)

            request.user.volunteer_profile.company = serializer.data['company']
            request.user.volunteer_profile.save()
            
            return Response(data={'message': 'VOLUNTEER PROFILE WAS UPDATED SUCCESSFULLY', 'data':serializer.data}, status=status.HTTP_200_OK)
        
        return Response(data={"message": "INVALID DATA", 'error' : serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

class GetProfile(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user_serializer = UserSerializer(request.user)
        profile_data = {}

        if hasattr(request.user, 'shop_profile'):
            profile_serializer = ShopProfileSerializer(request.user.shop_profile)
            profile_data = profile_serializer.data
        elif hasattr(request.user, 'customer_profile'):
            profile_serializer = CustomerProfileSerializer(request.user.customer_profile)
            profile_data = profile_serializer.data
        elif hasattr(request.user, 'volunteer_profile'):
            profile_serializer = VolunteerProfileSerializer(request.user.volunteer_profile)
            profile_data = profile_serializer.data

        response_data = user_serializer.data
        response_data.update(profile_data)

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetTop(APIView):

    def get(self, request):
        volunteer_profiles = VolunteerProfile.objects.order_by('-rating')[:3]

        shop_profiles = ShopProfile.objects.order_by('-rating')[:3]

        volunteer_data = [
            VolunteerProfileSerializer(profile).data
            for profile in volunteer_profiles
        ]

        shop_data = [
            ShopProfileSerializer(profile).data
            for profile in shop_profiles
        ]


        response_data = {}
        response_data['volunteers'] = volunteer_data 
        response_data['shops'] = shop_data

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if not hasattr(request.user, 'volunteer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO VOLUNTEER'})

        orders = Order.objects.filter(volunteer__isnull=True)
        serializer = OrderSerializer(orders, many=True)
        return Response(status=status.HTTP_200_OK,data=serializer.data)

class AssignVolunteer(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, order_id):
        try:
            if not hasattr(request.user, 'volunteer_profile'):
                return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO VOLUNTEER'})

            order = Order.objects.get(id=order_id)
            order.volunteer_id = request.user.id
            order.save()
            serializer = OrderSerializer(order)
            return Response(serializer.data)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={'message': 'NO ORDERS'})

class GetVolunteerOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if not hasattr(request.user, 'volunteer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO VOLUNTEER'})
            
        orders = Order.objects.filter(volunteer_id=request.user.id)
        serializer = OrderSerializer(orders, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

class GetCustomerOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if not hasattr(request.user, 'customer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO CUSTOMER'})
            
        orders = Order.objects.filter(customer_id=request.user.id)
        serializer = OrderSerializer(orders, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

class GetShopOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if not hasattr(request.user, 'shop_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO SHOP'})

        orders = Order.objects.filter(order_details__product__shop=request.user.shop_profile)
        serializer = OrderSerializer(orders, many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)