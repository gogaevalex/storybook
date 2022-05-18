import ReactDOM from 'react-dom';
import { FC } from 'react';
import { IPortalProps } from './Portal.model';

export const Portal: FC<IPortalProps> = ({
  children,
  node = document.body,
}) => {
  return ReactDOM.createPortal(children, node);
};
