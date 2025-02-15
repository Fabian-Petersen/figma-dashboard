import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: "class",
      fontSize: {
        clampText: "clamp(0.5rem, 0.6vw, 0.8rem)",
        clampNavMenuText: "clamp(0.8rem, 2vw, 1rem)",
        clampMobileHeading: "clamp(1.5rem, 5vw, 2.3rem)",
        clamp_landingPage: "clamp(3.5rem, 5vw, 5rem)",
        clampH2: "clamp(1.5rem, 3vw, 1.75rem)",
        clampH3: "clamp(1rem, 2vw, 1.3rem)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        // $ Figma Design Colors
        clr_primary_landing: "#172755",
        clr_landing_red: "#EF2A82",
        clr_primary_900: "#5D5FEF",
        clr_primary_800: "#4079ED",
        clr_primary_300: "#F1F8FD",
        clr_primary_200: "#7B91B0",
        clr_primary_DarkShade: "#05004E",
        //$ Secondary Colors
        clr_secondary_900: "#FC7D4C",
        clr_secondary_800: "#FF966C",
        clr_secondary_700: "#FFF3EF",
        // $ Blue Gray Colors
        clr_blueGray_100: "#FFFFFF",
        clr_blueGray_200: "#FCFDFF",
        clr_blueGray_300: "#F9FAFB",
        clr_blueGray_400: "#E8E8ED",
        clr_blueGray_500: "#D0D2DA",
        clr_blueGray_600: "#A1A5B6",
        clr_blueGray_700: "#737791",
        clr_blueGray_800: "#444A6D",
        clr_blueGray_900: "#151D48",
        //$ Supporting Colors
        clr_sup_green: "#3CD856",
        clr_sup_greenShade: "#E2FFF3",
        clr_sup_yellow: "#FFA412",
        clr_sup_yellowShade: "#FEF6E6",
        clr_sup_violet: "#A700FF",
        clr_sup_violetShade: "#FBF1FF",
        clr_sup_pink: "#FF74C4",
        clr_sup_pinkShade: "#FFF1FE",
        clr_sup_barBlue: "#0095FF",
        clr_sup_barGreen: "#00E096",
        // $ State Colors
        clr_state_info: "#2F80ED",
        clr_state_success: "#27AE60",
        clr_state_warning: "#EFBE27",
        clr_state_error: "#EB5757",

        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
