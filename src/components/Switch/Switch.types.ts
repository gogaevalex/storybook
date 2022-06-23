export type SwitchSizeVariant = 's' | 'm' | 'l';

export type SwitchPaletteVariantType =
  | 'primary'
  | 'error'
  | 'success'
  | 'warning';

export type SwitchItemsType = {
  label: string;
  value: string;
};

export type IItemProps = {
  activated: boolean;
};

export type IBoxContentProps = {
  disabled: boolean;
};

export interface SwitchProps {
  /**
   * List Item for Switch
   */
  items: SwitchItemsType[];
  /**
   * Current active label
   */
  value?: string | null;
  /**
   * Optional change handler
   */
  onChange: (arg: string) => void;
  /**
   * What background color to use
   */
  color?: SwitchPaletteVariantType;
  /**
   * Disabled click
   */
  disabled?: boolean;
}
