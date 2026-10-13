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

function TextTitleHero({ className, ...props }: ComponentProps<'h1'>) {
	return <h1 className={cx(TextTitleHeroStyle, className)} {...props} />;
}

function TextTitleSecondary({ className, ...props }: ComponentProps<'h2'>) {
	return <h2 className={cx(TextTitleSecondaryStyle, className)} {...props} />;
}

function TextTag({ className, ...props }: ComponentProps<'p'>) {
	return <p className={cx(TextTagStyle, className)} {...props} />;
}

function TextDescription({ className, ...props }: ComponentProps<'p'>) {
	return <p className={cx(TextDescriptionStyle, className)} {...props} />;
}

function TextInfo({ className, ...props }: ComponentProps<'p'>) {
	return <p className={cx(TextInfoStyle, className)} {...props} />;
}

export {
	TextDescription,
	TextInfo,
	TextTag,
	TextTitleHero,
	TextTitleSecondary,
};
