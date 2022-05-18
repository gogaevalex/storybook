import { ChangeEvent } from 'react';

export type TextFielVariantsType = 'line' | 'filled' | 'outlined';

export interface TextFieldProps {
  variant?: TextFielVariantsType;
  placeholder?: string;
  label?: string;
  helperText?: string;
  isError?: boolean;
  fullWidth?: boolean;
  value?: undefined | null | number | string;
  defaultValue?: undefined | null | number | string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * AfterContent
   */
  afterContent?: React.ReactNode | JSX.Element;
  /**
   * BeforeContent
   */
  beforeContent?: React.ReactNode | JSX.Element;
}
