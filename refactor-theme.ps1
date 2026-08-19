$files = @(
  "index.html",
  "informatika.html",
  "bahasa.html",
  "jadwal.html",
  "profil.html",
  "app.js"
)

$themeScript = "<script>
      (function() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
          document.documentElement.classList.remove('dark');
        }
      })();
    </script>"

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw

        # Backgrounds
        $content = $content -replace 'bg-gray-100', 'bg-surface'
        $content = $content -replace 'bg-gray-50/50', 'bg-surface'
        $content = $content -replace 'bg-gray-50', 'bg-surface'
        
        $content = $content -replace 'bg-white\s+dark:bg-\[#(09090B|111111|111113|0c0c0e|0a0a0c)\]', 'bg-card'
        $content = $content -replace '\bbg-white(?![\/\-])', 'bg-card'
        
        $content = $content -replace 'dark:bg-\[#(09090B|111111|111113|0c0c0e|0a0a0c)\]', ''
        $content = $content -replace 'dark:bg-\[#111111\]', ''
        $content = $content -replace 'dark:bg-\[#0a0a0c\]', ''
        $content = $content -replace 'dark:bg-\[#262626\]', ''

        # Texts
        $content = $content -replace 'text-gray-500', 'text-textSecondary'
        $content = $content -replace 'text-gray-600', 'text-textSecondary'
        $content = $content -replace 'text-gray-400', 'text-textMuted'
        $content = $content -replace 'text-gray-800', 'text-textPrimary'
        $content = $content -replace 'text-gray-900', 'text-textPrimary'
        $content = $content -replace 'text-zinc-500', 'text-textMuted'
        $content = $content -replace 'text-zinc-400', 'text-textSecondary'
        $content = $content -replace 'text-zinc-300', 'text-textPrimary'
        
        $content = $content -replace 'dark:text-zinc-400', ''
        $content = $content -replace 'dark:text-zinc-500', ''
        $content = $content -replace 'dark:text-zinc-200', ''
        $content = $content -replace 'dark:text-white', ''
        $content = $content -replace 'dark:hover:text-zinc-200', ''
        $content = $content -replace 'dark:hover:text-white', ''
        
        # Text black
        $content = $content -replace 'text-black(?![\/\-])', 'text-textPrimary'

        # Borders
        $content = $content -replace 'border-gray-200', 'border-themeBorder'
        $content = $content -replace 'border-gray-300', 'border-borderHover'
        $content = $content -replace 'dark:border-\[#262626\]', ''
        $content = $content -replace 'dark:border-\[#3f3f46\]', ''

        # Theme init script standardization in HTML
        if ($file -match '\.html$') {
            # In powershell regex replacement, this might be tricky, so let's use a simpler pattern
            $content = $content -replace '(?s)<script>\s*\(function\s*\(\)\s*\{.*?(?:savedTheme).*?\}\)\(\);\s*<\/script>', $themeScript
        }

        # Clean up multiple spaces left by removed classes
        $content = $content -replace '[ ]{2,}', ' '

        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Processed $file"
    }
}
Write-Host "Theme refactoring completed."
