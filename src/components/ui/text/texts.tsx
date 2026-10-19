import type { ComponentProps } from 'react';
import { css, cx } from '~/css';

const TextTitleHeroStyle = css({
	fontSize: '5xl',
	fontWeight: 'medium',
	letterSpacing: '-0.125rem',
	lineHeight: 'tight',
	textAlign: 'center',
	maxWidth: '17ch',
	color: 'gabiZinc.950',
	sm: {
		fontSize: '6xl',
	},
});

const TextTitleSecondaryStyle = css({
	fontSize: '3xl',
	fontWeight: 'medium',
	lineHeight: 'tight',
	textAlign: 'center',
	maxWidth: '20ch',
	color: 'gabiZinc.950',
	sm: {
		fontSize: '5xl',
	},
});

const TextTagStyle = css({
	fontSize: 'sm',
	fontWeight: 'medium',
	textTransform: 'uppercase',
	paddingInline: '3',
	paddingBlock: '2',
	rounded: 'md',
	color: 'gabiZinc.950',
	backgroundColor: 'gabiZinc.200',
});

const TextDescriptionStyle = css({
	fontSize: '1rem',
	textAlign: 'center',
	maxWidth: '70ch',
	color: 'gabiZinc.500',
});

const TextInfoStyle = css({
	fontSize: 'sm',
	letterSpacing: '0.25em',
	textTransform: 'uppercase',
	color: 'gabiZinc.400',
});

const TextTitleHero = ({ className, ...props }: ComponentProps<'h1'>) => (
	<h1 className={cx(TextTitleHeroStyle, className)} {...props} />
);

const TextTitleSecondary = ({ className, ...props }: ComponentProps<'h2'>) => (
	<h2 className={cx(TextTitleSecondaryStyle, className)} {...props} />
);

const TextTag = ({ className, ...props }: ComponentProps<'p'>) => (
	<p className={cx(TextTagStyle, className)} {...props} />
);

const TextDescription = ({ className, ...props }: ComponentProps<'p'>) => (
	<p className={cx(TextDescriptionStyle, className)} {...props} />
);

const TextInfo = ({ className, ...props }: ComponentProps<'p'>) => (
	<p className={cx(TextInfoStyle, className)} {...props} />
);

export {
	TextDescription,
	TextInfo,
	TextTag,
	TextTitleHero,
	TextTitleSecondary,
};
