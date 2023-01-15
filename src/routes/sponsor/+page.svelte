<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Sponsor NCGAU</title>
	<meta name="description" content="Sponsor NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Sponsor NCGAU</h1>

			<p>
				Some content about sponsoring NCGAU. What options we have and what you get for it. Add a way
				to contact us
			</p>
		</div>
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/sponsor.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
