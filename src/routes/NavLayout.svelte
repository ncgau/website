<script>
	import Nav from './Nav.svelte';
</script>

<div class="main">
	<Nav />
	<slot />
</div>

<style>
	.main {
		display: grid;
		grid-template-rows: 50px 1fr;
	}
</style>
