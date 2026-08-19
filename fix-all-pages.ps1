$files = @("index.html", "informatika.html", "bahasa.html", "jadwal.html", "profil.html")

# STANDARD NAVBAR BLOCK — exactly one consistent version used across all pages
# We'll replace anything inside profil.html that has residual dark:hover classes
foreach ($file in $files) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # ===== FIX 1: Body background =====
        $content = $content -replace 'class="min-h-screen flex flex-col antialiased overflow-x-hidden bg-\[#FAFAFA\] text-textPrimary', 'class="min-h-screen flex flex-col antialiased overflow-x-hidden bg-page text-textPrimary'
        
        # ===== FIX 2: Navbar header bg — standardize =====
        # profil.html had bg-white/85 /85, now bg-card/85
        $content = $content -replace 'class="sticky top-0 z-50 w-full bg-card/85 /85 backdrop-blur-md border-b border-themeBorder', 'class="sticky top-0 z-50 w-full bg-card/85 backdrop-blur-md border-b border-themeBorder'
        
        # ===== FIX 3: Remove lingering dark: variants from nav items =====
        # profil.html still has dark:text-textSecondary and dark:hover:bg-[#111111] etc.
        $content = $content -replace 'text-textSecondary dark:text-textSecondary hover:text-textPrimary hover:bg-surface dark:hover:bg-\[#111111\] border border-transparent hover:border-themeBorder dark:hover:border-\[#262626\]', 'text-textSecondary hover:text-textPrimary hover:bg-surface border border-transparent hover:border-themeBorder'
        $content = $content -replace 'text-textMuted dark:text-textMuted\b', 'text-textMuted'
        $content = $content -replace 'dark:text-textMuted\b', ''
        $content = $content -replace 'dark:text-textSecondary\b', ''
        $content = $content -replace ' dark:hover:bg-\[#111111\]', ''
        $content = $content -replace ' dark:hover:border-\[#262626\]', ''
        $content = $content -replace ' dark:text-zinc-100', ''
        $content = $content -replace ' dark:text-zinc-100\b', ''
        $content = $content -replace ' dark:text-zinc-555', ''
        $content = $content -replace ' dark:text-zinc-600', ''
        $content = $content -replace ' dark:text-zinc-700', ''
        $content = $content -replace ' dark:bg-zinc-800/50', ''
        $content = $content -replace ' dark:border-zinc-700/50', ''
        $content = $content -replace ' dark:bg-zinc-950', ''
        
        # ===== FIX 4: Gray divider span =====
        $content = $content -replace 'class="h-4 w-px bg-gray-200 mx-1"', 'class="h-4 w-px bg-themeBorder mx-1"'
        $content = $content -replace 'class="h-4 w-px bg-themeBorder mx-1"', 'class="h-4 w-px bg-themeBorder mx-1"'
        
        # ===== FIX 5: Brand link hover text =====
        $content = $content -replace 'group-hover:text-textPrimary dark:group-hover:text-white transition-colors', 'group-hover:text-textPrimary transition-colors'
        
        # ===== FIX 6: Mobile menu bg for profil.html =====
        $content = $content -replace 'class="md:hidden border-t border-gray-200 dark:border-\[#262626\] bg-white px-4 space-y-3 shadow-lg"', 'class="md:hidden border-t border-themeBorder bg-card px-4 space-y-3 shadow-lg"'
        
        # ===== FIX 7: Speed dropdown bg =====
        $content = $content -replace 'class="absolute bottom-full right-0 mb-2 w-32 bg-card/95 /95 backdrop-blur-xl', 'class="absolute bottom-full right-0 mb-2 w-32 bg-card/95 backdrop-blur-xl'
        $content = $content -replace '"absolute bottom-full right-0 mb-2 w-32 bg-white/95 /95 backdrop-blur-xl border border-themeBorder dark:border-brand-red-500/20', '"absolute bottom-full right-0 mb-2 w-32 bg-card backdrop-blur-xl border border-themeBorder'
        
        # ===== FIX 8: Profile page banner =====
        $content = $content -replace 'dark:from-\[#0a0a0a\] dark:via-\[#111111\] dark:to-\[#0a0a0a\]', ''
        $content = $content -replace 'from-gray-50 via-white to-gray-50 ', ''
        $content = $content -replace 'class="h-36 sm:h-48 bg-gradient-to-r  relative border-b border-themeBorder"', 'class="h-36 sm:h-48 bg-gradient-to-r from-surface to-page relative border-b border-themeBorder"'
        
        # ===== FIX 9: Pelajar Kelas XI badge =====
        $content = $content -replace 'class="text-\[10px\] sm:text-xs bg-zinc-100  text-textSecondary font-medium px-2.5 py-1 rounded-md border border-themeBorder"', 'class="text-[10px] sm:text-xs bg-surface text-textSecondary font-medium px-2.5 py-1 rounded-md border border-themeBorder"'
        
        # ===== FIX 10: Skill labels in profil.html =====
        $content = $content -replace 'class="text-\[10px\] font-bold text-gray-700 dark:text-textPrimary tracking-wider uppercase"', 'class="text-[10px] font-bold text-textPrimary tracking-wider uppercase"'
        $content = $content -replace 'class="text-gray-700 dark:text-textPrimary', 'class="text-textPrimary'
        $content = $content -replace '"text-gray-700 dark:text-textPrimary hover:text-brand-accent transition-colors"', '"text-textPrimary hover:text-brand-accent transition-colors"'
        
        # ===== FIX 11: profil page subtitle =====
        $content = $content -replace 'class="text-xs text-textSecondary dark:text-zinc-555 mt-1"', 'class="text-xs text-textSecondary mt-1"'
        $content = $content -replace 'class="text-xs text-textMuted dark:text-zinc-555 flex items-center gap-1.5 mt-2"', 'class="text-xs text-textMuted flex items-center gap-1.5 mt-2"'
        $content = $content -replace 'dark:text-zinc-555\b', ''
        
        # ===== FIX 12: Remove leftover slash artifacts =====
        $content = $content -replace 'backdrop-blur-xl border border-white/5', 'backdrop-blur-xl border border-themeBorder'
        $content = $content -replace ' dark:border-white/10', ''
        $content = $content -replace 'bg-surface dark:bg-white/5 hover:bg-brand-red-500/10', 'bg-surface hover:bg-brand-red-500/10'
        
        # ===== FIX 13: progress bar container =====
        $content = $content -replace 'bg-gray-200 dark:bg-black/60 border border-borderHover dark:border-white/5', 'bg-themeBorder/40 border border-borderHover'
        
        # ===== FIX 14: Speed button bg =====
        $content = $content -replace 'bg-white/5 whitespace-nowrap', 'bg-surface whitespace-nowrap'
        $content = $content -replace 'hover:bg-white/10', 'hover:bg-surface'
        
        # ===== FIX 15: Fix lyrics panel =====
        $content = $content -replace 'class="relative z-20 translate-y-full opacity-0 pointer-events-none transition-all duration-500 flex flex-col items-center bg-surface/80 /40 rounded-xl"', 'class="relative z-20 translate-y-full opacity-0 pointer-events-none transition-all duration-500 flex flex-col items-center bg-surface/80 rounded-xl"'
        
        # ===== FIX 16: Mobile header controls panel =====
        $content = $content -replace 'class="flex flex-col items-center md:items-end justify-center gap-5 md:gap-4 shrink-0 border-t md:border-t-0 md:border-l border-white/5 pt-5 md:pt-0 md:pl-8 mt-2 md:mt-0 w-full md:w-auto self-stretch md:self-center"', 'class="flex flex-col items-center md:items-end justify-center gap-5 md:gap-4 shrink-0 border-t md:border-t-0 md:border-l border-themeBorder pt-5 md:pt-0 md:pl-8 mt-2 md:mt-0 w-full md:w-auto self-stretch md:self-center"'
        
        # ===== FIX 17: Mute button text =====
        $content = $content -replace 'class="text-textMuted hover:text-white transition-colors duration-300 hover:scale-110 shrink-0"', 'class="text-textMuted hover:text-textPrimary transition-colors duration-300 hover:scale-110 shrink-0"'
        
        # ===== FIX 18: Tailwind config AFTER CDN import =====
        # The tailwind.config must come AFTER the cdn script
        # Find and swap ordering:
        if ($content -match '<script>\s*tailwind\.config\s*=.*?</script>\s*<!-- Tailwind CSS') {
            $content = $content -replace '(?s)(<script>\s*tailwind\.config\s*=.*?</script>)\s*(<!-- Tailwind CSS v3 Play CDN -->\s*<script src="https://cdn\.tailwindcss\.com"></script>)', '$2`n$1'
        }
        
        # ===== FIX 19: Clean up multiple spaces =====
        $content = $content -replace '[ ]{2,}', ' '
        
        Set-Content -Path $file -Value $content -NoNewline
        Write-Host "Fixed $file"
    }
}
Write-Host "All pages fixed!"
