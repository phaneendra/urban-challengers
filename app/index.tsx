import { Link } from 'expo-router';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <Container>
      <ScreenContent path="app/index.tsx" title="Home" />
      <Link href="/(main)/(tabs)/home">About</Link>
    </Container>
  );
}
