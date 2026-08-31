/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#4a7c59",
        "on-primary": "#ffffff",
        "primary-container": "#cce8d5",
        "on-primary-container": "#06210f",
        "primary-fixed": "#b4f4c9",
        "primary-fixed-dim": "#8ecf9e",
        
        "secondary": "#526354",
        "on-secondary": "#ffffff",
        "secondary-container": "#d5e8d5",
        "on-secondary-container": "#101f13",
        "secondary-fixed": "#e8e1d9",
        "secondary-fixed-dim": "#d4ccbf",

        "tertiary": "#39656c",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#bcebfa",
        "on-tertiary-container": "#001f24",
        "tertiary-fixed": "#f8e0a8",
        "tertiary-fixed-dim": "#dcc48e",

        "error": "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#410002",

        "background": "#faf6f0",
        "on-background": "#2e3230",
        "surface": "#faf6f0",
        "on-surface": "#2e3230",
        "surface-variant": "#e4e0d8",
        "on-surface-variant": "#4a4e4a",

        "outline": "#74796e",
        "outline-variant": "#c4c8bc",

        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f1ea",
        "surface-container": "#f0ece4",
        "surface-container-high": "#eae6de",
        "surface-container-highest": "#e4e0d8",
        "surface-bright": "#faf6f0",
        "surface-dim": "#dbd7cf",
        "inverse-surface": "#2e3230",
        "inverse-on-surface": "#f5f0e8",
      },
      borderRadius: {
        "none": "0px",
        "DEFAULT": "0.75rem",
        "sm": "0.5rem",
        "md": "0.75rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
        "full": "9999px"
      },
      spacing: {
        "base": "4px",
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "40px",
        "gutter": "16px",
        "margin-mobile": "16px",
        "margin-desktop": "32px",
        "touch-target-min": "48px"
      },
      fontFamily: {
        "headline": ["Literata", "serif"],
        "display": ["Literata", "serif"],
        "body": ["Nunito Sans", "sans-serif"],
        "label": ["Nunito Sans", "sans-serif"],
        "data-table": ["Nunito Sans", "monospace"],
        "label-caps": ["Nunito Sans", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "headline-lg": ["32px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "700" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
        "data-table": ["14px", { "lineHeight": "1.4", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "700" }],
      }
    },
  },
  plugins: [],
}
