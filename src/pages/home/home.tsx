import Avatar from '#/components/ui/avatar/avatar';
import { LinkContainer, LinkInternal } from '#/components/ui/link/link';
import { Section } from '#/components/ui/section/section';
import {
	TextDescription,
	TextTag,
	TextTitleHero,
	TextTitleSecondary,
} from '#/components/ui/text/texts';

export default function HomePage() {
	return (
		<>
			<Section aria-label='Hero'>
				<Avatar />
				<TextTitleHero>Eu crio sites que valorizam sua marca.</TextTitleHero>
				<TextDescription>
					Sou desenvolvedor web, web designer e designer gráfico. Uno código,
					design e estratégia para criar sites rápidos, elegantes e feitos para
					gerar resultados.
				</TextDescription>
				<LinkContainer>
					<LinkInternal visual='accent' to='/'>
						Começar projeto
					</LinkInternal>
					<LinkInternal visual='light' to='/'>
						Ver cases
					</LinkInternal>
				</LinkContainer>
			</Section>

			<Section aria-label='Cases'>
				<TextTag>CASES</TextTag>
			</Section>

			<Section aria-label='Services'>
				<TextTag>Serviços</TextTag>
				<TextTitleSecondary>Tudo claro antes de começar.</TextTitleSecondary>
				<TextDescription>
					Escopo bem definido, prazo transparente e investimento apresentado
					desde o início — sem reuniões desnecessárias.
				</TextDescription>
			</Section>
		</>
	);
}
