/**
 * @format
 */

import React from 'react';
import 'react-native';
//@ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

it('renders correctly', () => {
  renderer.create(<App />);
});
