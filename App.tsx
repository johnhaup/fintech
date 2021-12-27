import { RootStack } from '@navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
