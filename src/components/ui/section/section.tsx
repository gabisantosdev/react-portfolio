import { cn } from 'cn';
import type { ComponentProps } from 'react';

function Section({ className, ...props }: ComponentProps<'section'>) {
	return (
		<section
			className={cn(
				'flex flex-col items-center gap-10 w-full max-w-300 mx-auto py-16 px-5 border-2 border-dashed  border-t-0',
				'border-gabiZinc-300 bg-gabiZinc-50',
				className,
			)}
			{...props}
		/>
	);
}

function SectionInfoContainer({ className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-between gap-8 w-full',
				'sm:flex-row',
				className,
			)}
			{...props}
		/>
	);
}

export { Section, SectionInfoContainer };
