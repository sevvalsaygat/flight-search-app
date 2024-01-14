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
        gray: {
          300: "#798185",
        },
        neutral: {
          100: "#bbbbbb",
          200: "#dee1e3",
          500: "#ffffffe6",
        },
        stone: {
          100: "#ffffff80",
          200: "#ffffffd9",
        },
        purple: {
          100: "#817387",
          600: "#593e4d",
          700: "#54082d",
          900: "#380622",
        },
        rose: {
          100: "#f7f5f6",
          200: "#e3e1e2",
        },
      },
      fontSize: {
        xxxs: "0.5625rem",
        xxs: "0.6875rem",
        mini: "0.8125rem",
      },
    },
  },
  plugins: [],
};
export default config;
