import { colorPalette } from '@styles';
import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  color?: string;
  height?: number;
}

export const ExclamationPointSvg = ({
  color = colorPalette.sunsetOrange,
  height = 13,
  ...rest
}: Props) => (
  <Svg height={height} width={Math.round((4 / 13) * height)} {...rest}>
    <Path
      d="M3.152 8.206H1.204L.424 0h3.507l-.78 8.206ZM2.178 12.188c.828 0 1.5-.692 1.5-1.544 0-.853-.672-1.544-1.5-1.544s-1.5.691-1.5 1.544c0 .852.672 1.544 1.5 1.544Z"
      fill={color}
    />
  </Svg>
);
