<script lang="ts">
	export let cardType: 'host' | 'speak' | 'sponsor' | 'attend' | 'help' | 'about';
	export let linkTo: string;
</script>

<a href={linkTo} class="card {cardType}__background">
	<div class="dark-overlay">
		<slot />
	</div>
</a>

<style>
	.dark-overlay {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.3);
		background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
		position: absolute;
		top: 0;
		left: 0;
	}

	.sponsor__background {
		background-image: url(/sponsor.webp);
	}

	.host__background {
		background-image: url(/host.webp);
	}

	.speak__background {
		background-image: url(/speak.webp);
	}

	.attend__background {
		background-image: url(/attend.webp);
	}
	.help__background {
		background-image: url(/help.webp);
	}
	.about__background {
		background-image: url(/about.webp);
	}
	.card {
		display: block;
		background-color: black;
		border-radius: 1rem;
		padding: 1rem;
		transition: opacity 500ms ease;
		opacity: 0.8;
		color: white;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		overflow: hidden;
		cursor: pointer;
		min-height: 15rem;
		padding: 1rem;
		word-break: break-word;
	}
	.card:hover {
		opacity: 1;
	}
	@media (max-width: 40rem) {
		.card {
			opacity: 1;
		}
	}
</style>
