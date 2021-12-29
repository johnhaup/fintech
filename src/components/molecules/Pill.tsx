import { MainText, Spacer } from '@atoms';
import { colorPalette } from '@styles';
import { ArrowSvg, ExclamationPointSvg } from '@svgs';
import capitalize from 'lodash/capitalize';
import React, { cloneElement } from 'react';
import { StyleSheet, View } from 'react-native';

const colorMap = {
  sent: colorPalette.seaBuckthorn,
  received: colorPalette.java,
  failed: colorPalette.sunsetOrange,
};

const iconMap = {
  sent: <ArrowSvg color={colorMap['sent']} />,
  received: <ArrowSvg left color={colorMap['received']} />,
  failed: <ExclamationPointSvg color={colorMap['failed']} />,
};

interface Props {
  status: 'sent' | 'received' | 'failed';
  testID?: string;
}

export const Pill = ({ status, testID = 'pill' }: Props) => {
  const backgroundColor = colorMap[status];
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { backgroundColor },
  ]);

  return (
    <View style={containerStyle} testID={testID}>
      <View style={styles.iconContainer}>{cloneElement(iconMap[status])}</View>
      <Spacer width={4} />
      <MainText fontType={'body3'} color={'white'}>
        {capitalize(status)}
      </MainText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  iconContainer: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colorPalette.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
