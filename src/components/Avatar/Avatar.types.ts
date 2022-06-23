export type AvatarSizeType = 's' | 'm' | 'l' | 'xl' | 'xxl';

export interface IAvatarProps {
  size?: AvatarSizeType;
  m?: string;
  urlImage?: string;
  onClick?: () => void;
}

export type IBoxContentProps = {
  size: AvatarSizeType;
  m: string;
};
