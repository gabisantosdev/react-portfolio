import { cn } from 'cn';
import type { ComponentProps } from 'react';

function TextTitleHero({ className, ...props }: ComponentProps<'h1'>) {
	return (
		<h1
			className={cn(
				'text-5xl font-medium tracking-tight text-center max-w-[17ch]',
				'text-gabiZinc-950',
				'sm:text-6xl',
				className,
			)}
			{...props}
		/>
	);
}

function TextTitleSecondary({ className, ...props }: ComponentProps<'h2'>) {
	return (
		<h2
			className={cn(
				'text-3xl font-medium tracking-tight text-center max-w-[20ch]',
				'text-gabiZinc-950',
				'sm:text-5xl',
				className,
			)}
			{...props}
		/>
	);
}

function TextTag({ className, ...props }: ComponentProps<'p'>) {
	return (
		<p
			className={cn(
				'text-sm font-medium uppercase py-2 px-3 rounded-md',
				'text-gabiZinc-950 bg-gabiZinc-200',
				className,
			)}
			{...props}
		/>
	);
}

function TextDescription({ className, ...props }: ComponentProps<'p'>) {
	return (
		<p
			className={cn(
				'text-gabiZinc-300 text-center max-w-[70ch]',
				'text-gabiZinc-500',
				className,
			)}
			{...props}
		/>
	);
}

function TextInfo({ className, ...props }: ComponentProps<'p'>) {
	return (
		<p
			className={cn(
				'text-sm tracking-[4px] uppercase',
				'text-gabiZinc-400',
				className,
			)}
			{...props}
		/>
	);
}

export {
	TextDescription,
	TextInfo,
	TextTag,
	TextTitleHero,
	TextTitleSecondary,
};
