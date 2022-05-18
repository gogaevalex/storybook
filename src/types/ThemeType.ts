import { BreakpointsType } from './BreakpointsType';
import { PaletteType } from './PaletteType';
import { TextSizeType, TextWeightType } from '../components/Text/Text.types';
import { IconSizeType } from '../components/Svg/Svg.types';

export type ThemeType = {
  palette: PaletteType;
  breakpoints: BreakpointsType;
  textSize: TextSizeType;
  textWeight: TextWeightType;
  iconSize: IconSizeType;
};
