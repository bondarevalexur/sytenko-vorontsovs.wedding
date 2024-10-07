/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        seawaveStandart: ["seawave-standart", "sans-serif"],
        seawave: ["seawave", "sans-serif"],
        alumniSansPinstripe: ["alumniSansPinstripe", "sans-serif"],
      },
      colors: {
        grass: {
          DEFAULT: "#435853",
          200: "#377E46FF",
          500: "#3e5e46",
          400: "#aeb9a9",
          300: "#afb292",
        },
        rose: { DEFAULT: "#465945", 100: "#ddcbbe" },
        gray: { 500: "#bbbbbb" },
      },
    },
  },
  plugins: [],
};
