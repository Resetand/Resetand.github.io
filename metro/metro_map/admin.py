from django.contrib import admin
from .models import *

from django.contrib.auth.models import User

class StationAdmin(admin.ModelAdmin):
    view_on_site = True



admin.site.register(Station, StationAdmin)
admin.site.register(Line)
admin.site.register(UserStation)
admin.site.register(UserStationsList)
