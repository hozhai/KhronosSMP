<script lang="ts">
	import { motion } from 'motion-sv';
	import type { HTMLAttributes } from 'svelte/elements';
	import {
		NavigationMenuRoot,
		NavigationMenuList,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuTrigger,
		NavigationMenuContent
	} from './ui/navigation-menu/index';
	import { cn } from '$lib/utils';
	import TempleImage from '$lib/assets/images/temple.png';
	// @ts-ignore - generated Paraglide messages do not ship a declaration file here
	import { getLocale, setLocale } from '$lib/paraglide/runtime';
	// @ts-ignore - generated Paraglide messages do not ship a declaration file here
	import * as m from '$lib/paraglide/messages';
	import { Button } from './ui/button';
	import Icon from '@iconify/svelte';

	type AppNavbarProps = {
		opaque: boolean;
	};

	const { opaque = false }: AppNavbarProps = $props();

	const locale = (typeof getLocale === 'function' ? getLocale() : undefined) ?? 'en';
	const lang = locale.split('-')[0] ?? 'en';

	function toggleLang() {
		if (lang == 'en') {
			setLocale('es');
			return;
		}

		setLocale('en');
	}

	const components: { title: string; href: string; description: string }[] = [
		{
			title: m.navbar_guide(),
			href: '/guide',
			description: m.navbar_guide_desc()
		},
		{
			title: m.navbar_rules(),
			href: '/guide/rules',
			description: m.navbar_rules_desc()
		},
		{
			title: m.navbar_tutorial(),
			href: '/guide/tutorial',
			description: m.navbar_tutorial_desc()
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenuLink>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...restProps}
				>
					<div class="font-mc text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenuLink>
	</li>
{/snippet}

<motion.div
	class={cn(
		'itms-center fixed top-4 left-1/2 z-50 flex w-[30vw] -translate-x-1/2 justify-center rounded-lg p-2 transition-colors duration-300 ',
		opaque ? 'bg-card/80 backdrop-blur-lg' : ''
	)}
>
	<NavigationMenuRoot>
		<NavigationMenuList class="w-[30vw] items-start justify-between space-x-4 px-4">
			<NavigationMenuItem>
				<NavigationMenuTrigger class="cursor-pointer font-mc text-sm uppercase"
					>Home</NavigationMenuTrigger
				>
				<NavigationMenuContent>
					<ul class="grid gap-2 p-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
						<li class="row-span-3">
							<NavigationMenuLink
								class="relative flex h-full w-full flex-col justify-end rounded-md p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6"
								style={`background-image: url('${TempleImage}'); background-size: cover; background-position: center;`}
							>
								{#snippet child(
									{ props = {} }: { props?: Record<string, unknown> } = { props: {} }
								)}
									<div {...props} class="size-64 rounded-xl"></div>
								{/snippet}
							</NavigationMenuLink>
						</li>
						{@render ListItem({
							href: '/',
							title: 'Introduction',
							content: 'Welcome to the land where time courses through your veins.'
						})}
						{@render ListItem({
							href: '/#about',
							title: 'About',
							content: 'Learn more about our server.'
						})}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
			<NavigationMenuItem class="">
				<NavigationMenuTrigger class="cursor-pointer font-mc text-sm uppercase"
					>Quicklinks</NavigationMenuTrigger
				>
				<NavigationMenuContent class="w-full">
					<ul class="grid w-75 gap-2 p-2 sm:w-100 md:w-125 md:grid-cols-2 lg:w-150">
						{#each components as component, i (i)}
							{@render ListItem({
								href: component.href,
								title: component.title,
								content: component.description
							})}
						{/each}
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</motion.div>
<!-- Language selector -->
<div class="fixed top-4 right-4 z-50">
	<Button variant="outline" onclick={toggleLang} class="cursor-pointer rounded-full">
		<Icon icon="pixelarticons:languages" />
	</Button>
</div>
