import React from 'react';

export type SelectVariantType = 'filled' | 'line' | 'outlined';

export type SelectSizeVariant = 'small' | 'medium' | 'large';

export type SelectPaletteVariantType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning';

export interface SelectProps {
  /**
   * Variant
   */
  variant?: SelectVariantType;
  /**
   * Label
   */
  label?: string;
  /**
   * Detect error
   */
  isError?: boolean;
  /**
   * Detect disable
   */
  isDisable?: boolean;
  /**
   * Text after input
   */
  helpText?: string;
  /**
   * Height list item
   */
  maxListHeight?: string;
  /**
   * children lisl li
   */
  children?: any;
}
