/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // This will watch any file that has . js,ts,jsx,tsx
  ],
  theme: {
    extend: {
      fontFamily: {             // Add the Desired font style
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {      // 
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}