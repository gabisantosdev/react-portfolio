import { projects } from '#/features/projects/data/projects.data';
import CasePage from '#/pages/case/case';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cases/$case')({
	component: RouteComponent,
	loader: ({ params }) => {
		const projectSlug = params.case;
		const project = projects.find((project) => project.slug === projectSlug);
		return { project };
	},
});

function RouteComponent() {
	return <CasePage />;
}
