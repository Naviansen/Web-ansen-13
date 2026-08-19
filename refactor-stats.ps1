$file = "index.html"
$c = Get-Content $file -Raw

$oldStatsRegex = '(?s)<!-- Quick Stats Card Grid -->.*?</div> <!-- Two Column Layout: Activities & Quote -->'

$newStats = @"
 <!-- Quick Stats Card Grid -->
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> 
 <!-- Card 1: Total Tugas -->
 <div class="premium-card rounded-[14px] bg-card border border-themeBorder/60 p-5 flex items-center relative overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
 <div class="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
 <div class="w-full text-center flex flex-col items-center justify-center space-y-1">
 <p class="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Total Tugas</p>
 <h4 class="font-display font-black text-2xl text-textPrimary drop-shadow-sm" id="stat-total">0</h4>
 </div>
 <div class="absolute right-4 w-8 h-8 rounded-lg bg-surface border border-themeBorder flex items-center justify-center text-textMuted shadow-sm">
 <i class="fa-solid fa-layer-group text-[10px]"></i>
 </div>
 </div> 
 <!-- Card 2: Tugas Selesai -->
 <div class="premium-card rounded-[14px] bg-card border border-themeBorder/60 p-5 flex items-center relative overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
 <div class="absolute inset-0 bg-gradient-to-t from-emerald-500/[0.02] to-transparent pointer-events-none"></div>
 <div class="w-full text-center flex flex-col items-center justify-center space-y-1">
 <p class="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Tugas Selesai</p>
 <h4 class="font-display font-black text-2xl text-emerald-500 drop-shadow-sm" id="stat-completed">0</h4>
 </div>
 <div class="absolute right-4 w-8 h-8 rounded-lg bg-surface border border-themeBorder flex items-center justify-center text-textMuted shadow-sm">
 <i class="fa-solid fa-trophy text-[10px]"></i>
 </div>
 </div> 
 <!-- Card 3: Dalam Pengerjaan -->
 <div class="premium-card rounded-[14px] bg-card border border-themeBorder/60 p-5 flex items-center relative overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
 <div class="absolute inset-0 bg-gradient-to-t from-amber-500/[0.02] to-transparent pointer-events-none"></div>
 <div class="w-full text-center flex flex-col items-center justify-center space-y-1">
 <p class="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Dalam Pengerjaan</p>
 <h4 class="font-display font-black text-2xl text-amber-500 drop-shadow-sm" id="stat-progress">0</h4>
 </div>
 <div class="absolute right-4 w-8 h-8 rounded-lg bg-surface border border-themeBorder flex items-center justify-center text-amber-500 shadow-sm">
 <i class="fa-solid fa-gear text-[10px]"></i>
 </div>
 </div> 
 <!-- Card 4: Rata-rata Nilai -->
 <div class="premium-card rounded-[14px] bg-card border border-themeBorder/60 p-5 flex items-center relative overflow-hidden shadow-md hover:-translate-y-1 transition-transform duration-300">
 <div class="absolute inset-0 bg-gradient-to-t from-blue-500/[0.02] to-transparent pointer-events-none"></div>
 <div class="w-full text-center flex flex-col items-center justify-center space-y-1">
 <p class="text-[10px] font-bold text-textSecondary uppercase tracking-widest">Rata-rata Nilai</p>
 <h4 class="font-display font-black text-2xl text-blue-400 drop-shadow-sm" id="stat-avg-grade">0.0</h4>
 </div>
 <div class="absolute right-4 w-8 h-8 rounded-lg bg-surface border border-themeBorder flex items-center justify-center text-blue-400 shadow-sm">
 <i class="fa-solid fa-medal text-[10px]"></i>
 </div>
 </div>
 </div> 
 <!-- Two Column Layout: Activities & Quote -->
"@

$c = [regex]::Replace($c, $oldStatsRegex, $newStats)
Set-Content -Path $file -Value $c -NoNewline
Write-Host "Stats cards replaced!"
