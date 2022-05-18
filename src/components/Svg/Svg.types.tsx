export type IconSizeVariantType = 'small' | 'medium' | 'large';
export type IconSizeType = { [key in IconSizeVariantType]: number };

export type IconPaletteVariantType = 'primary' | 'secondary';

export type SvgProps = {
  size?: number;
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

export type BoxProps = {
  size?: number;
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
