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
    },
  },
  darkMode: "class", // ✅ Important for dark mode support
  plugins: [],
}
