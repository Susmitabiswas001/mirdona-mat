import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Space-themed colors
        'space-black': 'hsl(0, 0%, 4%)',
        'space-gray': 'hsl(0, 0%, 10%)',
        'space-cyan': 'hsl(202.8169, 89.1213%, 53.1373%)',
        'holographic': 'hsl(180, 100%, 50%)',
        'glass-bg': 'hsla(0, 0%, 100%, 0.05)',
        'glass-border': 'hsla(0, 0%, 100%, 0.1)',
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        orbitron: ['Orbitron', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(0, 0%, 10%) 50%, hsl(0, 0%, 16%) 100%)',
        'glass-panel': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'holographic-gradient': 'linear-gradient(45deg, hsl(202.8169, 89.1213%, 53.1373%), hsl(180, 100%, 50%), hsl(212, 100%, 76%))',
      },
      boxShadow: {
        'holographic': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-cyan': '0 0 10px hsl(202.8169, 89.1213%, 53.1373%), 0 0 20px hsl(202.8169, 89.1213%, 53.1373%), 0 0 30px hsl(202.8169, 89.1213%, 53.1373%)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        hologram: {
          '0%': { 
            filter: 'hue-rotate(0deg) brightness(1)',
          },
          '100%': { 
            filter: 'hue-rotate(30deg) brightness(1.2)',
          },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 5px hsl(202.8169, 89.1213%, 53.1373%), 0 0 10px hsl(202.8169, 89.1213%, 53.1373%)',
          },
          '100%': { 
            boxShadow: '0 0 10px hsl(202.8169, 89.1213%, 53.1373%), 0 0 20px hsl(202.8169, 89.1213%, 53.1373%), 0 0 30px hsl(202.8169, 89.1213%, 53.1373%)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        hologram: "hologram 3s ease-in-out infinite alternate",
        'pulse-glow': "pulse-glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        fadeIn: "fadeIn 0.3s ease-in-out",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(10px)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), 
    require("@tailwindcss/typography"),
    function({ addUtilities }) {
      const newUtilities = {
        '.glass-panel': {
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.holographic-text': {
          background: 'linear-gradient(45deg, var(--space-cyan), var(--holographic), hsl(212, 100%, 76%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'hologram 3s ease-in-out infinite alternate',
        },
        '.neon-glow': {
          boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        },
        '.floating-panel': {
          transform: 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        },
        '.floating-panel:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 15px 45px rgba(0, 212, 255, 0.2)',
        },
        '.data-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} satisfies Config;
