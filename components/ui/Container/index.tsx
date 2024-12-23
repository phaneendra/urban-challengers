import { SlottableViewProps } from '@rn-primitives/types';
import { SafeAreaView } from 'react-native';
import { useStyles, type UnistylesVariants } from 'react-native-unistyles';

import { stylesheet } from './styles';

type ComponentVariants = UnistylesVariants<typeof stylesheet>;
type ContainerPropsWithVariants = SlottableViewProps & ComponentVariants;

export const Container = ({
  children,
  style,
  align,
  size,
  ...props
}: ContainerPropsWithVariants) => {
  const { styles } = useStyles(stylesheet, { align, size });

  return (
    <SafeAreaView style={[styles.root, style]} {...props}>
      {children}
    </SafeAreaView>
  );
};
