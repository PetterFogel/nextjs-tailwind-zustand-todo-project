/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        white: "#FCFCFC",
        black: "#00002A",
        defaultLight: "#F8FAFC",
        defaultDark: "#1E293B",
        primary: "#6366F1",
        primaryHover: "#4F46E5"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class"
};
