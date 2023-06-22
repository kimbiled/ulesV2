
from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import ShopProfile, User,CustomerProfile,VolunteerProfile
import constants 


@receiver(post_save, sender=User)
def create_or_update_user_profile(sender, instance, created, **kwargs):
    if instance.user_type == constants.SHOP:
        if created:
            ShopProfile.objects.create(user=instance)
        instance.shop_profile.save()

    elif instance.user_type == constants.CUSTOMER:
        if created:
            CustomerProfile.objects.create(user=instance)
        instance.customer_profile.save()

    elif instance.user_type == constants.VOLUNTEER:
        if created:
            VolunteerProfile.objects.create(user=instance)
        instance.volunteer_profile.save()