import { UnistylesTheme } from 'react-native-unistyles';
type shadowType = {
  shadowNone: (theme: UnistylesTheme) => string;
  shadow1: (theme: UnistylesTheme) => string;
  shadow2: (theme: UnistylesTheme) => string;
  shadow3: (theme: UnistylesTheme) => string;
  shadow4: (theme: UnistylesTheme) => string;
  shadow5: (theme: UnistylesTheme) => string;
  shadow6: (theme: UnistylesTheme) => string;
};
export const shadows: shadowType = {
  shadowNone: (theme: UnistylesTheme) => 'none',
  shadow1: (theme: UnistylesTheme) => `
      inset 0 0 0 1px ${theme.colors.grayA[5]},
      inset 0 1.5px 2px 0 ${theme.colors.grayA[2]},
      inset 0 1.5px 2px 0 ${theme.colors.blackA[2]}`,
  shadow2: (theme: UnistylesTheme) => `
      0 0 0 1px ${theme.colors.grayA[3]},
      0 0 0 0.5px ${theme.colors.blackA[1]},
      0 1px 1px 0 ${theme.colors.grayA[2]},
      0 2px 1px -1px ${theme.colors.blackA[1]},
      0 1px 3px 0 ${theme.colors.blackA[1]}`,
  shadow3: (theme: UnistylesTheme) => `0 0 0 1px ${theme.colors.grayA[3]},
    0 2px 3px -2px ${theme.colors.grayA[3]},
    0 3px 12px -4px ${theme.colors.blackA[2]},
    0 4px 16px -8px ${theme.colors.blackA[2]}`,
  shadow4: (theme: UnistylesTheme) => `
    0 0 0 1px ${theme.colors.grayA[3]},
    0 8px 40px ${theme.colors.blackA[1]},
    0 12px 32px -16px ${theme.colors.grayA[3]}`,
  shadow5: (theme: UnistylesTheme) => `
    0 0 0 1px ${theme.colors.grayA[3]},
    0 12px 60px ${theme.colors.blackA[3]},
    0 12px 32px -16px ${theme.colors.grayA[5]}`,
  shadow6: (theme: UnistylesTheme) => `
    0 0 0 1px ${theme.colors.grayA[3]},
    0 12px 60px ${theme.colors.blackA[3]},
    0 16px 64px ${theme.colors.grayA[2]},
    0 16px 36px -20px ${theme.colors.grayA[7]}`,
};
