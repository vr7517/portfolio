// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      colors: {
        headerbg: "#151b23", 
        darkbg:"#212830",      // Custom dark background
        orange: "#f97316",         // Tailwind orange-500
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      scale: {
        80: '0.8',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  darkMode: "class", // ✅ Important for dark mode support
  plugins: [],
}
