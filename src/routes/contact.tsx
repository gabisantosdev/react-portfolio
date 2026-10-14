import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
	staticData: {
		showCta: true,
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/contact"!</div>;
}
