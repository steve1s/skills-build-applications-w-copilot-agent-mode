from django.core.management.base import BaseCommand
from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data.'

    def handle(self, *args, **kwargs):
        # Users
        user1 = User.objects.create(email='alice@example.com', name='Alice', password='alicepass')
        user2 = User.objects.create(email='bob@example.com', name='Bob', password='bobpass')
        user3 = User.objects.create(email='carol@example.com', name='Carol', password='carolpass')

        # Teams
        team1 = Team.objects.create(name='Team Octopus')
        team2 = Team.objects.create(name='Team Kraken')
        team1.members.add(user1, user2)
        team2.members.add(user3)

        # Activities
        Activity.objects.create(user=user1, activity_type='run', duration=30)
        Activity.objects.create(user=user2, activity_type='walk', duration=45)
        Activity.objects.create(user=user3, activity_type='strength', duration=60)

        # Workouts
        Workout.objects.create(user=user1, workout_type='cardio', description='Morning run')
        Workout.objects.create(user=user2, workout_type='yoga', description='Evening yoga')
        Workout.objects.create(user=user3, workout_type='strength', description='Weight lifting')

        # Leaderboard
        Leaderboard.objects.create(team=team1, points=150)
        Leaderboard.objects.create(team=team2, points=100)

        self.stdout.write(self.style.SUCCESS('Test data populated successfully.'))
