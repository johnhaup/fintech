import { LoginStackParamsList } from '@navigation';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens';
import React from 'react';

const Stack = createStackNavigator<LoginStackParamsList>();

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};
