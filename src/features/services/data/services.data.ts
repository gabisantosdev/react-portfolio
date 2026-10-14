import { Building, Crosshair, type LucideIcon, Palette } from 'lucide-react';

interface Service {
	id: string;
	icon: LucideIcon;
	name: string;
	description: string;
}

export const Services: Service[] = [
	{
		id: '01',
		icon: Palette,
		name: 'UI/UX Design',
		description: 'Bonito de ver, fácil de usar.',
	},
	{
		id: '02',
		icon: Crosshair,
		name: 'Landing Pages',
		description: 'Páginas feitas pra converter, não pra enfeitar.',
	},
	{
		id: '03',
		icon: Building,
		name: 'Institucionais',
		description: 'Seu negócio com a cara que ele merece.',
	},
];
