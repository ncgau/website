<script>
	import DesktopNav from './DesktopNav.svelte';
	import MobileNav from './MobileNav.svelte';
</script>

<div class="main">
	<div>
		<DesktopNav />
		<MobileNav />
	</div>
	<slot />
</div>

<style>
	.main {
		display: grid;
		grid-template-rows: 50px 1fr;
	}
	@media (max-width: 40rem) {
		.main {
			display: grid;
			grid-template-rows: 0px 1fr;
		}
	}
</style>
