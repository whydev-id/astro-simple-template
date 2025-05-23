const fs = require("node:fs");
const path = require("node:path");
const { minify } = require("html-minifier-terser");
const distPath = path.join(__dirname, "dist");

async function minifyHtmlFiles(dir) {
	const entries = fs.readdirSync(dir, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			await minifyHtmlFiles(fullPath);
		} else if (entry.name.endsWith(".html")) {
			const html = fs.readFileSync(fullPath, "utf8");
			const minified = await minify(html, {
				useShortDoctype: true,
				collapseWhitespace: true,
				removeComments: true,
				processScripts: "text/html, application/ld+json",
				minifyJS: true,
				minifyCSS: true,
			});
			fs.writeFileSync(fullPath, minified, "utf8");
			console.log(`Minified: ${fullPath}`);
		}
	}
}

minifyHtmlFiles(distPath);
