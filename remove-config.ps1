$files = Get-ChildItem -Path ".\" -Filter "*.html"
foreach ($file in $files) {
    Write-Host "Cleaning inline config from $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Use .NET regex to properly handle multiline replacement
    $content = [System.Text.RegularExpressions.Regex]::Replace($content, '(?s)<script>\s*tailwind\.config = \{.*?</script>', '')
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
Write-Host "Done."
