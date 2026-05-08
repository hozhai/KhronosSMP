<script lang="ts">
	type SeoProps = {
		title: string;
		embedTitle: string;
		description: string;
		url: string;
		imageUrl: string | { img: { src: string } };
	};

	const {
		title = 'KhronosSMP',
		embedTitle = 'KhronosSMP',
		description = '',
		url,
		imageUrl
	}: SeoProps = $props();

	const ogImage = $derived(typeof imageUrl === 'string' ? imageUrl : imageUrl.img.src);
</script>

<title>{title}</title>
<meta property="og:title" content={embedTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:thumbnail" content={ogImage} />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#efb100" />
<meta name="twitter:card" content="summary_large_image" />
