$file = "index.html"
$c = Get-Content $file -Raw

$oldRightColRegex = '(?s)<!-- Right: Category breakdown and Profile Quote -->.*?</div>\s*</div>\s*</section>'

$newRightCol = @"
 <!-- Right: Category breakdown and Profile Quote -->
 <div class="space-y-5"> 
 <!-- Ringkasan per Pelajaran -->
 <div class="premium-card rounded-2xl p-6 bg-card border border-themeBorder/60 shadow-md">
 <h4 class="font-display font-bold text-[11px] text-textPrimary tracking-widest uppercase flex items-center gap-2 mb-6">
 <i class="fa-solid fa-folder-open text-brand-red-500 text-xs"></i> KATEGORI TUGAS
 </h4>
 <div class="space-y-5 text-xs">
 <div class="space-y-2">
 <div class="flex justify-between font-semibold items-center"> 
 <span class="text-textPrimary">Informatika</span>
 <span class="text-textSecondary font-bold text-[10px]" id="subject-info-count">0 Tugas</span>
 </div>
 <div class="h-1.5 w-full bg-themeBorder rounded-full overflow-hidden" style="mask-image: repeating-linear-gradient(to right, black 0, black 6px, transparent 6px, transparent 8px);">
 <div class="h-full bg-brand-red-500 transition-all duration-500" id="subject-info-bar" style="width: 0%"></div>
 </div>
 </div>
 <div class="space-y-2">
 <div class="flex justify-between font-semibold items-center"> 
 <span class="text-textPrimary">Bahasa Indonesia</span> 
 <span class="text-blue-400 font-bold text-[10px]" id="subject-indo-count">0 Tugas</span> 
 </div>
 <div class="h-1.5 w-full bg-themeBorder rounded-full overflow-hidden" style="mask-image: repeating-linear-gradient(to right, black 0, black 6px, transparent 6px, transparent 8px);">
 <div class="h-full bg-blue-500 transition-all duration-500" id="subject-indo-bar" style="width: 0%"></div>
 </div>
 </div>
 </div>
 </div> 
 
 <!-- Quote -->
 <div class="premium-card rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-surface to-card border border-themeBorder/60 shadow-md">
 <i class="fa-solid fa-quote-left absolute top-4 left-4 text-4xl text-themeBorder opacity-30"></i>
 <div class="relative z-10 space-y-4 pt-4">
 <p class="text-xs italic text-textSecondary leading-[1.8] font-medium px-2"> 
 "Teknologi hanyalah alat. Dalam memotivasi anak-anak dan membuat mereka bekerja bersama, gurulah yang paling penting." 
 </p>
 <div class="flex items-center justify-end gap-2 pt-2">
 <span class="text-[9px] font-black text-textPrimary tracking-widest uppercase">BILL GATES</span>
 <div class="w-6 h-6 rounded-full border border-themeBorder overflow-hidden bg-page">
 <img src="https://ui-avatars.com/api/?name=Bill+Gates&background=111214&color=fff&size=50" alt="Bill Gates" class="w-full h-full object-cover">
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
"@

$c = [regex]::Replace($c, $oldRightColRegex, $newRightCol)
Set-Content -Path $file -Value $c -NoNewline
Write-Host "Right column (Kategori & Quote) replaced!"
