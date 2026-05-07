<script lang="ts">
	type Props = {
		title: string;
		embedTitle: string;
		description: string;
		url: string;
		imageUrl: string;
	};

	const {
		title = 'KhronosSMP',
		embedTitle = 'KhronosSMP',
		description = '',
		url,
		imageUrl
	}: Props = $props();
</script>

<title>{title}</title>
<meta property="og:title" content={embedTitle} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:thumbnail" content={imageUrl} />
<meta property="og:type" content="website" />
<meta name="theme-color" content="#efb100" />
<meta name="twitter:card" content="KhronosSMP website thumbnail." />
