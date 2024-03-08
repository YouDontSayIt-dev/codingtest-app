import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        "primary": "#141516",
      },

      animation: {
        fadeHello: "fadeIn 2s ease-in-out",
        fadeName: "fadeIn 5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { color: "transparent" },
          "100%": { color: "white" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
