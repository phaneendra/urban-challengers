import { Stack } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

import { Box } from '@/components/ui/Box';
import { Card } from '@/components/ui/Card';
import { Center } from '@/components/ui/Center';
import { Container } from '@/components/ui/Container';
import { HStack } from '@/components/ui/HStack';
import { Text } from '@/components/ui/Text';
import { VStack } from '@/components/ui/VStack';

const TextDemo = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <ScrollView style={styles.scrollViewStyle}>
      <Card size="md" style={styles.panelStyle}>
        <Box style={{ marginBottom: theme.spacings.md }}>
          <Text size="2xl" weight="bold">
            Default
          </Text>
        </Box>
        <Center style={{ flex: 1 }}>
          <Box style={{ maxWidth: 600 }}>
            <Box style={{ marginBottom: theme.spacings.sm }}>
              <Text weight="bold">Your Notes</Text>
            </Box>

            <Text>
              This is a text. A text is a written or printed work that conveys information, ideas,
              thoughts, or emotions through language. It can take various forms, such as books,
              articles, essays, messages, and can serve multiple purposes, including communication,
              entertainment, etc. In a broader sense, a "text" refers to any coherent and meaningful
              collection of words that can be read and interpreted.
            </Text>
          </Box>
        </Center>
      </Card>
      <Card size="md" style={styles.panelStyle}>
        <Box style={{ marginBottom: theme.spacings.md }}>
          <Text size="2xl" weight="bold">
            Sizes
          </Text>
        </Box>
        <VStack gap="md" style={{ flex: 4 }}>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">XS</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="xs">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">sm</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="sm">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">md</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="md">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">lg</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="lg">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">xl</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="xl">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">2xl</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="2xl">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">3xl</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="3xl">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">4xl</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="4xl">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
          <HStack gap="md" style={{ marginBottom: theme.spacings.sm, maxWidth: 600 }}>
            <Box style={{ flex: 0.5 }}>
              <Text weight="bold">5xl</Text>
            </Box>
            <Box style={{ flex: 3.5 }}>
              <Text size="5xl">The quick brown fox jumps over the lazy dog</Text>
            </Box>
          </HStack>
        </VStack>
      </Card>
    </ScrollView>
  );
};

export default function TextPage() {
  return (
    <>
      <Stack.Screen options={{ title: 'Text' }} />
      <Container>
        <TextDemo />
      </Container>
    </>
  );
}
export const stylesheet = createStyleSheet((theme) => ({
  scrollViewStyle: {
    backgroundColor: theme.colors.background,
    paddingBottom: theme.spacings.xs,
  },
  panelStyle: {
    justifyContent: 'center',
    minHeight: 200,
    maxWidth: 600,
    marginBottom: theme.spacings.md,
  },
}));
