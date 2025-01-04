import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import {
  IconBike,
  IconTrophy,
  IconActivity,
  IconUser,
  IconProps,
} from '@tabler/icons-react-native';
import React, { ReactElement, useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

export const icons: { [k: string]: (props: IconProps) => ReactElement } = {
  home: (props: IconProps) => <IconBike size={26} {...props} />,
  challenges: (props: IconProps) => <IconTrophy size={26} {...props} />,
  activities: (props: IconProps) => <IconActivity size={26} {...props} />,
  profile: (props: IconProps) => <IconUser size={26} {...props} />,
};

export type TabBarButtonProps = {
  isFocused: boolean;
  label: string;
  routeName: string;
  color: string;
} & Omit<BottomTabBarButtonProps, 'children'>;

const TabBarButton = (props: TabBarButtonProps) => {
  const { isFocused, label, routeName, color } = props;
  const { styles, theme } = useStyles(stylesheet);

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, {
      duration: 350,
    });
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      // styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      // styles
      opacity,
    };
  });

  const tabBarIcon = icons[routeName];

  return (
    <Pressable {...props} style={styles.root}>
      <Animated.View style={[animatedIconStyle]}>{tabBarIcon({ color })}</Animated.View>
      <Animated.Text
        style={[
          {
            color,
            fontSize: theme.fontSizes.xs,
          },
          animatedTextStyle,
        ]}>
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
}));

export default TabBarButton;
