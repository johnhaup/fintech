import { render } from '@testing-library/react-native';
import React from 'react';
import { FullScreenView } from '../FullScreenView';

describe('Empty props', () => {
  test('should set height and width to screen size', () => {
    const { getByTestId } = render(<FullScreenView testID={'testID'} />);
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      height: 1334,
      width: 750,
    });
  });
});

describe('Style prop', () => {
  test('should apply inject style prop to view', () => {
    const { getByTestId } = render(
      <FullScreenView testID={'testID'} style={{ backgroundColor: 'blue' }} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      height: 1334,
      width: 750,
      backgroundColor: 'blue',
    });
  });

  test('should override default props with injected props', () => {
    const { getByTestId } = render(
      <FullScreenView
        testID={'testID'}
        style={{ backgroundColor: 'blue', height: 2 }}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      height: 2,
      width: 750,
      backgroundColor: 'blue',
    });
  });
});
