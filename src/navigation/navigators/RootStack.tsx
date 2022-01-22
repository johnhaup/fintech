import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamsList } from '../types';
import { SignInStack } from './SignInStack';

const Stack = createStackNavigator<RootStackParamsList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'SignInStack'}>
      <Stack.Screen name={'SignInStack'} component={SignInStack} />
    </Stack.Navigator>
  );
};
