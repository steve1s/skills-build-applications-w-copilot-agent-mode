from rest_framework.reverse import reverse
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def api_root(request, format=None):
    codespace_url = "https://potential-doodle-66r5rjj5pxqfrrpq-8000.app.github.dev"
    return Response({
        'users': f"{codespace_url}/api/users/",
        'teams': f"{codespace_url}/api/teams/",
        'activity': f"{codespace_url}/api/activity/",
        'leaderboard': f"{codespace_url}/api/leaderboard/",
        'workouts': f"{codespace_url}/api/workouts/",
    })

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
    queryset = Leaderboard.objects.all()
    serializer_class = LeaderboardSerializer

class WorkoutViewSet(viewsets.ModelViewSet):
    queryset = Workout.objects.all()
    serializer_class = WorkoutSerializer