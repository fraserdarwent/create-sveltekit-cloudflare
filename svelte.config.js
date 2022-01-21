import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte'
	},
	preprocess: preprocess()
};

export default config;
