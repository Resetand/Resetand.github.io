from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User




class Line(models.Model):
    color = models.CharField(max_length=50)
    number = models.CharField(max_length=3)
    title = models.CharField(max_length=70)
    def __str__(self):
        return "{} №{}".format(self.title, self.number)



class Station(models.Model):
    title = models.CharField(max_length=100, verbose_name='Название')
    slug = models.SlugField(default='', verbose_name='Идентификатор станции')
    d = models.CharField(max_length=500, verbose_name='Координаты svg')
    line = models.ManyToManyField(Line, verbose_name='Ветка(и)')


    def get_absolute_url(self):
        return reverse('station_detail', args=[str(self.slug)])

    def __str__(self):
        return self.title


class User(User):
    def __str__(self):
        return self.username


class UserStationsList(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    def __str__(self):
        return "Лист Пользователя {}".format(self.user)

class UserStation(models.Model):
    list = models. ForeignKey(UserStationsList, on_delete=models.CASCADE)
    station = models.ForeignKey(Station, on_delete=models.CASCADE)
    impressions = models.TextField(blank=True)
    data_visit = models.DateField(auto_now=True)
    def __str__(self):
        return "Станция — {} |       Пользователь — {}".format(self.station.title, self.list.user) 






