$file = "app.js"
$c = Get-Content $file -Raw

$oldTemplateRegex = '(?s)item\.innerHTML\s*=\s*`\s*<div class="flex items-start gap-3">.*?</div>\s*`;'

$newTemplate = @"
  // Determine Grade Badge styling dynamically
  let gradeStr = String(task.grade);
  let gradeBg = 'bg-themeAccent/10';
  let gradeText = 'text-themeAccent';
  let gradeBorder = 'border-themeAccent/20';
  
  if (gradeStr.includes('A') || (parseInt(gradeStr) >= 85)) {
    if (gradeStr.includes('-')) {
        gradeBg = 'bg-amber-500/10';
        gradeText = 'text-amber-500';
        gradeBorder = 'border-amber-500/20';
    } else {
        gradeBg = 'bg-emerald-500/10';
        gradeText = 'text-emerald-500';
        gradeBorder = 'border-emerald-500/20';
    }
  }

  item.className = 'flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-[14px] bg-card border border-themeBorder/60 hover:border-themeAccent/40 shadow-sm hover:shadow-md transition-all duration-300 gap-4 group animate-fade-in relative overflow-hidden';
  
  item.innerHTML = `
  <div class="absolute inset-0 bg-gradient-to-r from-white/[0.01] to-transparent pointer-events-none"></div>
  <div class="flex items-center gap-4 z-10 w-full sm:w-auto">
  <div class="w-10 h-10 rounded-xl bg-brand-red-500/10 border border-brand-red-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner">
  <i class="\${subjIcon} text-[14px] text-brand-red-500"></i>
  </div>
  <div class="flex-1 min-w-0">
  <h5 class="text-xs font-bold text-textPrimary group-hover:text-themeAccent transition-colors duration-250 truncate">\${task.title}</h5>
  <div class="flex items-center gap-1.5 mt-1 text-[10px] text-textMuted font-medium truncate">
  <span>\${task.subject}</span>
  <span class="text-themeBorder">&bull;</span>
  <span>\${task.date}</span>
  </div>
  </div>
  </div>
  <div class="flex items-center justify-between w-full sm:w-auto gap-3 shrink-0 z-10 mt-2 sm:mt-0">
  <span class="text-[10px] font-bold px-3 py-1 rounded-lg border \${gradeBg} \${gradeText} \${gradeBorder}">Grade: \${task.grade}</span>
  <button onclick="openModal('\${task.id}')" class="px-3.5 py-1.5 text-[10px] font-semibold text-textSecondary hover:text-textPrimary bg-surface border border-themeBorder hover:border-themeBorder rounded-lg transition-colors flex items-center gap-1.5 shadow-sm">
  Detail <i class="fa-solid fa-chevron-right text-[8px]"></i>
  </button>
  </div>
  `;
"@

$c = [regex]::Replace($c, $oldTemplateRegex, $newTemplate)
Set-Content -Path $file -Value $c -NoNewline
Write-Host "app.js task template replaced!"
