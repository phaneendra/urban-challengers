import { Stack } from 'expo-router';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <ScreenContent path="app/(drawer)/index.tsx" title="Home" />
      </Container>
    </>
  );
}
