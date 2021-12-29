import { render } from '@testing-library/react-native';
import React from 'react';
import { Spacer } from '../Spacer';

describe('Height prop', () => {
  test('should set height with height prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} height={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ height: 10 });
  });
});

describe('Width prop', () => {
  test('should set width with width prop', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} width={10} />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({ width: 10 });
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
        flex
        width={10}
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

describe('Safe Area prop', () => {
  test('should set height to safe area top height', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} safeTop />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      height: 10,
    });
  });

  test('should add safe area top height to injected height', () => {
    const { getByTestId } = render(
      <Spacer testID={'testID'} safeTop height={7} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      height: 17,
    });
  });

  test('should set height to safe area bottom height', () => {
    const { getByTestId } = render(<Spacer testID={'testID'} safeBottom />);
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      height: 9,
    });
  });

  test('should add safe area bottom height to injected height', () => {
    const { getByTestId } = render(
      <Spacer testID={'testID'} safeBottom height={7} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      height: 16,
    });
  });

  test('should add both safe area props to height', () => {
    const { getByTestId } = render(
      <Spacer testID={'testID'} safeTop safeBottom height={7} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toStrictEqual({
      height: 26,
    });
  });
});
