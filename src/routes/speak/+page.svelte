<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Speak at NCGAU</title>
	<meta name="description" content="Speak at NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Speak at NCGAU</h1>

			<p>
				The Newcastle Coders Group is a general-purpose tech group which means we're happy to take
				talks on pretty much any topic as long as it is in some way related to software development,
				software developers or technology.
			</p>
			<p>
				We welcome talks from first-time speakers and seasoned and professional conference speakers.
			</p>
			<p>
				If you'd like to speak at the Newcastle Coders Group, please get in touch with the
				organisers through <a href="https://www.meetup.com/newcastle-coders-group/">Meetup</a>,
				<a href="https://twitter.com/ncgau">Twitter</a> or contact Klee on
				<a href="https://www.linkedin.com/in/kleeut/">LinkedIn</a>.
			</p>
			<p>
				If you're looking for ideas on what to speak about, we find that our best talks are the ones
				that people are passionate about. If there is a technology that you've used recently that
				you think is excellent, you've used a new process, or you read up on a new architecture;
				then we want to hear about it. Your excitement will show through.
			</p>
			<p>
				If you need help putting together a talk, please contact us. We're passionate about seeing
				the Newcastle developer community shine and want to help you with that.
			</p>
		</div>
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/speak.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
