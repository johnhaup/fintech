import { compact, get, isEmpty } from 'lodash';
import React, { ReactElement } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

type DefinedChild = ReactElement<View | Text | Image>;
type Children = DefinedChild | DefinedChild[] | undefined | null;

interface Props {
  children?: Children;
  top?: boolean | number;
  bottom?: boolean | number;
  left?: boolean | number;
  right?: boolean | number;
  center?: boolean;
  style?: ViewStyle | ViewStyle[];
  pointerEvents?: 'auto' | 'box-none' | 'none' | 'box-only';
  testID?: string;
}

const positionProps = ['top', 'bottom', 'left', 'right'];

export const AbsoluteView = ({
  children,
  pointerEvents = 'box-none',
  center,
  style,
  testID = 'absolute_view',
  ...rest
}: Props) => {
  const positionProperties = positionProps.reduce((a, c) => {
    const value = get(rest, c, undefined);
    if (value) {
      return {
        ...a,
        [c]: typeof value === 'number' ? value : 0,
      };
    }
    return a;
  }, {});
  const centerStyles = center ? styles.center : null;

  const containerStyle = StyleSheet.flatten(
    isEmpty(positionProperties)
      ? compact([StyleSheet.absoluteFill, centerStyles, style])
      : compact([styles.base, positionProperties, centerStyles, style]),
  );

  return (
    <View style={containerStyle} pointerEvents={pointerEvents} testID={testID}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: { position: 'absolute' },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
