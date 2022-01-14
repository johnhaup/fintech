import { FullScreenView } from '@atoms';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Svg, { Circle, Path } from 'react-native-svg';

export const OnboardingTwo = ({
  animatedValue,
}: {
  animatedValue: Animated.SharedValue<number>;
}) => {
  const translateUpAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedValue.value,
            [SCREEN_WIDTH * 0.5, SCREEN_WIDTH],
            [SCREEN_HEIGHT, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const translateDownAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedValue.value,
            [SCREEN_WIDTH * 0.5, SCREEN_WIDTH],
            [-SCREEN_HEIGHT, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const translateRightAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animatedValue.value,
            [SCREEN_WIDTH * 0.5, SCREEN_WIDTH],
            [-SCREEN_WIDTH, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const translateLeftAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animatedValue.value,
            [SCREEN_WIDTH * 0.5, SCREEN_WIDTH],
            [SCREEN_WIDTH, 24],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <FullScreenView>
      <Animated.View style={translateLeftAnimatedStyles}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          {/* <Path d="M248 246 37.046 0H0v246h248Z" fill="#FFC2C2" /> */}
          <Path fill="#FFB129" d="M248 0h127v413H248z" />
          <Path
            d="M204 413h171v140h-51c-66.274 0-120-53.726-120-120v-20Z"
            fill="#FFCC72"
          />
          <Circle cx={307} cy={474} r={45} fill="#FFEAC5" />
          <Circle cx={307} cy={474} r={26} fill="#01CC88" />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateRightAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
            <Path d="M248 246 37.046 0H0v246h248Z" fill="#FFC2C2" />
          </Svg>
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateUpAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            d="m92 387.5 234.5 437.513H-.84L-19 455.117 92 387.5Z"
            fill="#FF2E63"
          />
          <Path
            d="M-1 443c33.948 0 66.505-13.696 90.51-38.076C113.514 380.544 127 347.478 127 313c0-34.478-13.486-67.544-37.49-91.924C65.505 196.696 32.948 183-1 183v260Z"
            fill="#01CC88"
          />
          <Path fill="#FFB129" d="M0 254h55v118H0z" />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateDownAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            fill="#FF2E63"
            d="m191.757 225.756 56.569-56.569 56.568 56.569-56.568 56.569z"
          />
          <Circle cx={248} cy={226} r={20} fill="#fff" />
        </Svg>
      </Animated.View>
    </FullScreenView>
  );
};
