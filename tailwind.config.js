/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
const config = {
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	content: ['./src/**/*.{svelte,js,ts}'],
	daisyui: {
		themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	},
	theme: {
		extend: {
			screens: {
				print: {
					raw: 'print'
				},
				screen: {
					raw: 'screen'
				}
			},
			animation: {
				'fadeInUp': 'fadeInUp 500ms ease-in-out'
			},
			keyframes: {
				fadeInUp:  {
					'0%': {
						transform: 'translateY(10%)',
						opacity: 0
					},
					'100%' : {
						transform: 'translateY(0%)',
						opacity: 1
					}
				  }
			}
		}
	}
};

export default config;
