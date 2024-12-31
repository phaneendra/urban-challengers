import { Svg, Path, SvgProps } from 'react-native-svg';

export const TrophyIcon = (props: SvgProps) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}>
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M8 21l8 0" />
    <Path d="M12 17l0 4" />
    <Path d="M7 4l10 0" />
    <Path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
    <Path d="M5 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
