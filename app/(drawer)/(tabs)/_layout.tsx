import { Tabs } from 'expo-router';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'gray',
        tabBarInactiveTintColor: 'silver',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown:false,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Donate"
        options={{
          headerShown:false,
          title: 'Donate',
          tabBarIcon: ({ color }) => <TabBarIcon name="dropbox" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown:false,
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
