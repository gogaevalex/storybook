import { FC } from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box';
import { PaletteType } from '../../types/PaletteType';
import {
  ButtonProps,
  ButtonVariantType,
  ButtonSizeVariant,
} from './Button.types';

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  variant = 'contained',
  color = 'primary',
  content,
  size = 'medium',
  beforeContent,
  afterContent,
  fullWidth = false,
  ...props
}) => {
  const sizeStyles: { [key in ButtonSizeVariant]: string } = {
    small: `
      padding: 8px 14px;
      font-size: 12px;
    `,
    medium: `
      padding: 10px 22px;
      font-size: 14px;
    `,
    large: `
      padding: 13px 25px;
      font-size: 20px;
    `,
  };

  const currentSizeStyles = sizeStyles[size];

  const getVariantStyles = (
    palette: PaletteType
  ): { [key in ButtonVariantType]: string } => {
    const currentColor = palette[color];
    return {
      text: `
        color: ${currentColor.main};
        fill: ${currentColor.main};
        background: none;
        border: none;

        &:hover {
          color: ${currentColor.dark};
          fill: ${currentColor.dark};
        }
        
        &:active {
          color: ${currentColor.light};
          fill: ${currentColor.light};
        }
      `,
      contained: `
        color: ${currentColor.contrast};
        fill: ${currentColor.contrast};
        background: ${currentColor.main};
        border: none;

        &:hover {
          background: ${currentColor.dark};
        }
        
        &:active {
          background: ${currentColor.light};
        }
      `,
      outlined: `
        background: none;
        border: 1px solid ${currentColor.main};
        color: ${currentColor.main};
        fill: ${currentColor.main};

        &:hover {
          color: ${currentColor.dark};
          fill: ${currentColor.dark};
          border: 1px solid ${currentColor.dark};
        }
        
        &:active {
          color: ${currentColor.light};
          fill: ${currentColor.light};
          border: 1px solid ${currentColor.light};
        }
      `,
    };
  };

  const BoxContent = styled.button`
    cursor: pointer;
    transition: all 0.1s;
    border-radius: 4px;
    display: flex;
    letter-spacing: 0.5px;
    align-items: center;
    justify-content: center;
    ${fullWidth && 'width: 100%;'}
    ${currentSizeStyles}
    ${({ theme }) => getVariantStyles(theme.palette)[variant]}
  `;

  return (
    <BoxContent type="button" {...props}>
      {beforeContent && (
        <Box m="0 10px 0 0" display="flex" alignItems="center">
          {beforeContent}
        </Box>
      )}
      {content}
      {afterContent && (
        <Box m="0 0 0 10px" display="flex" alignItems="center">
          {afterContent}
        </Box>
      )}
    </BoxContent>
  );
};
