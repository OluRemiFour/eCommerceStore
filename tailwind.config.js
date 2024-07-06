/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle, white 0%, transparent 70%, black 100%)",
      },
      boxShadow: {
        custom:
          "0 10px 15px 30px rgba(255, 255, 255, 0.685), 0 4px 6px 30px   rgba(0, 0, 0, 0.267)",
      },
    },
  },
  plugins: [],
};
