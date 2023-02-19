<script lang="ts">
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
	import Image from 'svimg';
</script>

<svelte:head>
	<title>Help out</title>
	<meta name="description" content="Help out NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<Image src='help.webp' width=900 class='banner-image'/>
		<div class="text-column">
			<h1>Help out NCGAU</h1>
			<p>
				The Newcastle Coders Group is a volunteer-run group, and we can always use extra help. We're
				looking for help finding speakers, venues, and sponsors, as well as general help on meeting
				nights to set up, pack up, and clean up.
			</p>

			<p>
				If you're interested in helping out reach out to the organisers through the form below or
				via
				<a href="https://www.meetup.com/newcastle-coders-group/">Meetup</a>, or
				<a href="https://twitter.com/ncgau">Twitter</a>
			</p>

			<p>
				As a community of proffesionals we constantly strive for perfection. So please, if you encounter
				any errors with this website, or see areas where we can improve, you can create a new issue <a href="https://github.com/ncgau/website/issues">here</a>.
				If you'd like to help out you can also submit a <a href="https://github.com/ncgau/website/pulls">pull request</a>.
			</p>
		</div>
		<ContactForm page="help" />
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
