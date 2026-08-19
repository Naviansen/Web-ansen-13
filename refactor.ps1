$files = Get-ChildItem -Path ".\" -Filter "*.html"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # 1. Replace tailwind config block with external script
    $content = $content -replace '(?s)<script>\s*tailwind\.config = \{.*?</script>', '<script src="tailwind-config.js"></script>'
    
    # 2. Hero and Music Player hardcoded dark backgrounds
    $content = $content -replace 'bg-\[#0a0a0c\]/80', 'bg-theme-card/80'
    $content = $content -replace 'bg-\[#0a0a0c\]/95', 'bg-theme-card/95'
    $content = $content -replace 'bg-\[#0a0a0c\]/90', 'bg-theme-card/90'
    $content = $content -replace 'bg-black/40', 'bg-theme-card/40'
    $content = $content -replace 'bg-black/60', 'bg-theme-card/60'
    $content = $content -replace 'bg-black/80', 'bg-theme-card/80'

    # Background Replacements
    $content = $content -replace 'bg-\[#FAFAFA\]', 'bg-theme-page'
    $content = $content -replace 'dark:bg-\[#09090B\]', ''
    $content = $content -replace 'bg-white/85 dark:bg-\[#09090B\]/85', 'bg-theme-page/85'
    $content = $content -replace 'bg-white dark:bg-\[#09090B\]', 'bg-theme-page'
    $content = $content -replace 'bg-white dark:bg-\[#111111\]', 'bg-theme-card'
    $content = $content -replace 'bg-gray-100 dark:bg-\[#111111\]', 'bg-theme-secondary'
    $content = $content -replace 'bg-gray-50 dark:bg-\[#111111\]', 'bg-theme-secondary'

    # Text Replacements
    $content = $content -replace 'text-gray-900 dark:text-white', 'text-theme-primary'
    $content = $content -replace 'text-gray-800 dark:text-white', 'text-theme-primary'
    $content = $content -replace 'text-gray-900 dark:text-zinc-100', 'text-theme-primary'
    $content = $content -replace 'text-gray-800 dark:text-zinc-200', 'text-theme-primary'
    $content = $content -replace 'text-gray-500 dark:text-zinc-400', 'text-theme-secondaryText'
    $content = $content -replace 'text-gray-400 dark:text-zinc-400', 'text-theme-muted'
    $content = $content -replace 'text-gray-400 dark:text-zinc-500', 'text-theme-muted'
    $content = $content -replace 'text-gray-400 dark:text-zinc-600', 'text-theme-muted'
    
    # Border Replacements
    $content = $content -replace 'border-gray-200 dark:border-\[#262626\]', 'border-theme-border'
    $content = $content -replace 'border-gray-100 dark:border-\[#262626\]', 'border-theme-border'
    $content = $content -replace 'border-gray-200 dark:border-\[#17171a\]', 'border-theme-border'
    $content = $content -replace 'hover:border-gray-200 dark:hover:border-\[#262626\]', 'hover:border-theme-borderHover'
    $content = $content -replace 'hover:border-gray-400 dark:hover:border-\[#3f3f46\]', 'hover:border-theme-borderHover'
    
    # Hover background replacements
    $content = $content -replace 'hover:bg-gray-100 dark:hover:bg-\[#111111\]', 'hover:bg-theme-secondary'

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Done refactoring HTML."

# Refactor musicPlayer.js
$musicPlayer = ".\assets\js\musicPlayer.js"
if (Test-Path $musicPlayer) {
    Write-Host "Processing musicPlayer.js..."
    $content = Get-Content -Path $musicPlayer -Raw -Encoding UTF8
    
    $content = $content -replace 'bg-\[#0a0a0c\]/80', 'bg-theme-card/80'
    $content = $content -replace 'bg-\[#0a0a0c\]/95', 'bg-theme-page/95'
    $content = $content -replace 'bg-\[#0a0a0c\]/90', 'bg-theme-page/90'
    $content = $content -replace 'bg-black/40', 'bg-theme-card/40'
    $content = $content -replace 'bg-black/60', 'bg-theme-card/60'
    $content = $content -replace 'bg-white/5', 'bg-theme-secondary'
    $content = $content -replace 'bg-white/10', 'bg-theme-secondary/80'
    
    $content = $content -replace 'text-white', 'text-theme-primary'
    $content = $content -replace 'text-zinc-400', 'text-theme-secondaryText'
    $content = $content -replace 'text-zinc-500', 'text-theme-muted'
    
    $content = $content -replace 'border-white/5', 'border-theme-border'
    $content = $content -replace 'border-white/10', 'border-theme-border'
    
    Set-Content -Path $musicPlayer -Value $content -Encoding UTF8
}

Write-Host "Done."
