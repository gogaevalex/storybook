import { FC } from 'react';
import styled from '@emotion/styled';
import { SvgProps, BoxProps } from './Svg.types';

export const Svg: FC<SvgProps> = ({ children, size, color, p, m }) => {
  return (
    <Box viewBox="0 0 25 25" size={size} color={color} m={m} p={p}>
      {children}
    </Box>
  );
};

const Box = styled.svg<BoxProps>`
  fill: ${({ theme, color }) =>
    color ? theme.palette.icon[color] : 'inherit'};
  ${({ size }) =>
    size
      ? `
        width: ${size}px;
        height: ${size}px;
      `
      : `
        width: 1em;
        height: 1em;
      `}
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`;
