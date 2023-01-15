<script>
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>About NCGAU</title>
	<meta name="description" content="About NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>About NCGAU</h1>

			<p>
				Newcastle Coders’ Group is a community and meetup centred around a shared love of
				programming, creativity and technology. On the first Wednesday of each month we gather to
				talk tech and share a meal. Meetups are usually attended by twenty or thirty people from
				across the Newcastle software development community
			</p>
			<p>
				A fixture of most meetups is a keynote talk (or two) focused on topics ranging from your
				rights at work to building a music synthesiser using floppy drives.
			</p>
			<p>
				We welcome anyone and everyone interested in software development, from all backgrounds,
				identities and skill levels. Over our 100+ meetups over X years we’ve seen our fair share of
				students, career changers, hobbyists, seasoned developers and even CTOs.
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
		background-image: url(/about.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
