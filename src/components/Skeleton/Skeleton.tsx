import React, { FC } from 'react';
import styled from '@emotion/styled';
import { ISkeletonProps, IContentProps } from './Skeleton.model';

export const Skeleton: FC<ISkeletonProps> = ({
  width = '100%',
  height = '100px',
  borderRadius = 'none',
  m = '0',
}) => {
  return (
    <Content width={width} height={height} borderRadius={borderRadius} m={m} />
  );
};

const Content = styled.div<IContentProps>`
  ${({ width, height, m, borderRadius }) => `
    width: ${width};
    height: ${height};
    margin: ${m};
    border-radius: ${borderRadius};
  `}
  background-color: rgba(0, 0, 0, 0.055);
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.07),
      rgba(0, 0, 0, 0)
    );
    transform: translateX(-100%);
    animation: loading 1.75s 0.5s infinite;
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
`;
