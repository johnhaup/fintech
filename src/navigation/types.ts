import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamsList = {
  LoginStack: undefined;
};

export type LoginStackParamsList = {
  Onboarding: undefined;
};

export type OnboardingProps = StackScreenProps<
  LoginStackParamsList,
  'Onboarding'
>;
