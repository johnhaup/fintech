import { colorPalette } from '@styles';
import { render } from '@testing-library/react-native';
import React from 'react';
import { MainButton } from '../MainButton';

beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Button Type Props', () => {
  test('should apply primary as default style', () => {
    const { getByTestId } = render(
      <MainButton testID={'testID'} onPress={() => null} text={'button'} />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: colorPalette.radicalRed,
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 10,
        alignSelf: 'center',
      }),
    );
  });

  test('should apply primary style', () => {
    const { getByTestId } = render(
      <MainButton
        testID={'testID'}
        primary
        onPress={() => null}
        text={'button'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: colorPalette.radicalRed,
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 10,
        alignSelf: 'center',
      }),
    );
  });

  test('should apply secondary style', () => {
    const { getByTestId } = render(
      <MainButton
        testID={'testID'}
        secondary
        onPress={() => null}
        text={'button'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        borderWidth: 1,
        borderColor: colorPalette.eastBay,
        paddingHorizontal: 40,
        paddingVertical: 16,
        borderRadius: 10,
        alignSelf: 'center',
      }),
    );
  });

  test('should apply midLight style', () => {
    const { getByTestId } = render(
      <MainButton
        testID={'testID'}
        midLight
        onPress={() => null}
        text={'button'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: colorPalette.white,
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',
      }),
    );
  });

  test('should apply midDark style', () => {
    const { getByTestId } = render(
      <MainButton
        testID={'testID'}
        midDark
        onPress={() => null}
        text={'button'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: colorPalette.biscay2,
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 10,
        alignSelf: 'center',
      }),
    );
  });

  test('should apply smallDark style', () => {
    const { getByTestId } = render(
      <MainButton
        testID={'testID'}
        smallDark
        onPress={() => null}
        text={'button'}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        backgroundColor: colorPalette.biscay,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        alignSelf: 'center',
      }),
    );
  });

  test('should console.warn if multiple supplied', () => {
    console.warn = jest.fn();
    render(
      <MainButton
        testID={'testID'}
        smallDark
        primary
        onPress={() => null}
        text={'button'}
      />,
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});

describe('MainText Props', () => {
  test('should apply correct text props for primary style', () => {
    const { getByText } = render(
      <MainButton primary onPress={() => null} text={'button'} />,
    );
    const component = getByText('button');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        color: colorPalette.white,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        lineHeight: 24,
      }),
    );
  });

  test('should apply correct text props for secondary style', () => {
    const { getByText } = render(
      <MainButton secondary onPress={() => null} text={'button'} />,
    );
    const component = getByText('button');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        color: colorPalette.eastBay,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        lineHeight: 24,
      }),
    );
  });

  test('should apply correct text props for midLight style', () => {
    const { getByText } = render(
      <MainButton midLight onPress={() => null} text={'button'} />,
    );
    const component = getByText('button');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        color: colorPalette.biscay2,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        lineHeight: 24,
      }),
    );
  });

  test('should apply correct text props for midDark style', () => {
    const { getByText } = render(
      <MainButton midDark onPress={() => null} text={'button'} />,
    );
    const component = getByText('button');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        color: colorPalette.white,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
        lineHeight: 24,
      }),
    );
  });

  test('should apply correct text props for smallDark style', () => {
    const { getByText } = render(
      <MainButton smallDark onPress={() => null} text={'button'} />,
    );
    const component = getByText('button');
    expect(component.props.style).toEqual(
      expect.objectContaining({
        color: colorPalette.royalBlue,
        fontFamily: 'OpenSans-Regular',
        fontSize: 14,
        lineHeight: 24,
      }),
    );
  });
});
