import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Profile',
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      />
    </Stack>
  );
}
