/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBgBlue: "#597FD3",
        customTextBlack: "#333333",
        customText: "#FBFFFF",
        customButton: "#EF7F7E",
        customButtonDarker: "#D76D6D",
      },
      fontFamily: {
        display: "Open Sans",
      },
    },
  },
  plugins: [daisyui],
};
