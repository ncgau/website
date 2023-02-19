<script lang="ts">
	import Image from 'svimg';
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
	<Card title="about us" directory="about">
		<Image src='about.webp' class="card-image" width=700/>
	</Card>

	<Card directory="attend">
		<Image src="attend.webp" class="card-image" width=700/>
	</Card>
	<Card directory="speak">
		<Image src="speak.webp" class="card-image" width=700/>
	</Card>
	<Card directory="sponsor">
		<Image src="sponsor.webp" class="card-image" width=700/>
	</Card>

	<Card directory="host">
		<Image src="host.webp" class="card-image" width=700/> 
	</Card>

	<Card directory="help">
		<Image src="help.webp" class="card-image" width=700/>
	</Card>
	<Card title="code of conduct" directory="code-of-conduct">
		<Image src="conduct.webp" class="card-image" width=700/>
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
	h1 {
		color: black;
		text-align: center;
		font-size: 3rem;
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
