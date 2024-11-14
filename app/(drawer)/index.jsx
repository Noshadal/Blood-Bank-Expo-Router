import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Blood Donation App</Text>

      {/* Request Blood Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('(Request)')}
      >
        <Text style={styles.buttonText}>Request Blood</Text>
      </TouchableOpacity>

      {/* Donate Blood Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('(Resive)')}
      >
        <Text style={styles.buttonText}>Donate Blood</Text>
      </TouchableOpacity>

      {/* View Donors Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('(Avalable Doners)')}
      >
        <Text style={styles.buttonText}>View Available Donors</Text>
      </TouchableOpacity>

      {/* Profile Button */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('(Profile)')}
      >
        <Text style={styles.buttonText}>My Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#d9534f',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
