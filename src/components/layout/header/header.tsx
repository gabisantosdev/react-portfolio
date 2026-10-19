import InstagramIcon from '#/components/icons/instagram';
import WhatsappIcon from '#/components/icons/whatsapp';
import XTwitterIcon from '#/components/icons/x-twitter';
import { social } from '#/shared/data/social.data';
import { Link, linkOptions } from '@tanstack/react-router';
import { CodeXml, Ellipsis } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { css } from '~/css';

const HeaderRootStyle = css({
	position: 'sticky',
	top: '0',
	zIndex: '999',

	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '40px',

	width: '100%',
});

const HeaderContainerStyle = css({
	display: 'flex',
	flexDirection: 'column',

	width: 'full',
	maxWidth: '1200px',
	marginInline: 'auto',
	padding: '20px',

	border: '1px solid',
	borderColor: 'gabiZinc.300',
	borderTop: '0px',
	bg: 'gabiZinc.50',
});

const HeaderContentStyle = css({
	display: 'flex',
	justifyContent: 'space-between',
	width: 'full',
});

const HeaderNavStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: '20px',

	width: 'full',
	maxWidth: '1200px',
	marginInline: 'auto',
	marginBlock: '40px',
	padding: '20px',
});

const HeaderNavLinkStyle = css({
	fontSize: 'clamp(2.25rem, 10vw, 3.75rem)',
	fontWeight: 'medium',

	color: 'gabiZinc.950',

	transition: 'color 0.3s ease-in-out',
	_hover: {
		color: 'gabiZinc.950',
	},
});

const HeaderButtonStyle = css({
	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',

	padding: '12px',

	cornerShape: 'squircle',
	borderRadius: '20px',

	color: 'gabiZinc.50',
	bg: 'gabiBlue.600',

	boxShadow: '0 4px 10px 0 rgba(21, 93, 252, 0.5)',

	transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',

	_hover: {
		bg: 'gabiBlue.500',
		boxShadow: '0 4px 20px 0 oklch(62.3% 0.214 259.815 / 50%)',
	},
});

const HeaderMenuStyle = css({
	overflow: 'hidden',
});

const navLinks = linkOptions([
	{ to: '/', label: 'Início' },
	{ to: '/cases', label: 'Cases' },
	{ to: '/contact', label: 'Contato' },
]);

const sociais = [
	{ url: social.twitter.url, icon: XTwitterIcon },
	{ url: social.instagram.url, icon: InstagramIcon },
	{ url: social.whatsApp.url, icon: WhatsappIcon },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	return (
		<header className={HeaderRootStyle}>
			<div className={HeaderContainerStyle}>
				<div className={HeaderContentStyle}>
					<Link to='/'>
						<span className={HeaderButtonStyle}>
							<CodeXml />
						</span>
					</Link>

					<button
						className={css({ cursor: 'pointer' })}
						type='button'
						aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
						aria-expanded={isOpen}
						aria-controls='header-menu'
						onClick={() => setIsOpen((open) => !open)}
					>
						<span className={HeaderButtonStyle}>
							<Ellipsis />
						</span>
					</button>
				</div>

				<AnimatePresence initial={false}>
					{isOpen && (
						<motion.div
							id='header-menu'
							className={HeaderMenuStyle}
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: 'auto', opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
						>
							<nav className={HeaderNavStyle}>
								{navLinks.map((link) => (
									<Link
										className={HeaderNavLinkStyle}
										to={link.to}
										key={link.to}
										onClick={closeMenu}
									>
										{link.label}
									</Link>
								))}
							</nav>

							<div className={HeaderContentStyle}>
								{sociais.map(({ url, icon: Icon }) => (
									<a
										key={url}
										href={url}
										target='_blank'
										rel='noopener noreferrer'
									>
										<Icon
											size={24}
											className={css({ color: 'gabiZinc.950' })}
										/>
									</a>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</header>
	);
}
