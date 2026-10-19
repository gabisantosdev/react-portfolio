import { Section } from '#/components/ui/section/section';
import { TextDescription, TextTitleHero } from '#/components/ui/text/texts';
import {
	ProjectCard,
	ProjectCardContent,
	ProjectCardContentSubtitle,
	ProjectCardContentTitle,
	ProjectCardImage,
	ProjectContainer,
} from '#/features/projects/components/project';
import { projects } from '#/features/projects/data/projects.data';

export default function CasesPage() {
	return (
		<Section>
			<TextTitleHero>Do conceito ao deploy.</TextTitleHero>
			<TextDescription>
				Cada card é um projeto real no ar. Clique para ver os detalhes de cada
				um.
			</TextDescription>
			<ProjectContainer>
				{projects.map((project) => (
					<ProjectCard
						to='/cases/$case'
						params={{
							case: project.slug,
						}}
						key={project.id}
					>
						<ProjectCardImage src={project.image} alt={project.alt} />

						<ProjectCardContent>
							<ProjectCardContentTitle>{project.name}</ProjectCardContentTitle>
							<ProjectCardContentSubtitle>
								{project.category}
							</ProjectCardContentSubtitle>
						</ProjectCardContent>
					</ProjectCard>
				))}
			</ProjectContainer>
		</Section>
	);
}
