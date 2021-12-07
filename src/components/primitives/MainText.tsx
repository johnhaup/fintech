import { last } from 'lodash';
import compact from 'lodash/compact';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import React, { ReactElement } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Color, colorPalette, COLOR_PALETTE } from '../../styles/colorPalette';

type DefinedTextChild = string | ReactElement<Text>;
type TextChild = DefinedTextChild | DefinedTextChild[] | undefined | null;
type ChildrenProp = {
  children?: TextChild;
};

const DECORATION_PROPS = ['center', 'underline'] as const;
type DecorationTuple = typeof DECORATION_PROPS;
type DecorationProp = DecorationTuple[number];
type DecorationProps = {
  [key in DecorationProp]?: boolean;
};

const FONT_PROPS = [
  'heading1',
  'heading2',
  'heading3',
  'body1',
  'body2',
  'body3',
  'body1Bold',
  'body1SemiBold',
] as const;
type FontPropsTuple = typeof FONT_PROPS;
type FontProp = FontPropsTuple[number];
type FontProps = {
  [key in FontProp]?: boolean;
};

type ColorProps = {
  [key in Color]?: boolean;
};

type Props = ChildrenProp &
  DecorationProps &
  ColorProps &
  FontProps &
  TextProps;

export const MainText = ({ children, style, ...rest }: Props) => {
  if (!children) {
    return null;
  }

  const decorationPropKeys = Object.keys(
    pick(rest, DECORATION_PROPS),
  ) as DecorationProp[];
  const decorationPropStyles = decorationPropKeys.map(k => styles[k]);

  const fontPropKeys = ['body1', ...Object.keys(pick(rest, FONT_PROPS))];
  const fontPropKey = last(fontPropKeys) as FontProp;
  const fontPropStyle = styles[fontPropKey];

  if (fontPropKeys.length > 2) {
    console.warn(
      'More than one font prop supplied in MainText.  Only the last prop supplied will be used.',
    );
  }

  const colorKeys = ['biscay2', ...Object.keys(pick(rest, COLOR_PALETTE))];
  const colorKey = last(colorKeys) as Color;
  const color = colorPalette[colorKey];

  if (colorKeys.length > 2) {
    console.warn(
      'More than one color prop supplied in MainText.  Only the last color supplied will be used.',
    );
  }

  const textStyles = StyleSheet.flatten(
    compact([decorationPropStyles, fontPropStyle, { color }, style]),
  );

  const textComponentProps: Omit<TextProps, 'style'> = omit(rest, [
    ...DECORATION_PROPS,
    ...FONT_PROPS,
    ...COLOR_PALETTE,
  ]);

  return (
    <Text style={textStyles} {...textComponentProps}>
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
