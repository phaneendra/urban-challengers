import { Svg, Path, SvgProps } from 'react-native-svg';

export const CycleIcon = (props: SvgProps) => (
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
    <Path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
    <Path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
