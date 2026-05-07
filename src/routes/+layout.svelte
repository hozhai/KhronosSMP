<script>
	import { ModeWatcher } from 'mode-watcher';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import AppNavbar from '$lib/components/AppNavbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<AppNavbar />

{@render children()}

<div style="display:none">
	{#each locales as locale (locale)}
		<a href={resolve(/** @type {any} */ (localizeHref(page.url.pathname, { locale })))}>{locale}</a>
	{/each}
</div>
