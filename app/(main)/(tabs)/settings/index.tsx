import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Settings() {
  return (
    <>
      <Stack.Screen options={{ title: 'Settings' }} />
      <Container>
        <ScreenContent path="app/(main)/(tabs)/settings.tsx" title="Settings" />
      </Container>
    </>
  );
}
