import React from 'react';

export type IBoxContentProps = {
  fullWidth: boolean;
  activated: boolean;
};

export interface ITagProps {
  /**
   * Activation tag
   */
  activated?: boolean;
  /**
   * Tag contents
   */
  content: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * AfterContent
   */
  afterContent?: React.ReactNode | JSX.Element;
  /**
   * BeforeContent
   */
  beforeContent?: React.ReactNode | JSX.Element;
  /**
   * FullWidth
   */
  fullWidth?: boolean;
}
