import type { IconProps as TablerIconProps } from '@tabler/icons-react-native';
import type { ReactElement } from 'react';
import type { SvgProps } from 'react-native-svg';

export type IconProps = {
  SvgIcon: (props: SvgProps) => ReactElement;
} & TablerIconProps;

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE_WIDTH = 2;
const DEFAULT_STROKE_COLOR = 'currentColor';

export const Icon = ({
  SvgIcon,
  size = DEFAULT_SIZE,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  width,
  height,
  color = DEFAULT_STROKE_COLOR,
  ...rest
}: IconProps) => {
  return <SvgIcon width={size} height={size} stroke={color} strokeWidth={strokeWidth} {...rest} />;
};
