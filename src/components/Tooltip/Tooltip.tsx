import React, {
  useState,
  FC,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import styled from '@emotion/styled';
import { Portal } from '../Portal';
import { ITooltipProps, IPositions } from './Tooltip.model';

export const Tooltip: FC<ITooltipProps> = ({
  children,
  position = 'top',
  width = 'max-content',
  content,
}) => {
  const [style, setStyle] = useState<string | null>();

  const ref = useRef<HTMLElement>();
  const refTooltip =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

  const handleChangeStyle = useCallback(
    (rect: DOMRect, currentPosition: IPositions) => {
      const positions: {
        [key in IPositions]: () => string;
      } = {
        top: () => `
					top: ${rect.top}px;
					left: ${rect.left + rect.width / 2}px;
					transform: translate(-50%, calc(-100% + -5px));
					display: flex;
					justify-content: center;
				`,
        left: () => `
					top: ${rect.top}px;
					right: ${window.innerWidth + 5 - rect.left}px;
					height: ${rect.height}px;
					display: flex;
					align-items: center;
					justify-content: flex-start;`,
        right: () => `
					top: ${rect.top}px;
					left: ${rect.left + rect.width + 5}px;
					height: ${rect.height}px;
					display: flex;
					align-items: center;
					justify-content: flex-start;
				`,
        bottom: () => `
					top: ${rect.top + rect.height + 5}px;
					left: ${rect.left + rect.width / 2}px;
					display: flex;
					transform: translate(-50%, 0);
					justify-content: center;
				`,
      };

      setStyle(positions[currentPosition]);
    },
    []
  );

  const mouseEnter = useCallback(
    (event: MouseEvent) => {
      const node = event.target as HTMLElement;
      const rect = node.getBoundingClientRect();
      handleChangeStyle(rect, position);
    },
    [handleChangeStyle, position]
  );

  const mouseLeave = () => {
    setStyle(null);
  };

  useEffect(() => {
    const current = ref?.current;
    if (current) {
      current.addEventListener('mouseenter', mouseEnter);
      current.addEventListener('mouseleave', mouseLeave);
    }
  }, [mouseEnter, ref]);

  const checkPlace = useCallback(() => {
    const wrapperNode = ref.current;
    const tooltipNode = refTooltip.current;
    if (!wrapperNode || !tooltipNode) return null;
    const tooltipRect = tooltipNode.getBoundingClientRect();
    const wrrapperRect = wrapperNode.getBoundingClientRect();

    const top = tooltipRect.top;
    const bottom = window.innerHeight - tooltipRect.top - tooltipRect.height;
    const right = window.innerWidth - tooltipRect.left - tooltipRect.width;
    const left = tooltipRect.left;

    switch (position) {
      case 'right':
        if (right < 0) {
          handleChangeStyle(wrrapperRect, 'left');
        }
        break;
      case 'left':
        if (left < 0) {
          handleChangeStyle(wrrapperRect, 'right');
        }
        break;
      case 'bottom':
        if (bottom < 0) {
          handleChangeStyle(wrrapperRect, 'top');
        }
        break;
      default:
        if (top < 0) {
          handleChangeStyle(wrrapperRect, 'bottom');
        }
    }
  }, [handleChangeStyle, position]);

  useEffect(() => {
    const tooltipNode = refTooltip.current;
    if (tooltipNode) {
      checkPlace();
    }
  }, [checkPlace, style]);

  const Wrapper = styled.div`
    position: fixed;
    z-index: 101;
    width: ${width};
    ${style}
  `;

  const Content = styled.div`
    background: red;
    padding: 4px 8px;
    background: ${({ theme }) => theme.palette.grey[600]};
    color: ${({ theme }) => theme.palette.common.white};
    border-radius: 5px;
    font-size: 12px;

    animation: ani 0.3s forwards;

    @keyframes ani {
      0% {
        opacity: 0;
        transform: scale(0.95);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  const childrenCntent = useMemo(() => {
    const childrenProps = {
      ref,
      ...children.props,
    };
    return <>{React.cloneElement(children, childrenProps)}</>;
  }, [children]);

  return (
    <>
      {style && (
        <Portal>
          <Wrapper ref={refTooltip}>
            <Content>{content}</Content>
          </Wrapper>
        </Portal>
      )}
      {childrenCntent}
    </>
  );
};
