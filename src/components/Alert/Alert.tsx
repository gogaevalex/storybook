import { FC } from 'react';
import styled from '@emotion/styled';
import { ErrorIcon } from '../../icons/Error';
import { InfoIcon } from '../../icons/Info';
import { SuccessIcon } from '../../icons/Success';
import { WarningIcon } from '../../icons/Warning';
import { AlertProps, AlertTypeVariant } from './Alert.types';
import { PaletteType } from '../../types/PaletteType';

export const Alert: FC<AlertProps> = ({
  m = 0,
  p = '10px',
  children,
  fullWidtht,
  fontSize = 18,
  type = 'info',
  icon,
}) => {
  const iconData: {
    [key in AlertTypeVariant]: JSX.Element;
  } = {
    info: <InfoIcon m="0 10px 0 0" />,
    warning: <WarningIcon m="0 10px 0 0" />,
    success: <SuccessIcon m="0 10px 0 0" />,
    error: <ErrorIcon m="0 10px 0 0" />,
  };

  const getCurrentType = (palette: PaletteType): string => {
    const stylesData: { [key in AlertTypeVariant]: string } = {
      info: `
        background: ${palette.grey[500]};
        color: ${palette.common.white};
        fill: ${palette.common.white};
      `,
      warning: `
        background: ${palette.warning.main};
        color: ${palette.warning.contrast};
        fill: ${palette.warning.contrast};
      `,
      success: `
        background: ${palette.success.main};
        color: ${palette.success.contrast};
        fill: ${palette.success.contrast};
      `,
      error: `
        background: ${palette.error.main};
        color: ${palette.error.contrast};
        fill: ${palette.error.contrast};
      `,
    };

    return stylesData[type];
  };

  const Content = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 10px;
    margin: ${m};
    font-size: ${fontSize}px;
    box-sizing: border-box;
    padding: ${p};
    border-radius: 4px;
    ${fullWidtht && 'width: 100%;'}
    ${({ theme }) => getCurrentType(theme.palette)}
  `;

  return (
    <Content>
      {!icon ? iconData[type] : icon}
      {children}
    </Content>
  );
};
