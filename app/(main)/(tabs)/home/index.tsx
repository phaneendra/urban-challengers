import { Stack } from 'expo-router';
import React from 'react';

import { ScreenContent } from '@/components/ScreenContent';
import { Container } from '@/components/ui/Container';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        {/* 
        <Callender>
          <LatestActivity>
            Show latest Activity based on selected calander date
          </LatestActivity>
          <Button>New Activity</Button>
        </Callender>
        <CurrentChallenges>Show InProgress challenges</CurrentChallenges>
        <Button>Join Challenge</Button>
        <LastestPosts>Show latest posts</LastestPosts> */}
        <ScreenContent path="app/(main)/(tabs)/index.tsx" title="Home" />
      </Container>
    </>
  );
}
