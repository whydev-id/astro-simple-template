import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import compressor from "astro-compressor";
// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

const dateConversion = new Date(new Date().toISOString().split("T")[0]);

// https://astro.build/config
export default defineConfig({
	trailingSlash: "always",
	server: { port: 8080 },
	vite: {
		plugins: [tailwindcss()],
	},
	devToolbar: {
		enabled: false,
	},
	build: {
		assets: "_static",
		format: "preserve",
	},
	prefetch: {
		prefetchAll: true,
	},
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	image: {
		service: passthroughImageService(),
	},
	experimental: {
		fonts: [
			{
				provider: "local",
				name: "Inter",
				cssVariable: "--font-inter",
				variants: [
					{
						weight: "100 900",
						style: "normal",
						src: ["./src/assets/fonts/InterVariable.woff2"],
					},
				],
			},
		],
	},
	integrations: [
		sitemap({
			changefreq: "weekly",
			priority: 0.7,
			lastmod: new Date(dateConversion),
		}),
		compressor({
			gzip: true,
			brotli: true,
			fileExtensions: [".html", ".js", ".css"],
		}),
	],
});
