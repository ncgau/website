<script lang="ts">
	import TextBoxInput from './TextBoxInput.svelte';
	import TextInput from './TextInput.svelte';
	export let page: string;

	let name: string;
	let email: string;
	let message: string;
	let sent = false;

	async function submit(e: Event): Promise<void> {
		if (sent) {
			return;
		}
		e.preventDefault();
		fetch('/api/contact', {
			method: 'post',
			body: JSON.stringify({
				data: {
					name,
					email,
					message,
					page
				}
			})
		});
		sent = true;
	}
</script>

<form on:submit={submit}>
	<h3>Contact us</h3>
	<TextInput fieldName="Name" bind:value={name} />
	<TextInput fieldName="Email" bind:value={email} />

	<TextBoxInput fieldName="Message" bind:value={message} />
	<button on:click={submit} type="submit" class={sent ? 'sent' : ''}
		>{sent ? 'Thank You' : 'Submit'}</button
	>
</form>

<style>
	h3 {
		text-align: center;
	}
	form {
		padding: 2rem;
		display: flex;
		gap: 1rem;
		flex-direction: column;
		background-color: #eee;
		border: 2px solid #ddd;
	}
	button {
		padding: 1rem;
		font-size: 14pt;
		background-color: black;
		color: white;
		border-radius: 5px;
		border: 2px solid black;
		transition: background-color 500ms ease, color 500ms ease;
		cursor: pointer;
	}
	button:hover {
		background-color: #333;
	}
	button.sent {
		background-color: lightgreen;
		color: black;
		cursor: not-allowed;
	}
</style>
