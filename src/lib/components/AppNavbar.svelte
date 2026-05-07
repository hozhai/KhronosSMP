<script lang="ts">
	import { motion } from 'motion-sv';
	import type { HTMLAttributes } from 'svelte/elements';
	import { resolve } from '$app/paths';
	import {
		NavigationMenuRoot,
		NavigationMenuList,
		NavigationMenuItem,
		NavigationMenuLink,
		NavigationMenuTrigger,
		NavigationMenuContent
	} from './ui/navigation-menu/index';
	import { cn } from '$lib/utils';
	import TempleImage from '$lib/assets/temple.png';

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Alert Dialog',
			href: '/docs/components/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Hover Card',
			href: '/docs/components/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: '/docs/components/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
		},
		{
			title: 'Scroll-area',
			href: '/docs/components/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: '/docs/components/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
		},
		{
			title: 'Tooltip',
			href: '/docs/components/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
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
					<div class="font-serif text-sm leading-none font-medium">{title}</div>
					<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenuLink>
	</li>
{/snippet}

<motion.div
	class="itms-center fixed top-4 left-1/2 z-50 flex w-[30vw] -translate-x-1/2 justify-center rounded-lg bg-card p-2"
>
	<NavigationMenuRoot>
		<NavigationMenuList class="w-[30vw] justify-between space-x-4">
			<NavigationMenuItem>
				<NavigationMenuTrigger class="cursor-pointer font-serif text-xl uppercase"
					>Home</NavigationMenuTrigger
				>
				<NavigationMenuContent>
					<ul class="grid gap-2 p-2 md:w-100 lg:w-125 lg:grid-cols-[.75fr_1fr]">
						<li class="row-span-3">
							<NavigationMenuLink
								class="relative flex h-full w-full flex-col justify-end rounded-md p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6"
								style={`background-image: url('${TempleImage}'); background-size: cover; background-position: center;`}
							>
								{#snippet child({ props })}
									<div {...props}>
										<div class="mt-4 mb-2 font-serif text-lg font-medium">KhronosSMP</div>
									</div>
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
				<NavigationMenuTrigger class="font-serif text-xl uppercase"
					>Quicklinks</NavigationMenuTrigger
				>
				<NavigationMenuContent class="w-full">
					<ul class="grid w-75 gap-2 p-2 sm:w-100 md:w-125 md:grid-cols-2 lg:w-150">
						<li>
							<NavigationMenuLink class="cursor-pointer">
								<a
									href={resolve('/')}
									class="block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
								>
									<div class="text-sm leading-none font-medium">Rules</div>
									<p class="line-clamp-2 text-sm leading-snug text-muted-foreground">Hi</p>
								</a>
							</NavigationMenuLink>
						</li>
					</ul>
				</NavigationMenuContent>
			</NavigationMenuItem>
		</NavigationMenuList>
	</NavigationMenuRoot>
</motion.div>
