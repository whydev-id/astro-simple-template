export default {
	content: ["./src/**/*.{html,astro,md}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				interItalic: ["InterItalic", "sans-serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
