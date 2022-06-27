from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

# Use views.py from cars app for example on most endpoints
# Instead of get all, add endpoint that allows you to pass in videoid through path
# and get back all comments with that video id

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_cars(request):
    