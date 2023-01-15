<script>
	import LogoHeader from './LogoHeader.svelte';
	import './styles.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		background-color: #fff;
		box-shadow: 0 0 1rem grey;
		width: 75vw;
		min-height: 100vh;
		margin-left: 5vw;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 100px 1fr;
	}
	@media (max-width: 60rem) {
		main {
			margin: 0;
			width: 100%;
		}
	}
</style>
