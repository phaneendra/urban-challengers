import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function ProfilePage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Profile' }} />
      <Container>
        <ScreenContent path="app/(main)/(tabs)/profile.tsx" title="Profile" />
      </Container>
    </>
  );
}
