
# Но я своего добился, пусть и костылями -- скрит для записи слагов в бд напрямую


#!/usr/bin/env python
import os
import sys
import json
from transliterate import translit
sys.path.insert(0, '')

path = '/home/kadik/Dropbox/web/Making/metro(django)/metro'
if path not in sys.path:
    sys.path.append(path)

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "metro.settings")
os.environ["DJANGO_SETTINGS_MODULE"] = "metro.settings"
import django
django.setup()

from django.utils.text import slugify
from metro_map.models import *

data = Station.objects.all().order_by('-id')

list=[]
for station in data:
    station.slug = slugify(translit((station.title), 'ru', reversed=True))
    slug = station.slug
    if slug in list:
        station.slug = slug + "1"
        print(station.slug)
        station.save()
    list.append(station.slug)


