tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          red: {
            50: '#fff1f2',
            100: '#ffe4e6',
            200: '#fecdd3',
            300: '#fda4af',
            400: '#fb7185',
            500: '#e00f3c', // Premium red primary
            600: '#c20930', // Premium red dark
            700: '#a30024',
            800: '#84001b',
            900: '#660012',
            950: '#3d0007',
            accent: '#ff1a40', // Glowing red accent
          },
        },
        theme: {
          page: 'rgb(var(--color-page) / <alpha-value>)',
          card: 'rgb(var(--color-card) / <alpha-value>)',
          secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          borderHover: 'rgb(var(--color-border-hover) / <alpha-value>)',
          primary: 'rgb(var(--color-primary) / <alpha-value>)',
          secondaryText: 'rgb(var(--color-secondary-text) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          accentHover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s infinite alternate',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 5px var(--color-accent-glow), 0 0 10px var(--color-accent-glow)' },
          '100%': { boxShadow: '0 0 15px var(--color-accent-glow-strong), 0 0 25px var(--color-accent-glow-strong)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  }
}
