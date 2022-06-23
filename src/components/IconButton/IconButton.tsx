import { FC } from 'react';
import styled from '@emotion/styled';
import {
  IconButtonProps,
  IBoxContentProps,
  IconButtonSizeVariant,
} from './IconButton.types';

const sizeStyles: { [key in IconButtonSizeVariant]: string } = {
  s: `
    padding: 6px;
    width: 18px;
    height: 18px;`,
  m: `
    padding: 8px;
    width: 24px;
    height: 24px;`,
  l: `
    padding: 12px;
    width: 30px;
    height: 30px;`,
};

/**
 * Primary UI component for user interaction
 */
export const IconButton: FC<IconButtonProps> = ({
  children,
  size = 'm',
  disabled = false,
  ...props
}) => (
  <BoxContent size={size} disabled={disabled} type="button" {...props}>
    {children}
  </BoxContent>
);

const BoxContent = styled.button<IBoxContentProps>`
  transition: all 0.1s;
  border: none;
  box-shadow: none;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  border-radius: 100%;
  background: none;
  box-sizing: content-box;
  ${({ size }) => sizeStyles[size]}
  ${({ theme }) =>
    `
    fill: ${theme.palette.primary.main};
		&:hover {
			background: ${theme.palette.events.hover};
  	}
    &:active {
			background: ${theme.palette.events.focus};
  	}
	`}
  ${({ disabled, theme }) =>
    disabled &&
    `
    fill: ${theme.palette.primary.light};
		opacity: 0.3;
		pointer-events: none;
	`}
`;
