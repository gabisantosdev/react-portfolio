import CasesPage from '#/pages/cases/cases';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/cases/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <CasesPage />;
}
