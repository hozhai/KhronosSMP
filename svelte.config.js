import adapter from '@sveltejs/adapter-vercel';
import Markdoc from '@markdoc/markdoc';
import { markdocPreprocess } from 'markdoc-svelte';

const imageNode = {
	render: 'MarkdocImage',
	attributes: {
		...Markdoc.nodes.image.attributes
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.mdoc'],
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter(),
		alias: {
			'@/*': './path/to/lib/*'
		}
	},
	preprocess: [
		markdocPreprocess({
			nodes: {
				image: imageNode
			}
		})
	]
};

export default config;
