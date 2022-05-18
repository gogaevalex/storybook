import { FC } from 'react';
import styled from '@emotion/styled';
import { TextFieldProps } from './TextField.types';

/**
 * Primary UI component for user interaction
 */
export const TextField: FC<TextFieldProps> = ({
  variant = 'outlined',
  placeholder,
  label,
  helperText,
  isError,
  fullWidth,
  value,
  defaultValue,
  onChange,
  afterContent,
  beforeContent,
}) => {
  return <Content></Content>;
};

const Content = styled.div``;
