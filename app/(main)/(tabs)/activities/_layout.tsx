import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Activities',
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      />
      <Stack.Screen name="activity-details" options={{ title: 'Activity Details' }} />
      <Stack.Screen name="create-activity" options={{ title: 'Create Activity' }} />
    </Stack>
  );
}
