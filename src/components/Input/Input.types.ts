import React from 'react';

export type InputVariantType = 'line' | 'outlined';

export type InputSizeVariant = 'm' | 'l';

export interface InputProps {
  /**
   * Variant
   */
  variant?: InputVariantType;
  /**
   * How large should the Input be?
   */
  size?: InputSizeVariant;
  /**
   * Disabled click
   */
  disabled?: boolean;
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
  /**
   * Current value
   */
  value: string;
  /**
   * Placeholder input
   */
  placeholder?: string;
  /**
   * Name input
   */
  name?: string;
  /**
   * Func for change value
   */
  onChange: (name: string, value: string) => void;
  /**
   * Func for send input data
   */
  sendData?: () => void;
  /**
   * Type
   */
  type?: 'text' | 'password';
  /**
   * Error input
   */
  errored?: boolean;
  /**
   * Margin
   */
  margin?: string;
  /**
   * Auto focus input
   */
  autoFocus?: boolean;
  /**
   * Text after input
   */
  description?: string;
  /**
   * Func focus
   */
  focusOnInput?: (arg: boolean) => void;
}

export type IBoxContentProps = {
  fullWidth: boolean;
  disabled: boolean;
  margin: string;
};

export type IBorderProps = {
  focused: boolean;
  disabled: boolean;
  errored: boolean;
  variant: InputVariantType;
  size: InputSizeVariant;
};

export type IFieldProps = {
  sizeVariant: InputSizeVariant;
};

export type IDescriptionProps = {
  disabled: boolean;
  errored: boolean;
};
