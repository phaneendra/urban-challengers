import { Tabs } from 'expo-router';

import { BottomTabBar } from '@/components/BottomTabBar';

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <BottomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: 'Challenges',
        }}
      />
      <Tabs.Screen
        name="activities"
        options={{
          title: 'Activities',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
        }}
      />
    </Tabs>
  );
}
