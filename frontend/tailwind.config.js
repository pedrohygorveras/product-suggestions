/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "core-100": "var(--core-100)",
        "core-200": "var(--core-200)",
        "core-300": "var(--core-300)",
        card: "var(--card)",
        letter: "var(--letter)",
        paper: "var(--paper)",
        input: "var(--input)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        app: {
          primary: "#06d9df",
          "base-100": "#ffffff",
          "base-200": "#a0a7b3",
          "base-300": "#c5c7cc",
          "--card": "#f9f9f9",
          "--letter": "#202020",
          "--paper": "#FFFFFF",
          "--input": "#e5e7eb",
        },
        dark: {
          primary: "#06d9df",
          "base-100": "#1e1e2f",
          "base-200": "#2d2d42",
          "base-300": "#3c3c56",
          "--card": "#2d2d42",
          "--letter": "#d1d5db",
          "--paper": "#2d2d42",
          "--input": "#3c3c56",
        },
      },
    ],
  },
};
