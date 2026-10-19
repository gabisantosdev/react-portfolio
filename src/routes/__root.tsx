import Cta from '#/components/layout/cta/cta';
import Header from '#/components/layout/header/header';
import {
	createRootRoute,
	ErrorComponent,
	type ErrorComponentProps,
	HeadContent,
	Outlet,
	Scripts,
	useMatches,
} from '@tanstack/react-router';
import appCss from '../styles/main.css?url';

declare module '@tanstack/react-router' {
	interface StaticDataRouteOption {
		showCta?: boolean;
	}
}

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Gabriel S. Coutinho | Criação de sites profissionais',
			},
			{
				name: 'description',
				content: 'description text',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: appCss,
			},
		],
	}),
	shellComponent: RootComponent,
	errorComponent: ErrorBoundary,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt-BR'>
			<head>
				<HeadContent />
			</head>
			<body className='antialiased bg-gabiZinc-50 text-gabiZinc-950'>
				{children}
				<Scripts />
			</body>
		</html>
	);
}

function RootComponent() {
	const showCta = useMatches({
		select: (matches) => !matches.some((m) => m.staticData.showCta),
	});

	return (
		<RootDocument>
			<Header />
			<Outlet />
			{showCta ? <Cta /> : null}
		</RootDocument>
	);
}

function ErrorBoundary({ error }: ErrorComponentProps) {
	return <ErrorComponent error={error} />;
}
