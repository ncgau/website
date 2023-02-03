<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let fieldName: string;
	export let value: string;
	export let required: boolean;

	const updateState = () => {
		dispatch('input', {
			isUserTyping: true
		});
	};
</script>

<div>
	<label for={`${fieldName}-id`}>{fieldName}: </label>
	<input {required} on:input={updateState} type="text" id={`${fieldName}-id`} bind:value />
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
