$files = Get-ChildItem -Path "." -Include "*.html", "*.js" -Recurse -File -Exclude "tailwind-config.js", "fix-pjax.js", "extract.ps1", "refactor*.ps1"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # 1. Fix header typo in index.html
    $content = $content -replace 'bg-white/85 /85', 'bg-white/85 dark:bg-[#09090B]/85'

    # 2. Fix profil banner from black to light gray in light mode
    $content = $content -replace 'from-gray-900 via-gray-950 to-gray-900 dark:from-\[#0a0a0a\]', 'from-gray-50 via-white to-gray-50 dark:from-[#0a0a0a]'

    # 3. Fix music player container
    $content = $content -replace 'bg-\[#0a0a0c\]/80 backdrop-blur-xl border border-white/5 shadow-\[0_20px_50px_rgba\(0,0,0,0\.5\)\]', 'bg-white/80 dark:bg-[#0a0a0c]/80 backdrop-blur-xl border border-gray-200 dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'

    # 4. Fix music player texts (making sure to not touch already correct ones)
    $content = $content -replace 'text-white truncate drop-shadow', 'text-gray-900 dark:text-white truncate drop-shadow'
    $content = $content -replace 'text-zinc-400 hover:text-white', 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
    $content = $content -replace 'text-zinc-500 font-medium', 'text-gray-600 dark:text-zinc-500 font-medium'
    
    # Music player buttons
    $content = $content -replace 'bg-black/40 backdrop-blur-sm', 'bg-gray-100/80 dark:bg-black/40 backdrop-blur-sm'
    $content = $content -replace 'bg-white/5 hover:bg-brand-red-500/10', 'bg-gray-100 dark:bg-white/5 hover:bg-brand-red-500/10'
    $content = $content -replace 'border border-white/10', 'border border-gray-200 dark:border-white/10'
    
    # "CURRENTLY LISTENING" text
    $content = $content -replace 'text-zinc-400 uppercase filter drop-shadow-\[0_0_3px_rgba\(255,255,255,0\.1\)\]', 'text-gray-500 dark:text-zinc-400 uppercase filter drop-shadow-[0_0_3px_rgba(0,0,0,0.05)] dark:drop-shadow-[0_0_3px_rgba(255,255,255,0.1)]'

    # ctrl-btn CSS class (inline styles inside html)
    $content = $content -replace 'border: 1px solid rgba\(255, 255, 255, 0\.08\);\s*background: rgba\(0, 0, 0, 0\.4\);\s*color: #a1a1aa;', 'border: 1px solid var(--ctrl-border, rgba(0,0,0,0.1)); background: var(--ctrl-bg, rgba(255,255,255,0.8)); color: var(--ctrl-color, #475569);'
    
    # speed dropdown
    $content = $content -replace 'bg-\[#0a0a0c\]/95 backdrop-blur-xl border border-brand-red-500/20', 'bg-white/95 dark:bg-[#0a0a0c]/95 backdrop-blur-xl border border-gray-200 dark:border-brand-red-500/20'

    # progress and volume container backgrounds
    $content = $content -replace 'bg-black/60 border border-white/5', 'bg-gray-200 dark:bg-black/60 border border-gray-300 dark:border-white/5'

    # lyrics panel
    $content = $content -replace 'bg-\[#0a0a0c\]/40 rounded-xl', 'bg-gray-50/80 dark:bg-[#0a0a0c]/40 rounded-xl'

    Set-Content -Path $file.FullName -Value $content -NoNewline
}
