import { last } from 'lodash';
import pick from 'lodash/pick';
import React from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
} from 'react-native';
import { Color, colorPalette } from '../../styles/colorPalette';
import { MainText } from './MainText';

const BUTTON_TYPES = [
  'primary',
  'secondary',
  'midLight',
  'midDark',
  'smallDark',
] as const;
type ButtonTypeTuple = typeof BUTTON_TYPES;
type ButtonType = ButtonTypeTuple[number];
type ButtonTypeProps = {
  [key in ButtonType]?: boolean;
};

const textButtonTypeMap: { [key in ButtonType]: Color } = {
  primary: 'white',
  secondary: 'eastBay',
  midLight: 'biscay2',
  midDark: 'white',
  smallDark: 'royalBlue',
};

type ButtonProps = {
  text: string;
  onPress: () => void;
  testID?: string;
};

type Props = ButtonProps & ButtonTypeProps;

export const MainButton = ({
  text,
  onPress,
  testID = 'main-button',
  ...rest
}: Props) => {
  const buttonTypeKeys = ['primary', ...Object.keys(pick(rest, BUTTON_TYPES))];
  const buttonTypeKey = last(buttonTypeKeys) as ButtonType;

  if (buttonTypeKeys.length > 2) {
    console.warn(
      'More than one button type supplied in MainButton.  Only the last type supplied will be used.',
    );
  }

  const style = ({ pressed }: PressableStateCallbackType) => {
    const fontPropStyle = styles[buttonTypeKey];
    const opacity = pressed ? 0.8 : 1;
    const transform = [{ scale: pressed ? 0.985 : 1 }];
    return StyleSheet.flatten([fontPropStyle, { opacity, transform }]);
  };

  const textColorProps = { [textButtonTypeMap[buttonTypeKey]]: true };
  const textFontProps = rest.smallDark
    ? { body2: true }
    : { body1SemiBold: true };

  return (
    <Pressable style={style} onPress={onPress} testID={testID}>
      <MainText {...textFontProps} {...textColorProps}>
        {text}
      </MainText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colorPalette.radicalRed,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  secondary: {
    borderWidth: 1,
    borderColor: colorPalette.eastBay,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 10,
    alignSelf: 'center',
  },
  midLight: {
    backgroundColor: colorPalette.white,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  midDark: {
    backgroundColor: colorPalette.biscay2,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
  smallDark: {
    backgroundColor: colorPalette.biscay,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'center',
  },
});
