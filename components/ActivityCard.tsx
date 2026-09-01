import { Pressable, StyleSheet, Text, View } from 'react-native';

type ActivityCardProps = {
    sport: string;
    location: string;
    time: string;
    currentPlayers: number;
    maxPlayers: number;
    onJoin: () => void;
  };

export default function ActivityCard({
sport,
location,
time,
currentPlayers,
maxPlayers,
onJoin,
}: ActivityCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.sport}>{sport}</Text>
      <Text>{location}</Text>
      <Text>{time}</Text>
      <Text>{currentPlayers} / {maxPlayers} players</Text>
      <Pressable
        style={[
            styles.joinButton,
            currentPlayers >= maxPlayers && styles.fullButton,
        ]}
        onPress={onJoin}
        disabled={currentPlayers >= maxPlayers}
        >
        <Text style={styles.joinButtonText}>
            {currentPlayers >= maxPlayers ? 'Full' : 'Join'}
        </Text>
        </Pressable>
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
  joinButton: {
    marginTop: 14,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#000000',
    alignItems: 'center',
  },
  
  fullButton: {
    backgroundColor: '#999999',
  },
  
  joinButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});