import * as Slot from '@rn-primitives/slot';
import { SlottableViewProps, ViewRef } from '@rn-primitives/types';
import * as React from 'react';
import { View as RNView } from 'react-native';
import { useStyles, type UnistylesVariants } from 'react-native-unistyles';

import { stylesheet } from './styles';

type ComponentVariants = UnistylesVariants<typeof stylesheet>;
type HStackPropsWithVariants = SlottableViewProps & ComponentVariants;

const HStack = React.forwardRef<ViewRef, HStackPropsWithVariants>(
  ({ asChild = false, style, gap, reversed, ...props }, ref) => {
    const { styles } = useStyles(stylesheet, { gap, reversed });
    const Component = asChild ? Slot.View : RNView;
    return <Component style={[styles.root, style]} ref={ref} {...props} />;
  }
);
HStack.displayName = 'HStack';

export { HStack };
