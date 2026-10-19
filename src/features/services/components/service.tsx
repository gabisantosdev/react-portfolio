import {} from 'lucide-react';
import type { ComponentProps } from 'react';
import { css, cx } from '~/css';

const ServiceCardStyle = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '20px',
	width: 'full',
	padding: '20px',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: 'gabiZinc.200',
	rounded: '12px',
});

const ServiceCardIconStyle = css({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	width: '3.125rem',
	height: '3.125rem',
	borderWidth: '1px',
	borderStyle: 'solid',
	borderColor: 'gabiZinc.200',
	rounded: '12px',
});

const ServiceCardIdStyle = css({
	fontSize: '1rem',
	color: 'gabiZinc.400',
});

const ServiceCardTitleStyle = css({
	fontSize: '1rem',
	fontWeight: 'medium',
	color: 'gabiZinc.950',
});

const ServiceCardDescriptionStyle = css({
	fontSize: '0.875rem',
	color: 'gabiZinc.500',
});

const ServiceCard = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={cx(ServiceCardStyle, className)} {...props} />
);

const ServiceCardIcon = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={cx(ServiceCardIconStyle, className)} {...props} />
);

const ServiceCardId = ({ className, ...props }: ComponentProps<'span'>) => (
	<span className={cx(ServiceCardIdStyle, className)} {...props} />
);

const ServiceCardTitle = ({ className, ...props }: ComponentProps<'h3'>) => (
	<h3 className={cx(ServiceCardTitleStyle, className)} {...props} />
);

const ServiceCardDescription = ({
	className,
	...props
}: ComponentProps<'p'>) => (
	<p className={cx(ServiceCardDescriptionStyle, className)} {...props} />
);

export {
	ServiceCard,
	ServiceCardDescription,
	ServiceCardIcon,
	ServiceCardId,
	ServiceCardTitle,
};
