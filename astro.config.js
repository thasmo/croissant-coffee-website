import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import { voidPlugin } from 'void';

export default defineConfig({
	adapter: cloudflare({
		configPath: './.void-wrangler.jsonc',
		imageService: 'compile',
		prerenderEnvironment: 'node',
	}),
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
	session: false,
	vite: {
		plugins: [voidPlugin()],
	},
});
