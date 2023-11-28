/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '48': '48%',
      },
  
      height: {
        '80vh': '80vh',
        '60vh': '60vh',
      },
      colors: {
        'off-white': '#EBE8E2',
        'button' : '#CC5500',
      },
        'image-rendering': {
          'optimize-quality': 'image-rendering: optimizeQuality;',
        },
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.image-rendering-optimize-quality': {
        'image-rendering': 'optimizeQuality',
      },
    });
  },],
}
