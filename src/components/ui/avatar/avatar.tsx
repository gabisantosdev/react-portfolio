import { css } from '~/css';

const AvatarContainerStyle = css({
	overflow: 'hidden',
	borderWidth: '4px',
	borderStyle: 'solid',
	borderColor: 'gabiBlue.950',
	rounded: 'full',
	width: '5em',
	height: '5em',
	boxShadow: '0 4px 8px 0 rgba(22, 36, 86, 0.25)',
});

const AvatarStyle = css({
	width: 'full',
	height: 'full',
});

export default function Avatar() {
	return (
		<div className={AvatarContainerStyle}>
			<img
				className={AvatarStyle}
				src='/images/gabriel_perfil.webp'
				alt='Gabriel Coutinho avatar'
				width='5em'
				height='5em'
			/>
		</div>
	);
}
