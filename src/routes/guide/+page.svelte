<script>
	import HeroBackground from '$lib/assets/images/hero-background.png?enhanced';
	import Seo from '$lib/components/Seo.svelte';
	import { page } from '$app/stores';
	import { getLocale } from '$lib/paraglide/runtime';
	import { resolve } from '$app/paths';

	const locale = (typeof getLocale === 'function' ? getLocale() : undefined) ?? 'en';
	const lang = locale.split('-')[0] ?? 'en';

	const copy = {
		en: {
			eyebrow: 'Server handbook',
			title: 'Guide',
			description: 'Find every KhronosSMP guide in one place.',
			intro:
				'Choose a guide below to learn the basics, review the rules, or find your way around the server.',
			cards: [
				{
					title: 'Tutorial',
					description:
						'General tutorial for the server. Good starting point if it is your first time playing.',
					href: '/guide/tutorial',
					meta: 'Learn the essentials'
				},
				{
					title: 'Rules',
					description: 'The rules of the kingdom, written to keep the world fair and playable.',
					href: '/guide/rules',
					meta: 'Read before you play'
				}
			],
			footer:
				'More guides will appear here as the handbook grows, so this page acts as the central index.'
		},
		es: {
			eyebrow: 'Manual del servidor',
			title: 'Guía',
			description: 'Encuentra todas las guías de KhronosSMP en un solo lugar.',
			intro:
				'Elige una guía para aprender lo básico, revisar las reglas o orientarte dentro del servidor.',
			cards: [
				{
					title: 'Tutorial',
					description:
						'Tutorial general para el servidor. Buen lugar para empezar si nunca has jugado este servidor.',
					href: '/guide/tutorial',
					meta: 'Conoce lo esencial'
				},
				{
					title: 'Reglas',
					description: 'Las reglas del reino, escritas para mantener el mundo justo y jugable.',
					href: '/guide/rules',
					meta: 'Léelas antes de jugar'
				}
			],
			footer:
				'Más guías aparecerán aquí a medida que crezca el manual, así que esta página funciona como índice central.'
		}
	};

	const current = copy[lang === 'es' ? 'es' : 'en'];
</script>

<svelte:head>
	<Seo
		title={current.title}
		embedTitle={`${current.title} - KhronosSMP`}
		description={current.description}
		url={$page.url.href}
		imageUrl={HeroBackground}
	/>
</svelte:head>

<section class="relative isolate overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<enhanced:img src={HeroBackground} alt="" class="h-full w-full object-cover opacity-35" />
		<div class="absolute inset-0 bg-linear-to-b from-black/45 via-black/55 to-background"></div>
	</div>

	<div
		class="mx-auto flex min-h-120 w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10 lg:px-12"
	>
		<p class="font-mc text-sm tracking-[0.35em] text-amber-200 uppercase">{current.eyebrow}</p>
		<h1
			class="mt-5 bg-linear-to-r from-orange-200 via-amber-100 to-yellow-300 bg-clip-text font-mc text-5xl text-transparent sm:text-6xl lg:text-7xl"
		>
			{current.title}
		</h1>
		<p class="mt-6 max-w-3xl text-base text-pretty text-zinc-200 sm:text-lg lg:text-xl">
			{current.intro}
		</p>
	</div>
</section>

<section class="mx-auto -mt-12 w-full max-w-6xl px-6 pb-20 sm:px-10 lg:px-12">
	<div class="grid gap-6 md:grid-cols-2">
		{#each current.cards as card (card.href)}
			<a
				href={resolve(card.href)}
				class="group rounded-3xl border border-border/70 bg-card/90 p-6 shadow-2xl shadow-black/10 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-amber-300/50 hover:bg-card focus-visible:-translate-y-1 focus-visible:border-amber-300/60 focus-visible:outline-none"
			>
				<div class="flex items-start justify-between gap-4">
					<div>
						<p class="font-mc text-xs tracking-[0.3em] text-muted-foreground uppercase">
							{card.meta}
						</p>
						<h2 class="mt-3 font-mc text-3xl text-foreground">{card.title}</h2>
					</div>
				</div>

				<p class="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
					{card.description}
				</p>

				<div
					class="mt-6 flex items-center gap-2 text-sm font-medium text-amber-600 transition group-hover:translate-x-1 group-hover:text-amber-500 dark:text-amber-300"
				>
					<span>/{card.href.replace('/guide/', '')}</span>
					<span aria-hidden="true">→</span>
				</div>
			</a>
		{/each}
	</div>

	<p class="mx-auto mt-10 max-w-3xl text-center text-sm leading-6 text-muted-foreground">
		{current.footer}
	</p>
</section>
