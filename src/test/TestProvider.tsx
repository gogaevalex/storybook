import { FC, ReactElement } from 'react';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { mainTheme } from '../themes/mainTheme';

export type ITestProvider = {
  children: ReactElement;
};

export const TestProvider: FC<ITestProvider> = ({ children }) => (
  <ThemeProviderEmotion theme={mainTheme}>{children}</ThemeProviderEmotion>
);
