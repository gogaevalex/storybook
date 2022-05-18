import { themes } from '@storybook/theming';
import { addDecorator } from '@storybook/react';
import { mainTheme } from '../src/themes/mainTheme';

import { withThemesProvider } from 'storybook-addon-emotion-theme';
 
addDecorator(withThemesProvider([mainTheme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    light: themes.normal,
  }
}
