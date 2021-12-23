import { colorPalette } from '@styles';
import { ArrowSvg, ExclamationPointSvg } from '@svgs';
import { render } from '@testing-library/react-native';
import React from 'react';
import { Pill } from '../Pill';

describe('Status props', () => {
  test('should apply sent transfer type changes', () => {
    const { getByTestId, getByText } = render(
      <Pill testID={'testID'} status={'sent'} />,
    );
    const component = getByTestId('testID');
    const textComponent = getByText('Sent');
    expect(component.props.style.backgroundColor).toEqual(
      colorPalette.seaBuckthorn,
    );
    expect(textComponent).toBeDefined();
    expect(component.props.children[0].props.children).toEqual(
      <ArrowSvg color={colorPalette.seaBuckthorn} />,
    );
  });

  test('should apply received transfer type changes', () => {
    const { getByTestId, getByText } = render(
      <Pill testID={'testID'} status={'received'} />,
    );
    const component = getByTestId('testID');
    const textComponent = getByText('Received');
    expect(component.props.style.backgroundColor).toEqual(colorPalette.java);
    expect(textComponent).toBeDefined();
    expect(component.props.children[0].props.children).toEqual(
      <ArrowSvg left color={colorPalette.java} />,
    );
  });

  test('should apply failed transfer type changes', () => {
    const { getByTestId, getByText } = render(
      <Pill testID={'testID'} status={'failed'} />,
    );
    const component = getByTestId('testID');
    const textComponent = getByText('Failed');
    expect(component.props.style.backgroundColor).toEqual(
      colorPalette.sunsetOrange,
    );
    expect(textComponent).toBeDefined();
    expect(component.props.children[0].props.children).toEqual(
      <ExclamationPointSvg color={colorPalette.sunsetOrange} />,
    );
  });
});
