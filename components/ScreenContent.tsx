import { View } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

import { EditScreenInfo } from './EditScreenInfo';

import { Text } from '@/components/ui/Text';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Text size="xl" weight="bold">
        {title}
      </Text>
      <View style={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: '80%',
    backgroundColor: theme.colors.gray[6],
  },
}));
