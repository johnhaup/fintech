import { AbsoluteView, Indicators, MainText, Spacer } from '@atoms';
import { SCREEN_WIDTH } from '@constants';
import { colorPalette } from '@styles';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
} from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

interface Props {
  onButtonPress: () => void;
  scrollValue: Animated.SharedValue<number>;
}

export const InformationCard = ({ onButtonPress, scrollValue }: Props) => {
  const containerAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollValue.value,
      [0, SCREEN_WIDTH],
      [colorPalette.jacksonsPurple, colorPalette.white],
    ),
  }));

  const card1Opacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollValue.value,
      [0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
      [1, 0, 0],
    ),
  }));

  const card2Opacity = useAnimatedStyle(() => ({
    opacity: interpolate(
      scrollValue.value,
      [0, SCREEN_WIDTH / 2, SCREEN_WIDTH],
      [0, 0, 1],
    ),
  }));

  const pressableAnimatedStyles = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      scrollValue.value,
      [0, SCREEN_WIDTH],
      [colorPalette.white, colorPalette.biscay2],
    ),
  }));

  const buttonTextAnimatedStyles = useAnimatedStyle(() => ({
    color: interpolateColor(
      scrollValue.value,
      [0, SCREEN_WIDTH],
      [colorPalette.jacksonsPurple, colorPalette.white],
    ),
  }));

  const animatedIndex = useDerivedValue(() => {
    return scrollValue.value / SCREEN_WIDTH;
  }, [scrollValue.value]);

  return (
    <Animated.View style={[styles.container, containerAnimatedStyles]}>
      <Spacer height={32} />
      <Indicators numberOfIndicators={2} animatedIndex={animatedIndex} />
      <View style={styles.content}>
        <Animated.View style={card1Opacity}>
          <Spacer height={18} />
          <MainText fontType={'heading3'} color={'white'}>
            Transfer That Is Safe
          </MainText>
          <AbsoluteView></AbsoluteView>
          <Spacer height={8} />
          <MainText fontType={'body1'} color={'offWhite'}>
            You have nothing to be scared about, we got you covered.
          </MainText>
          <Spacer height={16} />
        </Animated.View>
        <AbsoluteView>
          <Animated.View style={card2Opacity}>
            <Spacer height={18} />
            <MainText fontType={'heading3'} color={'biscay2'}>
              Transfer Money With Ease
            </MainText>
            <AbsoluteView></AbsoluteView>
            <Spacer height={8} />
            <MainText fontType={'body1'} color={'astronaut'}>
              Making money is hard enough, we make transfering it easy enough.
            </MainText>
            <Spacer height={16} />
          </Animated.View>
        </AbsoluteView>
        <AnimatedPressable
          style={[styles.button, pressableAnimatedStyles]}
          onPress={onButtonPress}>
          <MainText fontType={'body2'} animatedStyle={buttonTextAnimatedStyles}>
            Start Banking
          </MainText>
        </AnimatedPressable>
        <Spacer safeBottom height={8} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 70,
    backgroundColor: colorPalette.jacksonsPurple,
    width: Math.round(SCREEN_WIDTH * 0.86),
    paddingHorizontal: 32,
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: colorPalette.white,
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
});
