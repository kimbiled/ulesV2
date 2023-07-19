from django.urls import path
from service.views import ProductViewSet, UpdateProduct, CreateNewProduct,  UpdateProduct, UpdateShopProfile, UpdateVolunteerProfile, UpdateCustomerProfile, GetProfile, GetTop, GetOrders, AssignVolunteer, GetNorm, GetAvailableOrders, GetCategories,ConfirmOrder, DenyVolunteer

urlpatterns = [
    path('get-products/', ProductViewSet.as_view({'get':'list'}), name='view_products'),
    path('update-product/',UpdateProduct.as_view(), name = 'update_products'),
    path('create-new-product/', CreateNewProduct.as_view(), name= 'create-new-product'),
    path('get-profile/', GetProfile.as_view(), name= 'get-profile'),
    path('get-top/<int:user_type>', GetTop.as_view(), name= 'get-top'),
    path('get-orders/', GetOrders.as_view(), name= 'get-orders'),
    path('get-categories/', GetCategories.as_view(), name= 'get-categories'),
    path('get-available-orders/', GetAvailableOrders.as_view(), name= 'get-available-orders'),
    path('get-norm/<int:norm_id>', GetNorm.as_view(), name= 'get-norm'),
    path('orders/<int:order_id>/assign', AssignVolunteer.as_view(), name='assign-volunteer'),
    path('orders/<int:order_id>/deny', DenyVolunteer.as_view(), name='assign-volunteer'),
    path('update-shop-profile/', UpdateShopProfile.as_view(), name= 'update-shop-profile'),
    path('update-customer-profile/', UpdateCustomerProfile.as_view(), name= 'update-customer-profile'),
    path('update-volunteer-profile/', UpdateVolunteerProfile.as_view(), name= 'update-volunteer-profile'),
    path('orders/confirm/<int:order_id>/', ConfirmOrder.as_view(), name='confirm-order'),
]