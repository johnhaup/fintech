import { Color, colorPalette } from '@styles';
import { ProfileSvg } from '@svgs';
import last from 'lodash/last';
import pick from 'lodash/pick';
import random from 'lodash/random';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const profileColorOptions: Color[] = [
  'radicalRed',
  'swissCoffee',
  'royalBlue',
  'butterflyBush',
  'shipCove',
  'java',
  'sunsetOrange',
  'seaBuckthorn',
  'mySin',
];

type ComponentProps = { color?: string; testID?: string };

const SIZE_PROPS = ['small', 'medium', 'large', 'profile'] as const;
type SizeTuple = typeof SIZE_PROPS;
type SizeProp = SizeTuple[number];
type SizeProps = {
  [key in SizeProp]?: boolean;
};

const svgSizeMap: { [key in SizeProp]: number } = {
  small: 20,
  medium: 26,
  large: 40,
  profile: 56,
};

type Props = ComponentProps & SizeProps;

export const ProfileDefaultAvatar = ({
  color,
  testID = 'profileDefaultAvatar',
  ...rest
}: Props) => {
  const colorIndex = random(profileColorOptions.length - 1);
  const backgroundColor =
    color || colorPalette[profileColorOptions[colorIndex]];

  const sizePropsKeys = ['medium', ...Object.keys(pick(rest, SIZE_PROPS))];
  const sizePropKey = last(sizePropsKeys) as SizeProp;
  const sizePropStyles = styles[sizePropKey];

  if (sizePropsKeys.length > 2) {
    console.warn(
      'More than one size prop supplied in ProfileDefaultAvatar.  Only the last prop supplied will be used.',
    );
  }

  const style = StyleSheet.flatten([
    styles.base,
    sizePropStyles,
    { backgroundColor },
  ]);

  return (
    <View style={style} testID={testID}>
      <ProfileSvg width={svgSizeMap[sizePropKey]} />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colorPalette.white,
  },
  small: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  medium: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  large: {
    height: 72,
    width: 72,
    borderRadius: 36,
  },
  profile: {
    height: 96,
    width: 96,
    borderRadius: 48,
  },
});
