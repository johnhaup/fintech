import { colorPalette } from '@styles';
import { render } from '@testing-library/react-native';
import React from 'react';
import { ProfileDefaultAvatar } from '../ProfileDefaultAvatar';

beforeEach(() => {
  console.warn = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('Size props', () => {
  test('should apply medium style as default', () => {
    const { getByTestId } = render(<ProfileDefaultAvatar testID={'testID'} />);
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colorPalette.white,
      height: 48,
      width: 48,
      borderRadius: 24,
    });
    expect(component.props.style.backgroundColor).toBeDefined();
  });

  test('should apply small style', () => {
    const { getByTestId } = render(
      <ProfileDefaultAvatar testID={'testID'} small />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colorPalette.white,
      height: 40,
      width: 40,
      borderRadius: 20,
    });
    expect(component.props.style.backgroundColor).toBeDefined();
  });

  test('should apply medium style', () => {
    const { getByTestId } = render(
      <ProfileDefaultAvatar testID={'testID'} medium />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colorPalette.white,
      height: 48,
      width: 48,
      borderRadius: 24,
    });
    expect(component.props.style.backgroundColor).toBeDefined();
  });

  test('should apply large style', () => {
    const { getByTestId } = render(
      <ProfileDefaultAvatar testID={'testID'} large />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colorPalette.white,
      height: 72,
      width: 72,
      borderRadius: 36,
    });
    expect(component.props.style.backgroundColor).toBeDefined();
  });

  test('should apply profile style', () => {
    const { getByTestId } = render(
      <ProfileDefaultAvatar testID={'testID'} profile />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: colorPalette.white,
      height: 96,
      width: 96,
      borderRadius: 48,
    });
    expect(component.props.style.backgroundColor).toBeDefined();
  });
});

describe('Console warning', () => {
  test('should console.warn if multiple supplied', () => {
    render(<ProfileDefaultAvatar testID={'testID'} profile large />);
    expect(console.warn).toHaveBeenCalledTimes(1);
  });
});

describe('Custom color', () => {
  test('should apply custom background color', () => {
    const { getByTestId } = render(
      <ProfileDefaultAvatar
        testID={'testID'}
        color={colorPalette.radicalRed}
      />,
    );
    const component = getByTestId('testID');
    expect(component.props.style).toMatchObject({
      backgroundColor: colorPalette.radicalRed,
    });
  });
});
