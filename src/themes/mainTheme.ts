import { ThemeType } from '../types/ThemeType';

export const mainTheme: ThemeType = {
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrast: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrast: '#fff',
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#A90000',
      contrast: '#fff',
    },
    success: {
      light: '#4caf50',
      main: '#2e7d32',
      dark: '#1b5e20',
      contrast: '#fff',
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100',
      contrast: '#fff',
    },
    common: {
      black: '#000',
      white: '#fff',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },
    text: {
      primary: '#000',
      secondary: '#ffff',
    },
    icon: {
      primary: '#000',
      secondary: '#ffff',
    },
  },
  textSize: {
    h1: 32,
    h2: 24,
    h3: 18.72,
    h4: 16,
    h5: 13.28,
    h6: 10.72,
    body1: 16,
    body2: 14,
    caption: 12,
  },
  textWeight: {
    extraLight: 200,
    light: 300,
    normal: 400,
    bold: 500,
    bolder: 600,
    extraBolder: 700,
  },
  breakpoints: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  iconSize: {
    small: 16,
    medium: 20,
    large: 25,
  },
};
