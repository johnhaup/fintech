import { render } from '@testing-library/react-native';
import React from 'react';
import { Spacer } from '../Spacer';

describe('Height prop', () => {
  test('should set height with height prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} height={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ height: 10 });
  });

  test('should set height with h prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} h={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ height: 10 });
  });

  test('should set height to h + height if both supplied', () => {
    const { getByTestId } = render(
      <Spacer testID={'testID'} h={10} height={10} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ height: 20 });
  });
});

describe('Width prop', () => {
  test('should set width with width prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} width={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ width: 10 });
  });

  test('should set width with w prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} w={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ width: 10 });
  });

  test('should set width to w + width if both supplied', () => {
    const { getByTestId } = render(
      <Spacer testID={'testID'} w={10} width={10} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ width: 20 });
  });
});

describe('Flex prop', () => {
  test('should set flex to 1 with flex boolean prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} flex />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ flex: 1 });
  });

  test('should set flex to number with flex number prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} flex={6} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ flex: 6 });
  });
});

describe('Style prop', () => {
  test('should set style to injected style prop', () => {
    const { getByTestId } = render(
      <Spacer
        testID={'testID'}
        style={{ backgroundColor: 'blue', height: 20 }}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      backgroundColor: 'blue',
      height: 20,
    });
  });

  test('should override all duplicated props with injected style prop', () => {
    const { getByTestId } = render(
      <Spacer
        testID={'testID'}
        style={{ backgroundColor: 'blue', height: 20, flex: 3 }}
        height={5}
        h={10}
        flex
        w={10}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      backgroundColor: 'blue',
      height: 20,
      flex: 3,
      width: 10,
    });
  });
});
