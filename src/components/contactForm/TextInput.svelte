<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let fieldName: string;
	export let value: string;

	const updateState = () => {
		dispatch('input', {
			isUserTyping: true
		});
	};
</script>

<div>
	<label for={`${fieldName}-id`}>{fieldName}: </label>
	<input id={`${fieldName}-id`} on:input|preventDefault={updateState} type="text" bind:value />
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
</style>
