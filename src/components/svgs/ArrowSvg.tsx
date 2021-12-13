import { colorPalette } from '@styles';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
  size?: number;
  left?: boolean;
}

export const ArrowSvg = ({
  color = colorPalette.white,
  size = 10,
  left = false,
  ...rest
}: Props) => (
  <Svg height={size} width={size} viewBox="0 0 512 512" {...rest}>
    <Path
      d="M479.63 238.27c19.37 19.73 19.37 51.59 0 70.93l-188 188a50 50 0 0 1-70.94 0l-188-188c-19.69-19.35-19.69-51.25 0-70.94 27.15-25.46 101.82 30.55 169 56.68V33.26A33.32 33.32 0 0 1 234.91 0h50.23a33.32 33.32 0 0 1 33.26 33.26v258.29c63.48-26.81 131.36-76.36 161.23-53.28Z"
      fill={color}
      rotation={left ? 90 : 270}
      origin={'256, 256'}
    />
  </Svg>
);
