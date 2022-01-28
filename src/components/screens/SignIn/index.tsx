import { MainButton, MainText, Spacer } from '@atoms';
import { colorPalette } from '@styles';
import React, { forwardRef, useRef, useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TextInputProps,
} from 'react-native';

const MainTextInput = forwardRef<
  TextInput | null,
  Omit<TextInputProps, 'style'>
>((props, ref) => {
  const [focused, setFocused] = useState(false);

  const dynamicColor = focused ? colorPalette.java : colorPalette.shipCove;

  return (
    <TextInput
      ref={ref}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      selectionColor={colorPalette.java}
      placeholderTextColor={colorPalette.eastBay}
      autoCorrect={false}
      autoCapitalize="none"
      style={{
        alignSelf: 'stretch',
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: dynamicColor,
        color: dynamicColor,
        paddingHorizontal: 16,
      }}
      {...props}
    />
  );
});

export const SignIn = () => {
  const emailInput = useRef<TextInput | null>(null);
  const passwordInput = useRef<TextInput | null>(null);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Image
        source={require('../../../../assets/images/fintechIcon.png')}
        style={styles.logo}
      />
      <MainText color="white" fontType="heading2">
        Sign In Below
      </MainText>
      <Spacer height={32} />
      <MainTextInput
        ref={emailInput}
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => {
          passwordInput?.current?.focus();
        }}
        placeholder="Enter you username"
      />
      <Spacer height={16} />
      <MainTextInput
        ref={passwordInput}
        returnKeyType="done"
        keyboardType="email-address"
        placeholder="Enter you password"
        secureTextEntry={true}
      />
      <Spacer height={16} />
      <MainButton text="Submit" onPress={() => null} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.blueZodiac2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    height: 120,
    width: 120,
  },
});
