/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A3C8F",
        accent: "#F57C00",
        dark: "#0D0D0D",
        section: "#F4F7FF",
        textPrimary: "#1A1A2E",
        textSecondary: "#4A4A6A",
        borderSoft: "#E0E4F0"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(26,60,143,0.10)",
        lift: "0 20px 50px rgba(26,60,143,0.14)",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(ellipse 80% 60% at 70% 0%, rgba(245,124,0,0.18), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(26,60,143,0.2), transparent 50%)",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
        badge: "6px"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    }
  },
  plugins: []
};
