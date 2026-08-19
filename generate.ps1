$ErrorActionPreference = 'Stop'
$dir = 'd:\Na Vian Sen\Sekolah\Informatika\Kelas 11\Gravity Ide\Tugas'
$htmlPath = "$dir\Naviansen.html"
$html = Get-Content $htmlPath -Encoding UTF8 -Raw

# 1. Remove style block and replace with link
$html = $html -replace '(?ms)<style type="text/css">.*?</style>', '<link rel="stylesheet" href="style.css">'

# 2. Remove script block (stub data) and replace with script src
$html = $html -replace '(?ms)<script>\s*// --- STUB DATA FOR TASKS ---.*?</script>', '<script src="app.js"></script>'

# 3. Replace navbar links
# Desktop
$html = $html -replace 'onclick="switchTab\(''dashboard''\)"', 'href="Naviansen.html"'
$html = $html -replace 'onclick="switchTab\(''profil''\)"', 'href="profil.html"'
$html = $html -replace 'onclick="switchTab\(''informatika''\)"', 'href="informatika.html"'
$html = $html -replace 'onclick="switchTab\(''bahasa-indonesia''\)"', 'href="bahasa.html"'
$html = $html -replace 'onclick="switchTab\(''jadwal-pelajaran''\)"', 'href="jadwal.html"'

# Convert <button href="..."> to <a href="...">
$html = $html -replace '(?s)<button (href="[^"]+") (id="nav-[^"]+")(.*?)>\s*(.*?)\s*</button>', '<a $1 $2$3>$4</a>'
$html = $html -replace '(?s)<button (href="[^"]+") (id="mobile-nav-[^"]+")(.*?)>\s*(.*?)\s*</button>', '<a $1 $2$3>$4</a>'

# 4. We need to create the files now.
# Let's extract the sections.
# To do this safely, we will split the $html at the sections.
$sectionsRegex = '(?ms)<!-- ================= VIEW \d:.*?================= -->\s*<section id="view-[a-z-]+".*?</section>'
$sections = [regex]::Matches($html, $sectionsRegex)

$dashboardSection = $sections[0].Value
$profilSection = $sections[1].Value
$infoSection = $sections[2].Value
$bahasaSection = $sections[3].Value
$jadwalSection = $sections[4].Value

# Also we need to make sure we remove `hidden` from the class list of the active section, and remove the `active-nav-item` classes from the navbar, then add them dynamically to the correct link.
# Or better, we can write a function to generate the page HTML.

function GeneratePage ($pageName, $targetSection, $activeLinkId) {
    # Remove all sections from html
    $pageHtml = $html -replace $sectionsRegex, ''
    
    # Insert the target section before </main>
    # The </main> tag is preceded by some space.
    $pageHtml = $pageHtml -replace '</main>', "`n    $targetSection`n  </main>"
    
    # Make target section visible by removing 'hidden'
    $pageHtml = $pageHtml -replace '<section id="view-[a-z-]+" class="view-panel([^"]*) hidden([^"]*)">', '<section id="view-[a-z-]+" class="view-panel$1$2" style="display: block;">'
    
    # Add active class to nav
    $pageHtml = $pageHtml -replace "(id=""$activeLinkId"")([^>]*)class=""([^""]*)""", "`$1`$2class=""`$3 active-nav-item text-brand-accent"""
    $pageHtml = $pageHtml -replace "(id=""mobile-$activeLinkId"")([^>]*)class=""([^""]*)""", "`$1`$2class=""`$3 active-nav-item text-brand-accent"""
    
    # Also remove text-gray-500 from the active link
    $pageHtml = $pageHtml -replace "active-nav-item text-brand-accent([^""]*)text-gray-500", "active-nav-item text-brand-accent`$1"
    
    return $pageHtml
}

GeneratePage "Naviansen.html" $dashboardSection "nav-dashboard" | Set-Content "$dir\Naviansen.html" -Encoding UTF8
GeneratePage "profil.html" $profilSection "nav-profil" | Set-Content "$dir\profil.html" -Encoding UTF8
GeneratePage "informatika.html" $infoSection "nav-informatika" | Set-Content "$dir\informatika.html" -Encoding UTF8
GeneratePage "bahasa.html" $bahasaSection "nav-bahasa-indonesia" | Set-Content "$dir\bahasa.html" -Encoding UTF8
GeneratePage "jadwal.html" $jadwalSection "nav-jadwal-pelajaran" | Set-Content "$dir\jadwal.html" -Encoding UTF8

Write-Host "Generated 5 HTML files."
