import type { ComponentProps } from 'react';
import { css, cx } from '~/css';

const InputBaseStyle = css({
	fontSize: '1rem',

	padding: '24px',

	borderRadius: '10px',
	border: '1px solid',
	borderColor: 'gabiZinc.200',
	color: 'gabiZinc.500',
	bg: 'gabiZinc.100',

	outlineWidth: '1px',
	outlineStyle: 'solid',
	outlineColor: 'transparent',

	transition: 'outline-color 0.3s ease-in-out',

	_hover: {
		outlineColor: 'gabiBlue.600',
	},

	_focusVisible: {
		outlineColor: 'gabiBlue.600',
	},
});

const SelectStyle = css({
	appearance: 'base-select',

	'&::picker(select)': {
		appearance: 'base-select',
		marginBlock: '8px',
		padding: '8px',

		border: '1px solid',
		borderColor: 'gabiZinc.200',
		borderRadius: '10px',
		bg: 'gabiZinc.50',
		boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
	},
});

const OptionStyle = css({
	padding: '12px',
	borderRadius: '6px',
	color: 'gabiZinc.950',
	transition: 'background-color 0.3s ease-in-out',

	_hover: {
		bg: 'gabiZinc.100',
	},
	_checked: {
		bg: 'gabiZinc.100',
	},
});

const TextareaStyle = css({
	minHeight: '300px',
	resize: 'none',
});

export const Input = ({ className, ...props }: ComponentProps<'input'>) => (
	<input className={cx(InputBaseStyle, className)} {...props} />
);

export const Select = ({ className, ...props }: ComponentProps<'select'>) => (
	<select className={cx(InputBaseStyle, SelectStyle, className)} {...props} />
);

export const Option = ({ className, ...props }: ComponentProps<'option'>) => (
	<option className={cx(InputBaseStyle, OptionStyle, className)} {...props} />
);

export const Textarea = ({
	className,
	...props
}: ComponentProps<'textarea'>) => (
	<textarea
		className={cx(InputBaseStyle, TextareaStyle, className)}
		{...props}
	/>
);
