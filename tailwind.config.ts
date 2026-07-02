import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/hooks/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/content/**/*.{md,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          dark: "#5B21B6",
        },

        secondary: "#3B82F6",

        accent: "#06B6D4",

        success: "#10B981",

        background: "#050816",

        foreground: "#F8FAFC",

        glass: "rgba(255,255,255,0.08)",

        border: "rgba(255,255,255,0.12)",
      },

      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        heading: ["var(--font-space)", "sans-serif"],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        glow: "0 0 30px rgba(124,58,237,.45)",
        glass: "0 8px 32px rgba(31,38,135,.25)",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#7C3AED 0%,#3B82F6 55%,#06B6D4 100%)",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-12px)",
          },
        },

        glow: {
          "0%,100%": {
            opacity: "0.6",
          },
          "50%": {
            opacity: "1",
          },
        },

        marquee: {
          from: {
            transform: "translateX(100%)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },

        shimmer: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
      },

      animation: {
        float: "float 6s ease-in-out infinite",

        glow: "glow 3s ease-in-out infinite",

        marquee: "marquee 18s linear infinite",

        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },

  plugins: [],
};

export default config;