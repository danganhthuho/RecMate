import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ActivityCard from '@/components/ActivityCard';

const initialActivities = [
  {
    id: 1,
    sport: 'Billiards',
    location: 'Student Union',
    time: 'Today · 6:00 PM',
    currentPlayers: 1,
    maxPlayers: 2,
  },
  {
    id: 2,
    sport: 'Badminton',
    location: 'SRAC',
    time: 'Today · 7:30 PM',
    currentPlayers: 2,
    maxPlayers: 4,
  },
  {
    id: 3,
    sport: 'Basketball',
    location: 'SRAC Court',
    time: 'Tomorrow · 4:00 PM',
    currentPlayers: 5,
    maxPlayers: 8,
  },
];

export default function HomeScreen() {
  const [activities, setActivities] = useState(initialActivities);
  const handleJoin = (id: number) => {
    setActivities((currentActivities) =>
      currentActivities.map((activity) => {
        if (
          activity.id === id &&
          activity.currentPlayers < activity.maxPlayers
        ) {
          return {
            ...activity,
            currentPlayers: activity.currentPlayers + 1,
          };
        }
  
        return activity;
      })
    );
  };

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
          currentPlayers={activity.currentPlayers}
          maxPlayers={activity.maxPlayers}
          onJoin={() => handleJoin(activity.id)}
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