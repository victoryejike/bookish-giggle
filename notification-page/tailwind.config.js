/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "very-light-grayish-blue": "hsl(210, 60%, 98%)",
        "light-grayish-blue-1": "hsl(211, 68%, 94%)",
        "light-grayish-blue-2": "hsl(205, 33%, 90%)",
        "grayish-blue": "hsl(219, 14%, 63%)",
        "dark-grayish-blue": "hsl(219, 12%, 42%)",
        "very-dark-blue": "hsl(224, 21%, 14%)",
        "noti-blue": "hsl(219, 85%, 26%)",
        "noti-red": "hsl(1, 90%, 64%)",
      },
      fontFamily: {
        plusJakartaSans: ["PlusJakartaSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
