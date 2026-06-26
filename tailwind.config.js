// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        // Minimal monochrome palette (light mode only)
        ink: '#000000',
        paper: '#FFFFFF',
        // Muted greys used across the UI
        muted: '#6B7280',
        line: '#D1D5DB',
        // Map the legacy "orange" accent classes to neutral ink so the
        // existing markup stays monochrome instead of relying on unbuilt colours.
        orange: '#111111',
        headerbg: '#F3F4F6',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
      scale: {
        80: '0.8',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  darkMode: "class", // light-mode only; kept for legacy dark: utilities (inert)
  plugins: [],
}
