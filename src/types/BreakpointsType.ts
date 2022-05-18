export type BreakpointsVariantType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointsType = {
  [key in BreakpointsVariantType]: number;
};
