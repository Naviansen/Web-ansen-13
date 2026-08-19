$files = Get-ChildItem -Path ".\" -Filter "*.html"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Remove text-gray-* when next to text-theme-*
    $content = $content -replace 'text-gray-\d+\s+(text-theme-\w+)', '$1'
    $content = $content -replace '(text-theme-\w+)\s+text-gray-\d+', '$1'
    
    # Remove bg-white/bg-gray-* when next to bg-theme-*
    $content = $content -replace 'bg-(white|black|gray-\d+(/\d+)?)\s+(bg-theme-\w+(/\d+)?)', '$3'
    $content = $content -replace '(bg-theme-\w+(/\d+)?)\s+bg-(white|black|gray-\d+(/\d+)?)', '$1'
    
    # Remove border-white/border-gray-* when next to border-theme-*
    $content = $content -replace 'border-(white|black|gray-\d+(/\d+)?)\s+(border-theme-\w+)', '$3'
    $content = $content -replace '(border-theme-\w+)\s+border-(white|black|gray-\d+(/\d+)?)', '$1'
    
    # Aggressively remove ANY dark:bg-*, dark:text-*, dark:border-* that still exist, 
    # EXCEPT IF it's necessary. In our theme audit, ALL components use theme variables.
    $content = $content -replace 'dark:bg-\[[^\]]+\](?:/\d+)?', ''
    $content = $content -replace 'dark:text-\[[^\]]+\]', ''
    $content = $content -replace 'dark:border-\[[^\]]+\](?:/\d+)?', ''
    
    $content = $content -replace 'dark:bg-zinc-\d+(?:/\d+)?', ''
    $content = $content -replace 'dark:text-zinc-\d+', ''
    $content = $content -replace 'dark:border-zinc-\d+(?:/\d+)?', ''
    
    $content = $content -replace 'dark:bg-black(?:/\d+)?', ''
    $content = $content -replace 'dark:bg-white(?:/\d+)?', ''
    
    # Clean up double spaces caused by removal
    $content = $content -replace '\s{2,}', ' '
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Cleanup completed."
