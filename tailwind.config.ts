import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces — clean, about.google-inspired light system
        bg: '#ffffff',
        surface: '#f8f9fa',
        surface2: '#f1f3f4',
        border: '#e6e8eb',
        // Text
        ink: '#1f2023',
        textMain: '#3c4043',
        muted: '#5f6368',
        faint: '#80868b',
        // Brand + product accents
        lipBlue: '#3b6bf0',
        lipBlueSoft: '#eaf0fe',
        gRed: '#ea4335',
        gYellow: '#f9ab00',
        gGreen: '#1e9e6a',
        gBlue: '#4285f4'
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif']
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
        marquee: 'marquee 28s linear infinite',
        scrollPulse: 'scrollPulse 2s infinite'
      }
    }
  },
  plugins: []
};

export default config;
