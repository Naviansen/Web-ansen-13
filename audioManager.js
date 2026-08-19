// Defensive validation for directly imported Text Sync JSON
let no1PartyAnthemValidLyrics = [];
try {
  const lyricsData = window.no1PartyAnthemLyricsData;
  if (!lyricsData || !Array.isArray(lyricsData.lines)) {
    throw new Error('Invalid lyrics JSON: expected data.lines to be an array');
  }
  no1PartyAnthemValidLyrics = lyricsData.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._lyricsImportStatus = { ok: true, count: no1PartyAnthemValidLyrics.length };
} catch (err) {
  window._lyricsImportStatus = { ok: false, error: err.message };
  console.error("Lyrics import error:", err);
}

let secretDoorValidLyrics = [];
try {
  const sdData = window.secretDoorLyricsData;
  if (!sdData || !Array.isArray(sdData.lines)) {
    throw new Error('Invalid Secret Door lyrics JSON: expected data.lines to be an array');
  }
  secretDoorValidLyrics = sdData.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._secretDoorLyricsImportStatus = { ok: true, count: secretDoorValidLyrics.length };
} catch (err) {
  window._secretDoorLyricsImportStatus = { ok: false, error: err.message };
  console.error("Secret Door lyrics import error:", err);
}

let song505ValidLyrics = [];
try {
  const data505 = window.song505LyricsData;
  if (!data505 || !Array.isArray(data505.lines)) {
    throw new Error('Invalid 505 lyrics JSON: expected data.lines to be an array');
  }
  song505ValidLyrics = data505.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._song505LyricsImportStatus = { ok: true, count: song505ValidLyrics.length };
} catch (err) {
  window._song505LyricsImportStatus = { ok: false, error: err.message };
  console.error("505 lyrics import error:", err);
}

let bestfriendValidLyrics = [];
try {
  const bfData = window.bestfriendLyricsData;
  if (!bfData || !Array.isArray(bfData.lines)) {
    throw new Error('Invalid Best Friend lyrics JSON: expected data.lines to be an array');
  }
  bestfriendValidLyrics = bfData.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._bestfriendLyricsImportStatus = { ok: true, count: bestfriendValidLyrics.length };
} catch (err) {
  window._bestfriendLyricsImportStatus = { ok: false, error: err.message };
  console.error("Best Friend lyrics import error:", err);
}

let happinessValidLyrics = [];
try {
  const hapData = window.happinessLyricsData;
  if (!hapData || !Array.isArray(hapData.lines)) {
    throw new Error('Invalid Happiness lyrics JSON: expected data.lines to be an array');
  }
  happinessValidLyrics = hapData.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._happinessLyricsImportStatus = { ok: true, count: happinessValidLyrics.length };
} catch (err) {
  window._happinessLyricsImportStatus = { ok: false, error: err.message };
  console.error("Happiness lyrics import error:", err);
}

let iwannabeyoursValidLyrics = [];
try {
  const iwbyData = window.iwannabeyoursLyricsData;
  if (!iwbyData || !Array.isArray(iwbyData.lines)) {
    throw new Error('Invalid I Wanna Be Yours lyrics JSON: expected data.lines to be an array');
  }
  iwannabeyoursValidLyrics = iwbyData.lines.filter(
    line =>
      typeof line.startTime === 'number' &&
      typeof line.endTime === 'number' &&
      typeof line.text === 'string'
  );
  window._iwannabeyoursLyricsImportStatus = { ok: true, count: iwannabeyoursValidLyrics.length };
} catch (err) {
  window._iwannabeyoursLyricsImportStatus = { ok: false, error: err.message };
  console.error("I Wanna Be Yours lyrics import error:", err);
}

const playlist = [
  {
    id: "secret-door",
    title: "Secret Door",
    artist: "Arctic Monkeys",
    cover: "ArcticM.jpg",
    src: "Secret Door.mp3",
    audio: "Secret Door.mp3",
    lyricsFile: "Secret Door.json",
    duration: "3:43",
    color: "#e00f3c",
    accent: "#ff1a40",
    lyrics: secretDoorValidLyrics
  },
  {
    id: "i-wanna-be-yours",
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    cover: "Monkeys.png",
    src: "iwannabeyours.mp3",
    audio: "iwannabeyours.mp3",
    lyricsFile: "iwannabeyours.json",
    duration: "3:04",
    color: "#f43f5e",
    accent: "#fb7185",
    lyrics: iwannabeyoursValidLyrics
  },
  {
    id: "best-friend",
    title: "Best Friend",
    artist: "Rex Orange County",
    cover: "BestfriendCov.jpg",
    src: "Bestfriend.mp3",
    audio: "Bestfriend.mp3",
    lyricsFile: "Bestfriend.json",
    duration: "4:22",
    color: "#f59e0b",
    accent: "#fbbf24",
    lyrics: bestfriendValidLyrics
  },
  {
    id: "no-1-party-anthem",
    title: "No. 1 Party Anthem",
    artist: "Arctic Monkeys",
    cover: "Monkeys.png",
    src: "No. 1 Party Anthem.mp3",
    audio: "No. 1 Party Anthem.mp3",
    lyricsFile: "No. 1 Party Anthem.json",
    duration: "4:03",
    color: "#e00f3c",
    accent: "#ff1a40",
    lyrics: no1PartyAnthemValidLyrics
  },
  {
    id: "505",
    title: "505",
    artist: "Arctic Monkeys",
    cover: "505Cov.jpg",
    src: "505.mp3",
    audio: "505.mp3",
    lyricsFile: "505.json",
    duration: "4:13",
    color: "#8b5cf6",
    accent: "#a78bfa",
    lyrics: song505ValidLyrics
  },
  {
    id: "happiness",
    title: "Happiness",
    artist: "Rex Orange County",
    cover: "HapinessCov.jpg",
    src: "Happiness.mp3",
    audio: "Happiness.mp3",
    lyricsFile: "Happiness.json",
    duration: "4:00",
    color: "#06b6d4",
    accent: "#38bdf8",
    lyrics: happinessValidLyrics
  }
];

class AudioManager {
  constructor() {
    let globalAudio = document.getElementById('globalAudio') || document.getElementById('profile-audio');
    if (!globalAudio) {
      globalAudio = document.createElement('audio');
      globalAudio.id = 'globalAudio';
      globalAudio.preload = 'metadata';
      document.body.appendChild(globalAudio);
    } else {
      globalAudio.id = 'globalAudio';
      if (globalAudio.parentElement !== document.body) {
        document.body.appendChild(globalAudio);
      }
    }

    this.audio = globalAudio;
    window.globalAudio = globalAudio;

    this.playlist = playlist;

    // Load state from local storage
    this.currentTrackIndex = parseInt(localStorage.getItem('musicTrackIndex')) || 0;
    if (this.currentTrackIndex < 0 || this.currentTrackIndex >= this.playlist.length) {
      this.currentTrackIndex = 0;
    }
    this.savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
    this.targetVolume = localStorage.getItem('musicVolume') !== null ? parseFloat(localStorage.getItem('musicVolume')) : 1;
    this.savedSpeed = parseFloat(localStorage.getItem('musicSpeed')) || 1;
    this.wasPlaying = localStorage.getItem('musicPlaying') === 'true';

    // Queue, Shuffle, Repeat & Stats state
    this.shuffle = localStorage.getItem('musicShuffle') === 'true';
    this.repeat = localStorage.getItem('musicRepeat') || 'off'; // 'off' | 'one' | 'all'

    try {
      this.queue = JSON.parse(localStorage.getItem('musicQueue')) || [];
    } catch (e) {
      this.queue = [];
    }

    try {
      this.shuffleBag = JSON.parse(localStorage.getItem('musicShuffleBag')) || [];
    } catch (e) {
      this.shuffleBag = [];
    }

    try {
      this.stats = JSON.parse(localStorage.getItem('musicStats')) || {
        totalPlays: 0,
        totalSeconds: 0,
        songs: {},
        artists: {}
      };
    } catch (e) {
      this.stats = { totalPlays: 0, totalSeconds: 0, songs: {}, artists: {} };
    }

    // Load custom user-synced lyrics
    try {
      this.customLyrics = JSON.parse(localStorage.getItem('customSyncedLyrics')) || {};
      for (const [title, lyrics] of Object.entries(this.customLyrics)) {
        const item = this.playlist.find(p => p.title === title || p.id === title);
        if (item && Array.isArray(lyrics)) {
          item.lyrics = lyrics;
        }
      }
    } catch (e) {
      this.customLyrics = {};
    }

    this.playbackHistory = [];
    this.initAudio();
    this.bindEvents();
  }

  initAudio() {
    // Only set audio.src if not already loaded or playing
    if (!this.audio.src || this.audio.src === '' || this.audio.src === window.location.href) {
      const track = this.playlist[this.currentTrackIndex];
      if (track) {
        this.audio.src = track.src || track.audio;
        this.audio.volume = this.targetVolume;
        this.audio.playbackRate = this.savedSpeed;
        this.audio.defaultPlaybackRate = this.savedSpeed;

        if (this.savedTime > 0) {
          if (this.audio.readyState >= 1) {
            try {
              this.audio.currentTime = this.savedTime;
            } catch (e) {}
          } else {
            const onLoaded = () => {
              try {
                if (this.savedTime > 0 && this.audio.currentTime === 0) {
                  this.audio.currentTime = this.savedTime;
                }
              } catch (e) {}
            };
            this.audio.addEventListener('loadedmetadata', onLoaded, { once: true });
          }
        }
      }
    }
  }

  bindEvents() {
    this.audio.addEventListener('timeupdate', () => {
      if (this.audio.currentTime > 0) {
        localStorage.setItem('musicTime', this.audio.currentTime.toString());
      }
      this.recordListeningSeconds(0.25);
    });

    this.audio.addEventListener('play', () => {
      localStorage.setItem('musicPlaying', 'true');
      this.recordTrackPlay(this.getCurrentTrack());
    });

    this.audio.addEventListener('pause', () => {
      localStorage.setItem('musicPlaying', 'false');
    });

    this.audio.addEventListener('ratechange', () => {
      localStorage.setItem('musicSpeed', this.audio.playbackRate.toString());
    });
  }

  getCurrentTrack() {
    return this.playlist[this.currentTrackIndex] || this.playlist[0];
  }

  static parseLyricsData(data) {
    if (!data) return [];
    let rawLines = [];
    if (Array.isArray(data)) {
      rawLines = data;
    } else if (data.lines && Array.isArray(data.lines)) {
      rawLines = data.lines;
    } else if (data.lyrics && Array.isArray(data.lyrics)) {
      rawLines = data.lyrics;
    }

    return rawLines
      .map(line => {
        let startTime = 0;
        if (typeof line.startTime === 'number') startTime = line.startTime;
        else if (typeof line.time === 'number') startTime = line.time;
        else if (line.startTime) startTime = parseFloat(line.startTime);
        else if (line.time) startTime = parseFloat(line.time);

        let endTime = startTime + 4;
        if (typeof line.endTime === 'number') endTime = line.endTime;
        else if (line.endTime) endTime = parseFloat(line.endTime);

        let text = '';
        if (typeof line.text === 'string') text = line.text.trim();
        else if (line.words) text = String(line.words).trim();
        else if (typeof line === 'string') text = line.trim();

        return { startTime, endTime, text };
      })
      .filter(line => !isNaN(line.startTime) && line.text && line.text.length > 0);
  }

  getTrackLyrics(track) {
    if (track && track.lyrics && Array.isArray(track.lyrics) && track.lyrics.length > 0) {
      return track.lyrics;
    }

    const windowMap = {
      '505': window.song505LyricsData,
      '505.json': window.song505LyricsData,
      'secret-door': window.secretDoorLyricsData,
      'Secret Door': window.secretDoorLyricsData,
      'Secret Door.json': window.secretDoorLyricsData,
      'i-wanna-be-yours': window.iwannabeyoursLyricsData,
      'I Wanna Be Yours': window.iwannabeyoursLyricsData,
      'iwannabeyours.json': window.iwannabeyoursLyricsData,
      'best-friend': window.bestfriendLyricsData,
      'Best Friend': window.bestfriendLyricsData,
      'Bestfriend.json': window.bestfriendLyricsData,
      'no-1-party-anthem': window.no1PartyAnthemLyricsData,
      'No. 1 Party Anthem': window.no1PartyAnthemLyricsData,
      'No. 1 Party Anthem.json': window.no1PartyAnthemLyricsData,
      'happiness': window.happinessLyricsData,
      'Happiness': window.happinessLyricsData,
      'Happiness.json': window.happinessLyricsData
    };

    const globalObj = track ? (windowMap[track.id] || windowMap[track.title] || (track.lyricsFile && windowMap[track.lyricsFile])) : null;
    if (globalObj && Array.isArray(globalObj.lines)) {
      const parsed = AudioManager.parseLyricsData(globalObj);
      if (parsed.length > 0) {
        track.lyrics = parsed;
        return parsed;
      }
    }

    return [];
  }

  async loadLyrics(track) {
    if (!track) track = this.getCurrentTrack();

    // 1. Check if already parsed in track
    if (track.lyrics && Array.isArray(track.lyrics) && track.lyrics.length > 0) {
      return track.lyrics;
    }

    // 2. Check window global data (synchronous fast path)
    const preloaded = this.getTrackLyrics(track);
    if (preloaded.length > 0) {
      track.lyrics = preloaded;
      return preloaded;
    }

    // 3. Fetch from JSON file
    const fileName = track.lyricsFile || (track.title ? `${track.title}.json` : '505.json');
    const candidatePaths = [
      `./${fileName}`,
      encodeURI(`./${fileName}`),
      `./lyrics/${fileName}`,
      encodeURI(`./lyrics/${fileName}`)
    ];

    for (const url of candidatePaths) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          const lines = data && Array.isArray(data.lines) ? data.lines : (Array.isArray(data) ? data : (data && data.lyrics ? data.lyrics : []));
          const parsed = AudioManager.parseLyricsData({ lines });
          if (parsed.length > 0) {
            track.lyrics = parsed;
            return parsed;
          }
        }
      } catch (err) {
        // try next candidate
      }
    }

    track.lyrics = [];
    return [];
  }

  updateTrackLyrics(trackIndex, lyricsArray) {
    const track = this.playlist[trackIndex];
    if (!track) return false;
    track.lyrics = lyricsArray;
    if (!this.customLyrics) this.customLyrics = {};
    this.customLyrics[track.title] = lyricsArray;
    localStorage.setItem('customSyncedLyrics', JSON.stringify(this.customLyrics));
    window.dispatchEvent(new CustomEvent('lyrics-updated', { detail: { trackIndex, track, lyrics: lyricsArray } }));
    return true;
  }

  // --- QUEUE MANAGEMENT ---
  addToQueue(trackIndex) {
    if (typeof trackIndex !== 'number' || trackIndex < 0 || trackIndex >= this.playlist.length) {
      return { success: false, reason: 'invalid' };
    }
    this.queue.push(trackIndex);
    this.saveQueue();
    window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
    return { success: true };
  }

  playNow(trackIndex) {
    if (trackIndex < 0 || trackIndex >= this.playlist.length) return false;
    if (typeof window.playSpecificTrack === 'function') {
      window.playSpecificTrack(trackIndex);
    }
    return true;
  }

  removeFromQueue(pos) {
    if (pos >= 0 && pos < this.queue.length) {
      this.queue.splice(pos, 1);
      this.saveQueue();
      window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
    }
  }

  removeFromQueueByTrackIndex(trackIndex) {
    const pos = this.queue.indexOf(trackIndex);
    if (pos !== -1) {
      this.queue.splice(pos, 1);
      this.saveQueue();
      window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
      return true;
    }
    return false;
  }

  reorderQueue(fromIdx, toIdx) {
    if (fromIdx < 0 || fromIdx >= this.queue.length || toIdx < 0 || toIdx >= this.queue.length) return;
    const [moved] = this.queue.splice(fromIdx, 1);
    this.queue.splice(toIdx, 0, moved);
    this.saveQueue();
    window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
  }

  clearQueue() {
    this.queue = [];
    this.saveQueue();
    window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
  }

  saveQueue() {
    localStorage.setItem('musicQueue', JSON.stringify(this.queue));
  }

  // --- SHUFFLE & REPEAT ---
  toggleShuffle() {
    this.shuffle = !this.shuffle;
    localStorage.setItem('musicShuffle', this.shuffle.toString());
    if (this.shuffle) {
      this.shuffleBag = [];
      localStorage.removeItem('musicShuffleBag');
    }
    window.dispatchEvent(new CustomEvent('shuffle-changed', { detail: { shuffle: this.shuffle } }));
    return this.shuffle;
  }

  cycleRepeat() {
    // 'off' -> 'all' (Repeat Queue/All) -> 'one' (Repeat Song) -> 'off'
    if (this.repeat === 'off') {
      this.repeat = 'all';
    } else if (this.repeat === 'all') {
      this.repeat = 'one';
    } else {
      this.repeat = 'off';
    }
    localStorage.setItem('musicRepeat', this.repeat);
    window.dispatchEvent(new CustomEvent('repeat-changed', { detail: { repeat: this.repeat } }));
    return this.repeat;
  }

  // --- AUTOMATIC NEXT TRACK RESOLUTION ---
  getNextTrackIndex(isAutoEnd = false) {
    // 1. If Repeat One (Repeat Song)
    if (this.repeat === 'one') {
      return this.currentTrackIndex;
    }

    // 2. If Queue has items: ALWAYS follow exact queue order (FIFO: 1st -> 2nd -> 3rd)
    if (this.queue && this.queue.length > 0) {
      const nextFromQueue = this.queue.shift();
      this.saveQueue();
      window.dispatchEvent(new CustomEvent('queue-updated', { detail: { queue: this.queue } }));
      
      if (!this.playbackHistory) this.playbackHistory = [];
      this.playbackHistory.push(this.currentTrackIndex);
      if (this.playbackHistory.length > 30) this.playbackHistory.shift();

      return nextFromQueue;
    }

    // 3. When Queue is empty (Smart Shuffle with Bag / No-Repeat until full cycle):
    if (this.shuffle && this.playlist.length > 1) {
      if (!this.shuffleBag || this.shuffleBag.length === 0) {
        this.shuffleBag = [];
        for (let i = 0; i < this.playlist.length; i++) {
          if (i !== this.currentTrackIndex) {
            this.shuffleBag.push(i);
          }
        }
        // Fisher-Yates shuffle
        for (let i = this.shuffleBag.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.shuffleBag[i], this.shuffleBag[j]] = [this.shuffleBag[j], this.shuffleBag[i]];
        }
      }

      const nextShuffleIdx = this.shuffleBag.shift();
      localStorage.setItem('musicShuffleBag', JSON.stringify(this.shuffleBag));

      if (!this.playbackHistory) this.playbackHistory = [];
      this.playbackHistory.push(this.currentTrackIndex);
      if (this.playbackHistory.length > 30) this.playbackHistory.shift();
      
      return nextShuffleIdx;
    }

    if (!this.playbackHistory) this.playbackHistory = [];
    this.playbackHistory.push(this.currentTrackIndex);
    if (this.playbackHistory.length > 30) this.playbackHistory.shift();

    // Normal mode / Repeat all: advance to next song, cycling to start when reaching the end
    return (this.currentTrackIndex + 1) % this.playlist.length;
  }

  getPrevTrackIndex() {
    if (this.shuffle && this.playbackHistory && this.playbackHistory.length > 0) {
      const prev = this.playbackHistory.pop();
      if (typeof prev === 'number' && prev >= 0 && prev < this.playlist.length) {
        return prev;
      }
    }
    let prevIdx = this.currentTrackIndex - 1;
    if (prevIdx < 0) {
      prevIdx = this.playlist.length - 1;
    }
    return prevIdx;
  }

  setSpeed(speed) {
    this.savedSpeed = speed;
    this.audio.playbackRate = speed;
    this.audio.defaultPlaybackRate = speed;
    localStorage.setItem('musicSpeed', speed.toString());
  }

  // --- LISTENING STATS ENGINE ---
  recordTrackPlay(track) {
    if (!track) return;
    this.stats.totalPlays = (this.stats.totalPlays || 0) + 1;

    if (!this.stats.songs) this.stats.songs = {};
    this.stats.songs[track.title] = (this.stats.songs[track.title] || 0) + 1;

    if (!this.stats.artists) this.stats.artists = {};
    this.stats.artists[track.artist] = (this.stats.artists[track.artist] || 0) + 1;

    localStorage.setItem('musicStats', JSON.stringify(this.stats));
  }

  recordListeningSeconds(sec = 1) {
    this.stats.totalSeconds = (this.stats.totalSeconds || 0) + sec;
  }

  getStatsSummary() {
    const totalMinutes = Math.floor((this.stats.totalSeconds || 0) / 60);
    const totalHours = (totalMinutes / 60).toFixed(1);

    let topSong = '-';
    let maxSongPlays = 0;
    if (this.stats.songs) {
      for (const [song, count] of Object.entries(this.stats.songs)) {
        if (count > maxSongPlays) {
          maxSongPlays = count;
          topSong = `${song} (${count}x)`;
        }
      }
    }

    let topArtist = '-';
    let maxArtistPlays = 0;
    if (this.stats.artists) {
      for (const [artist, count] of Object.entries(this.stats.artists)) {
        if (count > maxArtistPlays) {
          maxArtistPlays = count;
          topArtist = `${artist} (${count}x)`;
        }
      }
    }

    return {
      totalPlays: this.stats.totalPlays || 0,
      totalTimeFormatted: totalMinutes < 60 ? `${totalMinutes} mnt` : `${totalHours} jam`,
      topSong,
      topArtist
    };
  }
}

// Instantiate and expose globally
if (!window.audioManager) {
  window.audioManager = new AudioManager();
}
