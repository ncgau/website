<nav>
	<a href="/about">About</a>
	<a href="/attend">Attend</a>
	<a href="/speak">Speak</a>
	<a href="/sponsor">Sponsor</a>
	<a href="/host">Host</a>
	<a href="/help">Help</a>
</nav>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		background-color: black;
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
	}
	a:hover {
		background-color: #333;
	}
	@media (max-width: 40rem) {
		nav {
			display: none;
		}
	}
</style>
