import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
} from '@tanstack/react-router';
import { css } from '~/css';
import appCss from '../styles/main.css?url';

const ErrorBoundaryStyle = css({
	fontSize: '2rem',
	color: 'gabiBlue.500',
});

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
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function ErrorBoundary() {
	return <p className={ErrorBoundaryStyle}>Oooopps!</p>;
}
