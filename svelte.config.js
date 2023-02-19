import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess'
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
	imagePreprocessor({
		inputDir: 'static',
		outputDir: 'static/g',
		webp: true,
		avif: true
	}),
	preprocess()],

	kit: {
		adapter: adapter()
	}
};

export default config;
