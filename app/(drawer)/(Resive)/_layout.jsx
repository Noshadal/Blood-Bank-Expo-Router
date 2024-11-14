import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { useState } from 'react';

export default function BloodDonateScreen() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');

  const handleDonate = () => {
    if (bloodGroup && location && availability) {
      // Logic to save donor's information (e.g., save to Firebase or API request)
      alert(`Thank you! You've registered to donate ${bloodGroup} blood.`);
      setBloodGroup('');
      setLocation('');
      setAvailability('');
    } else {
      alert("Please fill in all the details.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register as a Blood Donor</Text>

      {/* Blood Group Selector */}
      <Text style={styles.label}>Select Blood Group:</Text>
      <Picker
        selectedValue={bloodGroup}
        onValueChange={(itemValue) => setBloodGroup(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Blood Group" value="" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
      </Picker>

      {/* Location Input */}
      <Text style={styles.label}>Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your location"
        value={location}
        onChangeText={setLocation}
      />

      {/* Availability Input */}
      <Text style={styles.label}>Availability (e.g., morning, evening):</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your availability"
        value={availability}
        onChangeText={setAvailability}
      />

      {/* Register as Donor Button */}
      <TouchableOpacity style={styles.donateButton} onPress={handleDonate}>
        <Text style={styles.donateButtonText}>Register as Donor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 5,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  donateButton: {
    backgroundColor: '#5cb85c', // Green background for the button
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
