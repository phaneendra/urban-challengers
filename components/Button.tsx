import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

type ButtonProps = {
  title?: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  const { theme } = useStyles();

  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      style={[theme.components.button, touchableProps.style]}>
      <Text style={theme.components.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});
