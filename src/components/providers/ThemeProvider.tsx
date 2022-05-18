import React, { FC } from 'react';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';

export interface ThemeProviderProps {
  theme: { [key: string]: any };
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};
