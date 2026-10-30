import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5F1E7",
        ink: "#173F3A",
        gold: "#E8A63A",
        forest: "#2E5C50",
        muted: "#5C6B68",
      },
      fontFamily: {
        hand: ["var(--font-hand)"],
        script: ["var(--font-script)"],
        sans: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
