<script>
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
	import Image from 'svimg'
</script>

<svelte:head>
	<title>Host a NCGAU meeting</title>
	<meta name="description" content="Host a NCGAU meeting" />
</svelte:head>
<NavLayout>
	<div class="main">
		<Image src='host.webp' width=900 class='banner-image'/>
		<div class="text-column">
			<h1>Host a NCGAU meeting</h1>
			<p>
				The Newcastle Coders Group is always looking for great locations where we can host our
				meetings. We love showing off the great workplaces that makeup Newcastle's tech community.
				Hosting an NCGAU meeting is a fantastic way to show off all the work that went into
				designing your office and show that your business is a welcoming part of the community.
			</p>
			<p>
				If you want to host a venue, you need to be able to provide space for at least 30 people to
				sit, a screen or projector for the speaker to connect to, somewhere for people to eat and
				accessible amenities for attendees to use. Providing internet access is not required but can
				make the speaker's life much easier.
			</p>
			<p>
				If you'd like to host a meeting reach out to our organisers using the form below or through
				<a href="https://www.meetup.com/newcastle-coders-group/">Meetup</a>, or
				<a href="https://twitter.com/ncgau">Twitter</a>
			</p>
		</div>

		<ContactForm page="host" />
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.text-column {
		padding: 2rem;
	}
</style>
