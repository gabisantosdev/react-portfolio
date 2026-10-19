import {
	LinkContainer,
	LinkExternal,
	LinkInternal,
} from '#/components/ui/link/link';
import { Section } from '#/components/ui/section/section';
import {
	TextDescription,
	TextInfo,
	TextTag,
	TextTitleSecondary,
} from '#/components/ui/text/texts';
import { social } from '#/shared/data/social.data';
import { css } from '~/css';

const Cta = () => (
	<Section aria-label='CTA'>
		<TextTag>Próximo passo</TextTag>
		<TextTitleSecondary>Bora tirar sua ideia do papel?</TextTitleSecondary>
		<TextDescription>
			Conta o que você precisa. A gente responde em 24h, sem compromisso, e
			transforma em produto no ar.
		</TextDescription>
		<LinkContainer>
			<LinkInternal to='/contact' visual='accent'>
				Começar projeto
			</LinkInternal>
			<LinkExternal href={social.whatsApp.url} visual='light'>
				Falar no WhatsApp
			</LinkExternal>
		</LinkContainer>
		<div
			className={css({
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '20px',
			})}
		>
			<TextInfo>Resposta em 24h</TextInfo>
			<TextInfo>Orçamento sem compromisso</TextInfo>
		</div>
	</Section>
);

export default Cta;
