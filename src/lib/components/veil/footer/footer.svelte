<script lang="ts">
	import Icon from '@iconify/svelte';
	import Logo from '$lib/assets/images/khronos_logo.png?enhanced';

	type LinkItem = { label: string; href: string };
	type SocialItem = { icon: string; href: string; label: string };

	const links: LinkItem[] = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/#about' },
		{ label: 'Guides', href: '/guide' }
	];

	const social: SocialItem[] = [
		{ icon: 'ic:baseline-discord', href: 'https://discord.gg/SqGmtmtYFt', label: 'Discord' }
	];
	const year = new Date().getFullYear();
</script>

<footer class="border-t bg-background py-12">
	<div class="mx-auto max-w-2xl px-6">
		<div class="flex flex-col items-center text-center">
			<a href="/" class="flex items-center gap-2" aria-label="Home">
				<enhanced:img class="size-12 rounded-xl" src={Logo}> </enhanced:img></a
			>
			<nav class="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
				{#each links as link (link.label)}
					<a
						href={link.href}
						class="text-sm text-muted-foreground transition-colors hover:text-foreground"
					>
						{link.label}
					</a>
				{/each}
			</nav>
			<div class="mt-8 flex gap-4">
				{#each social as item (item.label)}
					<a
						href={item.href}
						class="size-8 rounded-full text-muted-foreground transition-colors hover:text-foreground"
						aria-label={item.label}
					>
						<Icon icon={item.icon} class="size-4" />
					</a>
				{/each}
			</div>
			<p class="mt-8 text-sm text-muted-foreground">&copy; {year} KhronosSMP.</p>
		</div>
	</div>
</footer>
