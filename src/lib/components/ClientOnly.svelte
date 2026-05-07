<script>
	import { onMount } from 'svelte';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	let { children, fallback } = $props();
</script>

{#if mounted}
	{@render children?.()}
{:else}
	{@render fallback?.()}
{/if}
