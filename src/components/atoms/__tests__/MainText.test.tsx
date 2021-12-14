import { colorPalette } from '@styles';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Text } from 'react-native';
import { MainText } from '../MainText';

beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Handles different children types', () => {
  test('should render with string as child', () => {
    const { getByTestId } = render(<MainText testID={'testID'}>test</MainText>);
    const component = getByTestId('testID');
    expect(component.props.children).toEqual('test');
  });

  test('should render with Text component as child', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'}>
        <Text>test</Text>
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.children).toBeDefined();
  });

  test('should return null when no children provided', () => {
    const result = render(<MainText testID={'testID'}></MainText>).toJSON();
    expect(result).toBeNull();
  });
});

describe('Decoration Props', () => {
  test('should apply center style', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} center>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({ textAlign: 'center' });
  });

  test('should apply underline style', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} underline>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      textDecorationLine: 'underline',
    });
  });

  test('should apply all decoration props', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} center underline>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      textAlign: 'center',
      textDecorationLine: 'underline',
    });
  });
});

describe('Color props', () => {
  test('should apply biscay2 as default color', () => {
    const { getByTestId } = render(<MainText testID={'testID'}>test</MainText>);
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      color: colorPalette['biscay2'],
    });
  });

  test('should pull color from color palette', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} blueZodiac>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      color: colorPalette['blueZodiac'],
    });
  });

  test('should only apply final color if multiple supplied', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} blueZodiac bunting butterflyBush>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      color: colorPalette['butterflyBush'],
    });
  });

  test('should console.warn if multiple supplied', () => {
    render(
      <MainText testID={'testID'} blueZodiac bunting butterflyBush>
        test
      </MainText>,
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});

describe('Font props', () => {
  test('should apply body1 as default font prop', () => {
    const { getByTestId } = render(<MainText testID={'testID'}>test</MainText>);
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
      lineHeight: 24,
    });
  });

  test('should pull font style from stylesheet', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} heading1>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      fontFamily: 'OpenSans-Bold',
      fontSize: 40,
      lineHeight: 48,
    });
  });

  test('should only apply final font prop if multiple supplied', () => {
    const { getByTestId } = render(
      <MainText testID={'testID'} heading1 heading2 body1Bold>
        test
      </MainText>,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      fontFamily: 'OpenSans-Bold',
      fontSize: 16,
      lineHeight: 24,
    });
  });

  test('should console.warn if multiple supplied', () => {
    console.warn = jest.fn();
    render(
      <MainText testID={'testID'} heading1 heading2 body1Bold>
        test
      </MainText>,
    );
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});
