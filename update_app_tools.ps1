$appPath = "d:\Na Vian Sen\Sekolah\Informatika\Kelas 11\Gravity Ide\Website\app.js"
$code = [System.IO.File]::ReadAllText($appPath, [System.Text.Encoding]::UTF8)

# Strip any existing calculator section
$marker = "// --- BINARY & NUMBER SYSTEM CALCULATOR LOGIC ---"
$pos = $code.IndexOf($marker)
if ($pos -ge 0) {
    $code = $code.Substring(0, $pos).TrimEnd()
}

$newJs = @'

// --- INFORMATIKA ALGORITHMS & TOOLS SUITE ---

// ==========================================
// 1. TOOL SWITCHER LOGIC
// ==========================================
let currentAlgoTool = 'number-system';

function switchAlgoTool(toolId) {
  currentAlgoTool = toolId;
  const panelNumber = document.getElementById('algo-panel-number');
  const panelAscii = document.getElementById('algo-panel-ascii');
  const panelBitwise = document.getElementById('algo-panel-bitwise');

  const btnNumber = document.getElementById('btn-algo-tool-number');
  const btnAscii = document.getElementById('btn-algo-tool-ascii');
  const btnBitwise = document.getElementById('btn-algo-tool-bitwise');

  const activeClass = "px-4 py-2 text-xs font-bold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0 flex items-center gap-2 shadow-sm";
  const inactiveClass = "px-4 py-2 text-xs font-bold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0 flex items-center gap-2";

  if (panelNumber) { panelNumber.classList.add('hidden'); panelNumber.classList.remove('block'); }
  if (panelAscii) { panelAscii.classList.add('hidden'); panelAscii.classList.remove('block'); }
  if (panelBitwise) { panelBitwise.classList.add('hidden'); panelBitwise.classList.remove('block'); }

  if (btnNumber) btnNumber.className = inactiveClass;
  if (btnAscii) btnAscii.className = inactiveClass;
  if (btnBitwise) btnBitwise.className = inactiveClass;

  if (toolId === 'number-system') {
    if (panelNumber) { panelNumber.classList.remove('hidden'); panelNumber.classList.add('block'); }
    if (btnNumber) btnNumber.className = activeClass;
    runNumberConversion();
  } else if (toolId === 'ascii') {
    if (panelAscii) { panelAscii.classList.remove('hidden'); panelAscii.classList.add('block'); }
    if (btnAscii) btnAscii.className = activeClass;
    runAsciiConversion();
  } else if (toolId === 'bitwise') {
    if (panelBitwise) { panelBitwise.classList.remove('hidden'); panelBitwise.classList.add('block'); }
    if (btnBitwise) btnBitwise.className = activeClass;
    runBitwiseCalculation();
  }
}

// ==========================================
// 2. NUMBER SYSTEM CONVERTER LOGIC
// ==========================================
function runNumberConversion() {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (!inputEl || !baseEl) return;

  const raw = inputEl.value.trim();
  const fromBase = parseInt(baseEl.value, 10);

  const resBin = document.getElementById('res-binary');
  const resOct = document.getElementById('res-octal');
  const resDec = document.getElementById('res-decimal');
  const resHex = document.getElementById('res-hex');
  const errBox = document.getElementById('calc-error-msg');
  const errText = document.getElementById('calc-error-text');

  // Handle empty input
  if (raw === '') {
    if (errBox) errBox.classList.add('hidden');
    if (resBin) resBin.textContent = '-';
    if (resOct) resOct.textContent = '-';
    if (resDec) resDec.textContent = '-';
    if (resHex) resHex.textContent = '-';
    return;
  }

  // Validate characters based on radix
  let isValid = false;
  if (fromBase === 2) isValid = /^[01]+$/.test(raw);
  else if (fromBase === 8) isValid = /^[0-7]+$/.test(raw);
  else if (fromBase === 10) isValid = /^[0-9]+$/.test(raw);
  else if (fromBase === 16) isValid = /^[0-9a-fA-F]+$/.test(raw);

  if (!isValid) {
    if (errBox) {
      errBox.classList.remove('hidden');
      if (errText) errText.textContent = 'Nilai tidak valid untuk sistem bilangan ini.';
    }
    if (resBin) resBin.textContent = '-';
    if (resOct) resOct.textContent = '-';
    if (resDec) resDec.textContent = '-';
    if (resHex) resHex.textContent = '-';
    return;
  }

  // Hide error box if valid
  if (errBox) errBox.classList.add('hidden');

  // Convert to BigInt
  let decVal;
  try {
    if (fromBase === 2) decVal = BigInt('0b' + raw);
    else if (fromBase === 8) decVal = BigInt('0o' + raw);
    else if (fromBase === 10) decVal = BigInt(raw);
    else if (fromBase === 16) decVal = BigInt('0x' + raw);
  } catch (e) {
    if (errBox) {
      errBox.classList.remove('hidden');
      if (errText) errText.textContent = 'Nilai angka terlalu besar atau tidak valid.';
    }
    return;
  }

  // Calculate representations
  if (resBin) resBin.textContent = decVal.toString(2);
  if (resOct) resOct.textContent = decVal.toString(8);
  if (resDec) resDec.textContent = decVal.toString(10);
  if (resHex) resHex.textContent = decVal.toString(16).toUpperCase();
}

function clearCalculator() {
  const inputEl = document.getElementById('calc-input');
  if (inputEl) {
    inputEl.value = '';
    inputEl.focus();
    runNumberConversion();
  }
}

function resetCalculator() {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (inputEl) inputEl.value = '101101';
  if (baseEl) baseEl.value = '2';
  runNumberConversion();
}

function setQuickConversion(val, base) {
  const inputEl = document.getElementById('calc-input');
  const baseEl = document.getElementById('calc-base');
  if (inputEl) inputEl.value = val;
  if (baseEl) baseEl.value = String(base);
  runNumberConversion();
}

// ==========================================
// 3. ASCII CONVERTER LOGIC
// ==========================================
let currentAsciiMode = 'text-to-ascii';

function switchAsciiMode(mode) {
  currentAsciiMode = mode;
  const m1 = document.getElementById('ascii-mode-text-to-ascii');
  const m2 = document.getElementById('ascii-mode-ascii-to-text');
  const m3 = document.getElementById('ascii-mode-binary-to-text');

  const b1 = document.getElementById('btn-ascii-m1');
  const b2 = document.getElementById('btn-ascii-m2');
  const b3 = document.getElementById('btn-ascii-m3');

  const active = "px-3 py-1.5 text-xs font-bold rounded-lg bg-themeAccent text-white transition-all shadow-sm";
  const inactive = "px-3 py-1.5 text-xs font-bold rounded-lg text-textSecondary hover:text-textPrimary transition-all";

  if (m1) { m1.classList.add('hidden'); m1.classList.remove('block'); }
  if (m2) { m2.classList.add('hidden'); m2.classList.remove('block'); }
  if (m3) { m3.classList.add('hidden'); m3.classList.remove('block'); }

  if (b1) b1.className = inactive;
  if (b2) b2.className = inactive;
  if (b3) b3.className = inactive;

  if (mode === 'text-to-ascii') {
    if (m1) { m1.classList.remove('hidden'); m1.classList.add('block'); }
    if (b1) b1.className = active;
    runAsciiConversion();
  } else if (mode === 'ascii-to-text') {
    if (m2) { m2.classList.remove('hidden'); m2.classList.add('block'); }
    if (b2) b2.className = active;
    runAsciiDecToText();
  } else if (mode === 'binary-to-text') {
    if (m3) { m3.classList.remove('hidden'); m3.classList.add('block'); }
    if (b3) b3.className = active;
    runAsciiBinToText();
  }
}

// Mode A: Text -> ASCII Table
function runAsciiConversion() {
  const textInput = document.getElementById('ascii-text-input');
  const tableBody = document.getElementById('ascii-table-body');
  if (!textInput || !tableBody) return;

  const text = textInput.value;
  if (text.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" class="py-6 text-center text-textMuted text-xs font-sans">
          Silakan masukkan teks pada input di atas untuk melihat tabel ASCII.
        </td>
      </tr>
    `;
    return;
  }

  let rowsHtml = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const code = char.charCodeAt(0);
    const bin = code.toString(2).padStart(8, '0');
    const hex = code.toString(16).toUpperCase().padStart(2, '0');
    const displayChar = char === ' ' ? '<span class="text-textMuted italic font-sans">(space)</span>' : char;

    rowsHtml += `
      <tr class="hover:bg-card transition-colors">
        <td class="py-2.5 px-4 font-bold text-textPrimary text-sm">${displayChar}</td>
        <td class="py-2.5 px-4 text-emerald-500 font-bold">${code}</td>
        <td class="py-2.5 px-4 text-themeAccent font-bold">${bin}</td>
        <td class="py-2.5 px-4 text-blue-500 dark:text-blue-400 font-bold">${hex}</td>
      </tr>
    `;
  }

  tableBody.innerHTML = rowsHtml;
}

// Copy ASCII formatted summary
function copyAsciiTableSummary() {
  const textInput = document.getElementById('ascii-text-input');
  const btn = document.getElementById('btn-copy-ascii-all');
  if (!textInput) return;
  const text = textInput.value;
  if (!text) return;

  let summary = `Character | ASCII Decimal | Binary (8-bit) | Hex\n`;
  summary += `-------------------------------------------------\n`;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    const code = c.charCodeAt(0);
    const bin = code.toString(2).padStart(8, '0');
    const hex = code.toString(16).toUpperCase().padStart(2, '0');
    summary += `${c === ' ' ? '(space)' : c} | ${code} | ${bin} | ${hex}\n`;
  }

  copyTextToClipboard(summary, btn);
}

// Mode B: ASCII Decimal -> Text
function runAsciiDecToText() {
  const inputEl = document.getElementById('ascii-dec-input');
  const outEl = document.getElementById('ascii-dec-output-text');
  const errEl = document.getElementById('ascii-dec-error');
  if (!inputEl || !outEl) return;

  const raw = inputEl.value.trim();
  if (raw === '') {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = '-';
    return;
  }

  const parts = raw.split(/[\s,]+/);
  let decoded = '';
  let hasError = false;

  for (const part of parts) {
    if (part === '') continue;
    const num = parseInt(part, 10);
    if (isNaN(num) || num < 0 || num > 65535) {
      hasError = true;
      break;
    }
    decoded += String.fromCharCode(num);
  }

  if (hasError) {
    if (errEl) errEl.classList.remove('hidden');
    outEl.textContent = '-';
  } else {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = decoded || '-';
  }
}

// Mode C: Binary 8-bit -> Text
function runAsciiBinToText() {
  const inputEl = document.getElementById('ascii-bin-input');
  const outEl = document.getElementById('ascii-bin-output-text');
  const errEl = document.getElementById('ascii-bin-error');
  if (!inputEl || !outEl) return;

  let raw = inputEl.value.trim();
  if (raw === '') {
    if (errEl) errEl.classList.add('hidden');
    outEl.textContent = '-';
    return;
  }

  // Remove whitespace and check if valid binary
  const cleanRaw = raw.replace(/\s+/g, '');
  if (!/^[01]+$/.test(cleanRaw)) {
    if (errEl) {
      errEl.classList.remove('hidden');
      errEl.textContent = 'Format Biner tidak valid. Gunakan hanya angka 0 dan 1.';
    }
    outEl.textContent = '-';
    return;
  }

  // Split into 8-bit chunks
  let decoded = '';
  for (let i = 0; i < cleanRaw.length; i += 8) {
    const chunk = cleanRaw.slice(i, i + 8);
    const code = parseInt(chunk, 2);
    decoded += String.fromCharCode(code);
  }

  if (errEl) errEl.classList.add('hidden');
  outEl.textContent = decoded || '-';
}

// ==========================================
// 4. BITWISE CALCULATOR LOGIC
// ==========================================
let currentBitwiseOp = 'AND';

function setBitwiseOp(op) {
  currentBitwiseOp = op;
  const opButtons = {
    'AND': 'btn-bw-and',
    'OR': 'btn-bw-or',
    'XOR': 'btn-bw-xor',
    'NOT': 'btn-bw-not',
    'SHL': 'btn-bw-shl',
    'SHR': 'btn-bw-shr'
  };

  const active = "px-3 py-2 text-xs font-bold font-mono rounded-xl bg-themeAccent text-white border border-themeAccent transition-all shadow-sm";
  const inactive = "px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all";

  for (const [key, btnId] of Object.entries(opButtons)) {
    const btn = document.getElementById(btnId);
    if (btn) btn.className = (key === op) ? active : inactive;
  }

  // Toggle Input B visibility for unary NOT
  const bContainer = document.getElementById('bw-input-b-container');
  if (bContainer) {
    if (op === 'NOT') {
      bContainer.classList.add('opacity-40', 'pointer-events-none');
    } else {
      bContainer.classList.remove('opacity-40', 'pointer-events-none');
    }
  }

  runBitwiseCalculation();
}

function runBitwiseCalculation() {
  const inA = document.getElementById('bw-input-a');
  const inB = document.getElementById('bw-input-b');
  const baseEl = document.getElementById('bw-input-base');
  const errEl = document.getElementById('bw-error-msg');
  const resDec = document.getElementById('bw-res-dec');
  const resBin = document.getElementById('bw-res-bin');
  const resHex = document.getElementById('bw-res-hex');
  const visualBox = document.getElementById('bw-visualizer-box');
  const badgeOp = document.getElementById('bw-op-badge');

  if (!inA || !baseEl) return;

  const base = parseInt(baseEl.value, 10);
  const rawA = inA.value.trim();
  const rawB = inB ? inB.value.trim() : '0';

  // Update base labels
  const baseName = base === 2 ? 'Binary (Base 2)' : (base === 16 ? 'Hexadecimal (Base 16)' : 'Decimal (Base 10)');
  const labelA = document.getElementById('bw-base-label-a');
  const labelB = document.getElementById('bw-base-label-b');
  if (labelA) labelA.textContent = baseName;
  if (labelB) labelB.textContent = baseName;

  // Validate regex based on base
  const isValidA = base === 2 ? /^[01]+$/.test(rawA) : (base === 16 ? /^[0-9a-fA-F]+$/.test(rawA) : /^-?[0-9]+$/.test(rawA));
  const isValidB = base === 2 ? /^[01]+$/.test(rawB) : (base === 16 ? /^[0-9a-fA-F]+$/.test(rawB) : /^-?[0-9]+$/.test(rawB));

  if (!rawA || !isValidA || (currentBitwiseOp !== 'NOT' && (!rawB || !isValidB))) {
    if (errEl) errEl.classList.remove('hidden');
    if (resDec) resDec.textContent = '-';
    if (resBin) resBin.textContent = '-';
    if (resHex) resHex.textContent = '-';
    if (visualBox) visualBox.innerHTML = '<span class="text-textMuted text-xs">Masukkan nilai input yang valid untuk melihat visualisasi bitwise.</span>';
    return;
  }

  if (errEl) errEl.classList.add('hidden');

  // Parse integers
  const numA = parseInt(rawA, base);
  const numB = parseInt(rawB, base);

  let result = 0;
  let opSymbol = '&';
  let opLabel = 'AND (&)';

  switch (currentBitwiseOp) {
    case 'AND':
      result = numA & numB;
      opSymbol = '&';
      opLabel = 'AND (&)';
      break;
    case 'OR':
      result = numA | numB;
      opSymbol = '|';
      opLabel = 'OR (|)';
      break;
    case 'XOR':
      result = numA ^ numB;
      opSymbol = '^';
      opLabel = 'XOR (^)';
      break;
    case 'NOT':
      result = ~numA;
      opSymbol = '~';
      opLabel = 'NOT (~)';
      break;
    case 'SHL':
      result = numA << numB;
      opSymbol = '<<';
      opLabel = `A << ${numB}`;
      break;
    case 'SHR':
      result = numA >> numB;
      opSymbol = '>>';
      opLabel = `A >> ${numB}`;
      break;
  }

  if (badgeOp) badgeOp.textContent = opLabel;

  // Format outputs
  const decStr = result.toString(10);
  // Binary 8/16-bit safe representation (unsigned for positive, 32-bit for negative)
  const binStr = (result >>> 0).toString(2).padStart(8, '0');
  const hexStr = (result >>> 0).toString(16).toUpperCase().padStart(2, '0');

  if (resDec) resDec.textContent = decStr;
  if (resBin) resBin.textContent = binStr;
  if (resHex) resHex.textContent = hexStr;

  // Visualizer formatted binary bits
  if (visualBox) {
    const padLen = Math.max(8, (numA >>> 0).toString(2).length, (numB >>> 0).toString(2).length, binStr.length);
    const binA = (numA >>> 0).toString(2).padStart(padLen, '0');
    const binB = (numB >>> 0).toString(2).padStart(padLen, '0');
    const binRes = (result >>> 0).toString(2).padStart(padLen, '0');
    const divider = '-'.repeat(padLen + 10);

    if (currentBitwiseOp === 'NOT') {
      visualBox.innerHTML = `
        <div class="text-textSecondary">A:    <span class="text-textPrimary font-bold">${binA}</span> <span class="text-textMuted">(${numA})</span></div>
        <div class="text-themeAccent">${opSymbol}     ${divider}</div>
        <div class="text-emerald-500 font-bold">RES:  <span>${binRes}</span> <span class="text-textMuted font-normal">(${decStr})</span></div>
      `;
    } else {
      visualBox.innerHTML = `
        <div class="text-textSecondary">A:    <span class="text-textPrimary font-bold">${binA}</span> <span class="text-textMuted">(${numA})</span></div>
        <div class="text-textSecondary">B:    <span class="text-textPrimary font-bold">${binB}</span> <span class="text-textMuted">(${numB})</span></div>
        <div class="text-themeAccent">${opSymbol.padEnd(5, ' ')}${divider}</div>
        <div class="text-emerald-500 font-bold">RES:  <span>${binRes}</span> <span class="text-textMuted font-normal">(${decStr})</span></div>
      `;
    }
  }
}

// ==========================================
// 5. UNIVERSAL COPY & CLIPBOARD HELPERS
// ==========================================
function copyResultValue(elementId, btn) {
  copyElementText(elementId, btn);
}

function copyElementText(elementId, btn) {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.textContent.trim();
  if (!text || text === '-') return;
  copyTextToClipboard(text, btn);
}

function copyTextToClipboard(text, btn) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopySuccess(btn);
    }).catch(() => {
      fallbackCopyText(text, btn);
    });
  } else {
    fallbackCopyText(text, btn);
  }
}

function showCopySuccess(btn) {
  if (!btn) return;
  const origHtml = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check text-emerald-500 text-[10px]"></i> <span class="text-emerald-500">Copied!</span>';
  btn.classList.add('border-emerald-500/50');
  setTimeout(() => {
    btn.innerHTML = origHtml;
    btn.classList.remove('border-emerald-500/50');
  }, 1500);
}

function fallbackCopyText(text, btn) {
  const tempInput = document.createElement('textarea');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand('copy');
    showCopySuccess(btn);
  } catch (err) {
    console.error('Copy failed', err);
  }
  document.body.removeChild(tempInput);
}
'@

$finalCode = $code + "`n" + $newJs + "`n"
[System.IO.File]::WriteAllText($appPath, $finalCode, [System.Text.Encoding]::UTF8)
Write-Host "app.js updated successfully with all 3 practical tools!"
