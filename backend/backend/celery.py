import os
from celery import Celery
from datetime import timedelta

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
app = Celery('backend')

app.config_from_object('django.conf:settings', namespace='CELERY')

app.conf.timezone = 'Asia/Almaty'

app.conf.beat_schedule = {
    "create-order-daily": {
        "task": "service.tasks.create-order-daily",
        "schedule": timedelta(hours=24),
    },
}

app.autodiscover_tasks()