import type { Config } from "tailwindcss";

/**
 * Colors point at the Arte y Parte design-system CSS variables declared in
 * app/globals.css. Change a value there and every component follows.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      screens: {
        tablet: "700px",
        desktop: "1040px",
      },
      colors: {
        aqua: {
          50: "var(--aqua-050)",
          100: "var(--aqua-100)",
          200: "var(--aqua-200)",
          300: "var(--aqua-300)",
          400: "var(--aqua-400)",
          500: "var(--aqua-500)",
          600: "var(--aqua-600)",
          700: "var(--aqua-700)",
          800: "var(--aqua-800)",
          900: "var(--aqua-900)",
        },
        ink: {
          300: "var(--ink-300)",
          400: "var(--ink-400)",
          600: "var(--ink-600)",
          700: "var(--ink-700)",
          800: "var(--ink-800)",
          900: "var(--ink-900)",
        },
        n: {
          0: "var(--n-000)",
          100: "var(--n-100)",
          200: "var(--n-200)",
          400: "var(--n-400)",
        },
        text: {
          body: "var(--text-body)",
          strong: "var(--text-strong)",
          muted: "var(--text-muted)",
          link: "var(--text-link)",
        },
        surface: {
          page: "var(--surface-page)",
          card: "var(--surface-card)",
          sunken: "var(--surface-sunken)",
        },
        border: {
          subtle: "var(--border-subtle)",
          brand: "var(--border-brand)",
        },
        danger: "var(--danger)",
      },
      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        pill: "var(--r-pill)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
        ring: "var(--ring-focus)",
      },
      fontFamily: {
        core: ["var(--font-nunito)", "Nunito", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,.6,.3,1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "none" },
        },
        flota: {
          "0%,100%": { transform: "translateY(-4px)" },
          "50%": { transform: "translateY(4px)" },
        },
      },
      animation: {
        rise: "rise 180ms cubic-bezier(.2,.6,.3,1) both",
        flota: "flota 3.2s cubic-bezier(.2,.6,.3,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
