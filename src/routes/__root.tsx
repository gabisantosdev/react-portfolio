import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router';

import appCss from '../styles/main.css?url';

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
	shellComponent: RootDocument,
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
