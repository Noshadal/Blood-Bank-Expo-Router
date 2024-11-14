import { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { initializeApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { router } from 'expo-router';
import firebaseConfig from '../../utils/firebase.config';

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth = getAuth(app);

const Loading = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is logged in:", user);
        router.push('(home)'); // Adjusted path for home
      } else {
        console.log("No user found.");
        router.push('/(auth)'); // Adjusted path for auth screen
      }
    });
    return unsubscribe;
  }, []);

<<<<<<< HEAD
=======
  const checkUser = async () => {
    const user = await AsyncStorage.getItem('user');
    if (user !== null) {
      console.log('if');
      
      setUser(JSON.parse(user));
      router.push('(Drawer)');
    } else {
      console.log('else');
      router.push('(auth)');
    }
  };

>>>>>>> 4b3fa6ffe269b206c66326a13fc8cb5cb1548045
  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <Text style={{ color: 'gray' }}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
