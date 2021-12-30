import { render } from '@testing-library/react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AbsoluteView } from '../AbsoluteView';

describe('Empty props', () => {
  test('should set position props to 0 if provided as booleans', () => {
    const { getByTestId } = render(
      <AbsoluteView top right bottom left testID={'testID'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject(StyleSheet.absoluteFillObject);
  });
});

describe('Position props', () => {
  test('should set position props to 0 if provided as booleans', () => {
    const { getByTestId } = render(
      <AbsoluteView top right bottom left testID={'testID'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject(StyleSheet.absoluteFillObject);
  });

  test('should set position props to number if provided as number', () => {
    const { getByTestId } = render(
      <AbsoluteView
        top={10}
        right={20}
        bottom={10}
        left={20}
        testID={'testID'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      position: 'absolute',
      top: 10,
      right: 20,
      bottom: 10,
      left: 20,
    });
  });

  test('should handle combination of position props as booleans and numbers', () => {
    const { getByTestId } = render(
      <AbsoluteView top={10} right bottom={10} left testID={'testID'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      position: 'absolute',
      top: 10,
      right: 0,
      bottom: 10,
      left: 0,
    });
  });
});

describe('Center prop', () => {
  test('should center children', () => {
    const { getByTestId } = render(
      <AbsoluteView top right bottom left center testID={'testID'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      ...StyleSheet.absoluteFillObject,
      justifyContent: 'center',
      alignItems: 'center',
    });
  });
});

describe('Style prop', () => {
  test('should override any conflicting properties in style prop', () => {
    const { getByTestId } = render(
      <AbsoluteView
        top
        right
        center
        testID={'testID'}
        style={{ top: 12, right: -5, justifyContent: 'flex-end' }}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      position: 'absolute',
      top: 12,
      right: -5,
      justifyContent: 'flex-end',
      alignItems: 'center',
    });
  });
});

describe('Pointer events prop', () => {
  test('should default to "box-none"', () => {
    const { getByTestId } = render(<AbsoluteView testID={'testID'} />);
    const component = getByTestId('testID');
    expect(component.props.pointerEvents).toBe('box-none');
  });

  test('should set pointerEvents', () => {
    const { getByTestId } = render(
      <AbsoluteView pointerEvents={'auto'} testID={'testID'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.pointerEvents).toBe('auto');
  });
});
