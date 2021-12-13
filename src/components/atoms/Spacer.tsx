import pickBy from 'lodash/pickBy';
import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';

interface Props extends ViewProps {
  flex?: boolean | number;
  height?: number;
  h?: number;
  width?: number;
  w?: number;
  style?: ViewStyle;
}

export const Spacer = ({
  flex: injectedFlex,
  height: propsHeight,
  h,
  width: propsWidth,
  w,
  style = {},
  ...rest
}: Props) => {
  const flex = injectedFlex
    ? typeof injectedFlex === 'number'
      ? injectedFlex
      : 1
    : undefined;
  const width = w && propsWidth ? w + propsWidth : w ? w : propsWidth;
  const height = h && propsHeight ? h + propsHeight : h ? h : propsHeight;
  const layoutProps = { flex, height, width };
  const cleanedLayoutProps = pickBy(
    layoutProps,
    prop => prop !== undefined,
  ) as ViewStyle;
  const spacerStyles = StyleSheet.flatten([cleanedLayoutProps, style]);

  return <View style={spacerStyles} pointerEvents={'box-none'} {...rest} />;
};
