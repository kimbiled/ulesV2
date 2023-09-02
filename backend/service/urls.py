from django.urls import path
from service.views import ProductViewSet, UpdateProduct, CreateNewProduct,  UpdateProduct, UpdateShopProfile, UpdateVolunteerProfile, UpdateCustomerProfile, GetProfile, GetTop, GetOrders, AssignVolunteer, GetNorm, GetAvailableOrders, GetCategories,ConfirmOrder, DenyVolunteer

urlpatterns = [
    path('products/get/', ProductViewSet.as_view({'get':'list'}), name='view-products'),
    path('products/update/',UpdateProduct.as_view(), name = 'update-products'),
    path('products/create/', CreateNewProduct.as_view(), name= 'create-new-product'),
    path('profile/get/', GetProfile.as_view(), name= 'get-profile'),
    path('profile/get-top/<int:user_type>/', GetTop.as_view(), name= 'get-top'),
    path('orders/get/', GetOrders.as_view(), name= 'get-orders'),
    path('categories/get/', GetCategories.as_view(), name= 'get-categories'),
    path('orders/available/get/', GetAvailableOrders.as_view(), name= 'get-available-orders'),
    path('norm/get/<str:norm_name>/', GetNorm.as_view(), name= 'get-norm'),
    path('orders/assign/<int:order_id>/', AssignVolunteer.as_view(), name='assign-volunteer'),
    path('orders/deny/<int:order_id>/', DenyVolunteer.as_view(), name='assign-volunteer'),
    path('profile/update-shop/', UpdateShopProfile.as_view(), name= 'update-shop-profile'),
    path('profile/update-customer/', UpdateCustomerProfile.as_view(), name= 'update-customer-profile'),
    path('profile/update-volunteer/', UpdateVolunteerProfile.as_view(), name= 'update-volunteer-profile'),
    path('orders/confirm/<int:order_id>/', ConfirmOrder.as_view(), name='confirm-order'),
]