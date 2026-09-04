import { activities } from '@/constants/activities';
import { useLocalSearchParams } from 'expo-router';
import { useRef } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function ActivityDetailsScreen() {
  const { id } = useLocalSearchParams();
  const mapRef = useRef<MapView>(null);

  const activity = activities.find(
    (item) => item.id === Number(id)
  );

  if (!activity) {
    return (
      <View style={styles.container}>
        <Text>Activity not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{activity.sport}</Text>

        <Pressable
          style={styles.locationButton}
        onPress={() => {
            mapRef.current?.animateToRegion(
              {
                latitude: activity.latitude,
                longitude: activity.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              },
              500
            );
          }}
        >
        <Text style={styles.locationText}>
          {activity.location}</Text>
        </Pressable>

      <Text>{activity.time}</Text>

      <Text>
        {activity.currentPlayers} / {activity.maxPlayers} players
      </Text>

      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: activity.latitude,
          longitude: activity.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: activity.latitude,
            longitude: activity.longitude,
          }}
          title={activity.location}
          description={activity.sport}
        />
      </MapView>
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
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },

  map: {
    width: '100%',
    height: 250,
    marginTop: 24,
    borderRadius: 16,
  },

  locationButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  
  locationText: {
    fontSize: 16,
    fontWeight: '600',
  },
});