/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			firstq: {'max': '1445px'},
			secondq: {'max': '1250px'},
			thirdq: {'max': '935px'},
			fourthq: {'max': '750px'},
			mobile: {'max': '500px'}
		},
		colors: {
			puregray: 'rgb(6, 4, 18)',
			black: 'rgb(0, 0, 0)',
			ocean: 'rgb(2, 0, 19)',
			blackmatter: 'rgb(1, 0, 10)',
			transparent: 'transparent',
			blacktransparent: 'rgba(0, 0, 0, .6)',
			blacktransparent2: 'rgba(0, 0, 0, .3)',
			blacktransparent3: 'rgba(0, 0, 0, .9)',
			graysmooth: 'rgba(255, 255, 255, .015)',
			graysmooth2: 'rgba(255, 255, 255, .04)',
			graysmooth3: 'rgba(255, 255, 255, .2)',
			crimson: '#FF5D59',
			magicrose: '#D069FF14',
			purpleoctopus: '#8759FF',
			purpleoctopus2: '#8759FF06',
			purpleoctopus3: '#8759FF24',
			greenlight: '#59FF8F',
			greendark: '#266D3E',
			lightsea: 'rgb(148, 148, 255)',
			boldsea: 'rgb(86, 86, 253)',
			boldsea2: 'rgba(86, 86, 253, .15)',
			boldsea3: 'rgba(86, 86, 253, .05)',
			boldsea4: 'rgba(86, 86, 253, .8)',
			boldsea5: 'rgba(86, 86, 253, .4)',
			white: 'rgba(255, 255, 255)',
			fontblue: 'rgb(125, 144, 255)',
			fontbluelight: 'rgb(186, 196, 255)'
		},
		extend: {
			boxShadow: {
				'crimsonshadow': 'inset 0 0 25px #D069FF55'
			},
		}
	},
	plugins: [],
}
