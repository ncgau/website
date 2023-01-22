<script lang="ts">
	export let fieldName: string;
	export let value: string;
</script>

<div>
	<label for={`${fieldName}-id`}>{fieldName}: </label>
	<input type="text" id={`${fieldName}-id`} bind:value />
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
