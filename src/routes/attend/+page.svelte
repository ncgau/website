<script>
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
</script>

<svelte:head>
	<title>Attend NCGAU</title>
	<meta name="description" content="Attend NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Attend NCGAU</h1>
			<p>
				The Newcastle Coders Group runs on the first Wednesday of each month in the Newcastle CBD.
				We provide dinner, typically pizza, and a range of alcoholic and no alcoholic drinks.
			</p>

			<p>
				We welcome anyone and everyone interested in software development from all backgrounds,
				identities and skill levels. Over our 200+ meetups across more than years, we've seen our
				fair share of students, career changers, hobbyists, seasoned developers and even CTOs.
			</p>

			<p>
				We publish a list of our upcoming meetings on our <a
					href="https://www.meetup.com/newcastle-coders-group/">meetup page</a
				>. NCGAU is always free all we ask is that you RSVP to help us plan for numbers.
			</p>
			<p>If you have any questions about attending please reach out to us on the form below.</p>
		</div>

		<ContactForm page="attend" />
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/attend.webp);
		background-repeat: no-repeat;
		background-size: cover;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
