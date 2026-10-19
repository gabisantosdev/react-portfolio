import type { ComponentProps } from 'react';

export default function XTwitterIcon({
	size = 48,
	color = 'currentColor',
	strokeWidth = 4,
	className,
	...props
}: ComponentProps<'svg'> & {
	size?: number;
	color?: string;
	strokeWidth?: number;
}) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={size}
			height={size}
			viewBox='0 0 48 48'
			fill='none'
			stroke={color}
			strokeWidth={strokeWidth}
			strokeLinecap='round'
			strokeLinejoin='round'
			className={className}
			aria-label='Twitter icon'
			{...props}
		>
			<path d='M21.604 25.622L7.693 41.498M37.924 6.502L25.554 21.07M6.61 6.5l27.44 35h7.56l-27.439-35z' />
		</svg>
	);
}
