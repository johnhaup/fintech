import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { colorPalette } from '../../styles';

interface Props extends SvgProps {
  color?: string;
  width?: number;
}

export const ProfileSvg = ({
  color = colorPalette.white,
  width = 56,
  ...rest
}: Props) => (
  <Svg
    width={width}
    height={Math.round((96 / 77) * width)}
    viewBox={'0 0 77 96'}
    {...rest}>
    <Path
      d="M31.978 96a30.923 30.923 0 0 0-3.872-.255 77.581 77.581 0 0 1-11.244-1.408C8.828 92.8 3.582 90.064 1.335 85.8A11.774 11.774 0 0 1 1.292 75c2.209-4.273 7.454-7.046 15.571-8.541a82.763 82.763 0 0 1 11.283-1.413 129.853 129.853 0 0 1 20.821 0 84.836 84.836 0 0 1 11.24 1.413c8.035 1.62 13.28 4.268 15.528 8.541a11.786 11.786 0 0 1 0 10.632c-2.248 4.273-7.285 7.089-15.61 8.541a80.785 80.785 0 0 1-11.244 1.452A96.067 96.067 0 0 1 38.345 96ZM13.241 25.92C13.241 11.6 24.555 0 38.514 0s25.273 11.6 25.273 25.92S52.47 51.845 38.514 51.845 13.241 40.237 13.241 25.92Z"
      fill={color}
    />
  </Svg>
);
