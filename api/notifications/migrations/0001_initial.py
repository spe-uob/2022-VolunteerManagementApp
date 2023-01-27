# Generated by Django 3.0.7 on 2020-06-30 11:18

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('actions', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(blank=True, choices=[('PENDING_HIGH_PRIORITY', 'High priority action is pending'), ('VOLUNTEER_INTEREST', 'Volunteed manifested interest'), ('VOLUNTEER_ASSIGNED', 'Volunteer was assigned'), ('VOLUNTEER_NOT_ASSIGNED', 'Volunteer was not assigned'), ('VOLUNTEER_CONTACT', 'Volunteer made contact with the resident'), ('ACTION_COMPLETED', 'Volunteer completed the action'), ('ACTION_NOT_COMPLETED', 'Volunteer could not complete the action'), ('ACTION_ONGOING', 'Volunteer marked action as ongoing')], editable=False, max_length=100, null=True)),
                ('subject', models.CharField(help_text='The notification subject.', max_length=100, null=True)),
                ('message', models.TextField(help_text="What's your name?", max_length=1000, null=True)),
                ('delivered', models.BooleanField(default=False, help_text='This field is updated automatically.')),
                ('recipients', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=50), blank=True, help_text='Email addresses of recipients.', null=True, size=None)),
                ('created_date_time', models.DateTimeField(help_text='This field is updated automatically.', null=True)),
                ('delivered_date_time', models.DateTimeField(help_text='This field is updated automatically.', null=True)),
                ('action', models.ForeignKey(help_text='The action the notification is about.', null=True, on_delete=django.db.models.deletion.PROTECT, to='actions.Action')),
            ],
        ),
    ]