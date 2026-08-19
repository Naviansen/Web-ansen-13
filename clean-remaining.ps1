$files = Get-ChildItem -Path ".\" -Filter "*.html"
foreach ($file in $files) {
    Write-Host "Cleaning remaining hardcoded classes in $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # 1. Backgrounds
    $content = $content -replace 'dark:bg-zinc-700', 'bg-theme-secondary'
    $content = $content -replace 'bg-gray-300 dark:bg-zinc-700', 'bg-theme-secondary'
    
    # 2. Texts
    $content = $content -replace 'dark:text-zinc-100', 'text-theme-primary'
    $content = $content -replace 'dark:text-zinc-200', 'text-theme-primary'
    $content = $content -replace 'dark:text-zinc-555', 'text-theme-secondaryText'
    $content = $content -replace 'dark:text-zinc-400', 'text-theme-secondaryText'
    
    $content = $content -replace 'text-gray-800 dark:text-zinc-100', 'text-theme-primary'
    $content = $content -replace 'text-gray-800 dark:text-zinc-200', 'text-theme-primary'
    $content = $content -replace 'text-gray-500 dark:text-zinc-555', 'text-theme-secondaryText'
    
    # 3. Borders
    $content = $content -replace 'dark:border-\[#111111\]', 'border-theme-border'
    $content = $content -replace 'border-white dark:border-\[#111111\]', 'border-theme-border'
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Done cleaning."
