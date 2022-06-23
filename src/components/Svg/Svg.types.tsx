import { ReactElement } from 'react';
export type IconSizeVariantType = 'small' | 'medium' | 'large';
export type IconSizeType = { [key in IconSizeVariantType]: number };

export type IconPaletteVariantType = 'primary' | 'secondary';

export type SvgProps = {
  size?: string;
  color?: IconPaletteVariantType;
  /**
   * Margin
   */
  m?: string;
  /**
   * Padding
   */
  p?: string;
  children?: ReactElement | ReactElement[];
};

export type BoxProps = {
  size: string;
  color?: IconPaletteVariantType;
  /**
   * Margin
   */
  m?: string;
  /**
   * Padding
   */
  p?: string;
};
