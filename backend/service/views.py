from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.views import APIView
from service.models import Category, Product, ShopProfile, VolunteerProfile, Order, Norm, OrderDetail, CategoryNorm
from rest_framework import status, permissions, viewsets
from service.serializers import CategoryNormSerializer, CustomerProfileSerializer, ProductSerializer, ShopProfileSerializer, VolunteerProfileSerializer, UserSerializer, OrderSerializer, CategorySerializer
from rest_framework import mixins
from rest_framework.generics import GenericAPIView
from django.contrib.auth import get_user_model
User = get_user_model()

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

            profiles = ShopProfile.objects.order_by('-rating')
            user_profile = profiles.get(user=request.user)
            rank = profiles.filter(rating__gt=user_profile.rating).count() + 1


        elif hasattr(request.user, 'customer_profile'):
            profile_serializer = CustomerProfileSerializer(request.user.customer_profile)
            profile_data = profile_serializer.data
        elif hasattr(request.user, 'volunteer_profile'):
            profile_serializer = VolunteerProfileSerializer(request.user.volunteer_profile)
            profile_data = profile_serializer.data

            profiles = VolunteerProfile.objects.order_by('-rating')
            user_profile = profiles.get(user=request.user)
            rank = profiles.filter(rating__gt=user_profile.rating).count() + 1

        response_data = user_serializer.data
        response_data.update(profile_data)

        if not hasattr(request.user, 'customer_profile'):
            response_data['rank'] = rank

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetCategories(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        if hasattr(request.user, 'shop_profile'):
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True)
            for data in serializer.data:
                data.pop('product_set')
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"message":"YOU ARE NO SHOP"})


        return Response(status=status.HTTP_200_OK, data=serializer.data)

class GetTop(APIView):

    def get(self, request, user_type):
        if (user_type == 2):
            profiles = VolunteerProfile.objects.order_by('-rating')[:5]
            user_ids = profiles.values_list('user_id', flat=True)
            users = User.objects.filter(id__in=user_ids)

            rank = 1
            profile_data = []
            for profile in profiles:
                user = users.get(id=profile.user_id)
                profile_data.append({
                    'user': UserSerializer(profile.user).data,
                    'profile': VolunteerProfileSerializer(profile).data,
                    'rank': rank
                })
                rank+=1

        elif (user_type == 3):
            profiles = ShopProfile.objects.order_by('-rating')[:5]
            user_ids = profiles.values_list('user_id', flat=True)
            users = User.objects.filter(id__in=user_ids)

            profile_data = []
            rank = 1
            for profile in profiles:
                user = users.get(id=profile.user_id)
                profile_data.append({
                    'user': UserSerializer(profile.user).data,
                    'profile': ShopProfileSerializer(profile).data,
                    'rank': rank
                })
                rank+=1

        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"message":"WRONG USER TYPE"})

        response_data = {}
        response_data['data'] = profile_data

        return Response(status=status.HTTP_200_OK, data=response_data)

class GetOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]
    
    def get(self, request):
        user = request.user

        if hasattr(user, 'customer_profile'):  
            orders = user.customer_profile.order_set.all()
    
        elif  hasattr(user, 'volunteer_profile'):
            orders = user.volunteer_profile.order_set.all()
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={"message":"YOU ARE NO CUSTOMER OR VOLUNTEER"})

        serializer = OrderSerializer(orders, many=True)
        data = serializer.data
        for order_data in data:
            order = Order.objects.get(pk=order_data['id'])

            if order.customer:
                order_data['customer']['name'] = order.customer.user.name
                order_data['customer']['phone'] = order.customer.user.phone
                order_data['customer']['email'] = order.customer.user.email
            if order.volunteer:
                order_data['volunteer']['name'] = order.volunteer.user.name
                order_data['volunteer']['phone'] = order.volunteer.user.phone
                order_data['volunteer']['email'] = order.volunteer.user.email
        return Response(status=status.HTTP_200_OK, data=data)

class GetAvailableOrders(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        
        if hasattr(user, 'volunteer_profile'):
            orders = Order.objects.filter(volunteer__isnull=True)
            serializer = OrderSerializer(orders, many=True)
            data = serializer.data
            for order_data in data:
                order = Order.objects.get(pk=order_data['id'])

                if order.customer:
                    order_data['customer']['name'] = order.customer.user.name
                if order.volunteer:
                    order_data['volunteer']['name'] = order.volunteer.user.name
            return Response(status=status.HTTP_200_OK,data=data)
        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message':"YOU ARE NO VOLUNTEER"})

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

class DenyVolunteer(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def put(self, request, order_id):
        try:
            if not hasattr(request.user, 'volunteer_profile'):
                return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO VOLUNTEER'})

            order = Order.objects.get(id=order_id)
            if (order.volunteer_id == request.user.id):
                volunteer = order.volunteer
                if (volunteer.rating < 5):
                    volunteer.rating = 0
                else:
                    volunteer.rating -= 5
                order.volunteer_id = None
                order.save()
                volunteer.save()
                serializer = OrderSerializer(order)

                return Response(status=status.HTTP_200_OK, data=serializer.data)

            else:
                return Response(status=status.HTTP_200_OK, data={"message":"Wrong volunteer"})

        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={'message': 'NO ORDERS'})

class GetNorm(APIView):

    def get(self, request, norm_name):
        
        try:
            if not hasattr(request.user, 'customer_profile'):
                return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO CUSTOMER'})
              
            norm = Norm.objects.get(norm_name=norm_name)
            category_norms = CategoryNorm.objects.filter(norm=norm).all()
            categories = [cn.category for cn in category_norms]
            quantities = [cn.overall_quantity for cn in category_norms]
            serializer = CategorySerializer(categories, many=True)
            for data in serializer.data:
                data.pop('product_set')

            data = [
                {**data_dict, "overall_quantity": quantity}
                for data_dict, quantity in zip(serializer.data, quantities)
            ]
            return Response(status=status.HTTP_200_OK, data=data)

        except Norm.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={'message': 'NO NORM'})
class ConfirmOrder(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, order_id):
        if not hasattr(request.user, 'customer_profile'):
            return Response(status=status.HTTP_400_BAD_REQUEST, data={'message': 'YOU ARE NO CUSTOMER'})
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND, data={"message":"Order not found"})

        order_details = OrderDetail.objects.filter(order=order)
        if order.volunteer:
            volunteer = order.volunteer
            volunteer.rating += order_details.count()
            volunteer.order_count += 1
            volunteer.save()

        for order_detail in order_details:
            product = order_detail.product
            if product.shop:
                shop = product.shop
                shop.rating += 1
                shop.help_count += 1
                shop.save()

        order.delete()

        return Response(status=status.HTTP_200_OK, data={'message':"Order deleted and rating is given"})