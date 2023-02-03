<script lang="ts">
	import TextBoxInput from './TextBoxInput.svelte';
	import TextInput from './TextInput.svelte';

	export let page: string;

	enum FormType {
		INPUT,
		TEXTBOX
	}

	type FormItem = {
		formType: FormType;
		fieldName: string;
		itemValue: string;
		isInputValid: boolean;
		required: boolean;
	};

	let nameFormItem: FormItem = {
		formType: FormType.INPUT,
		fieldName: 'Name',
		itemValue: '',
		isInputValid: false,
		required: true
	};

	let emailFormItem: FormItem = {
		formType: FormType.INPUT,
		fieldName: 'Email',
		itemValue: '',
		isInputValid: false,
		required: true
	};

	let messageFormItem: FormItem = {
		formType: FormType.TEXTBOX,
		fieldName: 'Message',
		itemValue: '',
		isInputValid: false,
		required: false
	};

	let formItems = [nameFormItem, emailFormItem, messageFormItem];

	let sent = false;
	let isFormValid = true;
	let errorMessage = '';
	let isUserTyping: boolean;

	const validateInput = (value: string) => {
		return value !== undefined && value.length > 0;
	};

	const generateErrorMessage = () => {
		let invalidItems = formItems.filter((item) => !item.isInputValid && item.required);
		let invalidNames = invalidItems.map((item) => item.fieldName).join(' and ');

		errorMessage = `Invalid or no input for ${invalidNames}`;
	};

	const validateForm = () => {
		// accumulates the result of validateFormItem for each required formItem
		isFormValid = formItems.reduce((acc, formItem) => {
			if (formItem.required) {
				formItem.isInputValid = validateInput(formItem.itemValue);
				return acc && formItem.isInputValid;
			}
			return acc;
		}, true);
	};

	const sendFormData = async () => {
		if (!sent) {
			fetch('/api/contact', {
				method: 'post',
				body: JSON.stringify({
					data: {
						name: nameFormItem.itemValue,
						email: emailFormItem.itemValue,
						message: messageFormItem.itemValue,
						page
					}
				})
			});
			sent = true;
		}
	};

	async function submit(e: Event): Promise<void> {
		isUserTyping = !isUserTyping;
		validateForm();

		if (!isFormValid) {
			return generateErrorMessage();
		}

		if (!sent) {
			e.preventDefault();
			await sendFormData();
		}
	}

	const handleInput = (e: CustomEvent) => {
		isUserTyping = e.detail.isUserTyping;
	};
</script>

<form on:submit={submit}>
	<h3>Contact us</h3>

	{#each formItems as formItem}
		{#if formItem.formType === FormType.INPUT}
			<TextInput
				on:input={handleInput}
				required={formItem.required}
				fieldName={formItem.fieldName}
				bind:value={formItem.itemValue}
			/>
		{/if}

		{#if formItem.formType === FormType.TEXTBOX}
			<TextBoxInput fieldName="Message" bind:value={formItem.itemValue} />
		{/if}
	{/each}

	{#if !isUserTyping && !isFormValid}
		<p class={!isFormValid ? 'error' : 'error__hide'}>{errorMessage}</p>
	{/if}

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

	.error {
		display: block;
		background-color: crimson;
		border-radius: 5px;
		text-align: center;
		max-width: 50%;
		width: max-content;
		padding: 5px;
	}
	.error__hide {
		display: none;
	}
</style>
