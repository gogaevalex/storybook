import { FC } from 'react';
import styled from '@emotion/styled';
import { Text } from '../Text';
import { ITagProps, IBoxContentProps } from './Tag.types';

/**
 * Primary UI component for user interaction
 */
export const Tag: FC<ITagProps> = ({
  content,
  activated = false,
  fullWidth = false,
  ...props
}) => (
  <BoxContent fullWidth={fullWidth} activated={activated} {...props}>
    <Text variant="body2" color="inherit">
      {'# ' + content}
    </Text>
  </BoxContent>
);

const BoxContent = styled.div<IBoxContentProps>`
  cursor: pointer;
  transition: all 0.1s;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 20px;
  width: ${({ fullWidth }) => fullWidth && '100%'};
  background: ${({ theme }) => theme.palette.primary.contrast};
  color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  ${({ activated, theme }) =>
    activated &&
    `
    background: ${theme.palette.primary.main};
		color: ${theme.palette.primary.contrast};
		border: 1px solid ${theme.palette.primary.dark};
		&:hover {
			background: ${theme.palette.primary.dark};
			color: ${theme.palette.primary.contrast};
  	}
	`}
`;
