<script lang="ts">
	export let directory : string
	export let title : string = directory;
	let capitalLetter = title.charAt(0).toUpperCase();
	title = `${capitalLetter}${title.substring(1)}`;
</script>

<a href={`/${directory}`}>
	<div class="image-wrapper">
			<h2>{title}</h2>
			<div class="vignette"></div>
		<slot></slot>
	</div>
</a>

<style>



	.image-wrapper, .vignette {
		height: 100%;
		width: 100%;
	}
	.vignette {
		position: absolute;
	}
	.vignette {
		background: radial-gradient(circle,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%);
		z-index: 1;
		opacity: 0.6;
		border-radius: 1rem;
		transition: opacity .5s ease;
		height: 15rem;
		display: flex;
		justify-content: center;
	}
	.vignette:hover { 
		opacity: 1;
	}
	.image-wrapper > h2 {
		text-shadow: 0px 3px black;
		font-size: 3rem;
		z-index: 2;
		color: white;
		position: absolute;
		text-align: center;
		word-break: break-word;
	}
	.image-wrapper {
		position: relative;
		display: flex;
		justify-content: center;
	}
</style>
