import { Github, Twitter, Linkedin, LucideIcon, Twitch } from 'lucide-react';

interface SocialLink {
	Icon: LucideIcon;
	link: string;
	alias: string;
}

export const socialLinks: SocialLink[] = [
	{
		Icon: Github,
		link: 'https://github.com/pedropcruz',
		alias: 'Github',
	},
	{
		Icon: Twitter,
		link: 'https://twitter.com/pedropcruzthe1',
		alias: 'Twitter',
	},
	{
		Icon: Linkedin,
		link: 'https://www.linkedin.com/in/pedropcruz/',
		alias: 'Linkedin',
	},
	{
		Icon: Twitch,
		link: 'https://www.twitch.tv/pedropcruz',
		alias: 'Twitch',
	},
];
