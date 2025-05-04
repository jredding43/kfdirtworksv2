/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-0.5rem)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",

        'slide-in': "slide-in 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
