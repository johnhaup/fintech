import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamsList = {
  SignInStack: undefined;
};

export type SignInStackParamsList = {
  Onboarding: undefined;
  SignIn: undefined;
};

export type OnboardingProps = StackScreenProps<
  SignInStackParamsList,
  'Onboarding'
>;
