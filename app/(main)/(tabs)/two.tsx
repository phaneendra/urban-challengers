import { Stack } from 'expo-router';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <Container>
        <ScreenContent path="app/(drawer)/(tabs)/two.tsx" title="Tab Two" />
      </Container>
    </>
  );
}
