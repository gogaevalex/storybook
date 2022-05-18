export type AlertTypeVariant = 'error' | 'success' | 'warning' | 'info';

export interface CommonProps {
  type?: AlertTypeVariant;
  m?: string;
  /**
   * Padding
   */
  p?: string;
}

export interface AlertProps extends CommonProps {
  type?: AlertTypeVariant;
  fullWidtht?: boolean;
  fontSize?: number;
  icon?: JSX.Element;
}

export type ContentProps = CommonProps;
