<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Host a NCGAU meeting</title>
	<meta name="description" content="Host a NCGAU meeting" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Host a NCGAU meeting</h1>

			<p>Content about the role of hosts and a way to contact us</p>
		</div>
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/host.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
