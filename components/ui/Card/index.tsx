import * as Slot from '@rn-primitives/slot';
import { SlottableViewProps, ViewRef } from '@rn-primitives/types';
import * as React from 'react';
import { View as RNView } from 'react-native';
import { useStyles, type UnistylesVariants } from 'react-native-unistyles';

import { stylesheet } from './styles';

type ComponentVariants = UnistylesVariants<typeof stylesheet>;
type CardPropsWithVariants = SlottableViewProps & ComponentVariants;

const Card = React.forwardRef<ViewRef, CardPropsWithVariants>(
  ({ asChild = false, style, size, variant, ...props }, ref) => {
    const { styles } = useStyles(stylesheet, { size, variant });
    const Component = asChild ? Slot.View : RNView;
    return <Component ref={ref} style={[styles.root, style]} {...props} />;
  }
);
Card.displayName = 'Card';

export { Card };
