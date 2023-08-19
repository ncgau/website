<script>
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
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
				The Newcastle Coders Group is a volunteer run community and meetup centred around a shared
				love of programming, creativity and technology. On the first Wednesday of each month we
				gather to talk tech and share a meal. Meetups are usually attended by twenty or thirty
				people from across the Newcastle software development community
			</p>
			<p>
				A fixture of most meetups is a keynote talk (or two) focused on topics ranging from your
				rights at work to building a music synthesiser using floppy drives.
			</p>
			<p>
				We welcome anyone and everyone interested in software development, from all backgrounds,
				identities and skill levels. Over our 200+ meetups across more than years we've seen our
				fair share of students, career changers, hobbyists, seasoned developers and even CTOs.
			</p>
			<h2>About our organisers</h2>
			<p>NCAGU is a volunteer-run group. Our current organisers are:</p>

			<h3>Klee Thomas</h3>

			<p>Contact Klee on:</p>
			<ul>
				<li><a href="https://twitter.com/kleeut">Twitter</a></li>
				<li><a href="https://www.linkedin.com/in/kleeut/">Linked in</a></li>
				<li><a href="https://www.kleeut.com">Website</a></li>
			</ul>
			<h3>Peter Drew (Founder)</h3>
			<h3>John Roach</h3>
			<h3>Alannah Davidson</h3>
			<h3>David Williams (Founder)</h3>
		</div>
		<ContactForm page="about" />
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
