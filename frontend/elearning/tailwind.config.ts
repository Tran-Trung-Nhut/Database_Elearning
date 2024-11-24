import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#DFE2DF",
        foreground: "#DFE2DF",
        hcmutDarkBlue: "#032B91", // Adding the new color
        hcmutLightBlue: "#1388DB", // Adding the new color
      },
    },
  },
  plugins: [],
};
export default config;
