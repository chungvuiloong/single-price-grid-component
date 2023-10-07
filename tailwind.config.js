/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'Cyan': 'hsl(179, 62%, 43%)',
        'Bright-Yellow': 'hsl(71, 73%, 54%)',
        'Light-Gray': 'hsl(204, 43%, 93%)',
        'Grayish-Blue': 'hsl(218, 22%, 67%)',
      },
    },
  },
  plugins: [require("daisyui")],
}