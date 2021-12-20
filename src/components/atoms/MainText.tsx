import { Color, colorPalette } from '@styles';
import compact from 'lodash/compact';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type DefinedTextChild = string | ReactElement<Text>;
type TextChild = DefinedTextChild | DefinedTextChild[] | undefined | null;
interface Props extends TextProps {
  children?: TextChild;
  /**
   * defaults to biscay2
   */
  color?: Color;
  /**
   * defaults to body1
   */
  fontType?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'body1Bold'
    | 'body1SemiBold';
  center?: boolean;
  underline?: boolean;
}

export const MainText = ({
  children,
  style,
  fontType,
  color: injectedColor,
  center,
  underline,
  ...rest
}: Props) => {
  if (!children) {
    return null;
  }

  const fontPropStyle = fontType
    ? styles[fontType] || styles.body1
    : styles.body1;
  const color = injectedColor
    ? colorPalette[injectedColor] || colorPalette.biscay2
    : colorPalette.biscay2;

  const centerStyle = center ? styles.center : undefined;
  const underlineStyle = underline ? styles.underline : undefined;

  const textStyles = StyleSheet.flatten(
    compact([fontPropStyle, centerStyle, underlineStyle, { color }, style]),
  );

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  heading1: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 40,
    lineHeight: 48,
  },
  heading2: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    lineHeight: 32,
  },
  heading3: {
    fontFamily: 'Signika-SemiBold',
    fontSize: 18,
    lineHeight: 30,
  },
  body1: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  body1Bold: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
  body1SemiBold: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 24,
  },
  body3: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
  },
});
