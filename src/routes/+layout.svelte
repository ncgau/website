<script>
	import './styles.css';
</script>

<main>
	<slot />
</main>

<style global>
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
	.banner-image {
        max-width: 100% !important;
		margin-top: -22%;
    }
    .banner-image > picture > img {
        height: 100% !important;
        width: 100% !important;
    }
    @media screen and (max-width: 600px)
    {
        .banner-image > picture > img {
            width: auto !important;
            object-fit: contain;
        }
    }
	.card-image > picture > img {
		height: 100% !important;
		width: 100% !important;
		object-fit: cover;
	}
	.card-image {
		min-height: 100% !important;
		max-width: 100% !important;
		height: 15rem;
		width: 100%;
		border-radius: 1rem;
	}
</style>
