$lines = Get-Content 'd:\Na Vian Sen\Sekolah\Informatika\Kelas 11\Gravity Ide\Tugas\Naviansen.html' -Encoding UTF8
$styleStart = ($lines | Select-String '<style type="text/css">').LineNumber[0]
$styleEnd = ($lines | Select-String '</style>').LineNumber[0]
$dashStart = ($lines | Select-String '<section id="view-dashboard"').LineNumber[0]
$profStart = ($lines | Select-String '<section id="view-profil"').LineNumber[0]
$infoStart = ($lines | Select-String '<section id="view-informatika"').LineNumber[0]
$bahasaStart = ($lines | Select-String '<section id="view-bahasa-indonesia"').LineNumber[0]
$jadwalStart = ($lines | Select-String '<section id="view-jadwal-pelajaran"').LineNumber[0]
$mainEnd = ($lines | Select-String '</main>').LineNumber[0]
$scriptStart = ($lines | Select-String '// --- STUB DATA FOR TASKS ---').LineNumber[0] - 1
$scriptEnd = ($lines | Select-String '</script>' | Select-Object -Last 1).LineNumber

Write-Host "Style: $styleStart to $styleEnd"
Write-Host "Dash: $dashStart"
Write-Host "Prof: $profStart"
Write-Host "Info: $infoStart"
Write-Host "Bahasa: $bahasaStart"
Write-Host "Jadwal: $jadwalStart"
Write-Host "Main End: $mainEnd"
Write-Host "Script: $scriptStart to $scriptEnd"
