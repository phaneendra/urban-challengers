import { DrawerToggleButton } from '@react-navigation/drawer';
import { Stack } from 'expo-router';
import React from 'react';

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Challenges',
          headerLeft: () => <DrawerToggleButton tintColor="#000" />,
        }}
      />
      <Stack.Screen name="challenge-details" options={{ title: 'Challenge Details' }} />
      <Stack.Screen name="create-challenge" options={{ title: 'Create Challenge' }} />
    </Stack>
  );
}
