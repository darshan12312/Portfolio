/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(267deg, #DA7C25 .36%, #B923E1 102.06%)',
        'design-pattern': "url('./assets/Design.svg')",
        'Profile':"url('./assets/Profile.png')",
        'custom-gradient2': 'linear-gradient(45deg, #3f0028, #582300)',
      },
      backgroundSize: { 
        '65%': '65%',
        '150%': '150%',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

