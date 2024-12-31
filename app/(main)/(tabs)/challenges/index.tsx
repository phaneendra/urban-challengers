import { Stack, Link } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function ChallengesPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Challenges' }} />
      <Container>
        <Link href="/(main)/(tabs)/challenges/challenge-details">ChallengeDetailsPage</Link>
        <Link href="/(main)/(tabs)/challenges/create-challenge">CreateChallengePage</Link>
        <ScreenContent path="app/(main)/(tabs)/challenges/index.tsx" title="Challenges" />
      </Container>
    </>
  );
}
