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
	const { caseProject } = Route.useLoaderData();

	return (
		<>
			<Section>
				<TextTitleHero>{caseProject?.name}</TextTitleHero>
				<TextDescription>{caseProject?.description}</TextDescription>
				<LinkContainer>
					<LinkInternal visual='accent' to='/contact'>
						Vamos conversar
					</LinkInternal>
					{caseProject?.url && (
						<LinkExternal href={caseProject?.url}>Ver no ar</LinkExternal>
					)}
				</LinkContainer>
				<ProjectInfoContainer>
					<ProjectInfo>
						<ProjectInfoTitle>Tipo de projeto</ProjectInfoTitle>
						<ProjectInfoDescription>
							{caseProject?.category}
						</ProjectInfoDescription>
					</ProjectInfo>

					<ProjectInfo>
						<ProjectInfoTitle>Seguimento</ProjectInfoTitle>
						<ProjectInfoDescription>
							{caseProject?.segment}
						</ProjectInfoDescription>
					</ProjectInfo>

					<ProjectInfo>
						<ProjectInfoTitle>Tecnologias</ProjectInfoTitle>
						<ProjectInfoDescription>
							{caseProject?.technologies.join(' · ')}
						</ProjectInfoDescription>
					</ProjectInfo>
				</ProjectInfoContainer>

				<ProjectCardImage src={caseProject?.image} />
			</Section>

			<Section>
				<TextTag>Mais cases</TextTag>
				<TextTitleSecondary>Veja outros projetos</TextTitleSecondary>
				<ProjectContainer>
					{projects
						.filter((project) => project.slug !== caseProject?.slug)
						.slice(0, 2)
						.map((project) => {
							return (
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
							);
						})}
				</ProjectContainer>
			</Section>
		</>
	);
}
