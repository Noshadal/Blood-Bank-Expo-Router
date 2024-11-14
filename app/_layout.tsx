import '../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
<<<<<<< HEAD
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal', presentation: 'modal' }} />
      </Stack>
    </GestureHandlerRootView>
=======
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{headerShown: false}} initialRouteName='(drawer)'>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          {/* <Stack.Screen name="(auth)/loading" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/sign-up" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/sign-in" options={{ headerShown: false }} /> */}
        </Stack>
      </GestureHandlerRootView>
    </Provider>
>>>>>>> 4b3fa6ffe269b206c66326a13fc8cb5cb1548045
  );
}
