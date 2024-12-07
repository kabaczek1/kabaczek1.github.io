/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        sm: "645px",
        lg: "1080px",
        xl: "1190px",
      },
      colors: {
        emerald: {
          975: "#1b2622",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
