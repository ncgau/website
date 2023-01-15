<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Speak at NCGAU</title>
	<meta name="description" content="Speak at NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Speak at NCGAU</h1>

			<p>
				Content about speaking at NCGAU, the kinds of talks we're looking for and the kinds that
				we're not (marketing/sales). Add a way to contact us
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
		background-image: url(/speak.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
