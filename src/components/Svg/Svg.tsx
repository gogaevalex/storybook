import React from 'react';
import { FC } from 'react';
import styled from '@emotion/styled';
import { SvgProps, BoxProps } from './Svg.types';

export const Svg: FC<SvgProps> = ({
  children,
  size = '20px',
  color = 'primary',
  p,
  m,
}) => {
  return (
    <Box
      viewBox="0 0 25 25"
      width={size}
      height={size}
      size={size}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      m={m}
      p={p}
    >
      {children}
    </Box>
  );
};

const Box = styled.svg<BoxProps>`
  fill: ${({ theme, color }) =>
    color ? theme.palette.icon[color] : 'inherit'};

  ${({ size }) => `
    width: ${size};
    height: ${size};
  `}
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`;
