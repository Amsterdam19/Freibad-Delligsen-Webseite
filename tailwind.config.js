/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#235fa4",
          "secondary": "#143b64",
          "accent": "#d41d54",
          "neutral": "#E8EFF7",
          "base-100": "#ffffff",
          "info": "#5293dd",
          "success": "#a3e635",
          "warning": "#f59e0b",
          "error": "#e11d48",
        },
      },
    ],
  },

  plugins: [
    require('daisyui'),
  ],
}

