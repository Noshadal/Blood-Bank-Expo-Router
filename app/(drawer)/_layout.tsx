<<<<<<< HEAD
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
=======
import { MaterialIcons } from '@expo/vector-icons';
>>>>>>> 4b3fa6ffe269b206c66326a13fc8cb5cb1548045
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => (
  <Drawer>
    <Drawer.Screen 
      name="index"
      options={{
<<<<<<< HEAD
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibility
        drawerLabel: 'Home',
        drawerIcon: ({ size }) => (
          <Ionicons name="home-outline" size={size} color="white" style={{ marginTop: 5 }} /> // Lift the icon higher
        ),
      }}  
    />
 <Drawer.Screen
      name="(Messeges)"
      options={{
        headerTitle: 'Messages',
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibility // Corrected spelling to "Messages"
        drawerLabel: 'Messages', // Updated label for consistency
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
=======
        headerShown: false,
        headerTitle: 'Dashboard',
        drawerLabel: 'Dashboard',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
>>>>>>> 4b3fa6ffe269b206c66326a13fc8cb5cb1548045
      }}
    />
    <Drawer.Screen
      name="(Request)"
      options={{
        headerTitle: 'Request',
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibility // Capitalized for consistency
        drawerLabel: 'Request', // Capitalized for consistency
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="(Resive)"
      options={{
        headerTitle: 'Request Accept', 
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibility// Capitalized for consistency
        drawerLabel: 'Request Accept', // Capitalized for consistency
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="(Sitting)"
      options={{
        headerTitle: 'Sitting', 
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibilitynpm// Capitalized for consistency
        drawerLabel: 'Sitting', // Capitalized for consistency
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="(Avalable Doners)"
      options={{
        headerTitle: 'Avalable Doners', 
        headerStyle: {
          backgroundColor: '#cf191f', // Set the entire header background to red
          height: 100, // Increase the height of the header
          borderBottomLeftRadius: 20, // Set the bottom left radius
          borderBottomRightRadius: 20, // Set the bottom right radius
          overflow: 'hidden', // Ensure the radius effect is visible
          paddingTop: 15, // Adjust this value to lift the content higher
        },
        headerTitleAlign: 'center', // Center align the title
        headerTitleStyle: {
          color: 'white', // Set the header title text color to white
          fontSize: 20, // Set the font size of the title
          fontWeight: 'bold', // Make the title bold
        },
        headerTintColor: 'white', // Change the icon color to white for better visibilitynpm// Capitalized for consistency
        drawerLabel: 'Avalable Doners', // Capitalized for consistency
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
      }}
    />

   
  </Drawer>
);

export default DrawerLayout;
