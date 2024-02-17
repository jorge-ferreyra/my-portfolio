/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			ocean: 'rgb(2, 0, 19)',
			blackmatter: 'rgb(1, 0, 10)',
			transparent: 'transparent',
			graysmooth: 'rgba(255, 255, 255, .015)',
			graysmooth2: 'rgba(255, 255, 255, .04)',
			lightsea: 'rgb(148, 148, 255)',
			boldsea: 'rgb(86, 86, 253)',
			boldsea2: 'rgba(86, 86, 253, .15)',
			boldsea3: 'rgba(86, 86, 253, .05)',
			white: 'rgba(255, 255, 255)',
			fontblue: 'rgb(125, 144, 255)'
		},
		extend: {}
	},
	plugins: [],
}
