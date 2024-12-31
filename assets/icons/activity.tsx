import { Svg, Path, SvgProps } from 'react-native-svg';

export const ActivityIcon = (props: SvgProps) => (
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
    <Path d="M3 12h4l3 8l4 -16l3 8h4" />
  </Svg>
);
