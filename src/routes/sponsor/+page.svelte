<script>
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
</script>

<svelte:head>
	<title>Sponsor NCGAU</title>
	<meta name="description" content="Sponsor NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header " />

		<div class="text-column">
			<h1>Sponsor NCGAU</h1>

			<p>
				The Newcastle Coders Group is always on the lookout for sponsors to help us keep our events
				free and ensure we can provide the best experience to our attendees. The Newcastle Coders
				Group is a volunteer-run group, so any sponsor money goes back into the group.
			</p>
			<p>
				Meetings attract 20-30 of Newcastle's most engaged software developers, so sponsoring is a
				great way to get your message out to the group. If you supply dinner or drinks, we'll shout
				you out at the start of the meeting and give you a 2-minute slot to get up and say your
				piece.
			</p>
			<p>
				If sponsoring dinner or drinks is not your thing consider <a href="/host"
					>hosting a meeting</a
				>. Get in touch with the organisers through the form below or via
				<a href="https://www.meetup.com/newcastle-coders-group/">Meetup</a>,
				<a href="https://twitter.com/ncgau">Twitter</a> and we'll chat about sponsorship options.
			</p>
		</div>
		<ContactForm page="sponsor" />
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/sponsor.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>
