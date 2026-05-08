<script>
	import { ModeWatcher } from 'mode-watcher';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import AppNavbar from '$lib/components/AppNavbar.svelte';
	import { onNavigate } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import { AnimatePresence, motion } from 'motion-sv';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let scrollY = $state(0);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<svelte:window bind:scrollY />

<ModeWatcher />

<AppNavbar opaque={scrollY > 100} />

<div id="top" class="h-0 w-screen"></div>

{@render children()}

<AnimatePresence>
	{#if scrollY > 100}
		<motion.div
			class="fixed right-10 bottom-10 cursor-pointer"
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1
			}}
			exit={{
				opacity: 0
			}}
			whileHover={{
				scale: 1.2
			}}
			whilePress={{
				scale: 0.9
			}}
			onclick={() => document.querySelector('#top')?.scrollIntoView()}
		>
			<Button class="h-12 w-12 cursor-pointer bg-accent text-accent-foreground">
				<Icon icon="pixelarticons:arrow-bar-up" class="size-8" />
			</Button>
		</motion.div>
	{/if}
</AnimatePresence>

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(/** @type {any} */ (localizeHref(page.url.pathname, { locale })))}>{locale}</a>
	{/each}
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}
	@media (prefers-reduced-motion) {
		::view-transition-group(*),
		::view-transition-old(*),
		::view-transition-new(*) {
			animation: none !important;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		:root::view-transition-old(root) {
			animation:
				90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
		}

		:root::view-transition-new(root) {
			animation:
				210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
				300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
		}
	}
</style>
