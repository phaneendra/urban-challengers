import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function CreateActivityPage() {
  return (
    <>
      <Container>
        <ScreenContent
          path="app/(main)/(tabs)/activities/create-activity.tsx"
          title="Create Activity"
        />
      </Container>
    </>
  );
}
