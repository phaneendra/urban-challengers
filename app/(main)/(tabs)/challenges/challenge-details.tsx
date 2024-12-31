import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function ChallengesDetailsPage() {
  return (
    <>
      <Container>
        <ScreenContent
          path="app/(main)/(tabs)/Challenges/challenge-details.tsx"
          title="Challenge Details"
        />
      </Container>
    </>
  );
}
