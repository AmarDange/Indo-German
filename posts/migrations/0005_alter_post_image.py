# Generated by Django 3.2.19 on 2023-06-15 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0004_auto_20230615_1007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, default='../default_post_olympic_flag', upload_to='images/'),
        ),
    ]
