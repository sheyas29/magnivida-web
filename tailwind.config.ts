import type { Config } from 'tailwindcss';
import tailwindAnimate from 'tailwindcss-animate'; // <--- Import it properly

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // --- YOUR BRAND COLORS (Hardcoded) ---
        primary: {
          DEFAULT: '#dfb755',
          foreground: '#07162f',
          50: '#fdf9ec',
          100: '#f8f2d6',
          200: '#efe0aa',
          300: '#e5cc7d',
          400: '#dfb755',
          500: '#d1a33d',
          600: '#b58430',
          700: '#916429',
          800: '#785028',
          900: '#634224',
        },
        secondary: {
          DEFAULT: '#07162f',
          foreground: '#dfb755',
        },

        // System Colors
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        // Custom Surface Colors
        surface: {
          50: '#0f264a',
          100: '#0b1d3b',
          200: '#07162f',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spin-slow': 'spin 3s linear infinite', // Add this line
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        // <--- ADD THIS KEYFRAME
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
    },
  },
  // Use the imported plugin here
  plugins: [tailwindAnimate],
};

export default config;

// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//       scroll: "scroll 40s linear infinite",
//     },
//     keyframes: {
//       scroll: {
//         "0%": { transform: "translateX(0)" },
//         "100%": { transform: "translateX(-50%)" },
//       },
//     },
//       colors: {
//         background: "#0a0a0a", // Deep industrial black
//         foreground: "#ededed", // Soft white for text
//         primary: {
//           DEFAULT: "#00f0ff", // "Cyber/Safety" Cyan - High visibility & Tech feel
//           dark: "#00a0aa",
//         },
//         surface: {
//           100: "#171717", // Card background
//           200: "#262626", // Hover state
//         },
//       },
//       fontFamily: {
//         sans: ["var(--font-inter)", "sans-serif"],
//         heading: ["var(--font-playfair)", "serif"], // We will add this font next
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;
