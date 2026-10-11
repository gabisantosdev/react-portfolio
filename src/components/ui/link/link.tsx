import { Link, type LinkComponentProps } from '@tanstack/react-router';
import { cn } from 'cn';
import type { ComponentProps } from 'react';

const linkBase =
	'text-[1em] font-medium text-center py-5 px-8 rounded-xl border border-solid transition-colors duration-300 ease-in-out';

const colorVariants = {
	light: 'border-gabiZinc-200 text-gabiZinc-950 hover:bg-gabiZinc-100',
	dark: 'border-gabiZinc-950 text-gabiZinc-50 bg-gabiZinc-950 hover:bg-gabiZinc-700',
	accent:
		'border-gabiZinc-600 text-gabiZinc-50 bg-gabiBlue-600 shadow-[0_4px_20px_0_rgba(21,93,252,0.5)] hover:bg-gabiBlue-500',
} as const;

type ColorVariant = keyof typeof colorVariants;

function LinkInternal({
	variant = 'light',
	className,
	...props
}: LinkComponentProps & { variant: ColorVariant }) {
	return (
		<Link
			className={cn(linkBase, colorVariants[variant], className)}
			{...props}
		/>
	);
}

function LinkExternal({
	variant = 'light',
	className,
	...props
}: ComponentProps<'a'> & { variant: ColorVariant }) {
	return (
		<a className={cn(linkBase, colorVariants[variant], className)} {...props} />
	);
}

function LinkContainer({ className, ...props }: ComponentProps<'div'>) {
	return <div className={cn('grid grid-cols-2 gap-5', className)} {...props} />;
}

export { LinkContainer, LinkExternal, LinkInternal };
