<script>
	import ContactForm from '../../components/contactForm/ContactForm.svelte';
	import NavLayout from '../NavLayout.svelte';
</script>

<svelte:head>
	<title>Code of Conduct</title>
	<meta name="description" content="NCGAU Code of Conduct" />
</svelte:head>
<NavLayout>
	<div class="main">
		<div class="hero-header" />

		<div class="text-column">
			<h1>Code of Conduct</h1>
            <p><strong>Newcastle Coders Group</strong> should be a safe place for everybody regardless of</p>
            <ul>
                <li>gender, gender identity or gender expression </li>
                <li>sexual orientation</li>
                <li>disability</li>
                <li>physical appearance (including but not limited to body size)</li>
                <li>race</li>
                <li>age</li>
                <li>religion</li>
            </ul>

			<p>As someone who is part of this group, you agree that:</p>
            <ul>
                <li>We are collectively and individually committed to safety and inclusivity.</li>
                <li>We have zero tolerance for abuse, harassment, or discrimination.</li>
                <li>We respect people’s boundaries and identities.</li>
                <li>We refrain from using language that can be considered oppressive (systemically or otherwise), eg. sexist, racist, homophobic, transphobic, ableist, classist, etc. - this includes (but is not limited to) various slurs.
                    We avoid using offensive topics as a form of humor.
                </li>
            </ul>

            <p>We actively work towards:</p>
            <ul>
                <li>Being a safe community</li>
                <li>Cultivating a network of support &amp; encouragement for each other</li>
                <li>Encouraging responsible and varied forms of expression</li>
            </ul>
            
			<p>We condemn:</p>
            <ul>
                <li>Stalking, doxxing, or publishing private information</li>
                <li>Threats of harm, harassment</li>
                <li>Anything that compromises people’s safety</li>
            </ul>

            <p><strong>These things are NOT OK.</strong></p>
            <p>If you say something that is found offensive, and you are called out on it, let’s:</p>
            <ul>
                <li>Listen without interruption.</li>
                <li>Believe what the person is saying &amp; do not attempt to disqualify what they have to say.</li>
                <li>Ask for tips / help with avoiding making the offense in the future.</li>
                <li>Apologize and ask forgiveness.</li>
            </ul>

            <p>Failing to follow the community guidelines as described in this document carries consequences. 
                For minor infractions, you may be temporarily suspended from the group. 
                Upon repeat offenses, or if the community believes you are not acting in good faith, you may be asked to leave permanently.</p>
            <p><strong>If you experience abuse, harassment, discrimination, or feel unsafe, let the organizers know. Here is a list of the current organizers:</strong></p>
            <ul>
                <li>Klee Thomas</li>
                <li>Peter Drew</li>
                <li>John Roach</li>
                <li>David Williams</li>
            </ul>
		</div>
        
        <ContactForm page="conduct"/>
	</div>
</NavLayout>

<style>
	.main {
		display: grid;
		grid-template-rows: 200px 1fr;
	}
	.hero-header {
		background-image: url(/conduct.webp);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 100%;
	}
	.text-column {
		padding: 2rem;
	}
</style>