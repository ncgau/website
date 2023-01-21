<script>
	import DesktopNav from './DesktopNav.svelte';
	import MobileNav from './MobileNav.svelte';
</script>

<div class="main">
	<DesktopNav />
	<MobileNav />
	<slot />
</div>

<style>
	.main {
		display: grid;
		grid-template-rows: 50px 1fr;
	}
</style>
