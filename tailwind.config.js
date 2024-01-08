/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(91deg, #6729FF 1.72%, #7B0FF5 96.46%)",
      },
      fontFamily: {
        "titillium-web": ["Titillium Web", "sans-serif"],
      },
      backgroundColor: {
        primary: "#F4F4F4",
        secondary: "#FCFCFC",
        "custom-bg": "#2B2B34",
      },
      borderColor: {
        "custom-gray": "#CACACA",
      },
      fontSize: {
        base: "18px",
      },
      colors: {
        primary: "#222B45",
        secondary: "#FCFCFC",
        "custom-gray": "#CACACA",
      },
      transitionDuration: {
        300: "300ms",
      },
      borderRadius: {
        md: "2.145px",
        sm: "1.5px",
        lg: "4px",
      },
      borderWidth: {
        1.5: "1.5px",
        2: "2px",
      },
    },
  },
  plugins: [],
};
