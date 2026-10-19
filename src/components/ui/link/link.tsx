import { Link, type LinkComponentProps } from '@tanstack/react-router';
import type { ComponentProps } from 'react';
import { css, cva, cx, type RecipeVariantProps } from '~/css';

const LinkStyle = cva({
	base: {
		fontSize: '1rem',
		fontWeight: 'medium',
		textAlign: 'center',
		paddingBlock: '5',
		paddingInline: '8',
		rounded: 'xl',
		borderWidth: '1px',
		borderStyle: 'solid',
		transition:
			'background-color 0.3s ease-in-out, border-color 0.3s ease-in-out',
	},

	variants: {
		visual: {
			light: {
				borderColor: 'gabiZinc.200',
				color: 'gabiZinc.950',
				_hover: {
					borderColor: 'gabiBlue.600',
					backgroundColor: 'gabiZinc.100',
				},
			},
			dark: {
				borderColor: 'gabiZinc.950',
				color: 'gabiZinc.50',
				backgroundColor: 'gabiBlue.900',
				_hover: {
					backgroundColor: 'gabiBlue.700',
				},
			},
			accent: {
				borderColor: 'gabiBlue.500',
				color: 'gabiZinc.50',
				backgroundColor: 'gabiBlue.600',
				boxShadow: '0 4px 20px 0 rgba(21,93,252,0.5)',
				_hover: {
					backgroundColor: 'gabiBlue.500',
				},
			},
		},
	},
	defaultVariants: {
		visual: 'light',
	},
});

const LinkContainerStyle = css({
	display: 'grid',
	gridTemplateColumns: '1fr',
	gap: '5',

	sm: {
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',

		'& > :only-child': {
			gridColumn: '1 / -1',
			justifySelf: 'center',
			width: 'calc(50% - 1 / 2)',
		},
	},
});

export const LinkInternal = ({
	visual,
	className,
	...props
}: LinkComponentProps & RecipeVariantProps<typeof LinkStyle>) => (
	<Link className={cx(LinkStyle({ visual }), className)} {...props} />
);

export const LinkExternal = ({
	visual,
	className,
	...props
}: ComponentProps<'a'> & RecipeVariantProps<typeof LinkStyle>) => (
	<a className={cx(LinkStyle({ visual }), className)} {...props} />
);

export const LinkContainer = ({
	className,
	...props
}: ComponentProps<'div'>) => (
	<div className={cx(LinkContainerStyle, className)} {...props} />
);

export const Button = ({
	visual,
	className,
	...props
}: ComponentProps<'button'> & RecipeVariantProps<typeof LinkStyle>) => (
	<button className={cx(LinkStyle({ visual }), className)} {...props} />
);
