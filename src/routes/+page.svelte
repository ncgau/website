<script lang="ts">
	import Card from './Card.svelte';
	import LogoHeader from './LogoHeader.svelte';
</script>

<svelte:head>
	<title>NCGAU</title>
	<meta name="description" content="Newcastle coders group home page" />
</svelte:head>
<div class="header">
	<LogoHeader />
</div>
<div class="grid">
	<div class="header">
		<h1>Newcastle Coders Group</h1>
	</div>
	<Card cardType="about" linkTo="/about">
		<h2>About us</h2>
	</Card>
	<Card cardType="attend" linkTo="/attend">
		<h2>Attend</h2>
	</Card>
	<Card cardType="speak" linkTo="/speak">
		<h2>Speak</h2>
	</Card>
	<Card cardType="sponsor" linkTo="/sponsor">
		<h2>Sponsor</h2>
	</Card>
	<Card cardType="host" linkTo="/host">
		<h2>Host</h2>
	</Card>
	<Card cardType="help" linkTo="/help">
		<h2>Help</h2>
	</Card>
	<Card cardType="conduct" linkTo="/conduct">
		<h2>Code of Conduct</h2>
	</Card>
</div>

<style>
	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 100px 1fr 1fr 1fr;
		gap: 2rem;
		padding: 2rem;
	}
	.header {
		grid-column: span 2;
	}

	h1,
	h2 {
		text-align: center;
		font-family: sans-serif;
		font-size: 3rem;
		color: white;
	}

	h1 {
		color: black;
		font-family: 'Fira Mono', monospace;
	}

	@media (max-width: 60rem) {
		.grid {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
			margin: 0;
			width: 100%;
		}
		.header {
			grid-column: span 1;
		}
	}
</style>
