import { Link, type LinkComponentProps } from '@tanstack/react-router';
import type { ComponentProps } from 'react';
import { css, cx } from '~/css';

const ProjectContainerStyle = css({
	display: 'grid',
	gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
	gap: '40px',
});

const ProjectCardStyle = css({
	position: 'relative',
	overflow: 'hidden',
	width: 'full',
	borderRadius: '12px',
	_hover: {
		'& img': {
			transform: 'scale(1.06)',
		},
	},
});

const ProjectCardImageStyle = css({
	display: 'block',
	width: 'full',
	height: 'auto',
	borderRadius: '12px',
	transform: 'scale(1)',
	transition: 'transform 0.5s ease-in-out',
});

const ProjectCardContentStyle = css({
	position: 'absolute',
	zIndex: '50',
	right: '4px',
	left: '4px',
	bottom: '4px',
	display: 'flex',
	flexDirection: 'column',
	gap: '12px',
	padding: '20px',
	borderRadius: '8px',
	color: 'gabiZinc.50',
	backgroundColor: 'rgba(7, 24, 49, 0.5)',
	backdropBlur: '8px',
});

const ProjectCardContentTitleStyle = css({
	fontSize: '1rem',
	fontWeight: 'medium',
	color: 'gabiZinc.50',
});

const ProjectCardContentSubtitleStyle = css({
	fontSize: '0.75rem',
	fontWeight: 'medium',
	textTransform: 'uppercase',
	letterSpacing: '0.125em',
	color: 'gabiZinc.300',
});

export const ProjectContainer = ({
	className,
	...props
}: ComponentProps<'div'>) => (
	<div className={cx(ProjectContainerStyle, className)} {...props} />
);

export const ProjectCard = ({ className, ...props }: LinkComponentProps) => (
	<Link className={cx(ProjectCardStyle, className)} {...props} />
);

export const ProjectCardImage = ({
	className,
	...props
}: ComponentProps<'img'>) => (
	<img
		className={cx(ProjectCardImageStyle, className)}
		alt='Project'
		{...props}
	/>
);

export const ProjectCardContent = ({
	className,
	...props
}: ComponentProps<'div'>) => (
	<div className={cx(ProjectCardContentStyle, className)} {...props} />
);

export const ProjectCardContentTitle = ({
	className,
	...props
}: ComponentProps<'h3'>) => (
	<h3 className={cx(ProjectCardContentTitleStyle, className)} {...props} />
);

export const ProjectCardContentSubtitle = ({
	className,
	...props
}: ComponentProps<'p'>) => (
	<p className={cx(ProjectCardContentSubtitleStyle, className)} {...props} />
);

const ProjectInfoContainerStyle = css({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	gap: '32px',
	width: '100%',

	sm: {
		flexDirection: 'row',
		gap: '64px',
	},
});

const ProjectInfoStyle = css({
	display: 'flex',
	flexDirection: 'column',
	gap: '10px',
});

const ProjectInfoTitleStyle = css({
	fontSize: '0.75rem',
	letterSpacing: '0.125em',
	textTransform: 'uppercase',
	color: 'gabiZinc.500',
});

const ProjectInfoDescriptionStyle = css({
	fontSize: '1rem',
	color: 'gabiZinc.950',
});

export const ProjectInfoContainer = ({
	className,
	...props
}: ComponentProps<'div'>) => (
	<div className={cx(ProjectInfoContainerStyle, className)} {...props} />
);

export const ProjectInfo = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={cx(ProjectInfoStyle, className)} {...props} />
);

export const ProjectInfoTitle = ({
	className,
	...props
}: ComponentProps<'h4'>) => (
	<h4 className={cx(ProjectInfoTitleStyle, className)} {...props} />
);

export const ProjectInfoDescription = ({
	className,
	...props
}: ComponentProps<'p'>) => (
	<p className={cx(ProjectInfoDescriptionStyle, className)} {...props} />
);
