<script lang="ts">
	const imageModules = import.meta.glob(
		'$lib/assets/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, { default: string }>;

	let { src, alt = '', ...restProps } = $props<{ src: string; alt?: string }>();

	const matchingPath = $derived(
		Object.keys(imageModules).find((path) => path.endsWith(String(src)))
	);
	const image = $derived(matchingPath ? imageModules[matchingPath]?.default : undefined);
</script>

{#if image}
	<enhanced:img src={image} {alt} {...restProps} />
{:else}
	<img {src} {alt} {...restProps} />
{/if}
