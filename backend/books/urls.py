from django.urls import path
from .views import BookView
urlpatterns = [
    path('', BookView.as_view()),
    path('<int:pk>', BookView.as_view()),
    
]