$content = Get-Content .\profil.html -Raw

# Fix banner background
$content = $content -replace 'class="h-36 sm:h-48 bg-gradient-to-r from-surface to-page relative border-b border-themeBorder"', 'class="h-36 sm:h-48 bg-gradient-to-br from-surface via-page to-surface relative border-b border-themeBorder"'
$content = $content -replace 'class="h-36 sm:h-48  relative border-b border-themeBorder"', 'class="h-36 sm:h-48 bg-gradient-to-br from-surface via-page to-surface relative border-b border-themeBorder"'

# Fix avatar background (dark:bg-zinc-950 removed previously by refactor, now just needs bg-surface)
$content = $content -replace 'class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-surface  border-2', 'class="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-surface border-2'

# Fix progress bar tracks still using dark:bg-zinc-800
$content = $content -replace 'bg-surface dark:bg-zinc-800', 'bg-surface'
$content = $content -replace ' dark:bg-zinc-800\b', ''

# Fix SVG circle stroke (language rings)
$content = $content -replace 'class="stroke-gray-200 dark:stroke-zinc-800"', 'class="stroke-themeBorder dark:stroke-themeBorder"'

# Fix "Minat" section item text color
$content = $content -replace '"text-\[10px\] font-semibold text-gray-700 dark:text-textPrimary"', '"text-[10px] font-semibold text-textPrimary"'

# Fix dark:text-brand-red-400 on percent labels (keep the responsive one, remove the dark: override)
# These are intentional and fine — the brand-red-400 is brighter for dark mode, keeping them

# Fix footer text
$content = $content -replace 'class="text-\[10px\] text-textMuted dark:text-zinc-650 tracking-wider uppercase font-semibold"', 'class="text-[10px] text-textMuted tracking-wider uppercase font-semibold"'

# Fix leftover dark: classes on page subtitle inside span
$content = $content -replace 'class="text-\[10px\] text-textSecondary dark:text-textSecondary font-semibold tracking-wide', 'class="text-[10px] text-textSecondary font-semibold tracking-wide'

# Fix h1 brand logo title dark:text-zinc-100
$content = $content -replace 'class="font-display font-bold text-textPrimary dark:text-zinc-100 tracking-wide text-xs group-hover:text-textPrimary transition-colors"', 'class="font-display font-bold text-textPrimary tracking-wide text-xs group-hover:text-textPrimary transition-colors"'

# Fix h5 title dark:text-zinc-100 in education/awards sections
$content = $content -replace ' dark:text-zinc-100\b', ''
$content = $content -replace ' dark:text-zinc-600\b', ''
$content = $content -replace ' dark:text-zinc-650\b', ''

# Fix multiple spaces left over
$content = $content -replace '[ ]{2,}', ' '

Set-Content -Path .\profil.html -Value $content -NoNewline
Write-Host "profil.html fully cleaned."
