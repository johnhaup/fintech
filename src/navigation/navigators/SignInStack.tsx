import { SignInStackParamsList } from '@navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, SignIn } from '@screens';
import React from 'react';

const Stack = createStackNavigator<SignInStackParamsList>();

export const SignInStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
