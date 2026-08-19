$files = @(
  "index.html",
  "informatika.html",
  "bahasa.html",
  "jadwal.html",
  "profil.html",
  "app.js"
)

foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw

        # Cleanup leftover artifacts
        $content = $content -replace 'bg-card/85 /85', 'bg-card/85'
        $content = $content -replace 'dark:group-hover:text-white', ''
        $content = $content -replace 'dark:hover:bg-\[#111113\]', ''
        $content = $content -replace 'dark:hover:bg-themeAccent', ''
        $content = $content -replace 'dark:hover:border-themeAccent', ''
        $content = $content -replace 'dark:bg-black/40', 'dark:bg-surface/80'
        $content = $content -replace 'bg-black/20 dark:bg-black/60', 'bg-black/20 dark:bg-black/80'
        
        $content = $content -replace '[ ]{2,}', ' '

        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Processed $file"
    }
}
Write-Host "Cleanup completed."
