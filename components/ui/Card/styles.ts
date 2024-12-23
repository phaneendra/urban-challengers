import { createStyleSheet } from 'react-native-unistyles';
export const stylesheet = createStyleSheet((theme) => ({
  root: {
    variants: {
      size: {
        default: {
          padding: theme.spacings.md,
          borderRadius: theme.borderRadius.md,
        },
        xs: {
          padding: theme.spacings.xs,
          borderRadius: theme.borderRadius.xs,
        },
        sm: {
          padding: theme.spacings.sm,
          borderRadius: theme.borderRadius.sm,
        },
        md: {
          padding: theme.spacings.md,
          borderRadius: theme.borderRadius.md,
        },
        lg: {
          padding: theme.spacings.lg,
          borderRadius: theme.borderRadius.lg,
        },
        xl: {
          padding: theme.spacings['2xl'],
          borderRadius: theme.borderRadius.xl,
        },
      },
      variant: {
        default: {
          borderWidth: 1,
          borderColor: theme.colors.grayA[6],
          backgroundColor: theme.colors.panelSolid,
        },
        surface: {
          backgroundColor: theme.colors.panelTranslusent,
          borderWidth: 1,
          borderColor: theme.colors.grayA[6],
        },
        ghost: {
          backgroundColor: theme.colors.panelSolid,
        },
      },
    },
  },
}));
