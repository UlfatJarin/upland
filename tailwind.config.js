/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Inter': ['Inter', 'serif'],
      'Darker': ['Darker Grotesque', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Roboto': ['Roboto', 'sans-serif'],
      'Codystar': ['Codystar', 'sans-serif'],
      'Raleway': ['Raleway', 'sans-serif'],
      'Josefin': ['Josefin Sans', 'sans-serif'],
      // font-family: "Inter", serif;
      // font-family: "Darker Grotesque", sans-serif;
      // font-family: "Poppins", sans-serif;
      // font-family: "Roboto", sans-serif;
      // font-family: "Codystar", sans-serif;
      // font-family: "Raleway", sans-serif;
      // font-family: "Josefin Sans", sans-serif;
    },
    extend: {
      colors: {
        'blackc': '#000000',
        'whitec': '#FFFFFF',
        'main':   '#FF6231',
        'textcolor': '#888888',
        'secondary':'#CCCCCC',
      },
    },
  },
  plugins: [],
};
