interface Project {
	id: number;
	slug: string;
	name: string;
	description: string;
	category: string;
	segment: string;
	technologies: string[];
	url: string;
	image: string;
	alt: string;
}

export const projects: Project[] = [
	{
		id: 1,
		slug: 'craftsman',
		name: 'Craftsman',
		description:
			'Taro offers 14 minimalistic pages to cover all your publishing needs as an independent creator. Showcase your skills, get sales from your products, and express yourself - fast, easily, and with style.',
		category: 'Site Institucional',
		segment: 'Web Design',
		technologies: ['React', 'Figma'],
		url: '',
		image: '/images/projects/craftsman.webp',
		alt: 'Web Design company',
	},
	{
		id: 2,
		slug: 'branding',
		name: 'Branding',
		description:
			'Taro offers 14 minimalistic pages to cover all your publishing needs as an independent creator. Showcase your skills, get sales from your products, and express yourself - fast, easily, and with style.',
		category: 'Portfólio',
		segment: 'Web Design',
		technologies: ['React', 'Figma'],
		url: '',
		image: '/images/projects/branding-portfolio.webp',
		alt: 'Web Design company',
	},
];
