import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    gunMetal: {
      50: '#4592b6',
      100: '#407993',
      200: '#396072',
      300: '#304854',
      400: '#22333b',
      500: '#1b2529',
      600: '#13181a',
      700: '#0a0b0c',
      800: '#0a0b0c',
      900: '#0a0b0c',
    },
    almond: {
      50: '#11712f149',
      100: '#10f11c129',
      200: '#10510810c',
      300: '#f8f4f1',
      400: '#eae0d5',
      500: '#e0d5c9',
      600: '#d4c9bd',
      700: '#c7bdb3',
      800: '#b8b2aa',
      900: '#a8a6a3',
    },
    khaki: {
      50: '#fdfbf8',
      100: '#f2e7dc',
      200: '#e4d4c1',
      300: '#d4c0aa',
      400: '#c6ac8f',
      500: '#b9a185',
      600: '#aa957d',
      700: '#998976',
      800: '#877d71',
      900: '#73706d',
    },
    manoBrown: {
        50: "#c3a27a",
        100: "#b08e66",
        200: "#967a58",
        300: "#77654f",
        400: "#5e503f",
        500: "#4d443a",
        600: "#3c3833",
        700: "#2d2c2b",
        800: "#1f2021",
        900: "#121416"
    },
  },
  fontConfig: {
    NotoSans: {
      100: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      200: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      300: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      400: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-Italic',
      },
      500: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-MediumItalic',
      },
      600: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-MediumItalic',
      },
      700: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
      800: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
      900: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'NotoSans',
    body: 'NotoSans',
    mono: 'NotoSans',
  },
});
