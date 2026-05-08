// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '$lib/content/guide/*.md' {
	import type { SvelteComponent } from 'svelte';

	export const frontmatter: Record<string, unknown>;
	export const headings: Array<{ id: string; level: number; text: string }>;
	export const slug: string;
	export default class MarkdocComponent extends SvelteComponent {}
}

declare module '$lib/content/guide/*.mdoc' {
	import type { SvelteComponent } from 'svelte';

	export const frontmatter: Record<string, unknown>;
	export const headings: Array<{ id: string; level: number; text: string }>;
	export const slug: string;
	export default class MarkdocComponent extends SvelteComponent {}
}

declare module '*.md' {
	import type { SvelteComponent } from 'svelte';

	export const frontmatter: Record<string, unknown>;
	export const headings: Array<{ id: string; level: number; text: string }>;
	export const slug: string;
	export default class MarkdocComponent extends SvelteComponent {}
}

declare module '*.mdoc' {
	import type { SvelteComponent } from 'svelte';

	export const frontmatter: Record<string, unknown>;
	export const headings: Array<{ id: string; level: number; text: string }>;
	export const slug: string;
	export default class MarkdocComponent extends SvelteComponent {}
}

export {};
