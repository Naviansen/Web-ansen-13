$files = @("index.html","informatika.html","bahasa.html","jadwal.html")

$cdnMarker = '<script src="https://cdn.tailwindcss.com"></script>'

foreach ($f in $files) {
    if (!(Test-Path $f)) { continue }
    $c = Get-Content $f -Raw
    
    $match = [regex]::Match($c, '(?s)<script>\s*tailwind\.config\s*=.*?</script>')
    if ($match.Success) {
        $block = $match.Value
        # Remove it from where it is
        $c = $c.Substring(0, $match.Index) + $c.Substring($match.Index + $match.Length)
        # Insert after CDN tag
        $c = $c.Replace($cdnMarker, $cdnMarker + "`n  " + $block)
        Set-Content -Path $f -Value $c -NoNewline
        Write-Host "[$f] Config moved after CDN."
    } else {
        Write-Host "[$f] Config block not found."
    }
}

Write-Host "Done."
