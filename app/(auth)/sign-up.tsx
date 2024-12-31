import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function SignUp() {
  return (
    <>
      <Stack.Screen options={{ title: 'Sign Up' }} />
      <Container>
        <ScreenContent path="app/(auth)/sign-up.tsx" title="Sign Up" />
      </Container>
    </>
  );
}
