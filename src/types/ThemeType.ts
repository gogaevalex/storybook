import { BreakpointsType } from './BreakpointsType';
import { PaletteType } from './PaletteType';
import { IconSizeType } from '../components/Svg/Svg.types';

export type ThemeType = {
  palette: PaletteType;
  breakpoints: BreakpointsType;
  iconSize: IconSizeType;
};
