import { FC } from 'react';
import styled from '@emotion/styled';
import { PaletteType } from '../../types/PaletteType';
import {
  TextProps,
  BoxProps,
  TextTagVariantType,
  TextPaletteVariantType,
} from './Text.types';

const getStyledComponent = (
  tag: TextTagVariantType,
  color: TextPaletteVariantType
) => {
  const getColor = (palette: PaletteType): string => {
    const colorsData: { [key in TextPaletteVariantType]: string } = {
      inherit: 'inherit',
      primary: palette.primary.main,
      secondary: palette.secondary.main,
      textPrimary: palette.text.primary,
      textSecondary: palette.text.secondary,
      error: palette.error.main,
    };

    return colorsData[color];
  };
  return styled(tag)<BoxProps>`
    ${({ display }) => (display ? `display: ${display}` : '')};
    margin: ${({ m }) => m || 0};
    padding: ${({ p }) => p || 0};
    text-align: ${({ align }) => align};
    color: ${({ theme }) => getColor(theme.palette)};
    ${({ theme, size }) =>
      size ? `font-size: ${theme.textSize[size]}px};` : ''}
    ${({ theme, weight }) =>
      weight ? `font-weight: ${theme.textWeight[weight]};` : ''}
  `;
};

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({
  size,
  weight,
  tag = 'span',
  align = 'left',
  color = 'textPrimary',
  display,
  children,
  m,
  p,
  ...props
}) => {
  const Component = getStyledComponent(tag, color);
  return (
    <Component
      display={display}
      align={align}
      color={color}
      size={size}
      weight={weight}
      m={m}
      p={p}
      {...props}
    >
      {children}
    </Component>
  );
};
