from django.contrib import admin

from service.models import CustomerProfile, ShopProfile, VolunteerProfile, Product, Order,OrderDetail, Category,CategoryNorm,Norm

class ShopProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'address', 'company',)
    list_filter = ('user', 'address', 'company',)

admin.site.register(ShopProfile, ShopProfileAdmin)


class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'address', 'norm',)
    list_filter = ('user', 'address', 'norm',)

admin.site.register(CustomerProfile, CustomerProfileAdmin)

 


class VolunteerProfileAdmin(admin.ModelAdmin):
    list_display = ('user', 'company',)
    list_filter = ('user', 'company',)

admin.site.register(VolunteerProfile, VolunteerProfileAdmin)


class ProductAdmin(admin.ModelAdmin):
    list_display = ('product_name', 'units_in_stock', 'units_on_order', 'quantity_per_unit', 'discontinued','shop','category')
    list_filter = ('product_name', 'units_in_stock', 'units_on_order',)
    search_fields = ('product_name', 'category',)

admin.site.register(Product, ProductAdmin)


class OrderAdmin(admin.ModelAdmin):
    list_display = ('customer', 'volunteer', 'order_date',)

admin.site.register(Order, OrderAdmin)


class OrderDetailAdmin(admin.ModelAdmin):
    list_display = ('order', 'product', 'quantity',)

admin.site.register(OrderDetail, OrderDetailAdmin)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'unit_of_measurement',)

admin.site.register(Category, CategoryAdmin)


class CategoryNormAdmin(admin.ModelAdmin):
    list_display = ('category', 'norm', 'overall_quantity',)

admin.site.register(CategoryNorm, CategoryNormAdmin)


class NormAdmin(admin.ModelAdmin):
    list_display = ('norm_name',)

admin.site.register(Norm, NormAdmin) 