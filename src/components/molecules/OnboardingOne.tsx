import { FullScreenView } from '@atoms';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constants';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';

export const OnboardingOne = ({
  animatedValue,
}: {
  animatedValue: Animated.SharedValue<number>;
}) => {
  const translateDownAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedValue.value,
            [0, SCREEN_WIDTH * 0.5],
            [0, SCREEN_HEIGHT],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const translateUpAnimatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            animatedValue.value,
            [0, SCREEN_WIDTH * 0.5],
            [0, -SCREEN_HEIGHT],
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
            [0, SCREEN_WIDTH * 0.5],
            [0, -SCREEN_WIDTH],
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
            [0, SCREEN_WIDTH * 0.5],
            [0, SCREEN_WIDTH],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  return (
    <FullScreenView>
      <Animated.View style={translateDownAnimatedStyles}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            d="M113 513.737c-73 28.935-120-39-120-39l-9 39s77 56.999 129 42c52-15 123-113.001 207-137 84-24 98 11 98 11l5-37s-66.187-10.863-108-5c-92.074 12.91-129 97.064-202 126Z"
            fill="#3A4187"
          />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateUpAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            d="M293 86.515c73-28.936 120 39 120 39l9-39s-77-57-129-42-123 113-207 137-98-11-98-11l-5 37s66.187 10.863 108 5c92.074-12.911 129-97.065 202-126Z"
            fill="#FFB129"
          />
          <Rect
            x={236}
            y={-23}
            width={171}
            height={162}
            rx={81}
            fill="#FFCC72"
          />
          <Path
            d="M323.444 64.81c-6.334-2.816-6.334-11.805 0-14.62l47.306-21.03c5.291-2.353 11.25 1.52 11.25 7.31v42.06c0 5.79-5.959 9.663-11.25 7.31l-47.306-21.03Z"
            fill="#01CC88"
          />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateLeftAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            d="m78-27-174 7v339s110 47 174-45-9-157-28-200S78-27 78-27Z"
            fill="#FF2E63"
          />
          <Rect
            x={-80}
            y={120}
            width={152}
            height={144}
            rx={72}
            fill="#01CC88"
          />
          <Rect x={-46} y={152} width={84} height={80} rx={40} fill="#FFB129" />
        </Svg>
      </Animated.View>
      <Animated.View
        style={[StyleSheet.absoluteFill, translateRightAnimatedStyles]}>
        <Svg width={SCREEN_WIDTH} height={SCREEN_HEIGHT} fill="none">
          <Path
            d="M203 462a107.006 107.006 0 0 0 75.66-31.34A106.983 106.983 0 0 0 310 355a107.006 107.006 0 0 0-31.34-75.66A106.983 106.983 0 0 0 203 248v214Z"
            fill="#FFCC72"
          />
          <Path
            d="M203 248a107.006 107.006 0 0 0-75.66 31.34A106.983 106.983 0 0 0 96 355a106.999 106.999 0 0 0 107 107V248Z"
            fill="#01CC88"
          />
          <Path d="m130 357.5 72.75-72.313v144.626L130 357.5Z" fill="#FF8A00" />
          <Path d="m274 357.5-72 72.313V285.187l72 72.313Z" fill="#FB4953" />
          <Path
            d="M221.143 348.143h-1.715v-1.714c0-8.521-6.907-15.429-15.428-15.429s-15.429 6.908-15.429 15.429v1.714h-1.714c-.947 0-1.714.767-1.714 1.714v27.429c0 .946.767 1.714 1.714 1.714h34.286c.947 0 1.714-.768 1.714-1.714v-27.429c0-.947-.767-1.714-1.714-1.714Zm-12.294 15.407a5.143 5.143 0 0 1-3.135 3.135v3.744a1.714 1.714 0 0 1-3.428 0v-3.744a5.143 5.143 0 1 1 6.563-3.135ZM216 348.143h-24v-1.714c0-6.628 5.373-12 12-12s12 5.372 12 12v1.714Z"
            fill="#FFC2C2"
          />
        </Svg>
      </Animated.View>
    </FullScreenView>
  );
};
