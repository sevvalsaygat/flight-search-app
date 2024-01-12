import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        zinc: {
          500: "#737373",
          600: "#3d3b3a",
        },
        neutral: {
          100: "#bbbbbb",
          200: "#dee1e3",
        },
      },
      fontSize: {
        mini: "0.8125rem",
      },
    },
  },
  plugins: [],
};
export default config;
