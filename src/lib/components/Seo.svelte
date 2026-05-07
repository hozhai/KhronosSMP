<script lang="ts">
	type Props = {
		title: string;
		description: string;
		url: string;
		imageUrl: string;
	};

	const { title = 'KhronosSMP', description = '', url, imageUrl }: Props = $props();
</script>

<title>{title}</title>
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:image" content={imageUrl} />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#efb100" />
