const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// Fix 1: attachLinkListeners duplicate event listeners
code = code.replace(/link\.addEventListener\('click', handlePJAX\);/g, "link.removeEventListener('click', handlePJAX);\n        link.addEventListener('click', handlePJAX);");

// Fix 2: preserve audio state when moving to body
code = code.replace(/document\.body\.appendChild\(playerEl\);/g, "const wasPlaying = !audioEl.paused;\n          const currentTime = audioEl.currentTime;\n          document.body.appendChild(playerEl);\n          if (wasPlaying) { audioEl.currentTime = currentTime; audioEl.play(); }");

// Fix 3: preserve audio state when moving back to main
code = code.replace(/placeholder\.parentNode\.replaceChild\(playerEl, placeholder\);/g, "const wasPlaying = !audioEl.paused;\n            const currentTime = audioEl.currentTime;\n            placeholder.parentNode.replaceChild(playerEl, placeholder);\n            if (wasPlaying) { audioEl.currentTime = currentTime; audioEl.play(); }");

fs.writeFileSync('app.js', code);
