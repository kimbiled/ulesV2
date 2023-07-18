from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.views import APIView
from service.models import Category, Product, ShopProfile, VolunteerProfile, Order,Norm
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

            norm = Norm.objects.filter(norm_name = serializer.data['norm_name'])[:1].get()

            if not norm:
                return Response(data={'message': 'FAILED TO FIND THE NORM'}, status=status.HTTP_400_BAD_REQUEST)
            
            
            request.user.customer_profile.norm = norm
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

        if not hasattr(request.user, 'customer_profile'):
            user_model = User.objects.all()
            sorted_users = user_model.order_by('-rating')
            rank = list(sorted_users).index(request.user) + 1

            response_data['rank'] = rank

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetTop(APIView):

    def get(self, request, user_type):
        if (user_type == 'volunteer')
            profiles = VolunteerProfile.objects.order_by('-rating')[:5]

            data = [
                VolunteerProfileSerializer(profile).data
                for profile in profiles
            ]

        elif (user_type == 'shop')
            profiles = ShopProfile.objects.order_by('-rating')[:3]

            data = [
                ShopProfileSerializer(profile).data
                for profile in profiles
            ]

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, message="WRONG USER TYPE")

        response_data = {}
        response_data['data'] = data

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user

        if hasattr(user, 'customer_profile'):  
            orders = user.customer_profile.order_set.all()
            serializer = OrderSerializer(orders, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        
        elif  hasattr(user, 'volunteer_profile'):
            orders = user.volunteer_profile.order_set.all()
            serializer = OrderSerializer(orders, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.data)

class GetAvailableOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        
        if hasattr(user, 'volunteer_profile'):
            orders = Order.objects.filter(volunteer__isnull=True)
            serializer = OrderSerializer(orders, many=True)
            return Response(status=status.HTTP_200_OK,data=serializer.data)
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data=serializer.data, message="YOU ARE NO VOLUNTEER")

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
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={'message': 'NO ORDERS'})

class GetNorm(APIView):

    def get(self, request, norm_id):
        
        try:
            if not hasattr(request.user, 'customer_profile'):
                return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO CUSTOMER'})
            norm = Norm.objects.get(id=norm_id)
            category_norms = CategoryNorm.objects.filter(norm=norm)
            product_ids = [cn.category.product.id for cn in category_norms]
            products = Product.objects.filter(id__in=product_ids)
            serializer = ProductSerializer(products, many=True)
            return Response(status=status.HTTP_200_OK, data=serializer.data)

        except Norm.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={'message': 'NO NORM'})


        return Response(status=status.HTTP_200_OK, data=response_data)