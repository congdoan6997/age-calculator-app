/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          red: "hsl(0, 100%, 67%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          offWhite: "hsl(0, 0%, 94%)",
          lightGrey: "hsl(0, 0%, 86%)",
          smokeyGrey: "hsl(0, 1%, 44%)",
          offBlack: "hsl(0, 0%, 8%)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
