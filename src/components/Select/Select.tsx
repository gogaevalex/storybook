/* eslint-disable prettier/prettier */
import React, { FC, useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'
import { Box } from '../Box';
import { PaletteType } from '../../types/PaletteType';
import {
  SelectProps,
  SelectVariantType,
} from './Select.types';

export const Select: FC<SelectProps> = ({
  variant = 'outlined',
  children,
  label = 'Label',
	helpText = '',
	isError = false,
	isDisable = false,
	maxListHeight = 'auto',
  ...props
}) => {
	const [selectedItem, setSelectedItem] = useState(null);
  const [open, setOpen] = useState(false);
	const [boxWidth, setBoxWidth] = useState("auto");
	const listRef = useRef<HTMLUListElement>(null);
	const mainItemRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (mainItemRef.current && listRef.current) {
			if(mainItemRef.current.clientWidth < listRef.current.clientWidth) {
				setBoxWidth(`${listRef.current.clientWidth}px`);
			} else {
				setBoxWidth(`${mainItemRef.current.clientWidth}px`);
			}
		}
	}, [])

	const colorDetect = (error: boolean, disable: boolean, defaultColor: string, palette: PaletteType) => {
		if (error) return palette.error.main;
		if (disable) return palette.grey[400];
		return defaultColor;
	}
  const getVariantStyles = (
    palette: PaletteType
  ): { [key in SelectVariantType]: string } => {
    const currentColor = palette;
		
    return {
      filled: `
				background: ${currentColor.grey[100]};
				border-bottom: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[500], currentColor)};
				color: ${colorDetect(isError, isDisable, currentColor.common.black, currentColor)};
				${open ? `
					border-bottom: 2px solid${colorDetect(isError, isDisable, currentColor.primary.main, currentColor)};
					color: ${colorDetect(isError, isDisable, currentColor.primary.light, currentColor)};
				` : ``}
				&:hover {
					${!open && `
						border-bottom: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[800], currentColor)};
					`}
				}

			`,
      line: `
				background: none;
				border-bottom: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[500], currentColor)};
				color: ${colorDetect(isError, isDisable, currentColor.common.black, currentColor)};
				${open ? `
					border-bottom: 2px solid ${colorDetect(isError, isDisable, currentColor.primary.main, currentColor)};
					color: ${colorDetect(isError, isDisable, currentColor.primary.light, currentColor)};
				` : ``}
				&:hover {
					${!open && `
						border-bottom: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[800], currentColor)};
					`}
				}

			`,
      outlined: `
				background: none;
				border: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[500], currentColor)};
				color: ${colorDetect(isError, isDisable, currentColor.common.black, currentColor)};
				${open ? `
					border: 1px solid ${colorDetect(isError, isDisable, currentColor.primary.main, currentColor)};
					outline: 1px solid ${colorDetect(isError, isDisable, currentColor.primary.main, currentColor)}; 
					color: ${colorDetect(isError, isDisable, currentColor.primary.light, currentColor)};
				` : ``}
				&:hover {
					${!open && `
						border-bottom: 1px solid ${colorDetect(isError, isDisable, currentColor.grey[800], currentColor)};
					`}
				}

			`,
    };
  };

  const BoxContent = styled.div`
		min-width: 120px;
		width: fit-content;
		position: relative;
    margin: 0;

  `;

	const MainItem = styled.div`
		border-radius: ${variant !== 'outlined' ? '4px 4px 0px 0px' : '4px'};
		position: relative;
    display: flex;
    cursor: ${isDisable ? 'auto' : 'pointer'};
    justify-content: space-between;
		align-items: center;
    padding: ${variant === 'line' ? '10px 46px 10px 0px' : '10px 46px 10px 18px'};
    margin: 0 0 4px 0;
		height: 56px;
		width: ${boxWidth};
		box-sizing: border-box;
		${({ theme }) => getVariantStyles(theme.palette)[variant]}
    &:hover {
			transition: all 0.1s;
    }

  `;
	const getPositionLabel = {
		filled: `
			left: 14px;
			top: 2px;
		`,
		line: `
			left: -5px;
			top: 2px;
		`,
		outlined: `
			left: 14px;
			top: -10px;
		`,
	}
  const Label = styled.div`
		background: ${({ theme }) => variant === 'outlined' ? theme.palette.common.white : 'none'};
		padding: 0px 3px;
		top: auto;
		${(open || selectedItem) && `
			${getPositionLabel[variant]}
			transform: scale(0.8);
			position: absolute;
		`}
  `;

	const HelpText = styled.span`
		font-size: ${({ theme }) => `${theme.textSize.caption}px`};
		color: ${({theme}) => colorDetect(isError, isDisable, theme.palette.grey[600], theme.palette)};
		position: absolute;
		bottom: -18px;
    left: 10px;
    z-index: 0;
	`;

	const SelectedItem = styled.div`
		color: ${({ theme }) => theme.palette.common.black};
		padding: 0px 3px;
		max-width: calc(133% - 24px);
		display: ${selectedItem ? 'block' : 'none'};
    bottom: ${variant === 'outlined' ? 'auto' : '12px'};
	`;

  const List = styled.ul`
		background: ${({ theme }) => theme.palette.common.white};
		display: block;
		width: ${boxWidth};
		padding: 10px;
		visibility: ${open ? 'initial' : 'hidden'};
    border-radius: 10px;
		box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
		margin: 0px;
    position: absolute;
		z-index: 1;
    max-height: ${maxListHeight};
		overflow-y: auto;
		& li {
			cursor: pointer;
			padding: 6px 16px;
			list-style-type: none;
			&:hover {
				background: rgba(0, 0, 0, 0.04);
			}
		}
  `;

	const Triangle = styled.div`
		position: absolute;
		border: 5px solid transparent;
		border-top: 7px solid ${({theme}) => isDisable ? theme.palette.grey[400] : theme.palette.common.black};
		right: 18px;
		top: calc(50% - 3px);
	`;

	const BackgroundArea = styled.div`
		position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0px;
    background-color: transparent;
    z-index: -1;
	`;

	const openList = () => {
		if (!isDisable) setOpen(!open);
	}

	const clickListItem = (text: any, value: string) => {
		setSelectedItem(text);
		setOpen(false);
	}
	const list = React.Children.map(children,
		(child: React.ReactElement) => {
			return (
				React.cloneElement(child, {
					onClick: () => clickListItem(child.props.children, child.props.children),
				})
			)
		}

	)
  return (
		<BoxContent 
			{...props}
		>
			<MainItem
				ref={mainItemRef}
				onClick={() => openList()}
			>
				<Label>
					{label}
				</Label>
				<SelectedItem>
					{selectedItem}
				</SelectedItem>
				<Triangle/>
			</MainItem>
			<HelpText>{helpText}</HelpText>
				<List ref={listRef}>{list}</List>
				<BackgroundArea onClick={() => setOpen(false)}/>
    </BoxContent>
  );
};
