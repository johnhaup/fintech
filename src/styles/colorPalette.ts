export const COLOR_PALETTE = [
  'radicalRed',
  'stratos',
  'eastBay',
  'white',
  'blueZodiac',
  'bunting',
  'swissCoffee',
  'royalBlue',
  'biscay',
  'biscay2',
  'butterflyBush',
  'shipCove',
  'java',
  'sunsetOrange',
  'seaBuckthorn',
  'mySin',
  'jacksonsPurple',
] as const;

// https://stackoverflow.com/a/45486495/7776799
type ColorsTuple = typeof COLOR_PALETTE;
export type Color = ColorsTuple[number];

export const colorPalette: { [key in Color]: string } = {
  radicalRed: '#FF2E63',
  stratos: '#010A43',
  eastBay: '#464E8A',
  white: '#FFFFFF',
  blueZodiac: '#10194E',
  bunting: '#192259',
  swissCoffee: '#D7C9C9',
  royalBlue: '#426DDC',
  biscay: '#212A6B',
  biscay2: '#1C265C',
  butterflyBush: '#4E589F',
  shipCove: '#858EC5',
  java: '#1DC7AC',
  sunsetOrange: '#FE4A54',
  seaBuckthorn: '#FAAD39',
  mySin: '#FFB129',
  jacksonsPurple: '#17288E',
};
