/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			firstq: {'max': '1445px'},
			secondq: {'max': '1250px'},
			thirdq: {'max': '935px'},
			fourthq: {'max': '750px'},
			mobile: {'max': '385px'}
		},
		colors: {
			ocean: 'rgb(2, 0, 19)',
			blackmatter: 'rgb(1, 0, 10)',
			transparent: 'transparent',
			graysmooth: 'rgba(255, 255, 255, .015)',
			graysmooth2: 'rgba(255, 255, 255, .04)',
			graysmooth3: 'rgba(255, 255, 255, .2)',
			crimson: '#FF5D59',
			purpleoctopus: '#8759FF',
			greenlight: '#59FF8F',
			greendark: '#266D3E',
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
