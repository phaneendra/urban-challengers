import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function ActivityDetailsPage() {
  return (
    <>
      <Container>
        <ScreenContent
          path="app/(main)/(tabs)/Activities/activity-details.tsx"
          title="Activity Details"
        />
      </Container>
    </>
  );
}
