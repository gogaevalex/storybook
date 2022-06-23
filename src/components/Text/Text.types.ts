export type TextVariantType =
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
  | 'error'
  | 'success'
  | 'warning'
  | 'white';

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

export type TextSizeType = {
  [key in TextVariantType]: number;
};

export type TextAlignType = 'left' | 'right' | 'center';

export type TextDisplayType = 'inline' | 'inline-block' | 'block';

export interface TextProps {
  /**
   * Variant text
   */
  variant?: TextVariantType;
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
  /**
   * Serif ? Cormorant : Roboto
   */
  serif?: boolean;
  children: string;
}

export interface BoxProps {
  m?: string;
  p?: string;
  display?: TextDisplayType;
  align: TextAlignType;
  color: TextPaletteVariantType;
  variant: TextVariantType;
  serif: boolean;
}
