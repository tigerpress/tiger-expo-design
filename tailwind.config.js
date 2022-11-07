const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Raleway", "sans-serif"],
		},
		extend: {
			colors: {
				gray: colors.zinc,
			},
			boxShadow: {
				vignette:
					"inset 0 0 16px rgba(0,0,0,0.02), inset 0 0 32px rgba(0,0,0,0.03), inset 0 0 48px rgba(0,0,0,0.04), inset 0 0 64px rgba(0,0,0,0.05)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
