from celery import shared_task
from celery.utils.log import get_task_logger

from .models import CustomerProfile, Product, Category, CategoryNorm, Order, OrderDetail

logger = get_task_logger(__name__)

@shared_task(name='service.tasks.create-order-daily')
def create_order_daily():
    for customer in CustomerProfile.objects.all():
        order = Order.objects.create(customer=customer)
        for category_norm in customer.norm.categorynorm_set.all():
            overall = category_norm.overall_quantity
            details = []
            for product in category_norm.category.product_set.all():
                if product.units_in_stock == 0 or product.discontinued == True:
                    continue

                details.append(OrderDetail.objects.create(product=product, order= order))
                if overall <= product.quantity_per_unit*product.units_in_stock:
                    required_units = overall// product.quantity_per_unit
                    if (required_units == 0):
                        continue
                    product.units_in_stock -= required_units
                    product.units_on_order += required_units
                    details[len(details)-1].quantity += required_units
                    overall=0
                    product.save()
                    details[len(details)-1].save()
                    break

                else:
                    details[len(details)-1].quantity +=product.units_in_stock
                    overall -= product.units_in_stock* product.quantity_per_unit
                    product.units_on_order += product.units_in_stock
                    product.units_in_stock = 0
                    product.save()
                    details[len(details)-1].save()

            if overall != 0:
                for i in details:
                    i.product.units_in_stock += i.quantity
                    i.product.units_on_order -= i.quantity

                    i.delete()
    
        if order.orderdetail_set.all().count() == 0:
            order.delete()

