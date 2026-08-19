$file = "index.html"
$c = Get-Content $file -Raw

# 1. Replace the Hero Banner
$oldHeroRegex = '(?s)<!-- Welcome Banner / Learning Progress Hero -->.*?</div> <!-- Quick Stats Card Grid -->'

$newHero = @"
 <!-- Welcome Banner / Learning Progress Hero -->
 <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface to-page border border-themeBorder p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
 <!-- Background abstract wavy SVG -->
 <div class="absolute right-0 top-0 bottom-0 w-[60%] pointer-events-none opacity-40">
 <svg viewBox="0 0 800 400" preserveAspectRatio="xMaxYMid slice" class="w-full h-full">
 <path d="M 0,200 C 150,50 250,350 400,200 C 550,50 650,350 800,200" fill="none" stroke="rgba(224,15,60,0.3)" stroke-width="2" />
 <path d="M -50,220 C 100,70 200,370 350,220 C 500,70 600,370 750,220" fill="none" stroke="rgba(224,15,60,0.15)" stroke-width="1.5" />
 <path d="M 50,180 C 200,30 300,330 450,180 C 600,30 700,330 850,180" fill="none" stroke="rgba(224,15,60,0.6)" stroke-width="2" filter="drop-shadow(0 0 8px rgba(224,15,60,0.5))" />
 </svg>
 <div class="absolute inset-0 bg-gradient-to-l from-transparent to-page"></div>
 </div>

 <div class="z-10 space-y-4 max-w-xl"> 
 <div class="flex items-center gap-4">
 <span class="text-[9px] font-bold text-brand-red-500 uppercase tracking-widest px-2.5 py-1 rounded bg-brand-red-500/10 border border-brand-red-500/20">
 HALO, SELAMAT <span id="greeting-time">DATANG</span> 
 </span>
 </div>
 <div class="flex items-center gap-4">
 <h3 class="font-display font-extrabold text-textPrimary text-3xl sm:text-4xl tracking-tight drop-shadow-md">
 NA VIAN SEN
 </h3>
 <div class="w-14 h-14 rounded-xl p-[2px] bg-gradient-to-tr from-brand-red-600 via-brand-red-400 to-transparent shadow-[0_0_15px_rgba(224,15,60,0.3)]">
 <img src="assets/img/foto.jpeg" alt="Avatar" class="w-full h-full object-cover rounded-[10px]" onerror="this.src='https://ui-avatars.com/api/?name=Na+Vian+Sen&background=e00f3c&color=fff&size=100'">
 </div>
 </div>
 <p class="text-xs sm:text-sm text-textMuted leading-relaxed max-w-md font-medium">
 Pantau progres belajar, tugas sekolah, dan portofolio Anda secara real-time.
 </p>
 <div class="pt-2 flex gap-3"> 
 <a href="profil.html" class="px-5 py-2 text-xs font-bold rounded-xl bg-brand-red-500 hover:bg-brand-accent text-white shadow-[0_0_20px_rgba(224,15,60,0.4)] hover:shadow-[0_0_30px_rgba(224,15,60,0.6)] active:scale-[0.98] transition-all duration-300">
 <i class="fa-solid fa-user-tie mr-1.5"></i>Buka Profil 
 </a> 
 <a href="informatika.html" class="px-5 py-2 text-xs font-bold rounded-xl bg-surface border-2 border-themeBorder hover:border-textMuted text-textSecondary active:scale-[0.98] transition-all duration-300">
 Daftar Tugas 
 </a> 
 </div>
 </div> 

 <!-- Progress Ring Widget -->
 <div class="z-10 flex items-center gap-5 bg-card/80 backdrop-blur-md p-4 rounded-[20px] border border-white/5 shadow-2xl shrink-0 mr-4 md:mr-10">
 <div class="relative w-16 h-16 flex items-center justify-center drop-shadow-[0_0_10px_rgba(224,15,60,0.3)]"> 
 <svg class="w-full h-full transform -rotate-90 drop-shadow-lg">
 <circle cx="32" cy="32" r="28" class="stroke-page" stroke-width="4" fill="transparent" />
 <circle id="progress-circle" cx="32" cy="32" r="28" class="stroke-brand-red-500 transition-all duration-500" stroke-width="4" stroke-linecap="round" fill="transparent" stroke-dasharray="175.9" stroke-dashoffset="175.9" />
 </svg> 
 <span id="progress-percentage-text" class="absolute text-[11px] font-black text-textPrimary">0%</span>
 </div>
 <div class="pr-2">
 <p class="text-sm font-bold text-textPrimary">Progres Belajar</p>
 <p class="text-[10px] text-textMuted mt-1 font-medium" id="progress-tasks-text">0 dari 0 tugas selesai</p>
 </div>
 </div>
 </div> 
 <!-- Quick Stats Card Grid -->
"@

$c = [regex]::Replace($c, $oldHeroRegex, $newHero)
Set-Content -Path $file -Value $c -NoNewline
Write-Host "Hero banner replaced!"
