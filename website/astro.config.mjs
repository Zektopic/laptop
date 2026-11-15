import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import vercel from "@astrojs/vercel";
import { unified } from "@astrojs/markdown-remark";
import { targetBlank } from './src/plugins/targetBlank';

// https://astro.build/config
export default defineConfig({
	site: "https://byran.ee",
	integrations: [
		mdx(),
		sitemap(),
		solidJs(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		processor: unified({
			remarkPlugins: [],
			rehypePlugins: [[targetBlank, { domain: 'byran.ee' }]],
		}),
		// syntaxHighlight: 'shiki'
		// syntaxHighlight: 'prism'
	},
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
