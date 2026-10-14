interface Social {
	whatsApp: {
		label: string;
		url: string;
		iconName: string;
	};
	twitter: {
		label: string;
		url: string;
		iconName: string;
	};
	instagram: {
		label: string;
		url: string;
		iconName: string;
	};
	discord: {
		label: string;
		url: string;
		iconName: string;
	};
	gitHub: {
		label: string;
		url: string;
		iconName: string;
	};
	linkedIn: {
		label: string;
		url: string;
		iconName: string;
	};
	email: string;
	curriculum: string;
}

export const social: Social = {
	curriculum:
		'https://docs.google.com/document/d/e/2PACX-1vToASeWZ4v0p_FO9N1nFSXSoXeXAAeTQjf1ithLtZtRQX4lTIAjitZNRmqvpDVTFg/pub',
	email: 'mailto:gabrielscoutinhodev@gmail.com?subject=Novo projeto',
	whatsApp: {
		label: 'WhatsApp',
		url: 'https://wa.me/5571999712018?text=Ol%C3%A1%2C%20Gabriel%21%20Conheci%20seu%20trabalho%20pelo%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20poss%C3%ADvel%20projeto%20de%20site.',
		iconName: 'WhatsApp',
	},
	instagram: {
		label: 'Instagram: @gabrielscoutinhodev',
		url: 'https://www.instagram.com/gabrielscoutinhodev/',
		iconName: 'Instagram',
	},
	twitter: {
		label: 'Twitter: @gabscoutinhodev',
		url: 'https://x.com/gabscoutinhodev',
		iconName: 'Twitter',
	},
};
