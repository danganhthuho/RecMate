import { StyleSheet, Text, View } from 'react-native';

type ActivityCardProps = {
  sport: string;
  location: string;
  time: string;
  players: string;
};

export default function ActivityCard({
  sport,
  location,
  time,
  players,
}: ActivityCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sport}>{sport}</Text>
      <Text>{location}</Text>
      <Text>{time}</Text>
      <Text>{players}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 16,
  },

  sport: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
  },
});