import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

import TabBarButton from './tabbar-button';

const notAllowedRoutes = ['+not-found', '+sitemap', 'settings'];

const BottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label: string =
          typeof options.tabBarLabel === 'string' && options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        if (notAllowedRoutes.includes(route.name)) return null;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? theme.colors.accent[5] : theme.colors.grayA[9]}
            label={label}
          />
        );
      })}
    </View>
  );
};

export const stylesheet = createStyleSheet((theme) => ({
  tabbar: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.panelSolid,
    marginHorizontal: theme.spacings.lg,
    paddingVertical: theme.spacings.sm,
    borderRadius: theme.borderRadius.full,
    borderCurve: 'continuous',
    boxShadow: theme.shadows.shadow2(theme),
    // shadowColor: theme.colors.grayA[6],
    // shadowOffset: { width: 0, height: 10 },
    // shadowRadius: 10,
    // shadowOpacity: 0.1,
    // elevation: 10,
  },
}));

export { BottomTabBar };
