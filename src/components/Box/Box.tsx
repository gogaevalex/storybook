import { FC, forwardRef } from 'react';
import styled from '@emotion/styled';
import { BoxProps, ContentProps } from './Box.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getGeneratedInlineCss = (data: { [key: string]: any }): string => {
  let resultStr = '';
  Object.keys(data).forEach((itemKey) => {
    resultStr += `${itemKey.replace(
      /[A-Z]/g,
      (letter) => `-${letter.toLowerCase()}`
    )}: ${data[itemKey]};`;
  });
  return resultStr;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Box: FC<BoxProps> = forwardRef<any, BoxProps>(
  (
    {
      children,
      tag = 'div',
      display = 'block',
      m = 0,
      p = 0,
      // TODO: create generator
      flexBasis,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      order,
      flex,
      flexGrow,
      flexShrink,
      alignSelf,
      justifyItems,
      justifySelf,
      gridGap,
      gridColumnGap,
      gridRowGap,
      gridColumn,
      gridRow,
      gridAutoFlow,
      gridAutoColumns,
      gridAutoRows,
      gridTemplateColumns,
      gridTemplateRows,
      gridTemplateAreas,
      gridArea,
      width,
      maxWidth,
      minWidth,
      height,
      maxHeight,
      minHeight,
      boxSizing,
      ...props
    },
    ref
  ) => {
    const Content = styled(tag)<ContentProps>`
      display: ${display};
      margin: ${m};
      padding: ${p};
      ${getGeneratedInlineCss({
        flexBasis,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
        order,
        flex,
        flexGrow,
        flexShrink,
        alignSelf,
        justifyItems,
        justifySelf,
        gridGap,
        gridColumnGap,
        gridRowGap,
        gridColumn,
        gridRow,
        gridAutoFlow,
        gridAutoColumns,
        gridAutoRows,
        gridTemplateColumns,
        gridTemplateRows,
        gridTemplateAreas,
        gridArea,
        width,
        maxWidth,
        minWidth,
        height,
        maxHeight,
        minHeight,
        boxSizing,
      })}
    `;

    return (
      <Content {...props} ref={ref}>
        {children}
      </Content>
    );
  }
);
