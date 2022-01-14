import { render } from '@testing-library/react-native';
import React from 'react';
import { Indicators } from '../Indicators';

describe('Number of indicators', () => {
  test('should render 4 indicators', () => {
    const { getByTestId } = render(
      <Indicators
        numberOfIndicators={4}
        // @ts-ignore
        animatedIndex={{ value: 0 }}
      />,
    );
    const component = getByTestId('indicators');
    expect(component.props.children).toHaveLength(4);
  });
});
