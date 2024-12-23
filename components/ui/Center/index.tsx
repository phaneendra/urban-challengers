import * as Slot from '@rn-primitives/slot';
import { SlottableViewProps, ViewRef } from '@rn-primitives/types';
import * as React from 'react';
import { View as RNView } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import { stylesheet } from './styles';

const Center = React.forwardRef<ViewRef, SlottableViewProps>(
  ({ asChild = false, style, ...props }, ref) => {
    const { styles } = useStyles(stylesheet);
    const Component = asChild ? Slot.View : RNView;
    return <Component style={[styles.root, style]} ref={ref} {...props} />;
  }
);
Center.displayName = 'Center';

export { Center };
