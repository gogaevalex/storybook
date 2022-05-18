export type TextSizeVariantType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'caption'
  | 'body1'
  | 'body2';

export type TextPaletteVariantType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

export type TextWeightVariantType =
  | 'extraLight'
  | 'light'
  | 'normal'
  | 'bold'
  | 'bolder'
  | 'extraBolder';

export type TextTagVariantType =
  | 'span'
  | 'p'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type TextSizeiteemType = {
  size: number;
  weight: number;
};

export type TextSizeType = {
  [key in TextSizeVariantType]: number;
};

export type TextWeightType = {
  [key in TextWeightVariantType]: number;
};

export type TextAlignType = 'left' | 'right' | 'center';

export type TextDisplayType = 'inline' | 'inline-block' | 'block';

export interface TextProps {
  /**
   * Size text
   */
  size?: TextSizeVariantType;
  /**
   * Weight text
   */
  weight?: TextWeightVariantType;
  /**
   * Tag
   */
  tag?: TextTagVariantType;
  /**
   * Align
   */
  align?: TextAlignType;
  /**
   * Color
   */
  color?: TextPaletteVariantType;
  /**
   * Display
   */
  display?: TextDisplayType;
  /**
   * Margin
   */
  m?: string;
  /**
   * Padding
   */
  p?: string;
}

export interface BoxProps {
  m?: string;
  p?: string;
  display?: TextDisplayType;
  align: TextAlignType;
  color: TextPaletteVariantType;
  weight?: TextWeightVariantType;
  size?: TextSizeVariantType;
}
