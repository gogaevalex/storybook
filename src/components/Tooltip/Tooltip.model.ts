export type IPositions = 'top' | 'right' | 'bottom' | 'left';

export type ITooltipProps = {
  position?: IPositions;
  children: React.ReactElement;
  width?: string;
  content: string | JSX.Element;
};

export type IRectProps = {
  top?: string;
  left?: string;
  width?: string;
  height?: string;
};
