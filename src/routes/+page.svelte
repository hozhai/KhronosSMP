<script lang="ts">
	import { motion, prefersReducedMotion } from 'motion-sv';
	import TitleImage from '$lib/assets/server_title.png?enhanced';
	import HeroBackground from '$lib/assets/hero-background.png?enhanced';
	import { Backlight } from '$lib/components/magic/backlight';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { InteractiveHoverButton } from '$lib/components/magic/interactive-hover-button';
	import Icon from '@iconify/svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import * as m from '$lib/paraglide/messages';
</script>

<svelte:head>
	<title>{m.home_title()}</title>
</svelte:head>

<enhanced:img src={HeroBackground} class="h-screen w-screen" alt="Background" />

<section class="absolute top-0 left-0 flex h-screen w-screen flex-col items-center justify-center">
	<div
		class="pointer-events-none absolute top-0 left-0 h-screen w-screen bg-radial from-transparent to-black"
	></div>
	<h2
		class="bg-linear-to-t from-white to-yellow-300 bg-clip-text font-mc text-xl font-bold text-transparent uppercase"
	>
		{m.home_presenting()}
	</h2>

	<motion.div
		initial={{
			translateY: 0
		}}
		animate={{
			translateY: prefersReducedMotion.current ? 0 : 20
		}}
		transition={{
			repeat: Infinity,
			delay: 2,
			duration: 2,
			repeatType: 'mirror',
			ease: 'easeInOut'
		}}
	>
		<BlurFade
			delay={0.2}
			duration={0.8}
			offset={30}
			class="flex flex-col items-center justify-center"
			direction="up"
		>
			<div class="mt-5">
				<Backlight blur={20} class="w-full">
					<enhanced:img src={TitleImage} alt="KhronosSMP" />
				</Backlight>
				<span class="sr-only">KhronosSMP</span>
			</div>
		</BlurFade>
	</motion.div>
	<BlurFade
		class="flex -translate-y-12 items-center justify-center space-x-4"
		delay={1.5}
		duration={0.7}
		offset={-30}
	>
		<InteractiveHoverButton
			onclick={() => window.open('https://discord.gg/SqGmtmtYFt', '_blank')?.focus()}
			class="font-sans uppercase "
			><Icon icon="ic:baseline-discord" class="mr-2" />{m.home_join()}</InteractiveHoverButton
		>
		<InteractiveHoverButton onclick={() => goto(resolve('/#about'))} class="font-sans uppercase">
			<Icon icon="pixelarticons:more-horizontal-sharp" class="mr-2" />{m.home_learn()}
		</InteractiveHoverButton>
	</BlurFade>
</section>

<section class="p-20" id="about">
	<h1 class="font-mc text-2xl">{m.home_about()}</h1>
	<hr class="my-4 w-1/4" />
	<p class="font-sans text-xl">
		{m.home_about_content()}
		<a
			href={resolve('/guide/info')}
			class="bg-linear-to-tr from-orange-400 to-yellow-300 bg-clip-text text-clip text-transparent underline"
			>{m.home_guide_text()}</a
		>.
	</p>
</section>
