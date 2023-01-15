<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Attend NCGAU</title>
	<meta name="description" content="Attend NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Attend NCGAU this app</h1>

			<p>Links and text to meetup</p>
		</div>
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/attend.webp);
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
