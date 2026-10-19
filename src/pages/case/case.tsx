import {
	LinkContainer,
	LinkExternal,
	LinkInternal,
} from '#/components/ui/link/link';
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
	ProjectInfo,
	ProjectInfoContainer,
	ProjectInfoDescription,
	ProjectInfoTitle,
} from '#/features/projects/components/project';
import { projects } from '#/features/projects/data/projects.data';
import { Route } from '#/routes/cases/$case';

export default function CasePage() {
	const { project } = Route.useLoaderData();

	return (
		<>
			<Section>
				<TextTitleHero>{project?.name}</TextTitleHero>
				<TextDescription>{project?.description}</TextDescription>
				<LinkContainer>
					<LinkInternal visual='accent' to='/contact'>
						Vamos conversar
					</LinkInternal>
					{project?.url && (
						<LinkExternal href={project?.url}>Ver no ar</LinkExternal>
					)}
				</LinkContainer>
				<ProjectInfoContainer>
					<ProjectInfo>
						<ProjectInfoTitle>Tipo de projeto</ProjectInfoTitle>
						<ProjectInfoDescription>{project?.category}</ProjectInfoDescription>
					</ProjectInfo>

					<ProjectInfo>
						<ProjectInfoTitle>Seguimento</ProjectInfoTitle>
						<ProjectInfoDescription>{project?.segment}</ProjectInfoDescription>
					</ProjectInfo>

					<ProjectInfo>
						<ProjectInfoTitle>Tecnologias</ProjectInfoTitle>
						<ProjectInfoDescription>
							{project?.technologies.join(' · ')}
						</ProjectInfoDescription>
					</ProjectInfo>
				</ProjectInfoContainer>

				<ProjectCardImage src={project?.image} />
			</Section>

			<Section>
				<TextTag>Mais cases</TextTag>
				<TextTitleSecondary>Veja outros projetos</TextTitleSecondary>
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
			</Section>
		</>
	);
}
