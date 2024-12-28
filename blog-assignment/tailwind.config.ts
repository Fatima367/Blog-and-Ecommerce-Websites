import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Matches all relevant files in the src directory
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Matches files inside app directory
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Matches files inside components directory
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here if needed
      },
    },
  },
  plugins: [],
} satisfies Config;
