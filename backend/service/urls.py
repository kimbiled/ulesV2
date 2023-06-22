from django.urls import path
from service.views import ProductViewSet, UpdateProduct, CreateNewProduct,  UpdateProduct, UpdateShopProfile, UpdateVolunteerProfile, UpdateCustomerProfile

urlpatterns = [
    path('get-products/', ProductViewSet.as_view({'get':'list'}), name='view_products'),
    path('update-product/',UpdateProduct.as_view(), name = 'update_products'),
    path('create-new-product/', CreateNewProduct.as_view(), name= 'create-new-product'),
    path('get-profile/', CreateNewProduct.as_view(), name= 'get-profile'),
    path('update-shop-profile/', UpdateShopProfile.as_view(), name= 'update-shop-profile'),
    path('update-customer-profile/', UpdateCustomerProfile.as_view(), name= 'update-customer-profile'),
    path('update-volunteer-profile/', UpdateVolunteerProfile.as_view(), name= 'update-volunteer-profile'),
]