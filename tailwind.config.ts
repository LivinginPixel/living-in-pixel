import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#06060b',
        surface: '#0e0e16',
        lipBlue: '#5282ff',
        textMain: '#c8c8d0',
        muted: '#555555'
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        body: ['Cabinet Grotesk', 'sans-serif'],
        serif: ['Instrument Serif', 'serif']
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        pulseDot: {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.7)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        scrollPulse: {
          '0%': { opacity: '0', transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { opacity: '1', transform: 'scaleY(1)', transformOrigin: 'top' },
          '100%': { opacity: '0', transform: 'scaleY(1)', transformOrigin: 'bottom' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease both',
        pulseDot: 'pulseDot 2s infinite',
        marquee: 'marquee 22s linear infinite',
        scrollPulse: 'scrollPulse 2s infinite'
      }
    }
  },
  plugins: []
};

export default config;
