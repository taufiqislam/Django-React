# Generated by Django 5.0.1 on 2024-01-26 09:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_plomappeo_upsyllabus'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=200)),
                ('upSyllabus', models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='api.syllabus')),
            ],
        ),
    ]
