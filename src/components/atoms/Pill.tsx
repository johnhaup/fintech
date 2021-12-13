import { colorPalette } from '@styles';
import { ArrowSvg, ExclamationPointSvg } from '@svgs';
import capitalize from 'lodash/capitalize';
import React, { cloneElement } from 'react';
import { StyleSheet, View } from 'react-native';
import { MainText } from './MainText';
import { Spacer } from './Spacer';

const TRANSFER_STATUSES = ['sent', 'received', 'failed'] as const;
type TransferStatusTuple = typeof TRANSFER_STATUSES;
export type TransferStatus = TransferStatusTuple[number];

const colorMap: { [key in TransferStatus]: string } = {
  sent: colorPalette.seaBuckthorn,
  received: colorPalette.java,
  failed: colorPalette.sunsetOrange,
};

const iconMap: { [key in TransferStatus]: JSX.Element } = {
  sent: <ArrowSvg color={colorMap['sent']} />,
  received: <ArrowSvg left color={colorMap['received']} />,
  failed: <ExclamationPointSvg color={colorMap['failed']} />,
};

export const Pill = ({
  status,
  testID = 'pill',
}: {
  status: TransferStatus;
  testID?: string;
}) => {
  const backgroundColor = colorMap[status];
  const containerStyle = StyleSheet.flatten([
    styles.container,
    { backgroundColor },
  ]);

  return (
    <View style={containerStyle} testID={testID}>
      <View style={styles.iconContainer}>{cloneElement(iconMap[status])}</View>
      <Spacer w={4} />
      <MainText body3 white>
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
