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

const ProjectContainer = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={cx(ProjectContainerStyle, className)} {...props} />
);

const ProjectCard = ({ className, ...props }: LinkComponentProps) => (
	<Link className={cx(ProjectCardStyle, className)} {...props} />
);

const ProjectCardImage = ({ className, ...props }: ComponentProps<'img'>) => (
	<img
		className={cx(ProjectCardImageStyle, className)}
		alt='Project'
		{...props}
	/>
);

const ProjectCardContent = ({ className, ...props }: ComponentProps<'div'>) => (
	<div className={cx(ProjectCardContentStyle, className)} {...props} />
);

const ProjectCardContentTitle = ({
	className,
	...props
}: ComponentProps<'h3'>) => (
	<h3 className={cx(ProjectCardContentTitleStyle, className)} {...props} />
);

const ProjectCardContentSubtitle = ({
	className,
	...props
}: ComponentProps<'p'>) => (
	<p className={cx(ProjectCardContentSubtitleStyle, className)} {...props} />
);

export {
	ProjectCard,
	ProjectCardContent,
	ProjectCardContentSubtitle,
	ProjectCardContentTitle,
	ProjectCardImage,
	ProjectContainer,
};
