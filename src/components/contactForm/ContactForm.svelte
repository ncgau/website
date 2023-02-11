<script lang="ts">
	import { fade } from 'svelte/transition';
	import TextBoxInput from './TextBoxInput.svelte';
	import TextInput from './TextInput.svelte';

	export let page: string;

	let formSent = false;
	let showErrorMessage = false;

	let nameFormItem = {
		fieldName: 'Name',
		value: '',	
		errorMessage: 'Please tell us who you are.'
	}

	let emailFormItem = {
		fieldName: 'Email',
		value: '',
		errorMessage: 'Please let us know how to contact you.',
	}

	let messageFormItem = {
		fieldName: 'Message',
		value: '',
	}

	const handleInput = () => showErrorMessage = false;

	const validateInput = (value: string) => value !== undefined && value.length > 0;
	
	const validateForm = () => {
		let isValidEmail = validateInput(emailFormItem.value);
		let isValidName = validateInput(nameFormItem.value);

		return isValidEmail && isValidName;
	};

	const sendFormData = async () => {
		if (!formSent) {
			fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify({
					data: {
						name: nameFormItem.value,
						email: emailFormItem.value,
						message: messageFormItem.value,
						page
					}
				})
			});
			formSent = true;
		}
	};

	async function submit(e: Event): Promise<void> {
		let isFormValid = validateForm();
		
		if(!isFormValid) {
			showErrorMessage = true;
			return;
		}
			
		if (!formSent) {
			return await sendFormData();
		} 
	}
</script>

<form on:submit={submit}>
	<h3>Contact us</h3>

	<TextInput
	on:input={handleInput}
	showErrorMessage={showErrorMessage}
	{...nameFormItem}
	/>
	
	<TextInput
	on:input={handleInput}
	showErrorMessage={showErrorMessage}
	{...emailFormItem}
	/>

	<TextBoxInput {...messageFormItem} />

	<button on:click|preventDefault={submit} type="submit" class={formSent ? 'sent' : ''}>
		{formSent ? 'Thank You' : 'Submit'}
	</button>
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
