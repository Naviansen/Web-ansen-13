$infoPath = "d:\Na Vian Sen\Sekolah\Informatika\Kelas 11\Gravity Ide\Website\informatika.html"
$html = [System.IO.File]::ReadAllText($infoPath, [System.Text.Encoding]::UTF8)

# Find the boundaries of #info-subview-algoritma
$startMarker = '<!-- Sub-View: Algoritma -->'
$endMarker = '</section>'

$startIdx = $html.IndexOf($startMarker)
$endIdx = $html.IndexOf($endMarker, $startIdx)

if ($startIdx -eq -1 -or $endIdx -eq -1) {
    Write-Host "Error finding markers in informatika.html"
    exit 1
}

$before = $html.Substring(0, $startIdx)
$after = $html.Substring($endIdx)

$newContent = @"
<!-- Sub-View: Algoritma -->
 <div id="info-subview-algoritma" class="space-y-6 hidden animate-fade-in">
    
    <!-- Header Banner -->
    <div class="premium-card rounded-2xl p-6 sm:p-7 bg-card border border-themeBorder shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-80 h-80 bg-themeAccent/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div class="space-y-1.5">
                <span class="text-[10px] text-themeAccent font-bold tracking-widest px-2.5 py-1 rounded-md bg-themeAccent/10 border border-themeAccent/20 inline-flex items-center gap-1.5 shadow-sm">
                    <i class="fa-solid fa-microchip"></i> INFORMATIKA &bull; TOOLS & ALGORITMA
                </span>
                <h3 class="font-display font-extrabold text-2xl sm:text-3xl text-textPrimary tracking-tight">
                    Kalkulator & Konverter Sistem Komputer
                </h3>
                <p class="text-xs sm:text-sm text-textSecondary max-w-2xl leading-relaxed">
                    Perangkat interaktif untuk konversi sistem bilangan, decoding teks ASCII, dan kalkulasi operasi bitwise logika.
                </p>
            </div>
        </div>
    </div>

    <!-- Tool Switcher Sub-Tabs -->
    <div class="flex items-center gap-2 overflow-x-auto pb-1 border-b border-themeBorder">
        <button onclick="switchAlgoTool('number-system')" id="btn-algo-tool-number"
            class="px-4 py-2 text-xs font-bold rounded-lg bg-themeAccent text-white border border-themeAccent transition-all shrink-0 flex items-center gap-2 shadow-sm">
            <i class="fa-solid fa-calculator"></i> Number System Converter
        </button>
        <button onclick="switchAlgoTool('ascii')" id="btn-algo-tool-ascii"
            class="px-4 py-2 text-xs font-bold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0 flex items-center gap-2">
            <i class="fa-solid fa-font"></i> ASCII Converter
        </button>
        <button onclick="switchAlgoTool('bitwise')" id="btn-algo-tool-bitwise"
            class="px-4 py-2 text-xs font-bold rounded-lg bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all shrink-0 flex items-center gap-2">
            <i class="fa-solid fa-binary"></i> Bitwise Calculator
        </button>
    </div>

    <!-- ================= TOOL 1: NUMBER SYSTEM CONVERTER ================= -->
    <div id="algo-panel-number" class="space-y-6 block animate-fade-in">
        <div class="premium-card rounded-2xl p-6 sm:p-8 bg-card border border-themeBorder shadow-md space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-themeBorder pb-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-themeAccent/10 border border-themeAccent/20 flex items-center justify-center text-themeAccent shadow-inner">
                        <i class="fa-solid fa-arrow-right-arrow-left text-sm"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-base text-textPrimary">Number System Converter</h4>
                        <p class="text-[11px] text-textMuted">Konversi instan antar basis Binary, Octal, Decimal, dan Hexadecimal</p>
                    </div>
                </div>
                <div class="flex items-center gap-2">
                    <button id="calc-btn-clear" onclick="clearCalculator()" class="px-3 py-1.5 text-xs font-semibold text-textSecondary hover:text-textPrimary bg-surface border border-themeBorder hover:border-themeAccent/30 rounded-lg transition-all flex items-center gap-1.5" title="Hapus input">
                        <i class="fa-solid fa-delete-left text-xs text-textMuted"></i> Clear
                    </button>
                    <button id="calc-btn-reset" onclick="resetCalculator()" class="px-3 py-1.5 text-xs font-semibold text-themeAccent hover:text-white hover:bg-themeAccent bg-themeAccent/10 border border-themeAccent/20 rounded-lg transition-all flex items-center gap-1.5" title="Kembalikan ke awal">
                        <i class="fa-solid fa-rotate-left text-xs"></i> Reset
                    </button>
                </div>
            </div>

            <!-- Input & Dropdown -->
            <div class="flex flex-col md:flex-row gap-3">
                <div class="relative flex-1">
                    <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-textMuted">
                        <i class="fa-solid fa-terminal text-xs"></i>
                    </div>
                    <input type="text" id="calc-input" value="101101" placeholder="Masukkan angka (contoh: 101101, 255, FF)..." autocomplete="off" spellcheck="false"
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-mono rounded-xl pl-10 pr-4 py-3 focus:outline-none transition-all"
                        oninput="runNumberConversion()" />
                </div>

                <div class="w-full md:w-64">
                    <select id="calc-base" onchange="runNumberConversion()"
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-xs font-bold rounded-xl px-3.5 py-3 focus:outline-none transition-all cursor-pointer">
                        <option value="2" selected>Binary (Base 2)</option>
                        <option value="8">Octal (Base 8)</option>
                        <option value="10">Decimal (Base 10)</option>
                        <option value="16">Hexadecimal (Base 16)</option>
                    </select>
                </div>
            </div>

            <!-- Error Message Alert -->
            <div id="calc-error-msg" class="hidden p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 dark:text-red-400 text-xs flex items-center gap-2.5 animate-fade-in">
                <i class="fa-solid fa-triangle-exclamation shrink-0"></i>
                <span id="calc-error-text">Nilai tidak valid untuk sistem bilangan ini.</span>
            </div>

            <!-- Results Grid (4 Cards) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                <!-- BINARY CARD -->
                <div class="p-4 rounded-xl bg-surface border border-themeBorder hover:border-themeAccent/40 transition-all flex flex-col justify-between group shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-themeAccent flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-themeAccent"></span> BINARY
                            </span>
                            <span class="text-[9px] font-bold text-textMuted px-1.5 py-0.5 rounded bg-card border border-themeBorder">Base 2</span>
                        </div>
                        <div id="res-binary" class="font-mono font-bold text-base sm:text-lg text-textPrimary break-all select-all py-1 min-h-[32px]">
                            101101
                        </div>
                    </div>
                    <div class="pt-3 mt-2 border-t border-themeBorder flex items-center justify-between">
                        <span class="text-[9px] text-textMuted font-mono">0, 1</span>
                        <button onclick="copyResultValue('res-binary', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-themeAccent rounded-md transition-all flex items-center gap-1.5 active:scale-95">
                            <i class="fa-regular fa-copy text-[10px]"></i> <span>Copy</span>
                        </button>
                    </div>
                </div>

                <!-- OCTAL CARD -->
                <div class="p-4 rounded-xl bg-surface border border-themeBorder hover:border-amber-500/40 transition-all flex flex-col justify-between group shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-amber-500 flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> OCTAL
                            </span>
                            <span class="text-[9px] font-bold text-textMuted px-1.5 py-0.5 rounded bg-card border border-themeBorder">Base 8</span>
                        </div>
                        <div id="res-octal" class="font-mono font-bold text-base sm:text-lg text-textPrimary break-all select-all py-1 min-h-[32px]">
                            55
                        </div>
                    </div>
                    <div class="pt-3 mt-2 border-t border-themeBorder flex items-center justify-between">
                        <span class="text-[9px] text-textMuted font-mono">0&ndash;7</span>
                        <button onclick="copyResultValue('res-octal', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-amber-500 rounded-md transition-all flex items-center gap-1.5 active:scale-95">
                            <i class="fa-regular fa-copy text-[10px]"></i> <span>Copy</span>
                        </button>
                    </div>
                </div>

                <!-- DECIMAL CARD -->
                <div class="p-4 rounded-xl bg-surface border border-themeBorder hover:border-emerald-500/40 transition-all flex flex-col justify-between group shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-emerald-500 flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> DECIMAL
                            </span>
                            <span class="text-[9px] font-bold text-textMuted px-1.5 py-0.5 rounded bg-card border border-themeBorder">Base 10</span>
                        </div>
                        <div id="res-decimal" class="font-mono font-bold text-base sm:text-lg text-textPrimary break-all select-all py-1 min-h-[32px]">
                            45
                        </div>
                    </div>
                    <div class="pt-3 mt-2 border-t border-themeBorder flex items-center justify-between">
                        <span class="text-[9px] text-textMuted font-mono">0&ndash;9</span>
                        <button onclick="copyResultValue('res-decimal', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-emerald-500 rounded-md transition-all flex items-center gap-1.5 active:scale-95">
                            <i class="fa-regular fa-copy text-[10px]"></i> <span>Copy</span>
                        </button>
                    </div>
                </div>

                <!-- HEXADECIMAL CARD -->
                <div class="p-4 rounded-xl bg-surface border border-themeBorder hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-sm">
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-[10px] font-black uppercase tracking-wider text-blue-500 dark:text-blue-400 flex items-center gap-1.5">
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> HEXADECIMAL
                            </span>
                            <span class="text-[9px] font-bold text-textMuted px-1.5 py-0.5 rounded bg-card border border-themeBorder">Base 16</span>
                        </div>
                        <div id="res-hex" class="font-mono font-bold text-base sm:text-lg text-textPrimary break-all select-all py-1 min-h-[32px]">
                            2D
                        </div>
                    </div>
                    <div class="pt-3 mt-2 border-t border-themeBorder flex items-center justify-between">
                        <span class="text-[9px] text-textMuted font-mono">0&ndash;9, A&ndash;F</span>
                        <button onclick="copyResultValue('res-hex', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-blue-500 rounded-md transition-all flex items-center gap-1.5 active:scale-95">
                            <i class="fa-regular fa-copy text-[10px]"></i> <span>Copy</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Quick Conversion Buttons -->
            <div class="pt-4 border-t border-themeBorder space-y-2.5">
                <div class="flex items-center gap-2">
                    <i class="fa-solid fa-wand-magic-sparkles text-xs text-themeAccent"></i>
                    <h5 class="text-xs font-bold text-textPrimary uppercase tracking-wider">Quick Conversion</h5>
                    <span class="text-[10px] text-textMuted">(Klik untuk mencoba contoh instan)</span>
                </div>
                <div class="flex flex-wrap gap-2 pt-1">
                    <button onclick="setQuickConversion('1010', 2)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-themeAccent hover:text-themeAccent hover:bg-card transition-all active:scale-95">
                        1010<sub class="text-[9px]">2</sub>
                    </button>
                    <button onclick="setQuickConversion('11111111', 2)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-themeAccent hover:text-themeAccent hover:bg-card transition-all active:scale-95">
                        11111111<sub class="text-[9px]">2</sub>
                    </button>
                    <button onclick="setQuickConversion('255', 10)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-emerald-500 hover:text-emerald-500 hover:bg-card transition-all active:scale-95">
                        255<sub class="text-[9px]">10</sub>
                    </button>
                    <button onclick="setQuickConversion('64', 10)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-emerald-500 hover:text-emerald-500 hover:bg-card transition-all active:scale-95">
                        64<sub class="text-[9px]">10</sub>
                    </button>
                    <button onclick="setQuickConversion('FF', 16)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-blue-500 hover:text-blue-500 hover:bg-card transition-all active:scale-95">
                        FF<sub class="text-[9px]">16</sub>
                    </button>
                    <button onclick="setQuickConversion('100', 8)" class="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-surface border border-themeBorder hover:border-amber-500 hover:text-amber-500 hover:bg-card transition-all active:scale-95">
                        100<sub class="text-[9px]">8</sub>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- ================= TOOL 2: ASCII CONVERTER ================= -->
    <div id="algo-panel-ascii" class="space-y-6 hidden animate-fade-in">
        <div class="premium-card rounded-2xl p-6 sm:p-8 bg-card border border-themeBorder shadow-md space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-themeBorder pb-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-inner">
                        <i class="fa-solid fa-font text-sm"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-base text-textPrimary">ASCII Converter</h4>
                        <p class="text-[11px] text-textMuted">Konversi dua arah Text &harr; ASCII Decimal &harr; Binary &harr; Hexadecimal</p>
                    </div>
                </div>
                <!-- ASCII Mode Sub-Tabs -->
                <div class="flex items-center gap-1.5 bg-surface p-1 rounded-xl border border-themeBorder">
                    <button onclick="switchAsciiMode('text-to-ascii')" id="btn-ascii-m1"
                        class="px-3 py-1.5 text-xs font-bold rounded-lg bg-themeAccent text-white transition-all shadow-sm">
                        Text &rarr; ASCII
                    </button>
                    <button onclick="switchAsciiMode('ascii-to-text')" id="btn-ascii-m2"
                        class="px-3 py-1.5 text-xs font-bold rounded-lg text-textSecondary hover:text-textPrimary transition-all">
                        ASCII &rarr; Text
                    </button>
                    <button onclick="switchAsciiMode('binary-to-text')" id="btn-ascii-m3"
                        class="px-3 py-1.5 text-xs font-bold rounded-lg text-textSecondary hover:text-textPrimary transition-all">
                        Binary &rarr; Text
                    </button>
                </div>
            </div>

            <!-- MODE A: TEXT -> ASCII -->
            <div id="ascii-mode-text-to-ascii" class="space-y-5 block">
                <div class="space-y-2">
                    <label class="text-xs font-bold text-textPrimary flex items-center justify-between">
                        <span>Input Teks</span>
                        <button onclick="copyAsciiTableSummary()" id="btn-copy-ascii-all" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-themeAccent bg-surface border border-themeBorder rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy"></i> Copy All
                        </button>
                    </label>
                    <input type="text" id="ascii-text-input" value="Hello" placeholder="Ketik teks di sini (contoh: Hello)..."
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-sans rounded-xl px-4 py-3 focus:outline-none transition-all"
                        oninput="runAsciiConversion()" />
                </div>

                <!-- ASCII Table Container -->
                <div class="overflow-x-auto rounded-xl border border-themeBorder bg-surface">
                    <table class="w-full text-left text-xs">
                        <thead>
                            <tr class="border-b border-themeBorder bg-card/60 text-textSecondary uppercase font-bold text-[10px] tracking-wider">
                                <th class="py-3 px-4">Character</th>
                                <th class="py-3 px-4">ASCII Decimal</th>
                                <th class="py-3 px-4">Binary (8-bit)</th>
                                <th class="py-3 px-4">Hex</th>
                            </tr>
                        </thead>
                        <tbody id="ascii-table-body" class="divide-y divide-themeBorder font-mono">
                            <!-- Populated dynamically via JS -->
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- MODE B: ASCII -> TEXT -->
            <div id="ascii-mode-ascii-to-text" class="space-y-5 hidden">
                <div class="space-y-2">
                    <label class="text-xs font-bold text-textPrimary">Input ASCII Decimal (Dipisahkan spasi)</label>
                    <input type="text" id="ascii-dec-input" value="72 101 108 108 111" placeholder="Contoh: 72 101 108 108 111"
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-mono rounded-xl px-4 py-3 focus:outline-none transition-all"
                        oninput="runAsciiDecToText()" />
                </div>
                <div id="ascii-dec-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                    Format ASCII Decimal tidak valid. Masukkan angka bulat 0&ndash;255 dipisahkan spasi.
                </div>
                <div class="p-4 rounded-xl bg-surface border border-themeBorder space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider">Hasil Teks (Decoded)</span>
                        <button onclick="copyElementText('ascii-dec-output-text', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-themeAccent rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy"></i> Copy
                        </button>
                    </div>
                    <div id="ascii-dec-output-text" class="font-sans font-bold text-lg text-textPrimary py-1 break-all select-all">
                        Hello
                    </div>
                </div>
            </div>

            <!-- MODE C: BINARY -> TEXT -->
            <div id="ascii-mode-binary-to-text" class="space-y-5 hidden">
                <div class="space-y-2">
                    <label class="text-xs font-bold text-textPrimary">Input Binary 8-bit (Dipisahkan spasi atau urut)</label>
                    <textarea id="ascii-bin-input" rows="2" placeholder="Contoh: 01001000 01100101 01101100 01101100 01101111"
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-mono rounded-xl p-3.5 focus:outline-none transition-all resize-none"
                        oninput="runAsciiBinToText()">01001000 01100101 01101100 01101100 01101111</textarea>
                </div>
                <div id="ascii-bin-error" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                    Format Biner tidak valid. Gunakan digit 0 dan 1 (kelipatan 8-bit).
                </div>
                <div class="p-4 rounded-xl bg-surface border border-themeBorder space-y-2">
                    <div class="flex items-center justify-between">
                        <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider">Hasil Teks (Decoded)</span>
                        <button onclick="copyElementText('ascii-bin-output-text', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-themeAccent rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy"></i> Copy
                        </button>
                    </div>
                    <div id="ascii-bin-output-text" class="font-sans font-bold text-lg text-textPrimary py-1 break-all select-all">
                        Hello
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ================= TOOL 3: BITWISE CALCULATOR ================= -->
    <div id="algo-panel-bitwise" class="space-y-6 hidden animate-fade-in">
        <div class="premium-card rounded-2xl p-6 sm:p-8 bg-card border border-themeBorder shadow-md space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-themeBorder pb-4">
                <div class="flex items-center gap-2.5">
                    <div class="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-inner">
                        <i class="fa-solid fa-code-branch text-sm"></i>
                    </div>
                    <div>
                        <h4 class="font-display font-bold text-base text-textPrimary">Bitwise Calculator</h4>
                        <p class="text-[11px] text-textMuted">Kalkulator operasi logika biner integer (AND, OR, XOR, NOT, Shift)</p>
                    </div>
                </div>
                <!-- Base selector for bitwise inputs -->
                <div class="flex items-center gap-2">
                    <span class="text-[10px] font-bold text-textMuted uppercase">Input Base:</span>
                    <select id="bw-input-base" onchange="runBitwiseCalculation()"
                        class="bg-surface border border-themeBorder text-textPrimary text-xs font-bold rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-themeAccent">
                        <option value="10" selected>Decimal</option>
                        <option value="2">Binary</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>
            </div>

            <!-- Two Inputs (A & B) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                    <label class="text-xs font-bold text-textPrimary flex items-center justify-between">
                        <span>Input A</span>
                        <span id="bw-base-label-a" class="text-[10px] text-textMuted font-mono">Decimal</span>
                    </label>
                    <input type="text" id="bw-input-a" value="12" placeholder="Masukkan nilai A..."
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-mono rounded-xl px-4 py-2.5 focus:outline-none transition-all"
                        oninput="runBitwiseCalculation()" />
                </div>
                <div id="bw-input-b-container" class="space-y-1.5">
                    <label class="text-xs font-bold text-textPrimary flex items-center justify-between">
                        <span>Input B</span>
                        <span id="bw-base-label-b" class="text-[10px] text-textMuted font-mono">Decimal</span>
                    </label>
                    <input type="text" id="bw-input-b" value="10" placeholder="Masukkan nilai B..."
                        class="w-full bg-surface border border-themeBorder focus:border-themeAccent focus:ring-2 focus:ring-themeAccent/20 text-textPrimary text-sm font-mono rounded-xl px-4 py-2.5 focus:outline-none transition-all"
                        oninput="runBitwiseCalculation()" />
                </div>
            </div>

            <!-- Error message for bitwise -->
            <div id="bw-error-msg" class="hidden p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs">
                Nilai input tidak valid untuk basis yang dipilih.
            </div>

            <!-- Operation Buttons -->
            <div class="space-y-2">
                <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider">Pilih Operasi:</span>
                <div class="grid grid-cols-2 sm:grid-cols-6 gap-2">
                    <button onclick="setBitwiseOp('AND')" id="btn-bw-and"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-themeAccent text-white border border-themeAccent transition-all shadow-sm">
                        AND (&amp;)
                    </button>
                    <button onclick="setBitwiseOp('OR')" id="btn-bw-or"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all">
                        OR (|)
                    </button>
                    <button onclick="setBitwiseOp('XOR')" id="btn-bw-xor"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all">
                        XOR (^)
                    </button>
                    <button onclick="setBitwiseOp('NOT')" id="btn-bw-not"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all">
                        NOT (~)
                    </button>
                    <button onclick="setBitwiseOp('SHL')" id="btn-bw-shl"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all">
                        A &lt;&lt; B
                    </button>
                    <button onclick="setBitwiseOp('SHR')" id="btn-bw-shr"
                        class="px-3 py-2 text-xs font-bold font-mono rounded-xl bg-surface text-textSecondary border border-themeBorder hover:border-borderHover hover:text-textPrimary transition-all">
                        A &gt;&gt; B
                    </button>
                </div>
            </div>

            <!-- Bitwise Results Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                <div class="p-4 rounded-xl bg-surface border border-themeBorder flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider block mb-1">Result (Decimal)</span>
                        <div id="bw-res-dec" class="font-mono font-bold text-lg text-emerald-500 py-1 break-all select-all min-h-[32px]">
                            8
                        </div>
                    </div>
                    <div class="pt-2 mt-1 border-t border-themeBorder flex justify-end">
                        <button onclick="copyElementText('bw-res-dec', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-emerald-500 rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy text-[10px]"></i> Copy
                        </button>
                    </div>
                </div>

                <div class="p-4 rounded-xl bg-surface border border-themeBorder flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider block mb-1">Result (Binary)</span>
                        <div id="bw-res-bin" class="font-mono font-bold text-lg text-themeAccent py-1 break-all select-all min-h-[32px]">
                            00001000
                        </div>
                    </div>
                    <div class="pt-2 mt-1 border-t border-themeBorder flex justify-end">
                        <button onclick="copyElementText('bw-res-bin', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-themeAccent rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy text-[10px]"></i> Copy
                        </button>
                    </div>
                </div>

                <div class="p-4 rounded-xl bg-surface border border-themeBorder flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider block mb-1">Result (Hexadecimal)</span>
                        <div id="bw-res-hex" class="font-mono font-bold text-lg text-blue-500 py-1 break-all select-all min-h-[32px]">
                            08
                        </div>
                    </div>
                    <div class="pt-2 mt-1 border-t border-themeBorder flex justify-end">
                        <button onclick="copyElementText('bw-res-hex', this)" class="px-2.5 py-1 text-[10px] font-bold text-textSecondary hover:text-textPrimary bg-card border border-themeBorder hover:border-blue-500 rounded-md transition-all flex items-center gap-1.5">
                            <i class="fa-regular fa-copy text-[10px]"></i> Copy
                        </button>
                    </div>
                </div>
            </div>

            <!-- Bitwise Binary Operation Visualizer -->
            <div class="p-5 rounded-xl bg-surface border border-themeBorder space-y-2.5">
                <div class="flex items-center justify-between">
                    <span class="text-[10px] font-bold text-textMuted uppercase tracking-wider flex items-center gap-1.5">
                        <i class="fa-solid fa-align-left text-themeAccent"></i> Binary Bit Alignment Visualizer
                    </span>
                    <span id="bw-op-badge" class="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-themeAccent/10 text-themeAccent border border-themeAccent/20">
                        AND (&amp;)
                    </span>
                </div>
                <div id="bw-visualizer-box" class="p-4 rounded-lg bg-card border border-themeBorder font-mono text-xs sm:text-sm text-textPrimary leading-relaxed overflow-x-auto space-y-1">
                    <!-- Populated dynamically via JS -->
                </div>
            </div>
        </div>
    </div>

 </div>
"@

$cleanHtml = $before + $newContent + "`n " + $after
[System.IO.File]::WriteAllText($infoPath, $cleanHtml, [System.Text.Encoding]::UTF8)
Write-Host "informatika.html updated successfully with all 3 practical tools!"
