<script>
	import { getLocale } from '$lib/paraglide/runtime';
	import En from './index.en.md';
	import Es from './index.es.md';

	const locale = (typeof getLocale === 'function' ? getLocale() : undefined) ?? 'en';
	const lang = locale.split('-')[0] ?? 'en';
	const components = { en: En, es: Es };
	const Content = components[lang] ?? En;
</script>

<article class="prose dark:prose-invert prose-headings:font-mc">
	<Content />
</article>
