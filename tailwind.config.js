/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        resume: "#ffcc13",
        linkedin: "#0077b5",
        github: "#333",
        // Dark mode navy palette
        navy: {
          900: "#0a192f", // Main background
          800: "#112240", // Card/section background
          700: "#1d3a5c", // Lighter accent
          600: "#233554", // Border/outline
        },
        slate: {
          light: "#ccd6f6", // Primary text
          muted: "#8892b0", // Secondary text
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
