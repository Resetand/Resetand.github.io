from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name='index'),
    path("details/<str:station_slug>/", station_detail, name='station_detail'),
    path("add-in-list/<str:add_station_slug>/", add_new_station, name='new_station'),
    path("remove-from-list/<str:remove_station_slug>/", remove_station, name='remove_station'),
    path('login/', login_user, name='login_action'),
    path('logout/', logout_user, name='logout_action'),
    path('signin/', signin_user, name='signin_action'),
]