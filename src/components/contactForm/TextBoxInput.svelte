<script lang="ts">
	export let fieldName: string;
	export let value: string;
	const id = fieldName.replaceAll(' ', '_') + 'id';
</script>

<div>
	<label for={id}>{fieldName}: </label>
	<textarea {id} bind:value />
</div>

<style>
	textarea {
		display: block;
		width: 100%;
		padding: 1rem;
		font-size: 14pt;
		height: 8rem;
	}
	label {
		padding-left: 1rem;
	}
</style>
