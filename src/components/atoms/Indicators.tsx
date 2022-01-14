import { Spacer } from '@atoms';
import { colorPalette } from '@styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Indicator = ({
  lastIndicator,
  animatedIndex,
  index,
  testID,
}: {
  lastIndicator: boolean;
  animatedIndex: Animated.SharedValue<number>;
  index: number;
  testID: string;
}) => {
  const indicatorAnimatedStyles = useAnimatedStyle(() => {
    const baseInputRange = [index - 1, index, index + 1];
    const baseWidthOutputRange = [16, 32, 16];
    const baseColorOutputRange = [
      colorPalette.paleSun,
      colorPalette.mySin,
      colorPalette.paleSun,
    ];

    const inputRange = lastIndicator
      ? baseInputRange.slice(0, 2)
      : index === 0
      ? baseInputRange.slice(-2)
      : baseInputRange;

    const widthOutputRange = lastIndicator
      ? baseWidthOutputRange.slice(0, 2)
      : index === 0
      ? baseWidthOutputRange.slice(-2)
      : baseWidthOutputRange;

    const colorOutputRange = lastIndicator
      ? baseColorOutputRange.slice(0, 2)
      : index === 0
      ? baseColorOutputRange.slice(-2)
      : baseColorOutputRange;

    return {
      width: interpolate(animatedIndex.value, inputRange, widthOutputRange),
      backgroundColor: interpolateColor(
        animatedIndex.value,
        inputRange,
        colorOutputRange,
      ),
    };
  });

  return (
    <View style={styles.row} testID={testID}>
      <Animated.View style={[styles.indicator, indicatorAnimatedStyles]} />
      <Spacer width={lastIndicator ? 0 : 4} />
    </View>
  );
};

export const Indicators = ({
  numberOfIndicators,
  animatedIndex,
}: {
  numberOfIndicators: number;
  animatedIndex: Animated.SharedValue<number>;
}) => {
  const indicators = new Array(numberOfIndicators).fill(null);

  const renderIndicator = (_: undefined, i: number) => {
    const lastIndicator = i === numberOfIndicators - 1;

    return (
      <Indicator
        key={`indicator_${i}`}
        testID={`indicator_${i}`}
        lastIndicator={lastIndicator}
        animatedIndex={animatedIndex}
        index={i}
      />
    );
  };

  return (
    <View style={styles.row} testID={'indicators'}>
      {indicators.map(renderIndicator)}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  indicator: {
    height: 6,
    borderRadius: 4,
  },
});
