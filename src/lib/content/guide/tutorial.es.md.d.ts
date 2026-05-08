import type { SvelteComponent } from 'svelte';

declare const component: typeof SvelteComponent;

export default component;

export const frontmatter: {
	title: string;
	date_published: number;
	date_last_updated: number;
};

export const headings: Array<{ id: string; level: number; text: string }>;
export const slug: string;
