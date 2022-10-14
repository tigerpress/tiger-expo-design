/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Raleway", "sans-serif"],
		},
		extend: {
			colors: {
				"brand": {
					"50": "#E0F6FF",
					"100": "#BDEBFF",
					"200": "#80D9FF",
					"300": "#3DC5FF",
					"400": "#00AFFA",
					"500": "#0082BA",
					"600": "#006894",
					"700": "#004F70",
					"800": "#00364D",
					"900": "#001924"
				}
			}
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
