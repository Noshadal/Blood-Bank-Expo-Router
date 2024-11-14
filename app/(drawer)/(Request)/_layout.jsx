import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';
import { useState } from 'react';

export default function BloodRequestScreen() {
  const [bloodGroup, setBloodGroup] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState('');

  // Function to handle sending the request
  const handleSendRequest = () => {
    if (bloodGroup && message && location) {
      // Here, add your logic to send the request (e.g., save to Firebase or send an API request)
      alert(`Request sent for blood group ${bloodGroup} with message: ${message}`);
      setBloodGroup('');
      setMessage('');
      setLocation('');
    } else {
      alert("Please fill in all the details.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Request Blood Donation</Text>

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
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      {/* Message Input */}
      <Text style={styles.label}>Message:</Text>
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Type your message (e.g., urgency, hospital name)"
        multiline
        value={message}
        onChangeText={setMessage}
      />

      {/* Send Request Button */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSendRequest}>
        <Text style={styles.sendButtonText}>Send Request</Text>
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
  messageInput: {
    height: 80,
    textAlignVertical: 'top', // Keeps multiline text at the top
  },
  sendButton: {
    backgroundColor: '#d9534f',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
