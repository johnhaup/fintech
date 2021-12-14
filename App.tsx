import {
  MainButton,
  MainText,
  Pill,
  ProfileDefaultAvatar,
  Spacer,
} from '@atoms';
import { colorPalette } from '@styles';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        style={styles.container}
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.contentContainer}>
        <MainText heading1>heading1</MainText>
        <MainText heading2>heading2</MainText>
        <MainText heading3>heading3</MainText>
        <MainText body1>body1</MainText>
        <MainText body2>body2</MainText>
        <MainText body3>body3</MainText>
        <MainText body1Bold>body1Bold</MainText>
        <MainText body1SemiBold>body1SemiBold</MainText>
        <MainText center>center</MainText>
        <MainText underline>underline</MainText>
        <MainButton text={'primary'} onPress={() => null} primary />
        <Spacer height={8} />
        <MainButton text={'secondary'} onPress={() => null} secondary />
        <Spacer height={8} />
        <MainButton text={'midLight'} onPress={() => null} midLight />
        <Spacer height={8} />
        <MainButton text={'midDark'} onPress={() => null} midDark />
        <Spacer height={8} />
        <MainButton text={'smallDark'} onPress={() => null} smallDark />
        <Spacer height={8} />
        <Pill status={'sent'} />
        <Spacer height={8} />
        <Pill status={'received'} />
        <Spacer height={8} />
        <Pill status={'failed'} />
        <Spacer height={8} />
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colorPalette.biscay,
            padding: 8,
          }}>
          <ProfileDefaultAvatar small />
          <Spacer w={8} />
          <ProfileDefaultAvatar medium />
          <Spacer w={8} />
          <ProfileDefaultAvatar large />
          <Spacer w={8} />
          <ProfileDefaultAvatar profile />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
});

export default App;
