from .models import *
import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from django.contrib.auth import authenticate, login, logout
from .forms import *
from django.shortcuts import redirect
from django.shortcuts import get_object_or_404

# Create your views here.
def login_user(request):
    form = LoginForm(request.POST)
    context = { 'form': form, }
    
    if request.method == 'POST' and form.is_valid():
        username = form.cleaned_data['user_login']
        password = form.cleaned_data['user_password']
        user = authenticate(username=username, password=password)
        response_data = {}
        if user and user.is_active:
            login(request, user)
            response_data['result'] = 'Ok'
            response_data['message'] = 'Успешно вошел' 
        else:
            response_data['result'] = 'Bad'
            response_data['message'] = 'Неправильный логин или пароль' 
        return HttpResponse(json.dumps(response_data))  
    else:
        return redirect('index') 

def logout_user(request):
    logout(request)
    return redirect('index')


def signin_user(request):
    form = SigninForm(request.POST)
    context = { 'form': form, }
    if request.method == 'POST' and form.is_valid():
        user = User.objects.create_user(
            username=form.cleaned_data['login'],
            password=form.cleaned_data['password'], 
            email = form.cleaned_data['email'], 
            first_name = form.cleaned_data['first_name'],
            last_name = form.cleaned_data['last_name'])
        if user:
            login(request, user)
            UserStationsList.objects.create(user=user)
            return redirect('index')  #Все введено
        else:
            return render(request, 'metro_map/bad.html') #Неправильно ввел
    else:
        return redirect('index')  



def hexToRgb(hex):
    hex = hex.lstrip('#')
    tempArr = list(int(hex[i:i+2], 16) for i in (0, 2 ,4))
    return ", ".join(tempArr)

def station_detail(request, station_slug):
    stations = Station.objects.all()
    myuser = request.user
    try: 
        userStations = UserStation.objects.filter(list=UserStationsList.objects.get(user=myuser))
    except:
        userStations = None
    try:
        choice_station = Station.objects.get(slug=station_slug)
        try:
            userstation = UserStation.objects.get(station=choice_station, list=UserStationsList.objects.get(user=myuser))
        except:
            userstation = None
    except Station.DoesNotExist:
        return render(request, 'metro_map/bad.html') #Неправильно ввел

    stations = Station.objects.all()
    return render(request, 'metro_map/station_detail.html', {
        'formlogin': LoginForm, 
        'formsignin': SigninForm,
        'choice_station': choice_station,
        'userstation': userstation,
        'stations': stations,
        'formaddstaion': AddStationForm,
        'userStations': userStations
        })


def remove_station(request, remove_station_slug):
    myuser = request.user
    if request.method == 'POST':
        my_station = Station.objects.get(slug=remove_station_slug)
        UserStation.objects.get(station=my_station, list=UserStationsList.objects.get(user=myuser)).delete()
        return redirect('index')
    return render(request, 'metro_map/bad.html')


    

def index(request):
    stations = Station.objects.all()
    myuser = request.user
    try:
        userStations = UserStation.objects.filter(list=UserStationsList.objects.get(user=myuser))
    except:
        userStations = None
    return render(request, 'metro_map/index.html', {
        'stations': stations,
        'formlogin': LoginForm,
        'formsignin': SigninForm,
        'userStations': userStations
    })

def add_new_station(request, add_station_slug):
    form = AddStationForm(request.POST)
    myuser = get_object_or_404(User, id=request.user.id)
    print(request.user)
    if request.method == 'POST' and form.is_valid():
        UserStation.objects.create(
            station=Station.objects.get(slug=add_station_slug),
            impressions=form.cleaned_data['impressions'],
            list=UserStationsList.objects.get(user=myuser)
        )
        return redirect('index')
    else:
        return render(request, 'metro_map/bad.html')

# class UserStationsList(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)

# class UserStation(models.Model):
#     list = models. ForeignKey(UserStationsList, on_delete=models.CASCADE)
#     station = models.OneToOneField(Station, on_delete=models.CASCADE)
#     impressions = models.TextField(blank=True)
#     data_visit = models.DateField(auto_now=True)
#     def __str__(self): 
#         return "станция '{}', пользователя".format(self.station.title, self.user.username)