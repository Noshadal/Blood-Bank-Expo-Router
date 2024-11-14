import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const donors = [
  { id: 1, name: 'John Doe', bloodGroup: 'A+', location: 'City A' },
  { id: 2, name: 'Jane Smith', bloodGroup: 'O-', location: 'City B' },
  // More donor data
];

export default function DonorsListScreen() {
  const handleRequest = (donor) => {
    // You can handle the request logic here (e.g., navigate to a request page or send a request)
    alert(`Request sent to ${donor.name}`);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Available Donors</Text>
      {donors.map((donor) => (
        <View key={donor.id} style={styles.donorCard}>
          <Text style={styles.donorText}>{donor.name}</Text>
          <Text style={styles.donorText}>Blood Group: {donor.bloodGroup}</Text>
          <Text style={styles.donorText}>Location: {donor.location}</Text>
          <TouchableOpacity
            style={styles.requestButton}
            onPress={() => handleRequest(donor)} // Call request handler
          >
            <Text style={styles.requestButtonText}>Request Blood</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  donorCard: { backgroundColor: '#fff', padding: 15, borderRadius: 5, marginBottom: 10 },
  donorText: { fontSize: 16, marginBottom: 5 },
  requestButton: {
    backgroundColor: '#9c0817',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  requestButtonText: { color: '#fff', fontWeight: 'bold' },
});
        