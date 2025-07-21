<script lang="ts">
	import NavLayout from '../NavLayout.svelte';
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
</script>

<svelte:head>
	<title>Speak at NCGAU</title>
	<meta name="description" content="Speak at NCGAU" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header" />

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
				organisers through the <a href="#contact_us">form below</a>, via
				<a href="https://www.meetup.com/newcastle-coders-group/">Meetup</a>,
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
			<a id="why_speak"><h2>Why Speak?</h2></a>
			<p>
				Speaking at a meetup like the Newcastle Coders Group is a great thing to do, for yourself,
				for your company, and for the community. Here's a few reasons that you might want to give a
				talk:
			</p>
			<h3>For yourself</h3>
			<h4>Build your profile</h4>
			<p>
				It can help boost your profile by showcasing that you are able to dig deeply into a topic
				and communicate your understanding to others. In an ever-tightening job market, this could
				be the reason that you're able to land your next role. Even if you're not looking for a new
				role now, building your profile can help when you are.
			</p>
			<h4>Learn a topic deeply</h4>
			<p>
				Giving a talk is a great way to ensure that you know a topic deeply. There is nothing like
				explaining a concept to other people to ensure that you truely understand it. Remember, you
				don't need to know the topic deeply to start with, the process of putting together a talk
				will teach you what you need to know.
			</p>
			<h3>For your company</h3>
			<h4>Show that you've got a great team</h4>
			<p>
				If your company is looking to hire in the future, having your current staff speak can help
				to highlight what people can gain from coming to work with you and your team. Developers
				love working with other smart developers. Why not prove that you have the best developers on
				staff?
			</p>
			<h4>Show that you're solving interesting problems</h4>
			<p>
				Developers love solving hard problems, if your team is coming up with solutions to
				interesting problems presenting what you've done is a great way to highlight that working
				with your company is more than just code monkey work.
			</p>
			<h3>Contribute to your community</h3>
			<h4>Support the meetup</h4>
			<p>
				We need your support. Groups like the Newcastle Coders Group are volunteer-run and don't
				have the money to bring in out-of-town speakers. By offering to speak you help to ensure
				that the group can run for another month.
			</p>
			<h4>Pave the way for others</h4>
			<p>
				By speaking at a local meetup you show others that they can also speak, you're helping out
				not just the group but future speakers as well.
			</p>
		</div>

		<ContactForm page="speak" />
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
