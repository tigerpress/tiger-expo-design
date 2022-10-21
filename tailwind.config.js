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
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
