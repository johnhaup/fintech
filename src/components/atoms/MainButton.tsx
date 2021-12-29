import { Color, colorPalette } from '@styles';
import last from 'lodash/last';
import pick from 'lodash/pick';
import React from 'react';
import {
  Pressable,
  PressableStateCallbackType,
  StyleSheet,
} from 'react-native';
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

  const textColor = textButtonTypeMap[buttonTypeKey];
  const fontType = rest.smallDark ? 'body2' : 'body1SemiBold';

  return (
    <Pressable style={style} onPress={onPress} testID={testID}>
      <MainText fontType={fontType} color={textColor}>
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
    alignSelf: 'flex-start',
  },
  secondary: {
    borderWidth: 1,
    borderColor: colorPalette.eastBay,
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  midLight: {
    backgroundColor: colorPalette.white,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  midDark: {
    backgroundColor: colorPalette.biscay2,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  smallDark: {
    backgroundColor: colorPalette.biscay,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
});
