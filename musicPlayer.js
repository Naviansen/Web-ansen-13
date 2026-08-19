// ============================================================
// PREMIUM MUSIC PLAYER CONTROLLER
// Complete Feature Set: All Songs Modal, Search Filter,
// Drag-and-Drop Reorderable Queue, 3-Mode Repeat, Shuffle,
// Visualizer Wave, Mini Player, Fullscreen Player, Synchronized
// Lyrics, Listening Stats, and Global Shortcuts.
// ============================================================

function initMusicPlayer() {
  if (!window.audioManager) return;

  const am = window.audioManager;
  const audio = am.audio;
  const playlist = am.playlist;

  // --- 1. DYNAMIC DOM INJECTIONS ---

  // A. All Songs Modal (Contains ALL SONGS and UP NEXT Sections)
  let allSongsModal = document.getElementById('all-songs-modal');
  if (!allSongsModal) {
    allSongsModal = document.createElement('div');
    allSongsModal.id = 'all-songs-modal';
    allSongsModal.className = 'fixed inset-0 z-50 bg-black/75 backdrop-blur-xl opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-3 sm:p-6';
    allSongsModal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-card border border-themeBorder rounded-3xl p-5 sm:p-7 shadow-2xl transform scale-95 transition-transform duration-300 flex flex-col max-h-[90vh] overflow-hidden">
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-3.5 border-b border-themeBorder shrink-0">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-xl bg-themeAccent/10 border border-themeAccent/20 text-themeAccent flex items-center justify-center text-sm shadow-sm">
              <i data-lucide="library" class="w-4 h-4"></i>
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold font-display text-textPrimary leading-tight flex items-center gap-2">
                ALL SONGS &amp; QUEUE
                <span class="text-[10px] font-mono font-bold text-themeAccent" id="all-songs-counter">(${playlist.length} lagu)</span>
              </h3>
              <p class="text-[11px] text-textMuted">Koleksi lagu website &bull; Putar sekarang atau atur antrean lagu</p>
            </div>
          </div>
          <button id="all-songs-btn-close" class="p-2 text-textMuted hover:text-textPrimary rounded-xl bg-surface border border-themeBorder transition-colors cursor-pointer" title="Tutup">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Search Bar -->
        <div class="py-3 shrink-0">
          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3.5 flex items-center text-textMuted pointer-events-none">
              <i data-lucide="search" class="w-4 h-4"></i>
            </span>
            <input type="text" id="all-songs-search-input" placeholder="Cari judul lagu atau artist (contoh: Arctic, Secret, Rex)..." class="w-full bg-surface/80 border border-themeBorder focus:border-themeAccent focus:ring-1 focus:ring-themeAccent/20 text-xs text-textPrimary placeholder:text-textMuted/70 rounded-xl pl-9 pr-4 py-2.5 outline-none transition-all">
          </div>
        </div>

        <!-- Scrollable Two-Section Body -->
        <div class="flex-1 overflow-y-auto space-y-5 pr-1 custom-player-scrollbar" id="all-songs-scrollable-body">
          
          <!-- SECTION 1: ALL SONGS -->
          <div class="space-y-2">
            <div class="flex items-center justify-between px-1">
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-textMuted flex items-center gap-1.5">
                <i data-lucide="disc-3" class="w-3.5 h-3.5 text-themeAccent"></i> ALL SONGS
              </span>
              <span class="text-[10px] text-textMuted font-medium">Klik &quot;Play Now&quot; atau &quot;+ Queue&quot;</span>
            </div>
            <div class="space-y-2" id="all-songs-list-container">
              <!-- Populated dynamically -->
            </div>
          </div>

          <!-- SECTION DIVIDER -->
          <div class="relative flex items-center justify-center my-4">
            <div class="w-full border-t border-themeBorder"></div>
            <div class="absolute bg-card px-3 flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-themeAccent border border-themeBorder rounded-full py-0.5 shadow-sm">
              <i data-lucide="list-music" class="w-3 h-3"></i> ANTREAN
            </div>
          </div>

          <!-- SECTION 2: UP NEXT -->
          <div class="space-y-2 pb-2" id="all-songs-up-next-section">
            <div class="flex items-center justify-between px-1">
              <div class="flex items-center gap-2">
                <h4 class="text-xs font-bold font-display uppercase tracking-wider text-textPrimary flex items-center gap-1.5">
                  <i data-lucide="list-ordered" class="w-3.5 h-3.5 text-themeAccent"></i> UP NEXT
                </h4>
                <span id="queue-counter-badge" class="text-[10px] font-bold text-themeAccent px-2 py-0.5 rounded-md bg-themeAccent/10 border border-themeAccent/20">0 lagu</span>
              </div>
              <span class="text-[9px] text-textMuted italic hidden sm:inline">Tahan &amp; geser &#x283F; untuk ubah urutan antrean</span>
            </div>
            <div class="space-y-2" id="all-songs-up-next-list">
              <!-- Populated dynamically -->
            </div>
          </div>

        </div>

      </div>
    `;
    document.body.appendChild(allSongsModal);
  }

  // B. Scroll Mini Player (Now Playing & Next)
  let miniPlayer = document.getElementById('scroll-mini-player');
  if (!miniPlayer) {
    miniPlayer = document.createElement('div');
    miniPlayer.id = 'scroll-mini-player';
    miniPlayer.className = 'fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-6 sm:max-w-md z-40 bg-card/90 backdrop-blur-xl border border-themeBorder rounded-2xl shadow-2xl p-2.5 transition-all duration-500 transform translate-y-28 opacity-0 pointer-events-none flex flex-col gap-1.5';
    miniPlayer.innerHTML = `
      <div class="w-full h-1 bg-surface rounded-full overflow-hidden cursor-pointer relative" id="mini-progress-container">
        <div class="h-full bg-gradient-to-r from-themeAccent to-themeAccentHover w-0 rounded-full transition-all duration-150" id="mini-progress-bar"></div>
      </div>
      <div class="flex items-center justify-between gap-3 pt-0.5 px-1">
        <div class="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer" id="mini-open-fullscreen" title="Buka Fullscreen">
          <div class="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-themeBorder shadow-sm relative group">
            <img id="mini-cover" src="ArcticM.jpg" alt="Cover" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5 text-white"></i>
            </div>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center gap-1.5 min-w-0">
              <span class="text-[9px] font-bold text-textMuted uppercase tracking-wider shrink-0">Now:</span>
              <h5 id="mini-title" class="text-xs font-bold text-textPrimary truncate">Secret Door</h5>
            </div>
            <p id="mini-next" class="text-[10px] text-themeAccent font-medium truncate mt-0.5">Next: -</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button id="mini-btn-prev" class="p-1.5 text-textSecondary hover:text-textPrimary rounded-lg hover:bg-surface transition-colors cursor-pointer" title="Lagu Sebelumnya">
            <i data-lucide="skip-back" class="w-3.5 h-3.5"></i>
          </button>
          <button id="mini-btn-play" class="w-8 h-8 rounded-full bg-themeAccent hover:bg-themeAccentHover text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer" title="Play / Pause">
            <i data-lucide="play" class="w-3.5 h-3.5 ml-0.5" fill="currentColor"></i>
          </button>
          <button id="mini-btn-next" class="p-1.5 text-textSecondary hover:text-textPrimary rounded-lg hover:bg-surface transition-colors cursor-pointer" title="Lagu Berikutnya">
            <i data-lucide="skip-forward" class="w-3.5 h-3.5"></i>
          </button>
          <button id="mini-btn-fullscreen" class="p-1.5 text-textMuted hover:text-themeAccent rounded-lg hover:bg-surface transition-colors cursor-pointer ml-0.5" title="Expand Fullscreen">
            <i data-lucide="expand" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(miniPlayer);
  }

  // C. Fullscreen Player Modal
  let fsModal = document.getElementById('fullscreen-player-modal');
  if (!fsModal) {
    fsModal = document.createElement('div');
    fsModal.id = 'fullscreen-player-modal';
    fsModal.className = 'fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4 sm:p-6';
    fsModal.innerHTML = `
      <div class="relative w-full max-w-2xl bg-card/95 border border-themeBorder/60 rounded-3xl p-6 sm:p-8 shadow-2xl transform scale-95 transition-transform duration-300 flex flex-col max-h-[92vh] overflow-hidden">
        <div id="fs-ambient-glow" class="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none" style="background: #e00f3c;"></div>
        
        <!-- Header -->
        <div class="flex items-center justify-between pb-4 border-b border-themeBorder/40 relative z-10">
          <span class="text-[10px] font-bold text-themeAccent tracking-widest uppercase px-2.5 py-1 rounded-md bg-themeAccent/10 border border-themeAccent/20">
            NOW PLAYING
          </span>
          <div class="flex items-center gap-2">
            <button id="fs-tab-player" class="text-xs font-bold text-themeAccent px-3 py-1 rounded-lg bg-surface border border-themeBorder transition-all cursor-pointer">Player</button>
            <button id="fs-tab-lyrics" class="text-xs font-semibold text-textSecondary hover:text-textPrimary px-3 py-1 rounded-lg hover:bg-surface transition-all cursor-pointer">Lyrics</button>
            <button id="fs-tab-queue" class="text-xs font-semibold text-textSecondary hover:text-textPrimary px-3 py-1 rounded-lg hover:bg-surface transition-all cursor-pointer">Queue</button>
            <button id="fs-btn-close" class="p-2 text-textMuted hover:text-textPrimary rounded-xl bg-surface/80 hover:bg-surface border border-themeBorder transition-all cursor-pointer ml-2">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- Scrollable Content View -->
        <div class="flex-1 overflow-y-auto py-6 relative z-10 custom-player-scrollbar" id="fs-content-container">
          
          <!-- View 1: Main Player View -->
          <div id="fs-view-player" class="flex flex-col items-center justify-center space-y-6">
            <div class="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-2 border-themeBorder/80 group">
              <img id="fs-cover" src="ArcticM.jpg" alt="Cover" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div class="text-center max-w-md px-4">
              <h3 id="fs-title" class="text-2xl sm:text-3xl font-display font-extrabold text-textPrimary tracking-tight truncate">Secret Door</h3>
              <p id="fs-artist" class="text-sm sm:text-base text-themeAccent font-semibold mt-1 truncate">Arctic Monkeys</p>
            </div>

            <div class="w-full max-w-md px-2 space-y-1.5">
              <div id="fs-progress-container" class="h-2 w-full bg-surface border border-themeBorder rounded-full cursor-pointer relative overflow-hidden group/fsp">
                <div id="fs-progress-bar" class="h-full bg-gradient-to-r from-themeAccent to-themeAccentHover w-0 rounded-full transition-all duration-150 relative">
                  <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/fsp:opacity-100 transition-opacity shadow-md"></div>
                </div>
              </div>
              <div class="flex items-center justify-between text-[11px] font-mono text-textMuted font-medium px-0.5">
                <span id="fs-current-time">0:00</span>
                <span id="fs-total-time">0:00</span>
              </div>
            </div>

            <div class="flex items-center gap-4 sm:gap-6 pt-2">
              <button id="fs-btn-shuffle" class="ctrl-btn !w-10 !h-10 text-textSecondary hover:text-textPrimary transition-all cursor-pointer" title="Shuffle">
                <i data-lucide="shuffle" class="w-4 h-4"></i>
              </button>
              <button id="fs-btn-prev" class="ctrl-btn !w-11 !h-11 cursor-pointer" title="Previous">
                <i data-lucide="skip-back" class="w-5 h-5"></i>
              </button>
              <button id="fs-btn-play" class="w-16 h-16 rounded-full bg-themeAccent hover:bg-themeAccentHover text-white flex items-center justify-center shadow-xl active:scale-95 hover:scale-105 transition-all play-btn-glow cursor-pointer" title="Play / Pause">
                <i data-lucide="play" class="w-7 h-7 ml-0.5" fill="currentColor"></i>
              </button>
              <button id="fs-btn-next" class="ctrl-btn !w-11 !h-11 cursor-pointer" title="Next">
                <i data-lucide="skip-forward" class="w-5 h-5"></i>
              </button>
              <button id="fs-btn-repeat" class="ctrl-btn !w-10 !h-10 text-textSecondary hover:text-textPrimary relative transition-all cursor-pointer" title="Repeat (Off / Queue / Song)">
                <i data-lucide="repeat" class="w-4 h-4"></i>
                <span id="fs-repeat-badge" class="hidden absolute -top-1 -right-1 text-[8px] font-black bg-themeAccent text-white rounded-full w-3.5 h-3.5 flex items-center justify-center leading-none">1</span>
              </button>
            </div>

            <div class="flex items-center justify-center gap-6 w-full max-w-sm pt-2">
              <div class="flex items-center gap-2 flex-1 max-w-[160px]">
                <button id="fs-btn-mute" class="text-textMuted hover:text-textPrimary cursor-pointer">
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
                <div id="fs-volume-container" class="h-1.5 w-full bg-surface border border-themeBorder rounded-full cursor-pointer overflow-hidden">
                  <div id="fs-volume-bar" class="h-full bg-themeAccent rounded-full w-full"></div>
                </div>
              </div>
              <span class="text-xs text-textMuted font-mono">|</span>
              <div class="text-[11px] font-bold text-textSecondary flex items-center gap-1">
                Speed: <span id="fs-speed-label" class="text-themeAccent font-extrabold">1x</span>
              </div>
            </div>
          </div>

          <!-- View 2: Lyrics View -->
          <div id="fs-view-lyrics" class="hidden flex-col items-center space-y-3 max-w-lg mx-auto py-2">
            <div class="flex items-center justify-between w-full border-b border-themeBorder pb-2">
              <h4 class="text-xs font-bold text-themeAccent uppercase tracking-widest flex items-center gap-1.5">
                <i data-lucide="mic-2" class="w-3.5 h-3.5"></i> Synchronized Lyrics
              </h4>
              <button id="fs-btn-open-lyrics-gen" class="text-[10px] font-bold text-themeAccent hover:text-white px-2.5 py-1 rounded-lg bg-themeAccent/10 hover:bg-themeAccent border border-themeAccent/20 transition-all cursor-pointer flex items-center gap-1">
                <i data-lucide="sparkles" class="w-3 h-3"></i> AI Sync
              </button>
            </div>
            <div id="fs-lyrics-container" class="h-80 w-full overflow-y-auto text-center space-y-4 px-4 custom-player-scrollbar"></div>
          </div>

          <!-- View 3: Queue View -->
          <div id="fs-view-queue" class="hidden flex-col space-y-3 max-w-lg mx-auto">
            <div class="flex items-center justify-between pb-2 border-b border-themeBorder">
              <h4 class="text-xs font-bold text-themeAccent uppercase tracking-widest flex items-center gap-1.5">
                <i data-lucide="list-music" class="w-3.5 h-3.5"></i> Up Next / Queue
              </h4>
              <button id="fs-btn-clear-queue" class="text-[10px] font-semibold text-textMuted hover:text-brand-red-500 cursor-pointer">Clear Queue</button>
            </div>
            <div id="fs-queue-container" class="space-y-2 max-h-80 overflow-y-auto custom-player-scrollbar"></div>
          </div>

        </div>
      </div>
    `;
    document.body.appendChild(fsModal);
  }

  // D. Stats Modal
  let statsModal = document.getElementById('music-stats-modal');
  if (!statsModal) {
    statsModal = document.createElement('div');
    statsModal.id = 'music-stats-modal';
    statsModal.className = 'fixed inset-0 z-50 bg-black/70 backdrop-blur-md opacity-0 pointer-events-none transition-all duration-300 flex items-center justify-center p-4';
    statsModal.innerHTML = `
      <div class="relative w-full max-w-md bg-card border border-themeBorder rounded-3xl p-6 shadow-2xl transform scale-95 transition-transform duration-300 space-y-5">
        <div class="flex items-center justify-between border-b border-themeBorder pb-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-themeAccent/10 text-themeAccent flex items-center justify-center text-xs">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="text-sm font-bold font-display text-textPrimary">Statistik Mendengarkan</h4>
              <p class="text-[10px] text-textMuted">Tersimpan secara lokal (localStorage)</p>
            </div>
          </div>
          <button id="stats-btn-close" class="p-1.5 text-textMuted hover:text-textPrimary rounded-lg bg-surface border border-themeBorder transition-colors cursor-pointer">
            <i data-lucide="x" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="p-3.5 rounded-2xl bg-surface border border-themeBorder space-y-1">
            <p class="text-[10px] uppercase tracking-wider text-textMuted font-bold">Total Lagu Diputar</p>
            <h3 class="text-xl font-extrabold font-display text-textPrimary" id="stat-total-plays">0</h3>
          </div>
          <div class="p-3.5 rounded-2xl bg-surface border border-themeBorder space-y-1">
            <p class="text-[10px] uppercase tracking-wider text-textMuted font-bold">Waktu Mendengar</p>
            <h3 class="text-xl font-extrabold font-display text-themeAccent" id="stat-total-time">0 mnt</h3>
          </div>
          <div class="col-span-2 p-3.5 rounded-2xl bg-surface border border-themeBorder space-y-1">
            <p class="text-[10px] uppercase tracking-wider text-textMuted font-bold">Lagu Paling Sering Diputar</p>
            <h4 class="text-sm font-bold text-textPrimary truncate" id="stat-top-song">-</h4>
          </div>
          <div class="col-span-2 p-3.5 rounded-2xl bg-surface border border-themeBorder space-y-1">
            <p class="text-[10px] uppercase tracking-wider text-textMuted font-bold">Artis Favorit</p>
            <h4 class="text-sm font-bold text-textPrimary truncate" id="stat-top-artist">-</h4>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2">
          <button id="stats-btn-reset" class="text-[10px] text-textMuted hover:text-brand-red-500 font-semibold transition-colors cursor-pointer">
            Reset Statistik
          </button>
          <button id="stats-btn-ok" class="px-4 py-1.5 text-xs font-semibold text-white bg-themeAccent hover:bg-themeAccentHover rounded-xl shadow-md transition-all cursor-pointer">
            Tutup
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(statsModal);
  }

  // --- 2. DOM REFERENCES (mutable so they can be rebound after SPA navigation) ---
  let mainContainer = document.getElementById('premium-music-player') || document.getElementById('music-player-container');
  let btnPlay = document.getElementById('btn-play-expanded');
  let btnPrev = document.getElementById('btn-prev');
  let btnNext = document.getElementById('btn-next');
  let btnShuffle = document.getElementById('btn-shuffle');
  let btnRepeat = document.getElementById('btn-repeat');
  let repeatBadge = document.getElementById('repeat-badge');
  let equalizer = document.getElementById('equalizer');

  let coverImg = document.getElementById('music-cover');
  let btnOpenFullscreen = document.getElementById('btn-open-fullscreen');
  let trackTitleEl = document.getElementById('track-title');
  let trackArtistEl = document.getElementById('track-artist');
  let progressBar = document.getElementById('progress-bar');
  let progressContainer = document.getElementById('progress-container');
  let currentTimeEl = document.getElementById('current-time');
  let totalTimeEl = document.getElementById('total-time');
  let volumeBar = document.getElementById('volume-bar');
  let volumeContainer = document.getElementById('volume-container');
  let btnMute = document.getElementById('btn-mute');

  let btnSpeed = document.getElementById('btn-speed');
  let speedDropdown = document.getElementById('speed-dropdown');
  let speedChevron = document.getElementById('speed-chevron');
  let speedLabel = document.getElementById('speed-label');

  let btnAllSongs = document.getElementById('btn-all-songs');
  let allSongsSearchInput = document.getElementById('all-songs-search-input');
  let allSongsListContainer = document.getElementById('all-songs-list-container');
  let allSongsUpNextList = document.getElementById('all-songs-up-next-list');
  let queueCounterBadge = document.getElementById('queue-counter-badge');

  let btnLyrics = document.getElementById('btn-lyrics');
  let lyricsPanel = document.getElementById('lyrics-panel');
  let btnCloseLyrics = document.getElementById('btn-close-lyrics');
  let lyricsContainer = document.getElementById('lyrics-container');

  let btnStats = document.getElementById('btn-stats');

  let currentLyricIndex = -1;
  let fadeInterval;

  // Re-bind all DOM references after SPA swaps profil.html content back
  function rebindPlayerUI() {
    mainContainer = document.getElementById('premium-music-player') || document.getElementById('music-player-container');
    btnPlay = document.getElementById('btn-play-expanded');
    btnPrev = document.getElementById('btn-prev');
    btnNext = document.getElementById('btn-next');
    btnShuffle = document.getElementById('btn-shuffle');
    btnRepeat = document.getElementById('btn-repeat');
    repeatBadge = document.getElementById('repeat-badge');
    equalizer = document.getElementById('equalizer');

    coverImg = document.getElementById('music-cover');
    btnOpenFullscreen = document.getElementById('btn-open-fullscreen');
    trackTitleEl = document.getElementById('track-title');
    trackArtistEl = document.getElementById('track-artist');
    progressBar = document.getElementById('progress-bar');
    progressContainer = document.getElementById('progress-container');
    currentTimeEl = document.getElementById('current-time');
    totalTimeEl = document.getElementById('total-time');
    volumeBar = document.getElementById('volume-bar');
    volumeContainer = document.getElementById('volume-container');
    btnMute = document.getElementById('btn-mute');

    btnSpeed = document.getElementById('btn-speed');
    speedDropdown = document.getElementById('speed-dropdown');
    speedChevron = document.getElementById('speed-chevron');
    speedLabel = document.getElementById('speed-label');

    btnAllSongs = document.getElementById('btn-all-songs');
    allSongsListContainer = document.getElementById('all-songs-list-container');
    allSongsUpNextList = document.getElementById('all-songs-up-next-list');
    queueCounterBadge = document.getElementById('queue-counter-badge');

    btnLyrics = document.getElementById('btn-lyrics');
    lyricsPanel = document.getElementById('lyrics-panel');
    btnCloseLyrics = document.getElementById('btn-close-lyrics');
    lyricsContainer = document.getElementById('lyrics-container');

    btnStats = document.getElementById('btn-stats');

    currentLyricIndex = -1;

    // Re-bind all control event listeners
    bindControls(true);

    // Restore observer for mini player
    const _rebindMiniPlayer = document.getElementById('scroll-mini-player');
    if (mainContainer && _rebindMiniPlayer) {
      if (window._playerContainerObserver) {
        window._playerContainerObserver.disconnect();
        window._playerContainerObserver.observe(mainContainer);
      } else {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              _rebindMiniPlayer.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
              _rebindMiniPlayer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
            } else {
              _rebindMiniPlayer.classList.add('translate-y-28', 'opacity-0', 'pointer-events-none');
              _rebindMiniPlayer.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
            }
          });
        }, { threshold: 0.1 });
        observer.observe(mainContainer);
        window._playerContainerObserver = observer;
      }
    } else if (_rebindMiniPlayer && !mainContainer) {
      // No main player on this page — show mini player immediately
      _rebindMiniPlayer.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
      _rebindMiniPlayer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
    }

    // Refresh the UI with current track state
    initUI();

    // Update play state in case audio was already playing
    updatePlayUI();
    if (audio.duration) {
      const durFormatted = formatTime(audio.duration);
      if (totalTimeEl) totalTimeEl.textContent = durFormatted;
    }
  }

  // Expose rebindPlayerUI globally for SPA router
  window.rebindMusicPlayerUI = rebindPlayerUI;


  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function applyDynamicAlbumColor(track) {
    const color = track.color || '#e00f3c';
    document.documentElement.style.setProperty('--player-accent', color);
    document.documentElement.style.setProperty('--player-glow', `${color}50`);

    const glowEl = document.getElementById('fs-ambient-glow');
    if (glowEl) glowEl.style.background = color;
  }

  // --- 3. ALL SONGS LIST RENDERER & QUEUE ACTION ---
  function renderAllSongsList(query = '') {
    if (!allSongsListContainer) return;
    const q = query.trim().toLowerCase();

    const filtered = playlist.filter(track => {
      if (!q) return true;
      return track.title.toLowerCase().includes(q) || track.artist.toLowerCase().includes(q);
    });

    if (filtered.length === 0) {
      allSongsListContainer.innerHTML = `
        <div class="py-8 text-center text-textMuted space-y-1 bg-surface/30 rounded-2xl border border-themeBorder">
          <i data-lucide="music" class="w-6 h-6 mx-auto text-textMuted/40"></i>
          <p class="text-xs">Tidak ditemukan lagu yang cocok dengan &quot;${query}&quot;</p>
        </div>
      `;
      if (typeof lucide !== 'undefined') lucide.createIcons();
      return;
    }

    let html = '';
    filtered.forEach((track) => {
      const realIndex = playlist.findIndex(p => p.id === track.id || p.title === track.title);
      const isCurrent = realIndex === am.currentTrackIndex;

      html += `
        <div class="p-2.5 rounded-2xl ${isCurrent ? 'bg-themeAccent/10 border-themeAccent/30' : 'bg-surface/60 hover:bg-surface border-themeBorder'} border flex items-center justify-between gap-3 group/song transition-all">
          <div class="flex items-center gap-3 min-w-0 flex-1 cursor-pointer" onclick="window.playSpecificTrack(${realIndex})">
            <div class="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-themeBorder relative">
              <img src="${track.cover}" class="w-full h-full object-cover group-hover/song:scale-105 transition-transform duration-300">
              ${isCurrent ? `
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span class="w-2 h-2 rounded-full bg-themeAccent animate-ping"></span>
                </div>
              ` : ''}
            </div>
            <div class="min-w-0">
              <h4 class="text-xs font-bold text-textPrimary group-hover/song:text-themeAccent truncate transition-colors flex items-center gap-1.5">
                ${track.title}
                ${isCurrent ? '<span class="text-[9px] text-themeAccent font-mono uppercase font-black">&bull; NOW</span>' : ''}
              </h4>
              <p class="text-[10px] text-textMuted truncate">${track.artist} &bull; <span class="font-mono">${track.duration || '3:30'}</span></p>
            </div>
          </div>

          <div class="flex items-center gap-1.5 shrink-0">
            <button onclick="window.playSpecificTrack(${realIndex})" class="px-2.5 py-1.5 text-[10px] font-bold text-textSecondary hover:text-white rounded-lg bg-surface hover:bg-themeAccent border border-themeBorder hover:border-themeAccent transition-all cursor-pointer flex items-center gap-1 shadow-sm" title="Putar Sekarang">
              <i data-lucide="play" class="w-3 h-3"></i> Play Now
            </button>
            <button onclick="window.handleAddToQueue(this, ${realIndex});" class="px-2.5 py-1.5 text-[10px] font-bold text-themeAccent hover:text-themeAccentHover rounded-lg bg-themeAccent/10 hover:bg-themeAccent/20 border border-themeAccent/25 transition-all cursor-pointer flex items-center gap-1" title="Tambahkan ke Daftar Antrean">
              <i data-lucide="plus" class="w-3 h-3"></i> + Queue
            </button>
          </div>
        </div>
      `;
    });

    allSongsListContainer.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // Add to Queue Handler with Visual Confirmation
  window.handleAddToQueue = (btn, trackIndex) => {
    const res = am.addToQueue(trackIndex);
    if (res.success) {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<i data-lucide="check" class="w-3 h-3 text-emerald-500"></i> Added to queue';
      btn.classList.add('bg-emerald-500/15', 'border-emerald-500/30', 'text-emerald-500');
      if (typeof lucide !== 'undefined') lucide.createIcons();
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.remove('bg-emerald-500/15', 'border-emerald-500/30', 'text-emerald-500');
        if (typeof lucide !== 'undefined') lucide.createIcons();
      }, 1200);
      renderQueueList();
    }
  };

  window.handleRemoveFromQueue = (pos, e) => {
    if (e) e.stopPropagation();
    am.removeFromQueue(pos);
    renderQueueList();
  };

  window.clearAllQueue = (e) => {
    if (e) e.stopPropagation();
    am.clearQueue();
    renderQueueList();
  };

  const openAllSongsModal = () => {
    if (allSongsModal) {
      renderAllSongsList();
      renderQueueList();
      if (allSongsSearchInput) allSongsSearchInput.value = '';
      allSongsModal.classList.remove('opacity-0', 'pointer-events-none');
      allSongsModal.querySelector('div').classList.remove('scale-95');
      allSongsModal.querySelector('div').classList.add('scale-100');
    }
  };

  const closeAllSongsModal = () => {
    if (allSongsModal) {
      allSongsModal.classList.add('opacity-0', 'pointer-events-none');
      allSongsModal.querySelector('div').classList.remove('scale-100');
      allSongsModal.querySelector('div').classList.add('scale-95');
    }
  };

  const allSongsBtnClose = document.getElementById('all-songs-btn-close');
  if (allSongsBtnClose) allSongsBtnClose.addEventListener('click', closeAllSongsModal);

  if (allSongsSearchInput) {
    allSongsSearchInput.addEventListener('input', (e) => {
      renderAllSongsList(e.target.value);
    });
  }

  // --- 4. REORDERABLE DRAG-AND-DROP UP NEXT QUEUE RENDERER ---
  function renderQueueList() {
    const queue = am.queue || [];
    const badge = document.getElementById('queue-counter-badge');
    if (badge) badge.textContent = `${queue.length} lagu`;

    // Update Mini Player Next Label
    const miniNext = document.getElementById('mini-next');
    if (miniNext) {
      if (queue.length > 0) {
        const nextSong = playlist[queue[0]];
        miniNext.textContent = `Next: ${nextSong ? nextSong.title : '-'}`;
      } else if (am.repeat === 'one') {
        const curr = am.getCurrentTrack();
        miniNext.textContent = `Next: ${curr.title} (Repeat)`;
      } else if (am.repeat === 'all') {
        const nextPlaylistSong = playlist[(am.currentTrackIndex + 1) % playlist.length];
        miniNext.textContent = `Next: ${nextPlaylistSong ? nextPlaylistSong.title : '-'}`;
      } else {
        miniNext.textContent = `Next: - (End of Queue)`;
      }
    }

    const buildQueueHtml = () => {
      if (queue.length === 0) {
        return `
          <div class="p-6 text-center rounded-2xl bg-surface/40 border border-dashed border-themeBorder text-textMuted space-y-1">
            <p class="text-xs font-semibold text-textSecondary">Your queue is empty.</p>
            <p class="text-[10px]">Tekan tombol <strong>+ Queue</strong> pada daftar lagu di atas untuk menambahkan antrean.</p>
          </div>
        `;
      }

      let html = '';
      queue.forEach((trackIdx, pos) => {
        const item = playlist[trackIdx];
        if (!item) return;
        html += `
          <div class="queue-item p-2.5 rounded-2xl bg-surface/80 hover:bg-surface border border-themeBorder flex items-center justify-between gap-2.5 group/qitem transition-all cursor-grab" draggable="true" data-queue-pos="${pos}">
            <div class="flex items-center gap-2.5 min-w-0 flex-1">
              <!-- Number Order & Drag Handle -->
              <span class="text-[11px] font-mono font-bold text-themeAccent w-4 shrink-0 text-center">${pos + 1}.</span>
              <span class="text-textMuted group-hover/qitem:text-textPrimary px-0.5 text-sm cursor-grab select-none shrink-0" title="Geser untuk ubah urutan">⠿</span>
              <div class="w-8 h-8 rounded-xl overflow-hidden shrink-0 border border-themeBorder">
                <img src="${item.cover}" class="w-full h-full object-cover">
              </div>
              <div class="min-w-0 flex-1">
                <h5 class="text-xs font-bold text-textPrimary group-hover/qitem:text-themeAccent truncate transition-colors">${item.title}</h5>
                <p class="text-[10px] text-textMuted truncate">${item.artist} &bull; <span class="font-mono">${item.duration || '3:30'}</span></p>
              </div>
            </div>
            <div class="flex items-center gap-1 shrink-0">
              <button onclick="window.playSpecificTrack(${trackIdx})" class="p-1.5 text-textMuted hover:text-white hover:bg-themeAccent rounded-lg transition-colors cursor-pointer" title="Play Now">
                <i data-lucide="play" class="w-3 h-3"></i>
              </button>
              <button onclick="window.handleRemoveFromQueue(${pos}, event)" class="p-1.5 text-textMuted hover:text-white hover:bg-brand-red-500 rounded-lg transition-colors cursor-pointer" title="Hapus dari Queue">
                <i data-lucide="x" class="w-3 h-3"></i>
              </button>
            </div>
          </div>
        `;
      });
      return html;
    };

    const allSongsUpNext = document.getElementById('all-songs-up-next-list');
    if (allSongsUpNext) {
      allSongsUpNext.innerHTML = buildQueueHtml();
      attachQueueDragAndDrop(allSongsUpNext);
    }

    const fsQueueContainer = document.getElementById('fs-queue-container');
    if (fsQueueContainer) {
      fsQueueContainer.innerHTML = buildQueueHtml();
      attachQueueDragAndDrop(fsQueueContainer);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  function attachQueueDragAndDrop(container) {
    if (!container) return;
    const items = container.querySelectorAll('.queue-item');
    let dragSrcIndex = null;

    items.forEach((item) => {
      item.addEventListener('dragstart', (e) => {
        dragSrcIndex = parseInt(item.dataset.queuePos, 10);
        item.classList.add('opacity-50', 'scale-95');
        e.dataTransfer.effectAllowed = 'move';
      });

      item.addEventListener('dragend', () => {
        item.classList.remove('opacity-50', 'scale-95');
        items.forEach(i => i.classList.remove('border-themeAccent', 'bg-themeAccent/10'));
      });

      item.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        item.classList.add('border-themeAccent', 'bg-themeAccent/10');
      });

      item.addEventListener('dragleave', () => {
        item.classList.remove('border-themeAccent', 'bg-themeAccent/10');
      });

      item.addEventListener('drop', (e) => {
        e.preventDefault();
        const dropTargetIndex = parseInt(item.dataset.queuePos, 10);
        if (dragSrcIndex !== null && dragSrcIndex !== dropTargetIndex) {
          am.reorderQueue(dragSrcIndex, dropTargetIndex);
        }
      });
    });
  }

  window.playSpecificTrack = (index) => {
    loadTrack(index);
  };

  // --- 5. RENDER STATS MODAL ---
  function renderStatsModal() {
    const summary = am.getStatsSummary();
    const elPlays = document.getElementById('stat-total-plays');
    const elTime = document.getElementById('stat-total-time');
    const elSong = document.getElementById('stat-top-song');
    const elArtist = document.getElementById('stat-top-artist');

    if (elPlays) elPlays.textContent = summary.totalPlays;
    if (elTime) elTime.textContent = summary.totalTimeFormatted;
    if (elSong) elSong.textContent = summary.topSong;
    if (elArtist) elArtist.textContent = summary.topArtist;
  }

  // --- 6. UPDATE CONTROLS (Shuffle & 3-Mode Repeat) ---
  function toggleShuffle(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const isShuffle = am.toggleShuffle();
    updateShuffleRepeatUI();
    return isShuffle;
  }

  function cycleRepeat(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const repeatMode = am.cycleRepeat();
    updateShuffleRepeatUI();
    return repeatMode;
  }

  window.toggleShuffle = toggleShuffle;
  window.cycleRepeat = cycleRepeat;

  function updateShuffleRepeatUI() {
    // Shuffle
    const isShuffle = am.shuffle;
    [btnShuffle, document.getElementById('fs-btn-shuffle')].forEach(btn => {
      if (btn) {
        if (isShuffle) {
          btn.classList.add('ctrl-active', 'text-themeAccent', 'bg-themeAccent/15', 'border-themeAccent/30');
          btn.classList.remove('text-textSecondary');
          btn.setAttribute('title', 'Shuffle: ON (Acak Lagu Aktif)');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('ctrl-active', 'text-themeAccent', 'bg-themeAccent/15', 'border-themeAccent/30');
          btn.classList.add('text-textSecondary');
          btn.setAttribute('title', 'Shuffle: OFF (Putar Berurutan)');
          btn.setAttribute('aria-pressed', 'false');
        }
      }
    });

    // 3-Mode Repeat: 'off' | 'all' (Repeat Queue/All) | 'one' (Repeat Song)
    const repeatMode = am.repeat;
    [btnRepeat, document.getElementById('fs-btn-repeat')].forEach(btn => {
      if (btn) {
        if (repeatMode !== 'off') {
          btn.classList.add('ctrl-active', 'text-themeAccent', 'bg-themeAccent/15', 'border-themeAccent/30');
          btn.classList.remove('text-textSecondary');
          btn.setAttribute('title', repeatMode === 'one' ? 'Repeat: Single Song' : 'Repeat: All Songs');
          btn.setAttribute('aria-pressed', 'true');
        } else {
          btn.classList.remove('ctrl-active', 'text-themeAccent', 'bg-themeAccent/15', 'border-themeAccent/30');
          btn.classList.add('text-textSecondary');
          btn.setAttribute('title', 'Repeat: OFF');
          btn.setAttribute('aria-pressed', 'false');
        }
      }
    });

    [repeatBadge, document.getElementById('fs-repeat-badge')].forEach(badge => {
      if (badge) {
        if (repeatMode === 'one') {
          badge.classList.remove('hidden');
          badge.textContent = '1';
        } else if (repeatMode === 'all') {
          badge.classList.remove('hidden');
          badge.textContent = 'âˆž';
        } else {
          badge.classList.add('hidden');
        }
      }
    });
  }

  // --- 7. UPDATE PLAY / PAUSE UI ---
  function updatePlayUI() {
    const isPlaying = !audio.paused;
    const playIconSvg = isPlaying
      ? '<i data-lucide="pause" class="w-5 h-5" fill="currentColor"></i>'
      : '<i data-lucide="play" class="w-5 h-5 ml-0.5" fill="currentColor"></i>';

    if (btnPlay) btnPlay.innerHTML = playIconSvg;

    const miniBtnPlay = document.getElementById('mini-btn-play');
    if (miniBtnPlay) {
      miniBtnPlay.innerHTML = isPlaying
        ? '<i data-lucide="pause" class="w-3.5 h-3.5" fill="currentColor"></i>'
        : '<i data-lucide="play" class="w-3.5 h-3.5 ml-0.5" fill="currentColor"></i>';
    }

    const fsBtnPlay = document.getElementById('fs-btn-play');
    if (fsBtnPlay) {
      fsBtnPlay.innerHTML = isPlaying
        ? '<i data-lucide="pause" class="w-7 h-7" fill="currentColor"></i>'
        : '<i data-lucide="play" class="w-7 h-7 ml-0.5" fill="currentColor"></i>';
    }

    if (equalizer) {
      if (isPlaying) {
        equalizer.classList.remove('eq-paused');
        equalizer.classList.add('eq-active');
      } else {
        equalizer.classList.remove('eq-active');
        equalizer.classList.add('eq-paused');
      }
    }

    const fsCover = document.getElementById('fs-cover');
    if (fsCover) {
      if (isPlaying) fsCover.classList.add('cover-playing-spin');
      else fsCover.classList.remove('cover-playing-spin');
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
  }

  // --- 8. INITIALIZE UI ---
  function initUI() {
    const track = am.getCurrentTrack();
    applyDynamicAlbumColor(track);

    if (trackTitleEl) trackTitleEl.textContent = track.title;
    if (trackArtistEl) trackArtistEl.textContent = track.artist;
    if (coverImg) {
      coverImg.src = track.cover;
      coverImg.alt = track.title + ' Cover';
    }

    const miniTitle = document.getElementById('mini-title');
    const miniArtist = document.getElementById('mini-artist');
    const miniCover = document.getElementById('mini-cover');
    if (miniTitle) miniTitle.textContent = track.title;
    if (miniArtist) miniArtist.textContent = track.artist;
    if (miniCover) miniCover.src = track.cover;

    const fsTitle = document.getElementById('fs-title');
    const fsArtist = document.getElementById('fs-artist');
    const fsCover = document.getElementById('fs-cover');
    if (fsTitle) fsTitle.textContent = track.title;
    if (fsArtist) fsArtist.textContent = track.artist;
    if (fsCover) fsCover.src = track.cover;

    renderLyrics(track);
    renderQueueList();
    renderAllSongsList();

    const speed = am.savedSpeed || 1;
    if (speedLabel) speedLabel.textContent = speed + 'x';
    const fsSpeedLabel = document.getElementById('fs-speed-label');
    if (fsSpeedLabel) fsSpeedLabel.textContent = speed + 'x';

    const currentVol = (typeof am.targetVolume === 'number' && !isNaN(am.targetVolume)) ? am.targetVolume : 1;
    audio.volume = currentVol;
    if (volumeBar) volumeBar.style.width = `${currentVol * 100}%`;
    const fsVolumeBar = document.getElementById('fs-volume-bar');
    if (fsVolumeBar) fsVolumeBar.style.width = `${currentVol * 100}%`;

    updateShuffleRepeatUI();
    updatePlayUI();
  }

  // --- 9. RENDER LYRICS (Direct Text Sync JSON + Dynamic Fetch Support) ---
  async function renderLyrics(track) {
    if (!track) track = am.getCurrentTrack();
    currentLyricIndex = -1;

    // Refresh references in case of SPA view swaps
    lyricsContainer = document.getElementById('lyrics-container');
    const fsLyricsContainer = document.getElementById('fs-lyrics-container');
    const containers = [lyricsContainer, fsLyricsContainer].filter(Boolean);

    if (containers.length === 0) return;

    if (!track.lyrics || !Array.isArray(track.lyrics) || track.lyrics.length === 0) {
      containers.forEach(container => {
        container.innerHTML = '<div class="py-8 text-center text-textMuted text-xs flex items-center justify-center gap-2"><i class="fa-solid fa-spinner fa-spin text-themeAccent"></i> Memuat lirik...</div>';
      });

      if (typeof am.loadLyrics === 'function') {
        await am.loadLyrics(track);
      }
    }

    containers.forEach(container => {
      container.innerHTML = '';

      if (track.lyrics && Array.isArray(track.lyrics) && track.lyrics.length > 0) {
        track.lyrics.forEach((line, i) => {
          const p = document.createElement('p');
          p.textContent = line.text;
          p.className = 'text-sm font-medium text-textMuted/70 transition-all duration-300 lyric-line cursor-pointer hover:text-textPrimary my-2.5';
          p.dataset.startTime = line.startTime;
          p.dataset.endTime = line.endTime;
          p.dataset.index = i;
          p.addEventListener('click', (e) => {
            e.stopPropagation();
            audio.currentTime = line.startTime;
            if (audio.paused) playAudio();
            updateActiveLyric();
          });
          container.appendChild(p);
        });
      } else {
        container.innerHTML = '<p class="text-sm text-textMuted py-8 text-center">Lirik belum tersedia untuk lagu ini.</p>';
      }
    });

    updateActiveLyric();
  }

  // --- 10. LOAD TRACK & PLAYBACK ---
  async function loadTrack(index) {
    if (index < 0) index = playlist.length - 1;
    if (index >= playlist.length) index = 0;

    // If this track was queued, remove it from queue automatically
    am.removeFromQueueByTrackIndex(index);

    am.currentTrackIndex = index;
    localStorage.setItem('musicTrackIndex', index.toString());

    const track = playlist[index];
    const trackSrc = track.src || track.audio;
    audio.src = trackSrc ? encodeURI(trackSrc) : '';
    audio.load();

    // Preserve volume accurately without resetting
    const currentVol = (typeof am.targetVolume === 'number' && !isNaN(am.targetVolume)) ? am.targetVolume : 1;
    audio.volume = currentVol;

    const currentSpeed = am.savedSpeed || 1;
    audio.playbackRate = currentSpeed;
    audio.defaultPlaybackRate = currentSpeed;

    initUI();
    playAudio();

    // Reset active lyric index and render lyrics for selected track
    currentLyricIndex = -1;
    await renderLyrics(track);
    updateActiveLyric();
  }

  function playAudio() {
    const currentVol = (typeof am.targetVolume === 'number' && !isNaN(am.targetVolume)) ? am.targetVolume : 1;
    audio.volume = currentVol;
    audio.play().catch(e => {
      updatePlayUI();
    });
    updatePlayUI();
  }

  function pauseAudio() {
    audio.pause();
    updatePlayUI();
  }

  function togglePlay(e) {
    if (e) e.stopPropagation();
    if (!audio.paused) pauseAudio();
    else playAudio();
  }

  function playNext(isAutoEnd = false) {
    const nextIdx = am.getNextTrackIndex(isAutoEnd);
    if (nextIdx !== null && nextIdx !== undefined) {
      loadTrack(nextIdx);
    } else {
      // Repeat is OFF and Queue is empty: stop playback
      pauseAudio();
      audio.currentTime = 0;
      updatePlayUI();
    }
  }

  function playPrev() {
    if (audio.currentTime > 3) {
      audio.currentTime = 0;
    } else {
      loadTrack(am.getPrevTrackIndex());
    }
  }

  // --- 11. ACTIVE LYRIC SYNC (startTime / endTime) ---
  function updateActiveLyric() {
    const track = am.getCurrentTrack();
    const curTime = audio.currentTime || 0;

    if (!track.lyrics || !Array.isArray(track.lyrics) || track.lyrics.length === 0) return;

    // 1. Exact condition search: startTime <= curTime && (endTime ? curTime <= endTime : true)
    let activeIndex = track.lyrics.findIndex(
      line =>
        line.startTime <= curTime &&
        (typeof line.endTime === 'number' ? curTime <= line.endTime : curTime <= (line.startTime + 4))
    );

    // 2. Fallback: latest reached lyric line if between timestamps
    if (activeIndex === -1 && curTime >= track.lyrics[0].startTime) {
      for (let i = track.lyrics.length - 1; i >= 0; i--) {
        if (track.lyrics[i].startTime <= curTime) {
          activeIndex = i;
          break;
        }
      }
    }

    if (activeIndex !== currentLyricIndex) {
      currentLyricIndex = activeIndex;

      const updateContainerLyrics = (container) => {
        if (!container) return;
        const lines = container.querySelectorAll('.lyric-line');
        if (lines.length === 0) return;

        lines.forEach((line, i) => {
          if (i === activeIndex) {
            line.className = 'text-base sm:text-lg font-extrabold text-themeAccent lyric-active transition-all duration-300 lyric-line cursor-pointer drop-shadow-[0_0_10px_var(--player-glow,rgba(224,15,60,0.6))] scale-105 my-3';
            if (container.clientHeight > 0) {
              const targetTop = line.offsetTop - container.offsetTop - (container.clientHeight / 2) + (line.clientHeight / 2);
              container.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
            }
          } else if (activeIndex !== -1 && i < activeIndex) {
            line.className = 'text-xs sm:text-sm font-medium text-textMuted/50 transition-all duration-300 lyric-line cursor-pointer hover:text-textSecondary my-2';
          } else {
            line.className = 'text-xs sm:text-sm font-medium text-textMuted/80 transition-all duration-300 lyric-line cursor-pointer hover:text-textPrimary my-2';
          }
        });
      };

      lyricsContainer = document.getElementById('lyrics-container');
      updateContainerLyrics(lyricsContainer);
      updateContainerLyrics(document.getElementById('fs-lyrics-container'));
    }
  }

  // --- 12. BIND AUDIO EVENTS ---
  audio.addEventListener('play', updatePlayUI);
  audio.addEventListener('pause', updatePlayUI);
  audio.addEventListener('ended', () => playNext(true));
  audio.addEventListener('seeked', updateActiveLyric);

  audio.addEventListener('loadedmetadata', () => {
    const durFormatted = formatTime(audio.duration);
    if (totalTimeEl) totalTimeEl.textContent = durFormatted;
    const fsTotalTime = document.getElementById('fs-total-time');
    if (fsTotalTime) fsTotalTime.textContent = durFormatted;
  });

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const progressPercent = (audio.currentTime / audio.duration) * 100;

    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);

    const miniProgressBar = document.getElementById('mini-progress-bar');
    if (miniProgressBar) miniProgressBar.style.width = `${progressPercent}%`;

    const fsProgressBar = document.getElementById('fs-progress-bar');
    const fsCurrentTime = document.getElementById('fs-current-time');
    if (fsProgressBar) fsProgressBar.style.width = `${progressPercent}%`;
    if (fsCurrentTime) fsCurrentTime.textContent = formatTime(audio.currentTime);

    updateActiveLyric();
  });

      // Lyrics Panel Visibility Handlers with rapid-click debounce
  let lastLyricsToggleTime = 0;

  function openLyricsPanel() {
    const panel = document.getElementById('lyrics-panel');
    const btn = document.getElementById('btn-lyrics');
    if (!panel) return;

    panel.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none', 'mt-0', 'lyrics-panel-closed');
    panel.classList.add('lyrics-panel-open', 'opacity-100', 'pointer-events-auto', 'mt-3');
    panel.style.maxHeight = '520px';
    panel.style.opacity = '1';
    panel.style.pointerEvents = 'auto';
    panel.style.display = 'block';
    panel.style.visibility = 'visible';

    if (btn) {
      btn.classList.add('ctrl-active');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'Hide';
    }

    const track = am.getCurrentTrack();
    renderLyrics(track).then(() => {
      setTimeout(updateActiveLyric, 150);
    });
  }

  function closeLyricsPanel() {
    const panel = document.getElementById('lyrics-panel');
    const btn = document.getElementById('btn-lyrics');
    if (!panel) return;

    panel.classList.add('max-h-0', 'opacity-0', 'pointer-events-none', 'mt-0', 'lyrics-panel-closed');
    panel.classList.remove('lyrics-panel-open', 'opacity-100', 'pointer-events-auto', 'mt-3');
    panel.style.maxHeight = '0px';
    panel.style.opacity = '0';
    panel.style.pointerEvents = 'none';
    panel.style.display = 'none';
    panel.style.visibility = 'hidden';

    if (btn) {
      btn.classList.remove('ctrl-active');
      const span = btn.querySelector('span');
      if (span) span.textContent = 'Show';
    }
  }

  function toggleLyricsPanel() {
    const now = Date.now();
    if (now - lastLyricsToggleTime < 200) return; // Prevent double-trigger from multiple listeners
    lastLyricsToggleTime = now;

    const panel = document.getElementById('lyrics-panel');
    if (!panel) return;

    const isOpen = panel.classList.contains('lyrics-panel-open') || 
                   panel.style.display === 'block' ||
                   (panel.style.maxHeight && panel.style.maxHeight !== '0px' && panel.style.maxHeight !== '0');

    if (isOpen) {
      closeLyricsPanel();
    } else {
      openLyricsPanel();
    }
  }

  window.openLyricsPanel = openLyricsPanel;
  window.closeLyricsPanel = closeLyricsPanel;
  window.toggleLyricsPanel = toggleLyricsPanel;

  // Global control exposures
  window.togglePlay = togglePlay;
  window.playAudio = playAudio;
  window.pauseAudio = pauseAudio;
  window.playNext = playNext;
  window.playPrev = playPrev;

  // Outer-scoped modal helpers (reused by keyboard shortcuts)
  let openFullscreenModal, closeFullscreenModal, openStatsModal, closeStatsModal;

  // --- 12. BIND CONTROLS (extracted to function for re-binding after SPA navigation) ---
  // isRebind=true: only re-bind main-content controls (new DOM elements), skip body-level controls already bound
  function bindControls(isRebind = false) {
    if (btnPlay) btnPlay.onclick = togglePlay;
    if (btnPrev) btnPrev.onclick = (e) => { e.stopPropagation(); playPrev(); };
    if (btnNext) btnNext.onclick = (e) => { e.stopPropagation(); playNext(); };

    if (btnShuffle) {
      btnShuffle.onclick = ((e) => {
        e.stopPropagation();
        am.toggleShuffle();
        updateShuffleRepeatUI();
      });
    }

    if (btnRepeat) {
      btnRepeat.onclick = ((e) => {
        e.stopPropagation();
        am.cycleRepeat();
        updateShuffleRepeatUI();
      });
    }

    if (btnAllSongs) {
      btnAllSongs.onclick = ((e) => {
        e.stopPropagation();
        openAllSongsModal();
      });
    }

    if (btnLyrics) {
      btnLyrics.onclick = ((e) => {
        e.stopPropagation();
        toggleLyricsPanel();
      });
    }

    if (btnCloseLyrics) {
      btnCloseLyrics.onclick = ((e) => {
        e.stopPropagation();
        closeLyricsPanel();
      });
    }

    if (btnStats) {
      btnStats.onclick = ((e) => {
        e.stopPropagation();
        openStatsModal();
      });
    }

    if (btnOpenFullscreen) {
      btnOpenFullscreen.onclick = ((e) => {
        e.stopPropagation();
        openFullscreenModal();
      });
    }

    const musicCoverWrapper = document.getElementById('music-cover-wrapper');
    if (musicCoverWrapper) {
      musicCoverWrapper.onclick = ((e) => {
        e.stopPropagation();
        openFullscreenModal();
      });
    }

    // Progress Seek
    const setupProgressScrubbing = (container) => {
      if (!container) return;
      container.addEventListener('click', (e) => {
        const rect = container.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (audio.duration) {
          audio.currentTime = pos * audio.duration;
          currentLyricIndex = -1;
          updateActiveLyric();
        }
      });
    };

    setupProgressScrubbing(progressContainer);

    // Volume
    const setVolumeLevel = (pos) => {
      pos = Math.max(0, Math.min(1, pos));
      am.targetVolume = pos;
      audio.volume = pos;
      localStorage.setItem('musicVolume', pos.toString());

      if (volumeBar) volumeBar.style.width = `${pos * 100}%`;
      const fsVolumeBar = document.getElementById('fs-volume-bar');
      if (fsVolumeBar) fsVolumeBar.style.width = `${pos * 100}%`;

      updateVolumeIcons(pos);
    };

    if (volumeContainer) {
      volumeContainer.addEventListener('click', (e) => {
        const rect = volumeContainer.getBoundingClientRect();
        setVolumeLevel((e.clientX - rect.left) / rect.width);
      });
    }

    let lastVolume = am.targetVolume > 0 ? am.targetVolume : 1;
    const toggleMute = () => {
      if (audio.volume > 0) {
        lastVolume = audio.volume;
        setVolumeLevel(0);
      } else {
        setVolumeLevel(lastVolume || 1);
      }
    };

    if (btnMute) btnMute.addEventListener('click', toggleMute);

    function updateVolumeIcons(vol) {
      const getIconSvg = (v) => {
        if (v === 0) return '<i data-lucide="volume-x" class="w-3.5 h-3.5"></i>';
        else if (v < 0.5) return '<i data-lucide="volume-1" class="w-3.5 h-3.5"></i>';
        else return '<i data-lucide="volume-2" class="w-3.5 h-3.5"></i>';
      };

      if (btnMute) btnMute.innerHTML = getIconSvg(vol);
      const fsBtnMute = document.getElementById('fs-btn-mute');
      if (fsBtnMute) fsBtnMute.innerHTML = getIconSvg(vol);
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Speed Dropdown & Speed Control Handler
    function toggleSpeedDropdown(e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      const sDropdown = document.getElementById('speed-dropdown');
      const sChevron = document.getElementById('speed-chevron');
      if (!sDropdown) return;

      const isOpen = sDropdown.classList.contains('speed-dropdown-open') || 
                     (!sDropdown.classList.contains('opacity-0') && !sDropdown.classList.contains('pointer-events-none'));

      if (isOpen) {
        sDropdown.classList.remove('speed-dropdown-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        sDropdown.classList.add('opacity-0', 'pointer-events-none');
        if (sChevron) sChevron.classList.remove('rotate-180');
      } else {
        sDropdown.classList.add('speed-dropdown-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        sDropdown.classList.remove('opacity-0', 'pointer-events-none');
        if (sChevron) sChevron.classList.add('rotate-180');
      }
    }

    function setPlaybackSpeed(speed, e) {
      if (e) {
        e.stopPropagation();
        e.preventDefault();
      }
      speed = parseFloat(speed) || 1;
      am.setSpeed(speed);

      const sLabel = document.getElementById('speed-label');
      if (sLabel) sLabel.textContent = speed + 'x';
      const fsSpeedLabel = document.getElementById('fs-speed-label');
      if (fsSpeedLabel) fsSpeedLabel.textContent = speed + 'x';

      const bSpeed = document.getElementById('btn-speed');
      if (bSpeed) {
        bSpeed.classList.remove('animate-speed-update');
        void bSpeed.offsetWidth;
        bSpeed.classList.add('animate-speed-update');
      }

      const allSpeedOptions = document.querySelectorAll('.speed-option');
      allSpeedOptions.forEach(b => {
        if (parseFloat(b.dataset.speed) === speed) {
          b.classList.remove('text-textSecondary');
          b.classList.add('text-themeAccent', 'font-bold');
        } else {
          b.classList.remove('text-themeAccent', 'font-bold');
          b.classList.add('text-textSecondary');
        }
      });

      const sDropdown = document.getElementById('speed-dropdown');
      const sChevron = document.getElementById('speed-chevron');
      if (sDropdown) {
        sDropdown.classList.remove('speed-dropdown-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
        sDropdown.classList.add('opacity-0', 'pointer-events-none');
      }
      if (sChevron) sChevron.classList.remove('rotate-180');
    }

    window.toggleSpeedDropdown = toggleSpeedDropdown;
    window.setPlaybackSpeed = setPlaybackSpeed;

    if (btnSpeed) {
      btnSpeed.onclick = (e) => toggleSpeedDropdown(e);
    }

    const allSpeedOptions = document.querySelectorAll('.speed-option');
    allSpeedOptions.forEach(btn => {
      btn.onclick = (e) => {
        const speed = parseFloat(btn.dataset.speed) || 1;
        setPlaybackSpeed(speed, e);
      };
    });

    if (!window._speedDropdownDocListenerBound) {
      document.addEventListener('click', (e) => {
        const bSpeed = document.getElementById('btn-speed');
        const sDropdown = document.getElementById('speed-dropdown');
        const sChevron = document.getElementById('speed-chevron');
        if (sDropdown && (!bSpeed || !bSpeed.contains(e.target)) && !sDropdown.contains(e.target)) {
          sDropdown.classList.remove('speed-dropdown-open', 'opacity-100', 'pointer-events-auto', 'translate-y-0');
          sDropdown.classList.add('opacity-0', 'pointer-events-none');
          if (sChevron) sChevron.classList.remove('rotate-180');
        }
      });
      window._speedDropdownDocListenerBound = true;
    }

    // Modal and persistent body controls (bound only on first initialization)
    if (!isRebind) {
      setupProgressScrubbing(document.getElementById('mini-progress-container'));
      setupProgressScrubbing(document.getElementById('fs-progress-container'));

      const fsVolumeContainer = document.getElementById('fs-volume-container');
      if (fsVolumeContainer) {
        fsVolumeContainer.addEventListener('click', (e) => {
          const rect = fsVolumeContainer.getBoundingClientRect();
          setVolumeLevel((e.clientX - rect.left) / rect.width);
        });
      }

      const fsBtnMute = document.getElementById('fs-btn-mute');
      if (fsBtnMute) fsBtnMute.addEventListener('click', toggleMute);

      const fsBtnClearQueue = document.getElementById('fs-btn-clear-queue');
      if (fsBtnClearQueue) {
        fsBtnClearQueue.addEventListener('click', () => {
          am.clearQueue();
          renderQueueList();
        });
      }

      // Fullscreen Modal handlers
      openFullscreenModal = () => {
        if (fsModal) {
          fsModal.classList.remove('opacity-0', 'pointer-events-none');
          fsModal.querySelector('div').classList.remove('scale-95');
          fsModal.querySelector('div').classList.add('scale-100');
          initUI();
        }
      };

      closeFullscreenModal = () => {
        if (fsModal) {
          fsModal.classList.add('opacity-0', 'pointer-events-none');
          fsModal.querySelector('div').classList.remove('scale-100');
          fsModal.querySelector('div').classList.add('scale-95');
        }
      };

      const fsBtnClose = document.getElementById('fs-btn-close');
      if (fsBtnClose) fsBtnClose.addEventListener('click', closeFullscreenModal);

      const miniOpenFullscreen = document.getElementById('mini-open-fullscreen');
      const miniBtnFullscreen = document.getElementById('mini-btn-fullscreen');
      if (miniOpenFullscreen) miniOpenFullscreen.addEventListener('click', openFullscreenModal);
      if (miniBtnFullscreen) miniBtnFullscreen.addEventListener('click', openFullscreenModal);

      // Fullscreen Tab Navigation
      const fsTabPlayer = document.getElementById('fs-tab-player');
      const fsTabLyrics = document.getElementById('fs-tab-lyrics');
      const fsTabQueue = document.getElementById('fs-tab-queue');

      const fsViewPlayer = document.getElementById('fs-view-player');
      const fsViewLyrics = document.getElementById('fs-view-lyrics');
      const fsViewQueue = document.getElementById('fs-view-queue');

      const switchFsTab = (activeTab) => {
        [fsTabPlayer, fsTabLyrics, fsTabQueue].forEach(t => {
          if (t) {
            t.className = 'text-xs font-semibold text-textSecondary hover:text-textPrimary px-3 py-1 rounded-lg hover:bg-surface transition-all cursor-pointer';
          }
        });

        if (fsViewPlayer) fsViewPlayer.classList.add('hidden');
        if (fsViewLyrics) fsViewLyrics.classList.add('hidden');
        if (fsViewQueue) fsViewQueue.classList.add('hidden');

        if (activeTab === 'player') {
          if (fsTabPlayer) fsTabPlayer.className = 'text-xs font-bold text-themeAccent px-3 py-1 rounded-lg bg-surface border border-themeBorder transition-all cursor-pointer';
          if (fsViewPlayer) fsViewPlayer.classList.remove('hidden');
        } else if (activeTab === 'lyrics') {
          if (fsTabLyrics) fsTabLyrics.className = 'text-xs font-bold text-themeAccent px-3 py-1 rounded-lg bg-surface border border-themeBorder transition-all cursor-pointer';
          if (fsViewLyrics) {
            fsViewLyrics.classList.remove('hidden');
            const track = am.getCurrentTrack();
            if (!track.lyrics || track.lyrics.length === 0) {
              renderLyrics(track);
            } else {
              setTimeout(updateActiveLyric, 150);
            }
          }
        } else if (activeTab === 'queue') {
          if (fsTabQueue) fsTabQueue.className = 'text-xs font-bold text-themeAccent px-3 py-1 rounded-lg bg-surface border border-themeBorder transition-all cursor-pointer';
          if (fsViewQueue) {
            renderQueueList();
            fsViewQueue.classList.remove('hidden');
          }
        }
      };

      if (fsTabPlayer) fsTabPlayer.addEventListener('click', () => switchFsTab('player'));
      if (fsTabLyrics) fsTabLyrics.addEventListener('click', () => switchFsTab('lyrics'));
      if (fsTabQueue) fsTabQueue.addEventListener('click', () => switchFsTab('queue'));

      // Fullscreen controls
      const fsBtnPlay = document.getElementById('fs-btn-play');
      const fsBtnPrev = document.getElementById('fs-btn-prev');
      const fsBtnNext = document.getElementById('fs-btn-next');
      const fsBtnShuffle = document.getElementById('fs-btn-shuffle');
      const fsBtnRepeat = document.getElementById('fs-btn-repeat');

      if (fsBtnPlay) fsBtnPlay.onclick = togglePlay;
      if (fsBtnPrev) fsBtnPrev.onclick = (e) => { e.stopPropagation(); playPrev(); };
      if (fsBtnNext) fsBtnNext.onclick = (e) => { e.stopPropagation(); playNext(); };
      if (fsBtnShuffle) fsBtnShuffle.onclick = (e) => { e.stopPropagation(); am.toggleShuffle(); updateShuffleRepeatUI(); };
      if (fsBtnRepeat) fsBtnRepeat.onclick = (e) => { e.stopPropagation(); am.cycleRepeat(); updateShuffleRepeatUI(); };

      // Mini Player Controls
      const miniBtnPlay = document.getElementById('mini-btn-play');
      const miniBtnPrev = document.getElementById('mini-btn-prev');
      const miniBtnNext = document.getElementById('mini-btn-next');

      if (miniBtnPlay) miniBtnPlay.onclick = togglePlay;
      if (miniBtnPrev) miniBtnPrev.onclick = (e) => { e.stopPropagation(); playPrev(); };
      if (miniBtnNext) miniBtnNext.onclick = (e) => { e.stopPropagation(); playNext(); };

      // Scroll Mini Player Observer
      if (mainContainer && miniPlayer) {
        if (window._playerContainerObserver) {
          window._playerContainerObserver.disconnect();
        }
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) {
              miniPlayer.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
              miniPlayer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
            } else {
              miniPlayer.classList.add('translate-y-28', 'opacity-0', 'pointer-events-none');
              miniPlayer.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
            }
          });
        }, { threshold: 0.1 });
        observer.observe(mainContainer);
        window._playerContainerObserver = observer;
      } else if (miniPlayer && !mainContainer) {
        // No main music player container on this page (e.g. minigames.html)
        // Show the mini player immediately since there is nothing to scroll past
        miniPlayer.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
        miniPlayer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }

      // Stats Modal handlers
      openStatsModal = () => {
        renderStatsModal();
        if (statsModal) {
          statsModal.classList.remove('opacity-0', 'pointer-events-none');
          statsModal.querySelector('div').classList.remove('scale-95');
          statsModal.querySelector('div').classList.add('scale-100');
        }
      };

      closeStatsModal = () => {
        if (statsModal) {
          statsModal.classList.add('opacity-0', 'pointer-events-none');
          statsModal.querySelector('div').classList.remove('scale-100');
          statsModal.querySelector('div').classList.add('scale-95');
        }
      };

      const statsBtnClose = document.getElementById('stats-btn-close');
      const statsBtnOk = document.getElementById('stats-btn-ok');
      const statsBtnReset = document.getElementById('stats-btn-reset');

      if (statsBtnClose) statsBtnClose.addEventListener('click', closeStatsModal);
      if (statsBtnOk) statsBtnOk.addEventListener('click', closeStatsModal);
      if (statsBtnReset) {
        statsBtnReset.addEventListener('click', () => {
          if (confirm('Yakin ingin mereset statistik mendengarkan?')) {
            am.stats = { totalPlays: 0, totalSeconds: 0, songs: {}, artists: {} };
            localStorage.removeItem('musicStats');
            renderStatsModal();
          }
        });
      }
    } // end !isRebind
  } // end bindControls()

  // Initial control binding
  bindControls();

  // AI Lyrics Generator bindings kept for dev reference only.
  // The btn-open-lyrics-generator button has been removed from the UI.
  // Synced lyrics are now loaded from /public/lyrics/*.json files.
  // const btnOpenLyricsGen = document.getElementById('btn-open-lyrics-generator');
  // if (btnOpenLyricsGen) { ... }
  // const fsBtnOpenLyricsGen = document.getElementById('fs-btn-open-lyrics-gen');
  // if (fsBtnOpenLyricsGen) { ... }

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    const activeEl = document.activeElement;
    const isInput = activeEl && (
      activeEl.tagName === 'INPUT' ||
      activeEl.tagName === 'TEXTAREA' ||
      activeEl.tagName === 'SELECT' ||
      activeEl.isContentEditable
    );

    if (isInput) return;

    if (e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      audio.currentTime = Math.max(0, audio.currentTime - 5);
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      if (audio.duration) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      setVolumeLevel(Math.min(1, audio.volume + 0.1));
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      setVolumeLevel(Math.max(0, audio.volume - 0.1));
    } else if (e.code === 'KeyM') {
      e.preventDefault();
      toggleMute();
    } else if (e.code === 'KeyN') {
      e.preventDefault();
      playNext();
    } else if (e.key === 'Escape') {
      closeFullscreenModal();
      closeStatsModal();
      closeAllSongsModal();
    }
  });

  // Global listeners
  window.addEventListener('shuffle-changed', updateShuffleRepeatUI);
  window.addEventListener('repeat-changed', updateShuffleRepeatUI);
  window.addEventListener('queue-updated', renderQueueList);
  window.addEventListener('lyrics-updated', () => {
    const track = am.getCurrentTrack();
    renderLyrics(track);
  });

  // Initial render
  initUI();
}

if (!window.musicPlayerInitialized) {
  window.musicPlayerInitialized = true;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMusicPlayer);
  } else {
    initMusicPlayer();
  }
}