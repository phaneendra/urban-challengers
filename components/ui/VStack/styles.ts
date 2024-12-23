import { createStyleSheet } from 'react-native-unistyles';
export const stylesheet = createStyleSheet((theme) => ({
  root: {
    flexDirection: 'column',
    variants: {
      gap: {
        xs: {
          gap: theme.spacings.xs,
        },
        sm: {
          gap: theme.spacings.sm,
        },
        md: {
          gap: theme.spacings.md,
        },
        lg: {
          gap: theme.spacings.lg,
        },
        xl: {
          gap: theme.spacings.xl,
        },
        '2xl': {
          gap: theme.spacings['2xl'],
        },
        '3xl': {
          gap: theme.spacings['3xl'],
        },
        '4xl': {
          gap: theme.spacings['4xl'],
        },
      },
      reversed: {
        true: {
          flexDirection: 'column-reverse',
        },
      },
    },
  },
}));
