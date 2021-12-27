import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { RootStackParamsList } from '../types';
import { LoginStack } from './LoginStack';

const Stack = createStackNavigator<RootStackParamsList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={'LoginStack'}>
      <Stack.Screen name={'LoginStack'} component={LoginStack} />
    </Stack.Navigator>
  );
};
