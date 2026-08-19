$files = Get-ChildItem -Path ".\" -Filter "*.html"

foreach ($file in $files) {
    Write-Host "Fixing script order in $($file.Name)..."
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # Remove the existing tailwind-config.js script
    $content = $content -replace '<script src="tailwind-config.js"></script>\s*', ''
    
    # Insert it right before the CDN
    $content = $content -replace '<!-- Tailwind CSS v3 Play CDN -->\s*<script src="https://cdn.tailwindcss.com"></script>', "<script src=`"tailwind-config.js`"></script>`n  <!-- Tailwind CSS v3 Play CDN -->`n  <script src=`"https://cdn.tailwindcss.com`"></script>"
    
    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}

Write-Host "Done fixing script order."
