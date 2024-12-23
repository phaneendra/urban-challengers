import * as Slot from '@rn-primitives/slot';
import { SlottableTextProps, TextRef } from '@rn-primitives/types';
import * as React from 'react';
import { Text as RNText } from 'react-native';
import { useStyles, type UnistylesVariants } from 'react-native-unistyles';

import { stylesheet } from './styles';

type ComponentVariants = UnistylesVariants<typeof stylesheet>;
type TextPropsWithVariants = SlottableTextProps & ComponentVariants;

const TextClassContext = React.createContext<TextPropsWithVariants | undefined>(undefined);

// TODO: add support for truncate and trim
const Text = React.forwardRef<TextRef, TextPropsWithVariants>(
  ({ style, size, color, weight, align, highContrast, asChild = false, ...props }, ref) => {
    const textStyles = React.useContext(TextClassContext);

    const { styles } = useStyles(stylesheet, {
      size,
      color,
      weight,
      align,
      highContrast,
    });

    const Component = asChild ? Slot.Text : RNText;
    return (
      <Component
        style={[styles.root, styles.highContrastStyle(highContrast, color), textStyles]}
        ref={ref}
        {...props}
      />
    );
  }
);
Text.displayName = 'Text';

export { Text, TextClassContext };
