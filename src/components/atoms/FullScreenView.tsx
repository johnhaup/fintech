import React from 'react';
import { Dimensions, StyleSheet, View, ViewProps } from 'react-native';

export const FullScreenView = ({ style = {}, ...rest }: ViewProps) => {
  const viewStyles = StyleSheet.flatten([styles.container, style]);

  return <View style={viewStyles} {...rest} />;
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});
