import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { useEffect } from 'react';
import { useStyles, createStyleSheet } from 'react-native-unistyles';

import { ActivityIcon } from '@/assets/icons/activity';
import { CycleIcon } from '@/assets/icons/cycle';
import { SettingsIcon } from '@/assets/icons/settings';
import { TrophyIcon } from '@/assets/icons/trophy';
import { UserIcon } from '@/assets/icons/user';
import { wp } from '@/lib/utils/scaling';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);

  const { styles, theme } = useStyles(stylesheet);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        icon={() => (
          <CycleIcon
            stroke={pathname === '/home' ? theme.colors.accentContrast : theme.colors.gray[12]}
          />
        )}
        label="Home"
        labelStyle={[
          styles.drawerLabelStyle,
          { color: pathname === '/home' ? theme.colors.accentContrast : theme.colors.gray[12] },
        ]}
        style={{
          backgroundColor: pathname === '/home' ? theme.colors.accent[5] : theme.colors.gray[3],
        }}
        onPress={() => router.push('/(main)/(tabs)/home')}
        {...props}
      />
      <DrawerItem
        icon={() => (
          <TrophyIcon
            stroke={
              pathname === '/challenges' ? theme.colors.accentContrast : theme.colors.gray[12]
            }
          />
        )}
        label="Challenges"
        labelStyle={[
          styles.drawerLabelStyle,
          {
            color: pathname === '/challenges' ? theme.colors.accentContrast : theme.colors.gray[12],
          },
        ]}
        style={{
          backgroundColor:
            pathname === '/challenges' ? theme.colors.accent[5] : theme.colors.gray[3],
        }}
        onPress={() => router.push('/(main)/(tabs)/challenges')}
      />
      <DrawerItem
        icon={() => (
          <ActivityIcon
            stroke={
              pathname === '/activities' ? theme.colors.accentContrast : theme.colors.gray[12]
            }
          />
        )}
        label="Activities"
        labelStyle={[
          styles.drawerLabelStyle,
          {
            color: pathname === '/activities' ? theme.colors.accentContrast : theme.colors.gray[12],
          },
        ]}
        style={{
          backgroundColor:
            pathname === '/activities' ? theme.colors.accent[5] : theme.colors.gray[3],
        }}
        onPress={() => router.push('/(main)/(tabs)/activities')}
      />
      <DrawerItem
        icon={() => (
          <UserIcon
            stroke={pathname === '/profile' ? theme.colors.accentContrast : theme.colors.gray[12]}
          />
        )}
        label="Profile"
        labelStyle={[
          styles.drawerLabelStyle,
          { color: pathname === '/profile' ? theme.colors.accentContrast : theme.colors.gray[12] },
        ]}
        style={{
          backgroundColor: pathname === '/profile' ? theme.colors.accent[5] : theme.colors.gray[3],
        }}
        onPress={() => router.push('/(main)/(tabs)/profile')}
      />
      <DrawerItem
        icon={() => (
          <SettingsIcon
            stroke={pathname === '/settings' ? theme.colors.accentContrast : theme.colors.gray[12]}
          />
        )}
        label="Settings"
        labelStyle={[
          styles.drawerLabelStyle,
          { color: pathname === '/settings' ? theme.colors.accentContrast : theme.colors.gray[12] },
        ]}
        style={{
          backgroundColor: pathname === '/settings' ? theme.colors.accent[5] : theme.colors.gray[3],
        }}
        onPress={() => router.push('/(main)/(tabs)/settings')}
      />
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <Drawer
      screenOptions={{
        drawerHideStatusBarOnOpen: false,
        drawerStyle: {
          backgroundColor: theme.colors.panelSolid,
          width: wp('60'),
          borderTopRightRadius: theme.borderRadius.none,
          borderBottomRightRadius: theme.borderRadius.none,
        },
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
};

export const stylesheet = createStyleSheet((theme) => ({
  drawerLabelStyle: {
    color: theme.colors.gray[12],
    marginLeft: -theme.spacings.xs,
  },
}));

export default DrawerLayout;
