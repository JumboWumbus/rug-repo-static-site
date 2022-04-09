const colors = require('tailwindcss/colors');


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
	"./pages/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			rose: colors.rose,
			pink: colors.pink,
			fuchsia: colors.fuchsia,
			purple: colors.purple,
			violet: colors.violet,
			indigo: colors.indigo,
			blue: colors.blue,
			lightBlue: colors.lightBlue, // Only in Tailwind CSS <=v2.1
			sky: colors.sky, // As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`  
			cyan: colors.cyan,
			teal: colors.teal,
			emerald: colors.emerald,
			green: colors.green,
			lime: colors.lime,
			yellow: colors.yellow,
			amber: colors.amber,
			orange: colors.orange,
			red: colors.red,
			warmGray: colors.warmGray,
			trueGray: colors.trueGray,
			gray: colors.gray,
			blueGray: colors.blueGray,
			coolGray: colors.coolGray,


			"offBlack": {
				DEFAULT: '#303030',
				'50': '#535353',
				'100': '#4F4F4F',
				'200': '#474747',
				'300': '#404040',
				'400': '#383838',
				'500': '#303030',
				'600': '#292929',
				'700': '#212121',
				'800': '#1A1A1A',
				'900': '#121212'
			  },
		},
    extend: {
		fontFamily: {
			
		},
	},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
