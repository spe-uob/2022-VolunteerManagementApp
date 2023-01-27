# Generated by Django 3.0.7 on 2021-02-24 16:22

from django.db import migrations, models
import uuid

class Migration(migrations.Migration):

    dependencies = [
        ('actions', '0003_populate_action_uuid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='action',
            name='action_uuid',
            field=models.UUIDField(db_index=True, default=uuid.uuid4, unique=True),
        ),

    ]