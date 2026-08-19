$files = @("profil.html", "index.html", "informatika.html", "bahasa.html", "jadwal.html")

$newConfig = @"
  <script>
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
              500: '#e00f3c',
              600: '#c20930',
              700: '#a30024',
              800: '#84001b',
              900: '#660012',
              950: '#3d0007',
              accent: '#ff1a40',
            },
          },
          page: 'rgb(var(--color-page) / <alpha-value>)',
          card: 'rgb(var(--color-card) / <alpha-value>)',
          surface: 'rgb(var(--color-secondary) / <alpha-value>)',
          themeBorder: 'rgb(var(--color-border) / <alpha-value>)',
          borderHover: 'rgb(var(--color-border-hover) / <alpha-value>)',
          textPrimary: 'rgb(var(--color-primary) / <alpha-value>)',
          textSecondary: 'rgb(var(--color-secondary-text) / <alpha-value>)',
          textMuted: 'rgb(var(--color-muted) / <alpha-value>)',
          themeAccent: 'rgb(var(--color-accent) / <alpha-value>)',
          themeAccentHover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
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
  </script>
"@

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Replace inline tailwind config
        $content = $content -replace '(?s)<script>\s*tailwind\.config = \{.*?</script>', $newConfig

        # Fix bg-white transparency artifacts on profiling page
        $content = $content -replace 'bg-white/80 /80', 'bg-card/80'
        $content = $content -replace 'bg-white/95 /95', 'bg-card/95'
        $content = $content -replace 'bg-white/85 /85', 'bg-card/85'

        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Processed $file"
    }
}
Write-Host "Tailwind config synced."
