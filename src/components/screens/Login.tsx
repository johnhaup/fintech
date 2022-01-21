import { colorPalette } from '@styles';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MainText } from '../atoms';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/fintechIcon.png')}
        style={styles.logo}
      />
      <MainText color="white" fontType="heading2">
        Sign In Below
      </MainText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.blueZodiac2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 120,
    width: 120,
  },
});
