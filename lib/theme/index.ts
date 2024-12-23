import { blackA } from './tokens/colors.blackA';
import { grayDarkA, grayDark } from './tokens/colors.dark';
import { gray, grayA } from './tokens/colors.light';
import { whiteA } from './tokens/colors.whiteA';
import { borderRadiuses } from './tokens/radius';
import { spacings } from './tokens/space';
import {
  fontFamilies,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
} from './tokens/typography';

export const lightTheme = {
  name: 'light',
  colorScheme: 'light',
  containerSizes: {
    sm: 448,
    md: 688,
    lg: 880,
    xl: 1136,
  },
  colors: {
    accent: {
      ...blackA,
    },
    accentSurface: '',
    accentIndicator: blackA[9],
    accentTrack: blackA[9],
    accentContrast: 'white',
    accentA: {
      ...blackA,
    },
    gray: {
      ...gray,
    },
    graySurface: '#ffffffcc',
    grayIndicator: gray[9],
    grayTrack: gray[9],
    grayContrast: 'white',
    grayA: {
      ...grayA,
    },
    background: 'white',
    overlay: blackA[6],
    surface: 'rgba(255, 255, 255, 0.85)',
    panelSolid: 'white',
    panelTranslusent: 'rgba(255, 255, 255, 0.7)',
    transparent: 'rgb(0 0 0 / 0)',
  },
  borderRadius: borderRadiuses(1),
  spacings,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
};

export const darkTheme = {
  name: 'dark',
  colorScheme: 'dark',
  containerSizes: {
    sm: 448,
    md: 688,
    lg: 880,
    xl: 1136,
  },
  colors: {
    accent: {
      ...whiteA,
    },
    accentSurface: '',
    accentIndicator: '',
    accentTrack: '',
    accentContrast: '',
    accentA: {
      ...whiteA,
    },
    gray: {
      ...grayDark,
    },
    graySurface: '#21212180',
    grayIndicator: gray[9],
    grayTrack: gray[9],
    grayContrast: 'white',
    grayA: {
      ...grayDarkA,
    },

    background: grayDark[1],
    overlay: blackA[8],
    surface: 'rgba(0, 0, 0, 0.25)',
    panelSolid: grayDark[2],
    panelTranslusent: grayDarkA[2],
    transparent: 'rgb(0 0 0 / 0)',
  },
  borderRadius: borderRadiuses(1),
  spacings,
  fontFamilies,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
};
