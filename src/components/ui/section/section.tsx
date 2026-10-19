import type { ComponentProps } from 'react';
import { css, cx } from '~/css';

const SectionStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '10',
	w: 'full',
	maxWidth: '1200px',
	marginInline: 'auto',
	padding: '4rem 1.25rem',
	border: '1px solid',
	borderColor: 'gabiZinc.300',
	borderTop: '0px',
	bg: 'gabiZinc.50',
});

const SectionInfoContainerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	gap: '8',
	w: 'full',
	sm: { flexDirection: 'row' },
});

export const Section = ({ className, ...props }: ComponentProps<'section'>) => (
	<section className={cx(SectionStyle, className)} {...props} />
);

export const SectionInfoContainer = ({
	className,
	...props
}: ComponentProps<'div'>) => (
	<div className={cx(SectionInfoContainerStyle, className)} {...props} />
)