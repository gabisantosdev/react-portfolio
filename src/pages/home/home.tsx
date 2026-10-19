import Avatar from '#/components/ui/avatar/avatar';
import { LinkContainer, LinkInternal } from '#/components/ui/link/link';
import { Section } from '#/components/ui/section/section';
import {
	TextDescription,
	TextTag,
	TextTitleHero,
	TextTitleSecondary,
} from '#/components/ui/text/texts';
import {
	ProjectCard,
	ProjectCardContent,
	ProjectCardContentSubtitle,
	ProjectCardContentTitle,
	ProjectCardImage,
	ProjectContainer,
} from '#/features/projects/components/project';
import { projects } from '#/features/projects/data/projects.data';
import {
	ServiceCard,
	ServiceCardDescription,
	ServiceCardIcon,
	ServiceCardId,
	ServiceCardTitle,
} from '#/features/services/components/service';
import { Services } from '#/features/services/data/services.data';
import { css } from '~/css';

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
					<LinkInternal visual='accent' to='/contact'>
						Começar projeto
					</LinkInternal>
					<LinkInternal visual='light' to='/cases'>
						Ver cases
					</LinkInternal>
				</LinkContainer>
			</Section>

			<Section aria-label='Cases'>
				<TextTag>CASES</TextTag>
				<ProjectContainer>
					{projects.slice(0, 2).map((project) => (
						<ProjectCard
							to='/cases/$case'
							params={{
								case: project.slug,
							}}
							key={project.id}
						>
							<ProjectCardImage src={project.image} alt={project.alt} />

							<ProjectCardContent>
								<ProjectCardContentTitle>
									{project.name}
								</ProjectCardContentTitle>
								<ProjectCardContentSubtitle>
									{project.category}
								</ProjectCardContentSubtitle>
							</ProjectCardContent>
						</ProjectCard>
					))}
				</ProjectContainer>
				<LinkInternal visual='light' to='/cases'>
					Ver todos os cases
				</LinkInternal>
			</Section>

			<Section aria-label='About me'>
				<TextTag>Sobre mim</TextTag>
				<TextTitleSecondary>Eu cuido do design e do código.</TextTitleSecondary>
				<TextDescription>
					Sou desenvolvedor web, web designer e designer gráfico. Gosto de
					transformar ideias em sites que combinam estética, performance e
					propósito — do primeiro conceito ao último detalhe.
				</TextDescription>
			</Section>

			<Section aria-label='Services'>
				<TextTag>Serviços</TextTag>
				<TextTitleSecondary>Tudo claro antes de começar.</TextTitleSecondary>
				<TextDescription>
					Escopo bem definido, prazo transparente e investimento apresentado
					desde o início — sem reuniões desnecessárias.
				</TextDescription>

				<div
					className={css({
						display: 'grid',
						gridTemplateColumns: '1fr',
						gap: '20px',
						width: 'full',

						sm: {
							gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
						},
					})}
				>
					{Services.map((service) => (
						<ServiceCard key={service.id}>
							<div
								className={css({
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'space-between',
								})}
							>
								<ServiceCardIcon>
									<service.icon className={css({ color: 'gabiBlue.600' })} />
								</ServiceCardIcon>
								<ServiceCardId>{service.id}</ServiceCardId>
							</div>

							<div
								className={css({
									display: 'flex',
									flexDirection: 'column',
									gap: '16px',
								})}
							>
								<ServiceCardTitle>{service.name}</ServiceCardTitle>
								<ServiceCardDescription>
									{service.description}
								</ServiceCardDescription>
							</div>
						</ServiceCard>
					))}
				</div>
			</Section>
		</>
	);
}
