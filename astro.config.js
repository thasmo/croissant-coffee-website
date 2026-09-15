import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

export default defineConfig({
	base: '/',
	output: 'static',
	site: 'https://croissant.coffee',
	integrations: [
		unocss(),
		sitemap(),
	],
	prefetch: {
		defaultStrategy: 'tap',
		prefetchAll: true,
	},
	trailingSlash: 'never',
});
