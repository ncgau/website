<script>
	let open = false;
	function toggleNav() {
		open = !open;
	}
</script>

<nav class={open ? 'open' : 'closed'}>
	<button class="open" on:click={toggleNav}>+</button>
	<div class="logo" />
	<a href="/about">About</a>
	<a href="/attend">Attend</a>
	<a href="/speak">Speak</a>
	<a href="/sponsor">Sponsor</a>
	<a href="/host">Host</a>
	<a href="/help">Help</a>
</nav>

<style>
	button.open {
		position: absolute;
		right: 0;
		top: 0;
		transform: translateX(20px);
		background-color: black;
		padding: 1rem;
		color: white;
		border: 0;
		border-radius: 5%;
	}
	div.logo {
		background-image: url('/ncgaulogo.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		height: 50px;
		width: 100%;
	}
	nav {
		height: 100vh;
		background: #000;
		width: 200px;
		padding: 2rem;
		color: white;
		box-shadow: 0 0 3px 3px #333;

		transition: transform 500ms ease;
		display: none;
		position: sticky;
		top: 0;
		left: 0;
	}

	nav.open {
		transform: translateX(0px);
	}
	nav.closed {
		transform: translateX(-185px);
	}
	a {
		color: white;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #111;
		border-radius: 0.4rem;
		cursor: pointer;
		transition: background-color 200ms ease;
		text-decoration: none;
		margin-top: 1rem;
		margin-bottom: 1rem;
	}
	a:hover {
		background-color: #333;
	}
	@media (max-width: 40rem) {
		nav {
			display: block;
		}
	}
</style>
