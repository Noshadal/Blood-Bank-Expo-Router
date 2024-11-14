import { View, Text } from 'react-native';

export default function Hmay() { // Corrected component name to start with uppercase
  return (
    <View style={{ padding: 20 }}> {/* Added some padding for better layout */}
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ahmad</Text> {/* Styling for better visibility */}
        <Text style={{ fontSize: 16 }}>Blood Group: A</Text> {/* Changed to a more informative text */}
      </View>
    </View>
  );
}
