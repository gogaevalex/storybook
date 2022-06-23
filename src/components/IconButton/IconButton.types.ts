export type IconButtonSizeVariant = 's' | 'm' | 'l';

export type IBoxContentProps = {
  disabled: boolean;
  size: IconButtonSizeVariant;
};

export type IconButtonPaletteVariantType =
  | 'primary'
  | 'error'
  | 'success'
  | 'warning';

export interface IconButtonProps {
  /**
   * Svg Icon
   */
  children: JSX.Element;
  /**
   * How large should the IconButton be?
   */
  size?: IconButtonSizeVariant;
  /**
   * Disabled click
   */
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
