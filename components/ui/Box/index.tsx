import * as Slot from '@rn-primitives/slot';
import { SlottableViewProps, ViewRef } from '@rn-primitives/types';
import * as React from 'react';
import { View as RNView } from 'react-native';

const Box = React.forwardRef<ViewRef, SlottableViewProps>(({ asChild = false, ...props }, ref) => {
  const Component = asChild ? Slot.View : RNView;
  return <Component ref={ref} {...props} />;
});
Box.displayName = 'Box';

export { Box };
