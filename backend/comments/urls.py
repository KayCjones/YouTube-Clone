from django.urls import path, include
from comments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.get_comments),
    path('<str:video_id>/', views.video_comments,),
    path('update/<int:id>/', views.update_comment)
]