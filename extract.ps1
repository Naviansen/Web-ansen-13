$ErrorActionPreference = 'Stop'
$dir = 'd:\Na Vian Sen\Sekolah\Informatika\Kelas 11\Gravity Ide\Tugas'
$htmlPath = "$dir\Naviansen.html"
$html = Get-Content $htmlPath -Encoding UTF8 -Raw

# Extract CSS
if ($html -match '(?ms)<style type="text/css">(.*?)</style>') {
    $matches[1].Trim() | Set-Content "$dir\style.css" -Encoding UTF8
}

# Extract JS
if ($html -match '(?ms)<script>\s*// --- STUB DATA FOR TASKS ---(.*?)</script>\s*</body>') {
    "// --- STUB DATA FOR TASKS ---`r`n" + $matches[1].Trim() | Set-Content "$dir\app.js" -Encoding UTF8
}

Write-Host "Extraction complete."
