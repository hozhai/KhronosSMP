<script>
	import { page } from '$app/stores';
	import { getLocale } from '$lib/paraglide/runtime';
	import Seo from '$lib/components/Seo.svelte';
	import TutorialBackground from '$lib/assets/images/tutorial-background.png?enhanced';
	import TutorialSeoBackground from '$lib/assets/images/tutorial-seo-background.png?enhanced';
	import RulesBackground from '$lib/assets/images/rules-background.png?enhanced';
	import RulesSeoBackground from '$lib/assets/images/rules-seo-background.png?enhanced';
	import TutorialEn, {
		frontmatter as tutorialFrontmatterEn
	} from '$lib/content/guide/tutorial.en.md';
	import TutorialEs, {
		frontmatter as tutorialFrontmatterEs
	} from '$lib/content/guide/tutorial.es.md';
	import RulesEn, { frontmatter as rulesFrontmatterEn } from '$lib/content/guide/rules.en.md';
	import RulesEs, { frontmatter as rulesFrontmatterEs } from '$lib/content/guide/rules.es.md';
	import { m } from '$lib/paraglide/messages.js';
	import Icon from '@iconify/svelte';

	let { data, params } = $props();

	const locale = (typeof getLocale === 'function' ? getLocale() : undefined) ?? 'en';
	const lang = locale.split('-')[0] ?? 'en';
	const localeKey = lang === 'es' ? 'es' : 'en';

	const guides = {
		info: {
			background: TutorialBackground,
			seoBackground: TutorialSeoBackground,
			description: {
				en: 'The information on how to play KhronosSMP, a Minecraft MORPG.',
				es: 'La información sobre cómo jugar KhronosSMP, un MORPG de Minecraft.'
			},
			h1Class: 'from-taupe-300 to-stone-500',
			imageClass: '-mt-96 w-full',
			alt: {
				en: 'Info page background',
				es: 'Fondo de la página de información'
			},
			content: {
				en: {
					component: TutorialEn,
					metadata: tutorialFrontmatterEn
				},
				es: {
					component: TutorialEs,
					metadata: tutorialFrontmatterEs
				}
			}
		},
		rules: {
			background: RulesBackground,
			seoBackground: RulesSeoBackground,
			description: {
				en: 'The rules of the kingdom of Khronos. Follow these or you shall be banished (for a certain period of time, or, you know, permanently).',
				es: 'Las reglas del reino de Khronos. Síguelas o serás desterrado (por un tiempo, o, ya sabes, para siempre).'
			},
			h1Class: 'from-green-200 to-green-500',
			imageClass: '-mt-48 w-full',
			alt: {
				en: 'Rules page background',
				es: 'Fondo de la página de reglas'
			},
			content: {
				en: {
					component: RulesEn,
					metadata: rulesFrontmatterEn
				},
				es: {
					component: RulesEs,
					metadata: rulesFrontmatterEs
				}
			}
		}
	};

	const guideKey = $derived((data.id ?? params.id) === 'rules' ? 'rules' : 'info');
	const guide = $derived(guides[guideKey]);
	const content = $derived(guide.content[localeKey] ?? guide.content.en);
	const frontmatter = $derived(content.metadata);
	const Content = $derived(content.component);
	const publishedDate = $derived(new Date(frontmatter.date_published * 1000).toLocaleDateString());
	const lastUpdatedDate = $derived(
		new Date(frontmatter.date_last_updated * 1000).toLocaleDateString()
	);
</script>

<svelte:head>
	<Seo
		title={`${frontmatter.title} - KhronosSMP`}
		embedTitle={`${frontmatter.title} - KhronosSMP`}
		description={guide.description[localeKey]}
		url={$page.url.href}
		imageUrl={guide.seoBackground}
	/>
</svelte:head>

<div
	class="pointer-events-none relative top-0 left-0 h-128 w-screen overflow-hidden bg-radial from-transparent to-black text-center font-mc text-7xl"
>
	<h1
		class={`pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-linear-to-tr ${guide.h1Class} bg-clip-text text-transparent`}
	>
		&gt; {frontmatter.title} &lt;
	</h1>
	<h1
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-shadow-[6px_6px_0px_rgb(0_0_0/_0.5)]"
	>
		&gt; {frontmatter.title} &lt;
	</h1>

	<enhanced:img src={guide.background} alt={guide.alt[localeKey]} class={guide.imageClass} />
	<div class="absolute inset-0 bg-linear-to-b from-black/45 via-black/55 to-background"></div>
</div>
<div class="flex justify-center space-x-4 text-muted-foreground italic">
	<p>{m.guide_published()}: {publishedDate}</p>
	<Icon icon="pixelarticons:sparkle" width="24" height="24" />
	<p>{m.guide_last_updated()}: {lastUpdatedDate}</p>
</div>

<div class="mt-20 flex items-center justify-center">
	<article
		class="prose w-[70ch] text-justify dark:prose-invert prose-headings:font-mc prose-img:rounded-lg"
	>
		<Content />
	</article>
</div>
