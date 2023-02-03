<script>
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
	}
	@media (max-width: 60rem) {
		main {
			margin: 0;
			width: 100%;
		}
	}
</style>
