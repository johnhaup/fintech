import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import { MainText } from './src/components/primitives/MainText';

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
