import { FC } from 'react';
import styled from '@emotion/styled';
import { Box } from '../Box';
import { Text } from '../Text';
import { TextVariantType } from '../Text/Text.types';
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
  disabled = false,
  beforeContent,
  afterContent,
  fullWidth = false,
  ...props
}) => {
  const sizeStyles: { [key in ButtonSizeVariant]: string } = {
    small: `padding: 7px 20px;`,
    medium: `padding: 7px 20px;`,
    large: `padding: 7px 20px;`,
  };

  const textSizeStyles: { [key in ButtonSizeVariant]: TextVariantType } = {
    small: 'caption',
    medium: 'body2',
    large: 'body1',
  };

  const getVariantStyles = (
    palette: PaletteType
  ): { [key in ButtonVariantType]: string } => {
    const currentColor = palette[color];
    if (disabled) {
      return {
        contained: `
					color: ${currentColor.contrast};
					fill: ${currentColor.contrast};
					background: ${currentColor.light};
					border: none;
				`,
        outlined: `
					background: none;
					border: 1px solid ${currentColor.light};
					fill: ${currentColor.light};
					color: ${currentColor.light};
				`,
      };
    }
    return {
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
    cursor: ${disabled ? 'auto' : 'pointer'};
    transition: all 0.1s;
    border-radius: 20px;
    display: flex;
    letter-spacing: 0.5px;
    align-items: center;
    justify-content: center;
    ${fullWidth && 'width: 100%;'}
    ${sizeStyles[size]}
		${({ theme }) => getVariantStyles(theme.palette)[variant]}
  `;

  return (
    <BoxContent type="button" {...props}>
      {beforeContent && (
        <Box m="0 10px 0 0" display="flex" alignItems="center">
          {beforeContent}
        </Box>
      )}
      <Text variant={textSizeStyles[size]} color="inherit">
        {content}
      </Text>
      {afterContent && (
        <Box m="0 0 0 10px" display="flex" alignItems="center">
          {afterContent}
        </Box>
      )}
    </BoxContent>
  );
};
