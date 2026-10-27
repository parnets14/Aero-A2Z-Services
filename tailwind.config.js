/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080C16',
          900: '#131827',
          850: '#171D2E',
          800: '#1A2032',
          700: '#212937',
          600: '#2B3546',
          500: '#38445A',
        },
        brand: {
          red: '#D02622',
          redLight: '#EF3B34',
          redDark: '#9E1B18',
          redText: '#FF6B60',
          steel: '#B9C3D3',
          steelDim: '#8A96AA',
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'system-ui', 'sans-serif'],
        sans: ['Barlow', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 24px 60px -30px rgba(0,0,0,0.85)',
        glow: '0 0 0 1px rgba(208,38,34,0.45), 0 20px 50px -20px rgba(208,34,34,0.55)',
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.6)', opacity: '0.55' },
          '80%': { transform: 'scale(1.9)', opacity: '0' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22,1,0.36,1) both',
        sweep: 'sweep 4.5s linear infinite',
        pulseRing: 'pulseRing 3.2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
