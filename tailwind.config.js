/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets:[require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#6EC531',     // Green highlight (used for "Home" icon background and accent elements)
        secondary: '#F5F5F5',   // Light gray background
        accent: '#FFA500',      // Orange (used for the star rating)
        success: '#00C853',     // Delivered icon green
        dark: '#212121',        // Main text
        light: '#FFFFFF',       // Card and background whites
        muted: '#9E9E9E',       // Subtext like “Discount 5%”
        border: '#E0E0E0',      // Line separators and borders
      },
    },
  },
  plugins: [],
}

