import ContactPage from '#/pages/contact/contact';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/contact')({
	staticData: {
		showCta: true,
	},
	component: RouteComponent,
});

function RouteComponent() {
	return <ContactPage />;
}
