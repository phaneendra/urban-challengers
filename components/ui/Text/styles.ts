import { createStyleSheet } from 'react-native-unistyles';
type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export const stylesheet = createStyleSheet((theme) => ({
  root: {
    fontFamily: theme.fontFamilies.paragraph.light,

    variants: {
      size: {
        default: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.md,
          letterSpacing: theme.letterSpacings.md,
        },
        xs: {
          fontSize: theme.fontSizes.xs,
          lineHeight: theme.lineHeights.xs,
          letterSpacing: theme.letterSpacings.xs,
        },
        sm: {
          fontSize: theme.fontSizes.sm,
          lineHeight: theme.lineHeights.sm,
          letterSpacing: theme.letterSpacings.sm,
        },
        md: {
          fontSize: theme.fontSizes.md,
          lineHeight: theme.lineHeights.md,
          letterSpacing: theme.letterSpacings.md,
        },
        lg: {
          fontSize: theme.fontSizes.lg,
          lineHeight: theme.lineHeights.lg,
          letterSpacing: theme.letterSpacings.lg,
        },
        xl: {
          fontSize: theme.fontSizes.xl,
          lineHeight: theme.lineHeights.xl,
          letterSpacing: theme.letterSpacings.xl,
        },
        '2xl': {
          fontSize: theme.fontSizes['2xl'],
          lineHeight: theme.lineHeights['2xl'],
          letterSpacing: theme.letterSpacings['2xl'],
        },
        '3xl': {
          fontSize: theme.fontSizes['3xl'],
          lineHeight: theme.lineHeights['3xl'],
          letterSpacing: theme.letterSpacings['3xl'],
        },
        '4xl': {
          fontSize: theme.fontSizes['4xl'],
          lineHeight: theme.lineHeights['4xl'],
          letterSpacing: theme.letterSpacings['4xl'],
        },
        '5xl': {
          fontSize: theme.fontSizes['5xl'],
          lineHeight: theme.lineHeights['5xl'],
          letterSpacing: theme.letterSpacings['5xl'],
        },
      },
      color: {
        accent: {
          color: theme.colors.accentA[11],
        },
        default: {
          color: theme.colors.gray[12],
        },
      },
      weight: {
        default: {
          fontWeight: theme.fontWeights.regular as FontWeightType,
        },
        light: {
          fontWeight: theme.fontWeights.light as FontWeightType,
        },
        regular: {
          fontWeight: theme.fontWeights.regular as FontWeightType,
        },
        medium: {
          fontWeight: theme.fontWeights.medium as FontWeightType,
        },
        bold: {
          fontWeight: theme.fontWeights.bold as FontWeightType,
        },
      },
      align: {
        default: {
          textAlign: 'left',
        },
        left: {
          textAlign: 'left',
        },
        center: {
          textAlign: 'center',
        },
        right: {
          textAlign: 'right',
        },
        justify: {
          textAlign: 'justify',
        },
      },
      highContrast: {
        true: {
          color: theme.colors.gray[12],
        },
      },
    },
  },

  highContrastStyle: (color, highContrast) => {
    if (highContrast && color === 'accent') {
      return {
        color: theme.colors.accent[12],
      };
    }

    if (highContrast && color === 'default') {
      return {
        color: theme.colors.gray[12],
      };
    }
    return {};
  },
}));
