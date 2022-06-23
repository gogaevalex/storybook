import { FC } from 'react';
import styled from '@emotion/styled';
import { PaletteType } from '../../types/PaletteType';
import {
  TextProps,
  BoxProps,
  TextTagVariantType,
  TextPaletteVariantType,
  TextVariantType,
} from './Text.types';

const variantStylesSansSerif: { [key in TextVariantType]: string } = {
  h1: `
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
  `,
  h2: `
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  `,
  h3: `
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
  `,
  h4: `
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  `,
  h5: `
    font-weight: 700;
    font-size: 19px;
    line-height: 22px;
  `,
  h6: `
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
  `,
  body1: `
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  `,
  body2: `
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
  `,
  caption: `
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
  `,
};

const variantStylesSerif: { [key in TextVariantType]: string } = {
  h1: `
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
  `,
  h2: `
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  `,
  h3: `
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
  `,
  h4: `
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  `,
  h5: `
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
  `,
  h6: `
  font-weight: 700;
    font-size: 11px;
    line-height: 13px;
  `,
  body1: `
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  `,
  body2: `
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  `,
  caption: `
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  `,
};

const getStyledComponent = (
  tag: TextTagVariantType,
  color: TextPaletteVariantType
) => {
  const getColor = (palette: PaletteType): string => {
    const colorsData: { [key in TextPaletteVariantType]: string } = {
      inherit: 'inherit',
      primary: palette.primary.main,
      error: palette.error.main,
      success: palette.success.main,
      warning: palette.warning.main,
      white: palette.common.white,
    };

    return colorsData[color];
  };
  return styled(tag)<BoxProps>`
    ${({ display }) => (display ? `display: ${display}` : '')};
    margin: ${({ m }) => m || 0};
    padding: ${({ p }) => p || 0};
    text-align: ${({ align }) => align};
    font-family: ${({ serif }) => (serif ? 'Cormorant' : 'Roboto')};
    color: ${({ theme }) => getColor(theme.palette)};
    ${({ variant, serif }) =>
      serif ? variantStylesSerif[variant] : variantStylesSansSerif[variant]}
  `;
};

/**
 * Primary UI component for user interaction
 */
export const Text: FC<TextProps> = ({
  variant = 'body1',
  tag = 'span',
  align = 'left',
  color = 'primary',
  display,
  children,
  m,
  p,
  serif = false,
  ...props
}) => {
  const Component = getStyledComponent(tag, color);
  return (
    <Component
      display={display}
      align={align}
      color={color}
      variant={variant}
      m={m}
      p={p}
      serif={serif}
      {...props}
    >
      {children}
    </Component>
  );
};
