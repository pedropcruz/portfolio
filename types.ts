export interface Experience {
	company: string;
	location: string;
	locationType: 'Hybrid' | 'Remote' | 'On-Site';
	date: string;
	title: string;
	description: string;
	technologies: string[];
}
