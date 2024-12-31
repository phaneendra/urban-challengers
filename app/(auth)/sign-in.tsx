import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function SignIn() {
  return (
    <>
      <Stack.Screen options={{ title: 'Sign In' }} />
      <Container>
        <ScreenContent path="app/(auth)/sign-in.tsx" title="Sign In" />
      </Container>
    </>
  );
}
