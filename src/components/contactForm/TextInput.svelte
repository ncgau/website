<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let fieldName: string;
	export let value: string;
	export let showErrorMessage: boolean = false;
	export let errorMessage: string = `Invalid ${fieldName}`;
	let duration = 500;

	const updateState = () => {
		dispatch('input', {
			isUserTyping: true
		});
	};
</script>

<div>
	<label for={`${fieldName}-id`}>{fieldName}: </label>
	<input id={`${fieldName}-id`} on:input|preventDefault={updateState} type="text" bind:value />

	{#if showErrorMessage}
		<p class="error-message" transition:fade="{{ duration }}">
			{errorMessage}
		</p>
	{/if}
</div>

<style>
	input {
		display: block;
		width: 100%;
		padding: 1rem;
		font-size: 14pt;
	}
	label {
		padding-left: 1rem;
	}
	.error-message {
		margin: 0;
		padding: 1rem 0rem 1rem 1rem;
		color: #6b0000;
		border: 2px solid #6b0000;
	}
</style>
