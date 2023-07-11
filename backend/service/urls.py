from django.urls import path
from service.views import ProductViewSet, UpdateProduct, CreateNewProduct,  UpdateProduct, UpdateShopProfile, UpdateVolunteerProfile, UpdateCustomerProfile, GetProfile, GetTop, GetOrders, AssignVolunteer, GetVolunteerOrders, GetCustomerOrders

urlpatterns = [
    path('get-products/', ProductViewSet.as_view({'get':'list'}), name='view_products'),
    path('update-product/',UpdateProduct.as_view(), name = 'update_products'),
    path('create-new-product/', CreateNewProduct.as_view(), name= 'create-new-product'),
    path('get-profile/', GetProfile.as_view(), name= 'get-profile'),
    path('get-top/', GetTop.as_view(), name= 'get-top'),
    path('get-orders/', GetOrders.as_view(), name= 'get-orders'),
    path('get-volunteer-orders/', GetVolunteerOrders.as_view(), name= 'get-volunteers-orders'),
    path('get-customer-orders/', GetCustomerOrders.as_view(), name= 'get-customer-orders'),
    path('orders/<int:order_id>/assign', AssignVolunteer.as_view(), name='assign-volunteer'),
    path('update-shop-profile/', UpdateShopProfile.as_view(), name= 'update-shop-profile'),
    path('update-customer-profile/', UpdateCustomerProfile.as_view(), name= 'update-customer-profile'),
    path('update-volunteer-profile/', UpdateVolunteerProfile.as_view(), name= 'update-volunteer-profile'),
]