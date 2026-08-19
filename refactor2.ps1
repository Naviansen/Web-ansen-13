$files = Get-ChildItem -Path ".\" -Filter "*.html"

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    $content = $content -replace 'bg-white dark:bg-\[#0a0a0c\]', 'bg-theme-card'
    $content = $content -replace 'bg-gray-50 dark:bg-\[#0a0a0c\]', 'bg-theme-secondary'
    $content = $content -replace 'bg-white/90 dark:bg-\[#111111\]/90', 'bg-theme-card/90'
    $content = $content -replace 'bg-white/40 dark:bg-black/20', 'bg-theme-card/40'
    $content = $content -replace 'bg-gray-55/30 dark:bg-\[#111111\]/30', 'bg-theme-secondary/30'
    $content = $content -replace 'bg-gray-50/30 dark:bg-black/10', 'bg-theme-secondary/30'
    $content = $content -replace 'bg-white dark:bg-\[#0c0c0e\]', 'bg-theme-card'
    $content = $content -replace 'bg-gray-50/50 dark:bg-\[#111111\]/50', 'bg-theme-secondary/50'
    $content = $content -replace 'hover:bg-gray-200 dark:hover:bg-\[#1a1a1a\]', 'hover:bg-theme-secondary'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Done refactoring remaining HTML."
