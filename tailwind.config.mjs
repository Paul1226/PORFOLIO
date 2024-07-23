/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'chillinear': "radial-gradient(circle, #06b6d4 10%, #083344 100%)",
				'textlinear': "linear-gradient(180deg, rgba(240,218,43,1) 15%, rgba(219,36,0,1) 70%, rgba(105,17,0,1) 99%)",
			},
			colors: {
				'chill': {
					'50': '#ecfeff',
					'100': '#cffafe',
					'200': '#a5f3fc',
					'300': '#67e8f9',
					'400': '#22d3ee',
					'500': '#06b6d4',
					'600': '#0891b2',
					'700': '#0e7490',
					'800': '#155e75',
					'900': '#164e63',
					'950': '#083344',
				},
			},
			fontFamily: {
				cinzel: ['Cinzel Variable', 'sans-serif'],
				raleway: ['Raleway Variable', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
