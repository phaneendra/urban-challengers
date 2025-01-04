import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function CreateChallengePage() {
  return (
    <>
      <Container>
        <ScreenContent
          path="app/(main)/(tabs)/challenges/create-challenge.tsx"
          title="Create Challenge"
        />
      </Container>
    </>
  );
}
