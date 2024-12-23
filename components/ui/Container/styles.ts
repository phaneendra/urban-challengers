import { createStyleSheet } from 'react-native-unistyles';
export const stylesheet = createStyleSheet((theme) => ({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.background,
    padding: theme.spacings.lg, // 24 spcaing
    variants: {
      align: {
        default: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        center: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        left: {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
        right: {
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
      },
      size: {
        sm: {
          maxWidth: theme.containerSizes.sm,
        },
        md: {
          maxWidth: theme.containerSizes.md,
        },
        lg: {
          maxWidth: theme.containerSizes.lg,
        },
        xl: {
          maxWidth: theme.containerSizes.xl,
        },
      },
    },
  },
}));
