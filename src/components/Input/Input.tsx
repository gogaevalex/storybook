import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box';
import { PaletteType } from '../../types/PaletteType';
import {
  InputProps,
  InputVariantType,
  InputSizeVariant,
  IBoxContentProps,
  IBorderProps,
  IFieldProps,
  IDescriptionProps,
} from './Input.types';

const sizeStylesOutline: { [key in InputSizeVariant]: string } = {
  m: 'padding: 10px 20px;',
  l: 'padding: 12px 20px;',
};

const sizeStylesLine: { [key in InputSizeVariant]: string } = {
  m: 'padding: 6px 0px;',
  l: 'padding: 8px 0px;',
};

const textSizeStyles: { [key in InputSizeVariant]: string } = {
  m: `font-weight: 400;
  font-size: 14px;
  line-height: 16px;`,
  l: `font-weight: 400;
  font-size: 16px;
  line-height: 19px;`,
};

const getVariantStyles = (
  palette: PaletteType,
  focused: boolean,
  errored: boolean,
  disabled: boolean,
  size: InputSizeVariant
): { [key in InputVariantType]: string } => {
  let color = palette.grey[500];
  if (disabled) color = palette.grey[400];
  if (errored) color = palette.error.light;
  if (focused) color = palette.grey[700];

  return {
    line: `
      border-bottom: 1px solid ${color};
      ${sizeStylesLine[size]}
    `,
    outlined: `
      border-radius: 20px;
      border: 1px solid ${color};
      ${sizeStylesOutline[size]}
    `,
  };
};

export const Input: FC<InputProps> = ({
  variant = 'outlined',
  value,
  placeholder = '',
  name = 'input',
  onChange,
  type = 'text',
  errored = false,
  margin = '0',
  sendData = () => {},
  autoFocus = false,
  fullWidth = false,
  size = 'm',
  description = '',
  beforeContent = null,
  afterContent = null,
  disabled = false,
  focusOnInput = null,
}) => {
  const [focused, setFocus] = useState(false);
  return (
    <BoxContent fullWidth={fullWidth} margin={margin} disabled={disabled}>
      <Border
        errored={errored}
        focused={focused}
        disabled={disabled}
        variant={variant}
        size={size}
      >
        {beforeContent && (
          <Box m="0 10px 0 0" display="flex" alignItems="center">
            {beforeContent}
          </Box>
        )}
        <Field
          placeholder={placeholder}
          value={value}
          name={name}
          sizeVariant={size}
          disabled={disabled}
          type={type}
          autoComplete={type === 'password' ? 'on' : 'off'}
          onKeyDown={(e) => e.key === 'Enter' && sendData()}
          onChange={(e) => onChange(name, e.target.value)}
          autoFocus={autoFocus}
          onFocus={() => {
            if (focusOnInput) {
              focusOnInput(true);
            }
            setFocus(true);
          }}
          onBlur={() => {
            if (focusOnInput) {
              focusOnInput(false);
            }
            setFocus(false);
          }}
        />
        {afterContent && (
          <Box m="0 0 0 10px" display="flex" alignItems="center">
            {afterContent}
          </Box>
        )}
      </Border>
      {description && (
        <Description errored={errored} disabled={disabled}>
          {description}
        </Description>
      )}
    </BoxContent>
  );
};

const BoxContent = styled.div<IBoxContentProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '190px')};
  margin: ${({ margin }) => margin};
  ${({ disabled }) =>
    disabled &&
    `
		pointer-events: none;
		opacity: 0.5;
	`}
`;

const Border = styled.div<IBorderProps>`
  display: flex;
  border: none;
  ${({ theme, focused, errored, disabled, variant, size }) =>
    getVariantStyles(theme.palette, focused, errored, disabled, size)[variant]}
  outline: none;
`;

const Field = styled.input<IFieldProps>`
  width: 100%;
  line-height: 20px;
  border: none;
  background: none;
  ${({ sizeVariant }) => textSizeStyles[sizeVariant]}
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.palette.grey[400]};
  }
  outline: none;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Description = styled.div<IDescriptionProps>`
  position: absolute;
  margin: 3px 10px;
  font-size: 12px;
  color: ${({ theme, errored, disabled }) => {
    if (errored) return theme.palette.error.light;
    if (disabled) return theme.palette.grey[400];
    return theme.palette.primary.main;
  }};
`;
