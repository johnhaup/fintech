import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/measurements';

export const FullScreenView = ({ style = {}, ...rest }: ViewProps) => {
  const viewStyles = StyleSheet.flatten([styles.container, style]);

  return <View style={viewStyles} {...rest} />;
};

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
