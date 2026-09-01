import { StyleSheet, Text, View } from 'react-native';

import ActivityCard from '@/components/ActivityCard';

const activities = [
  {
    id: 1,
    sport: 'Billiards',
    location: 'Student Union',
    time: 'Today · 6:00 PM',
    players: '1 / 2 players',
  },
  {
    id: 2,
    sport: 'Badminton',
    location: 'SRAC',
    time: 'Today · 7:30 PM',
    players: '2 / 4 players',
  },
  {
    id: 3,
    sport: 'Basketball',
    location: 'SRAC Court',
    time: 'Tomorrow · 4:00 PM',
    players: '5 / 8 players',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RecMate</Text>

      <Text style={styles.subtitle}>Find your next game</Text>

      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          sport={activity.sport}
          location={activity.location}
          time={activity.time}
          players={activity.players}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 34,
    fontWeight: '700',
  },

  subtitle: {
    fontSize: 18,
    marginTop: 4,
    marginBottom: 24,
    color: '#666666',
  },
});