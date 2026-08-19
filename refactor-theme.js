const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'index.html',
  'informatika.html',
  'bahasa.html',
  'jadwal.html',
  'profil.html',
  'app.js'
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Backgrounds
  content = content.replace(/bg-gray-100/g, 'bg-surface');
  content = content.replace(/bg-gray-50(\/50)?/g, 'bg-surface');
  // Need to be careful with bg-white. Let's replace 'bg-white' if it's next to dark:bg-...
  content = content.replace(/bg-white\s+dark:bg-\[#(09090B|111111|111113|0c0c0e|0a0a0c)\]/g, 'bg-card');
  content = content.replace(/bg-white/g, 'bg-card'); // Note: could be dangerous but we have bg-card. 
  // Let's refine bg-white replacement. We might want to keep bg-white/20 etc. 
  content = content.replace(/\bbg-white(?![\/\-])/g, 'bg-card'); 

  content = content.replace(/dark:bg-\[#(09090B|111111|111113|0c0c0e|0a0a0c)\]/g, ''); // strip unnecessary dark backgrounds
  content = content.replace(/dark:bg-\[\#111111\]/g, '');
  content = content.replace(/dark:bg-\[\#0a0a0c\]/g, '');
  content = content.replace(/dark:bg-[#262626]/g, '');

  // Texts
  content = content.replace(/text-gray-500/g, 'text-textSecondary');
  content = content.replace(/text-gray-600/g, 'text-textSecondary');
  content = content.replace(/text-gray-400/g, 'text-textMuted');
  content = content.replace(/text-gray-800/g, 'text-textPrimary');
  content = content.replace(/text-gray-900/g, 'text-textPrimary');
  content = content.replace(/text-zinc-500/g, 'text-textMuted');
  content = content.replace(/text-zinc-400/g, 'text-textSecondary');
  content = content.replace(/text-zinc-300/g, 'text-textPrimary');
  
  content = content.replace(/dark:text-zinc-400/g, '');
  content = content.replace(/dark:text-zinc-500/g, '');
  content = content.replace(/dark:text-zinc-200/g, '');
  content = content.replace(/dark:text-white/g, '');
  content = content.replace(/dark:hover:text-zinc-200/g, '');
  content = content.replace(/dark:hover:text-white/g, '');
  
  // Text black / white
  content = content.replace(/text-black(?![\/\-])/g, 'text-textPrimary');
  // keep text-white as it is usually on a colored background (red, blue)

  // Borders
  content = content.replace(/border-gray-200/g, 'border-themeBorder');
  content = content.replace(/border-gray-300/g, 'border-borderHover');
  content = content.replace(/dark:border-\[\#262626\]/g, '');
  content = content.replace(/dark:border-\[\#3f3f46\]/g, '');
  
  // Theme init script standardization in HTML
  if (filePath.endsWith('.html')) {
    const themeScriptPattern = /<script>\s*\(function\s*\(\)\s*\{[^\}]*\}\)\(\);\s*<\/script>/;
    const standardThemeScript = `<script>
      (function() {
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
          document.documentElement.classList.add('dark');
        } else if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
          document.documentElement.classList.remove('dark');
        }
      })();
    </script>`;
    content = content.replace(themeScriptPattern, standardThemeScript);
  }

  // Clean up multiple spaces
  content = content.replace(/\s{2,}/g, (match) => {
    return match.includes('\\n') ? match : ' ';
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

filesToProcess.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath);
    console.log(`Processed ${file}`);
  }
});

console.log('Theme refactoring completed.');
