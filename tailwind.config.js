
import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#829d70",
          100: "#8ca57c", 
          200: "#95ac86", 
          300: "#5e5a66", 
          400: "#76737e",
          500: "#9cb18e",
        },
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
});

