// Workaround for SVG component, to remove svg files after build
const { rimraf } = require("rimraf");

async function run() {
	await rimraf("dist/**/*.svg", { glob: true });
}

run();
