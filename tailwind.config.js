/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'Hotpink': '#E80AD1',
      'Lightpink': '#FF68E4',
      'White': '#FFF',
      'Navyblue': '#29029F',
      'Darkblue': '#020067',
    },

    extend: {
      animation: {
        marquee: 'marquee 35s linear infinite',
        //marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
          //'100%': { transform: 'translateX(-100%)' },

        },
    
        //marquee2: {
         // '0%': { transform: 'translateX(100%)' },
         // '100%': { transform: 'translateX(0%)' },
       // },
      },

      fontFamily:{
        'pText':['var(--outfit)', 'sans-serif'],
      },
      fontWeight:{
        'pText': 400,
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
