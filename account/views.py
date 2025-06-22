from django.shortcuts import render,redirect
from .models import Profile
from django.contrib.auth import authenticate
from django.contrib import messages
from django.http import HttpResponseRedirect

# Create your views here.
def login(request):
    if request.method == "POST":
        data = request.POST

        username = data.get('username')
        password = data.get('password')

        user = authenticate(request,username = username , password = password)

        if user is not None:
           messages.success(request,"Login successfully...")
           return HttpResponseRedirect('/')

        messages.error(request,"invlid username or password")
        return HttpResponseRedirect(request.path_info)
    
    return render(request,"account/login.html")

def register(request):
    if request.method == "POST":
        data = request.POST

        username = data.get('username')
        email = data.get('email')
        phone_no = data.get('phone_number')
        password = data.get('password')

        # Check for duplicate username or email
        if Profile.objects.filter(username=username).exists():
            messages.warning(request, "Username already exists.")
            return HttpResponseRedirect(request.path_info)

        if Profile.objects.filter(email=email).exists():
            messages.warning(request, "Email already registered.")
            return HttpResponseRedirect(request.path_info)

        # Create the user
        user = Profile.objects.create_user(
            username=username,
            email=email,
            phone_no=phone_no,
        )
        user.set_password(password)
        user.save()

        messages.success(request, "Account successfully created.")
        return redirect('login') 

    return render(request, "account/register.html")
