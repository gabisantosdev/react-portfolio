import { projects } from '#/features/projects/data/projects.data';
import CasePage from '#/pages/case/case';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cases/$case')({
	component: RouteComponent,
	loader: ({ params }) => {
		const caseSlug = params.case;
		const caseProject = projects.find((project) => project.slug === caseSlug);
		return { caseProject };
	},
});

function RouteComponent() {
	return <CasePage />;
}
