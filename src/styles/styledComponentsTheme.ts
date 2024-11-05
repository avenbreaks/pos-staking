export const colors = {
  transparent: 'transparent',
  white: '#ffffff',
  gray: {
    lightest: '#fdfcfe',
    light: '#F0F4F8',
    medium: '#B6B6B6',
    dark: '#4A4A4A',
  },
  black: '#333333',
  blue: {
    lightest: '#D4D7E7',
    light: '#b0e2f5',
    medium: '#007FB0',
    dark: '#0F2A43',
  },
  green: {
    light: '#F8FAF9',
    medium: '#D0E1D5',
    dark: '#26AB83',
  },
  red: {
    lightest: '#fff0f2',
    light: '#FF9B9A',
    medium: '#912d2c',
  },
  orange: '#FFF9F2',
  purple: {
    light: '#F0F2FB',
    medium: '#E3E5F2',
    dark: '#795da3',
  },
  yellow: {
    light: '#fff0a8',
    dark: '#f0ad4d',
    darkest: '#8a6d3b',
  },
};

export const details = {
  borderRadius: '3px',
};

export const rainbowColors = [
  '#15abfa', // pink
  '#15abfa', // red
  '#15abfa', // yellow
  '#15abfa', // green
  '#15abfa', // blue
  '#15abfa', // blurple
  '#15abfa', // purple
];

export const rainbowBGColors = [
  '#15abfa', // pink
  '#15abfa', // red
  '#15abfa', // yellow-orange
  '#15abfa', // green
  '#15abfa', // blue
  '#15abfa', // blurple
  '#15abfa', // purple
];

export const rainbowLightColors = [
  '#15abfa', // pink
  '#15abfa', // red
  '#15abfa', // yellow-orange
  '#15abfa', // green
  '#15abfa', // blue
  '#15abfa', // blurple
  '#15abfa', // purple
];

export const rainbow = rainbowColors.join(', ');
export const rainbowLight = rainbowLightColors.join(', ');

export const screenSizes = {
  smaller: '420px',
  small: '576px',
  medium: '768px',
  large: '992px',
  larger: '1200px',
  largest: '1440px',
  huge: '1820px',
};

export const styledComponentsTheme = {
  ...colors,
  screenSizes,
  ...details,
  rainbow,
  rainbowLight,
  rainbowLightColors,
};
