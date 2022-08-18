



urlpatterns = [
    path('', views.get_comments),
    path('<str:video_id>/', views.video_comments,),
    path('update/<int:id>/', views.update_comment)
]