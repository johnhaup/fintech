import { AbsoluteView, FullScreenView } from '@atoms';
import { InformationCard, OnboardingOne, OnboardingTwo } from '@molecules';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { colorPalette } from '../../styles';

export const Onboarding = () => {
  const scrollValue = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollValue.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        horizontal
        pagingEnabled>
        <FullScreenView />
        <FullScreenView />
      </Animated.ScrollView>
      <AbsoluteView pointerEvents="none">
        <OnboardingOne animatedValue={scrollValue} />
      </AbsoluteView>
      <AbsoluteView pointerEvents="none">
        <OnboardingTwo animatedValue={scrollValue} />
      </AbsoluteView>
      <AbsoluteView bottom left>
        <InformationCard onButtonPress={() => null} scrollValue={scrollValue} />
      </AbsoluteView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorPalette.blueZodiac2,
  },
});
