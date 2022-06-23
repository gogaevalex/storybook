import React, { FC } from 'react';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { ThemeType } from '../../types/ThemeType';

export interface ThemeProviderProps {
  theme: ThemeType;
  children: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeProviderEmotion theme={theme}>{children}</ThemeProviderEmotion>;
};
