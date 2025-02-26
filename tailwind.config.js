/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      screens: {
        sm: "300px",
        // sm: "414px", // Small
        md: "768px", // Medium
        lg: "976px", // Large
      },
      colors: {
        blue: {
          primary: "var(--color-blue-primary)",
          20: "var(--color-blue-20)",
          70: "var(--color-blue-70)",
          71: "var(--color-blue-71)",
        },
        red: {
          primary: "var(--color-red-primary)",
          30: "var(--color-red-30)",
          50: "var(--color-red-50)",
          70: "var(--color-red-70)",
          80: "var(--color-red-80)",
        },
        gray: {
          primary: "var(--color-gray-primary)",
        },
        white: {
          transparent: "var(--color-white-transparent)",
        },
      },
    },
  },
  plugins: [],
};
