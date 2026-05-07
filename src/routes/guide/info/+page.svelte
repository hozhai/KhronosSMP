<script>
	import InfoBackground from '$lib/assets/info-background.png?enhanced';
	import InfoSeoBackground from '$lib/assets/info-seo-background.png?enhanced';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	import { getLocale } from '$lib/paraglide/runtime';
	import En, { metadata as metadata_en } from './index.en.md';
	import Es, { metadata as metadata_es } from './index.es.md';

	const locale = (typeof getLocale === 'function' ? getLocale() : undefined) ?? 'en';
	const lang = locale.split('-')[0] ?? 'en';
	const components = { en: En, es: Es };
	const frontmatters = { en: metadata_en, es: metadata_es };
	const Content = components[lang] ?? En;
	const frontmatter = frontmatters[lang] ?? metadata_en;
</script>

<svelte:head>
	<Seo
		title={frontmatter.title}
		embedTitle="Info - KhronosSMP"
		description="The information on how to play KhronosSMP, a Minecraft MORPG."
		url={$page.url.href}
		imageUrl={InfoSeoBackground}
	/>
</svelte:head>

<div
	class="pointer-events-none relative top-0 left-0 h-128 w-screen overflow-hidden bg-radial from-transparent to-black text-center font-mc text-7xl"
>
	<h1
		class="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-linear-to-tr from-taupe-300 to-stone-500 bg-clip-text text-transparent"
	>
		&gt; {frontmatter.title} &lt;
	</h1>
	<h1
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-[6px_6px_0px_rgb(0_0_0/_0.5)]"
	>
		&gt; {frontmatter.title} &lt;
	</h1>

	<enhanced:img src={InfoBackground} alt="Info page background" class="-mt-96 w-full" />
</div>

<div class="mt-20 flex items-center justify-center">
	<article class="prose prose-lg w-[70ch] dark:prose-invert prose-headings:font-mc">
		<Content />
	</article>
</div>
