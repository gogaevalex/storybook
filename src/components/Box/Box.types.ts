import React from 'react';
import * as CSS from 'csstype';

export type BoxTagsVariantType =
  | 'span'
  | 'div'
  | 'header'
  | 'i'
  | 'li'
  | 'ul'
  | 'ol';

export type BoxDisplayType =
  | 'inline'
  | 'block'
  | 'contents'
  | 'flex'
  | 'grid'
  | 'inline-block'
  | 'inline-flex'
  | 'inline-grid'
  | 'inline-table'
  | 'list-item'
  | 'run-in'
  | 'table'
  | 'table-caption'
  | 'table-column-group'
  | 'table-header-group'
  | 'table-footer-group'
  | 'table-row-group'
  | 'table-cell'
  | 'table-column'
  | 'table-row'
  | 'none'
  | 'initial'
  | 'inherit';

export interface GenerateStylesType {
  flexBasis?: CSS.Property.FlexBasis;
  flexDirection?: CSS.Property.FlexDirection;
  flexWrap?: CSS.Property.FlexWrap;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  alignContent?: CSS.Property.AlignContent;
  order?: CSS.Property.Order;
  flex?: CSS.Property.Flex;
  flexGrow?: CSS.Property.FlexGrow;
  flexShrink?: CSS.Property.FlexShrink;
  alignSelf?: CSS.Property.AlignSelf;
  justifyItems?: CSS.Property.JustifyItems;
  justifySelf?: CSS.Property.JustifySelf;
  gridGap?: CSS.Property.GridGap;
  gridColumnGap?: CSS.Property.GridColumnGap;
  gridRowGap?: CSS.Property.GridRowGap;
  gridColumn?: CSS.Property.GridColumn;
  gridRow?: CSS.Property.GridRow;
  gridAutoFlow?: CSS.Property.GridAutoFlow;
  gridAutoColumns?: CSS.Property.GridAutoColumns;
  gridAutoRows?: CSS.Property.GridAutoRows;
  gridTemplateColumns?: CSS.Property.GridAutoColumns;
  gridTemplateRows?: CSS.Property.GridAutoRows;
  gridTemplateAreas?: CSS.Property.GridTemplateAreas;
  gridArea?: CSS.Property.GridArea;
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  boxSizing?: string;
}

export interface CommonProps extends GenerateStylesType {
  /**
   * Display
   */
  display?: BoxDisplayType;
  /**
   * Margin
   */
  m?: string;
  /**
   * Padding
   */
  p?: string;
}

export interface BoxProps extends CommonProps {
  /**
   * Tag
   */
  tag?: BoxTagsVariantType;
  [key: string]: any;
}

export type ContentProps = CommonProps;
