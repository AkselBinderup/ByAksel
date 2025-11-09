import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FDFCFB",
        text: "#1E293B",
        "text-secondary": "#475569",
        accent: "#FF6B35",
        "accent-hover": "#FF8658",
        teal: "#004E64",
        "teal-light": "#0A9396",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      animation: {
        "star-movement-bottom":
          "star-movement-bottom 10s linear infinite alternate",
        "star-movement-top": "star-movement-top 10s linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
