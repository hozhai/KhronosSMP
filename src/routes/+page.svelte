<script lang="ts">
	import { motion, prefersReducedMotion } from 'motion-sv';
	import TitleImage from '$lib/assets/server_title.png';
	import HeroBackground from '$lib/assets/hero-background.png';
	import { Backlight } from '$lib/components/magic/backlight';
	import { BlurFade } from '$lib/components/magic/blur-fade';
	import { InteractiveHoverButton } from '$lib/components/magic/interactive-hover-button';
	import { RainbowButton } from '$lib/components/magic/rainbow-button';
</script>

<svelte:head>
	<title>Home | KhronosSMP</title>
</svelte:head>

<section
	class="flex h-screen flex-col items-center justify-center"
	style={`background-image: url(${HeroBackground}); background-size: cover; background-position: center;`}
>
	<div
		class="pointer-events-none absolute top-0 left-0 h-screen w-screen bg-radial from-transparent to-secondary"
	></div>
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
		<motion.div
			initial={{
				translateY: 0
			}}
			animate={{
				translateY: -80
			}}
			transition={{
				ease: 'easeInOut',
				delay: 1.5,
				duration: 1.5
			}}
		>
			<BlurFade
				delay={0.2}
				duration={0.8}
				offset={30}
				class="flex flex-col items-center justify-center"
				direction="up"
			>
				<h2
					class="bg-linear-to-tr from-yellow-400 to-orange-300 bg-clip-text font-serif text-3xl font-bold text-transparent uppercase"
				>
					Presenting...
				</h2>
				<div class="mt-5">
					<Backlight class="w-full">
						<enhanced:img src={TitleImage} alt="KhronosSMP" />
					</Backlight>
					<span class="sr-only">KhronosSMP</span>
				</div>
			</BlurFade>
		</motion.div>
	</motion.div>
	<motion.div
		class="flex -translate-y-24 items-center justify-center space-x-4"
		initial={{
			opacity: 0
		}}
		animate={{
			opacity: 1
		}}
		transition={{
			duration: 1,
			delay: 2.5
		}}
	>
		<InteractiveHoverButton
			onclick={() => window.open('https://discord.gg/SqGmtmtYFt', '_blank')?.focus()}
			class="font-sans uppercase">Join us Today!</InteractiveHoverButton
		>
		<RainbowButton variant="outline" class="font-sans uppercase">Learn More</RainbowButton>
	</motion.div>
</section>
