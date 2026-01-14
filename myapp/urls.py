from django.urls import path
from myapp import views

urlpatterns=[
    path('',views.home_view,name='home'),
    path('form/',views.form_view,name='form'),
    path('article/',views.all_article_view,name='article'),
    path('specific/',views.specific_article_view,name='specific'),
]