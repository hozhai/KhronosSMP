import adapter from "@sveltejs/adapter-vercel";
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const mdsvexConfig = {
	extensions: ['.svx', '.md'],
	layout: {},
};

const config = {
	extensions: ['.svelte', '.svx', '.md'],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: (
			{ filename },
		) => (filename.split(/[/\\]/).includes("node_modules") ? undefined : true),
	},
	kit: {
		adapter: adapter(),
		alias: {
			"@/*": "./path/to/lib/*",
		},
	},
	preprocess: [mdsvex(mdsvexConfig)],
};

export default config;
