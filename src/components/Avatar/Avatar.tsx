import { FC } from 'react';
import styled from '@emotion/styled';
import { AvatarIcon } from '../../icons/Avatar';
import { IAvatarProps, AvatarSizeType, IBoxContentProps } from './Avatar.types';

const sizeStyles: { [key in AvatarSizeType]: string } = {
  s: `height: 38px;
    width: 38px;`,
  m: `height: 48px;
    width: 48px;`,
  l: `height: 58px;
    width: 58px;`,
  xl: `height: 78px;
    width: 78px;`,
  xxl: `height: 98px;
    width: 98px;`,
};

export const Avatar: FC<IAvatarProps> = ({
  size = 'm',
  m = '0px',
  urlImage,
  onClick = () => {},
}) => {
  return (
    <BoxContent size={size} m={m} onClick={onClick}>
      {urlImage ? (
        <ImgAvatar src={urlImage} />
      ) : (
        <BackgroundIcon>
          <AvatarIcon size="100%" />
        </BackgroundIcon>
      )}
    </BoxContent>
  );
};

const BoxContent = styled.div<IBoxContentProps>`
  cursor: pointer;
  ${({ size }) => sizeStyles[size]}
  margin: ${({ m }) => m};
  border-radius: 100%;
`;

const ImgAvatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

const BackgroundIcon = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.palette.grey[100]};
  border-radius: 100%;
`;
