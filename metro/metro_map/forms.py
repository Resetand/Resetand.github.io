from django import forms

class LoginForm(forms.Form):
    user_login = forms.CharField(
        label='Логин',
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control'}))
    user_password = forms.CharField(
        label='Пароль', 
        max_length=100,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}))

class SigninForm(forms.Form):
    email = forms.CharField(
        label='Email',
        max_length=100,
        widget=forms.EmailInput(attrs={'class': 'form-control'}))
    first_name = forms.CharField(
        label='Имя',
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control'}))
    last_name = forms.CharField(
        label='Фамилия',
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control'}))
    login = forms.CharField(
        label='Логин',
        max_length=100,
        widget=forms.TextInput(attrs={'class': 'form-control'}))
    password = forms.CharField(
        label='Пароль', 
        max_length=100,
        widget=forms.PasswordInput(attrs={'class': 'form-control'}))

class AddStationForm(forms.Form):
    impressions = forms.CharField(
        required = False,
        label='',
        max_length=1000,
        widget=forms.Textarea(
            attrs={
            'class': 'form-control', 'rows': "3", 'placeholder': 'Оставь свои впечатления'}))