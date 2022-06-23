import { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '../Text';
import { SwitchProps, IItemProps, IBoxContentProps } from './Switch.types';

/**
 * Primary UI component for user interaction
 */
export const Switch: FC<SwitchProps> = ({
  items,
  value: selectedValue,
  onChange,
  disabled = false,
  ...props
}) => (
  <BoxContent {...props} disabled={disabled}>
    {items.map(({ label, value }) => (
      <Item
        key={value}
        activated={value === selectedValue}
        onClick={() => onChange(value)}
      >
        <Text variant="body2" color="inherit">
          {label}
        </Text>
      </Item>
    ))}
  </BoxContent>
);

const Item = styled.div<IItemProps>`
  transition: all 0.1s;
  padding: 7px 10px;
  letter-spacing: 0.5px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.primary.main};
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.palette.grey[300]};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  &:first-child {
    border-radius: 20px 0px 0px 20px;
    padding: 7px 10px 7px 15px;
  }
  &:last-child {
    border-radius: 0px 20px 20px 0px;
    padding: 7px 15px 7px 10px;
  }
  ${({ activated, theme }) =>
    activated &&
    `
		background: ${theme.palette.primary.main};
		color: ${theme.palette.primary.contrast};
		border: 1px solid ${theme.palette.primary.main};
		pointer-events: none;
	`}
`;

const BoxContent = styled.div<IBoxContentProps>`
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 20px;
  ${({ disabled, theme }) =>
    disabled &&
    `
		overflow: hidden;
		background: ${theme.palette.grey[100]};
		pointer-events: none;
		opacity: 0.3;
	`}
`;
