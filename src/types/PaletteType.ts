import { IconPaletteVariantType } from '../components/Svg/Svg.types';

export type PaletteGeneralVariantType = 'main' | 'light' | 'dark' | 'contrast';
export type PaletteBacgroundVariantType = 'default' | 'modal';
export type PaletteCommonVariantType = 'black' | 'white';
export type PaletteTextVariantType = 'primary' | 'secondary';
export type PaletteEventsVariantType = 'hover' | 'focus';
export type PaletteGreyVariantType =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type PaletteGeneralType = { [key in PaletteGeneralVariantType]: string };

export type GeneralPaletteVariantType =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning';

export type GeneralPaletteType = {
  [key in GeneralPaletteVariantType]: PaletteGeneralType;
};

export interface PaletteType extends GeneralPaletteType {
  common: { [key in PaletteCommonVariantType]: string };
  grey: { [key in PaletteGreyVariantType]: string };
  text: { [key in PaletteTextVariantType]: string };
  icon: { [key in IconPaletteVariantType]: string };
  events: { [key in PaletteEventsVariantType]: string };
}
