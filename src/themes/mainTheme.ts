import { ThemeType } from '../types/ThemeType';

export const mainTheme: ThemeType = {
  palette: {
    primary: {
      light: '#6E6E6E',
      main: '#363636',
      dark: '#0A0A0A',
      contrast: '#FFFFFF',
    },
    secondary: {
      light: '#6E6E6E',
      main: '#282828',
      dark: '#0A0A0A',
      contrast: '#FFFFFF',
    },
    error: {
      light: '#E86153',
      main: '#D44D3F',
      dark: '#B62F21',
      contrast: '#FFFFFF',
    },
    success: {
      light: '#59E092',
      main: '#3BC274',
      dark: '#1DA456',
      contrast: '#FFFFFF',
    },
    warning: {
      light: '#FA9D49',
      main: '#E68921',
      dark: '#D2750D',
      contrast: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
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
    events: {
      hover: 'rgba(0, 0, 0, 0.04)',
      focus: 'rgba(0, 0, 0, 0.08)',
    },
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
