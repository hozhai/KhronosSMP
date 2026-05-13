<script lang="ts">
	type SeoProps = {
		title: string;
		embedTitle: string;
		description: string;
		url: string;
	};

	const {
		title = 'KhronosSMP',
		embedTitle = 'KhronosSMP',
		description = '',
		url
	}: SeoProps = $props();
</script>

<title>{title}</title>
<meta property="og:title" content={embedTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#efb100" />
