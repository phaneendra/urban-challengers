import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function ActivitiesPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Activities' }} />
      <Container>
        <ScreenContent path="app/(main)/(tabs)/Activities.tsx" title="Activities" />
      </Container>
    </>
  );
}
