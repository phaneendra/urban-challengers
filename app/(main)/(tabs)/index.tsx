import { Stack } from 'expo-router';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/index.tsx" title="Tab One" />
      </Container>
    </>
  );
}
