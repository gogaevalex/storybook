import React from 'react';

export type ButtonVariantType = 'contained' | 'outlined';

export type ButtonSizeVariant = 'small' | 'medium' | 'large';

export type ButtonPaletteVariantType =
  | 'primary'
  | 'error'
  | 'success'
  | 'warning';

export interface ButtonProps {
  /**
   * Variant
   */
  variant?: ButtonVariantType;
  /**
   * What background color to use
   */
  color?: ButtonPaletteVariantType;
  /**
   * How large should the button be?
   */
  size?: ButtonSizeVariant;
  /**
   * Disabled click
   */
  disabled?: boolean;
  /**
   * Button contents
   */
  content: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * AfterContent
   */
  afterContent?: React.ReactNode | JSX.Element;
  /**
   * BeforeContent
   */
  beforeContent?: React.ReactNode | JSX.Element;
  /**
   * FullWidth
   */
  fullWidth?: boolean;
}
