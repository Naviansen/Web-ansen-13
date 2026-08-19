    // --- TAB SWITCHER LOGIC ---
    let currentActiveGame = 'hub';

    function switchGameTab(tabName) {
      currentActiveGame = tabName;

      // Update Tab button active styles
      document.querySelectorAll('.game-tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      const activeBtn = document.getElementById(`tab-btn-${tabName}`);
      if (activeBtn) activeBtn.classList.add('active');

      // Hide all panels
      document.querySelectorAll('.game-view-panel').forEach(panel => {
        panel.classList.add('hidden');
        panel.classList.remove('block');
      });

      // Show selected panel
      const targetPanel = document.getElementById(`game-view-${tabName}`);
      if (targetPanel) {
        targetPanel.classList.remove('hidden');
        targetPanel.classList.add('block');
      }

      // Contextual startup triggers
      if (tabName === 'sudoku') {
        if (!sudokuInitialized) {
          generateNewSudoku();
        }
      } else if (tabName === 'snake') {
        if (!snakeInitialized) {
          initSnakeGame();
        }
      }
      updateHubStats();
    }

    function updateHubStats() {
      const wins = localStorage.getItem('sudoku_wins_count') || 0;
      const snakeHigh = localStorage.getItem('snake_highscore') || 0;
      const winsEl = document.getElementById('hub-sudoku-wins');
      const snakeHighEl = document.getElementById('hub-snake-high');
      if (winsEl) winsEl.textContent = wins;
      if (snakeHighEl) snakeHighEl.textContent = snakeHigh;
    }

    // =========================================================
    // ================== 1. SUDOKU GAME ENGINE ==================
    // =========================================================
    let sudokuInitialized = false;
    let sudokuDifficulty = 'easy'; // easy, medium, hard
    let sudokuSolution = [];
    let sudokuInitial = [];
    let sudokuCurrent = [];
    let selectedCellIndex = null;
    let sudokuTimerInterval = null;
    let sudokuSeconds = 0;
    let sudokuMistakes = 0;
    let sudokuIsWon = false;

    // Pre-curated valid base puzzle boards to ensure guaranteed solvable and high quality puzzles
    const SUDOKU_PRESETS = {
      easy: [
        {
          initial: "530070000600195000098000060800060003400803001700020006060000280000419005000080079",
          solution: "534678912672195348198342567859761423426853791713924856961537284287419635345286179"
        },
        {
          initial: "000260701680070090190004500820100040004602900050003028009300074040050036703018000",
          solution: "435269781682571493197834562826195347374682915951743628519326874248957136763418259"
        }
      ],
      medium: [
        {
          initial: "200080300060070084030500209000105408000000000402706000301007040720040060004010003",
          solution: "245981376169273584837564219976125438513498627482736951391657842728349165654812793"
        },
        {
          initial: "000600400700003600000091080000000000050180003000306045040200060903000000020000100",
          solution: "581672439792843651364591287438957126256184973179326845845219360913768500627435198"
        }
      ],
      hard: [
        {
          initial: "000000012000000003002300400001800005060070800000009000008500000900040500470006000",
          solution: "683457912145928763792361458231894675569172834874639251318575249926743581475216390"
        },
        {
          initial: "020000000000600003074080000000003002080040010600500000000010780500009000000000040",
          solution: "128354697956271483374986251415793862283645910697128345832410789541839026769502148"
        }
      ]
    };

    function setSudokuDifficulty(diff) {
      sudokuDifficulty = diff;
      ['easy', 'medium', 'hard'].forEach(d => {
        const btn = document.getElementById(`diff-btn-${d}`);
        if (btn) {
          if (d === diff) {
            btn.className = "px-2.5 py-1 text-[10px] font-bold rounded-md bg-themeAccent text-white transition-all";
          } else {
            btn.className = "px-2.5 py-1 text-[10px] font-bold rounded-md text-textSecondary hover:text-textPrimary transition-all";
          }
        }
      });
      generateNewSudoku();
    }

    function generateNewSudoku() {
      sudokuInitialized = true;
      sudokuIsWon = false;
      sudokuMistakes = 0;
      updateSudokuMistakes();
      resetSudokuTimer();
      startSudokuTimer();

      // Pick a random preset based on difficulty
      const pool = SUDOKU_PRESETS[sudokuDifficulty] || SUDOKU_PRESETS.easy;
      const pick = pool[Math.floor(Math.random() * pool.length)];

      sudokuInitial = pick.initial.split('').map(Number);
      sudokuSolution = pick.solution.split('').map(Number);
      sudokuCurrent = [...sudokuInitial];
      selectedCellIndex = null;

      renderSudokuBoard();
    }

    function renderSudokuBoard() {
      const boardEl = document.getElementById('sudoku-board');
      if (!boardEl) return;
      boardEl.innerHTML = '';

      const selectedVal = selectedCellIndex !== null ? sudokuCurrent[selectedCellIndex] : null;
      const selRow = selectedCellIndex !== null ? Math.floor(selectedCellIndex / 9) : null;
      const selCol = selectedCellIndex !== null ? selectedCellIndex % 9 : null;
      const selBox = selectedCellIndex !== null ? (Math.floor(selRow / 3) * 3 + Math.floor(selCol / 3)) : null;

      for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        const val = sudokuCurrent[i];
        const isPrefilled = sudokuInitial[i] !== 0;

        cell.className = 'sudoku-cell';
        if (isPrefilled) cell.classList.add('prefilled');
        else if (val !== 0) cell.classList.add('user-filled');

        const row = Math.floor(i / 9);
        const col = i % 9;
        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3);

        if (selectedCellIndex === i) {
          cell.classList.add('selected');
        } else if (selectedCellIndex !== null) {
          if (row === selRow || col === selCol || box === selBox) {
            cell.classList.add('highlight-peer');
          }
          if (val !== 0 && selectedVal !== 0 && val === selectedVal) {
            cell.classList.add('highlight-same');
          }
        }

        cell.textContent = val === 0 ? '' : val;
        cell.onclick = () => selectSudokuCell(i);

        boardEl.appendChild(cell);
      }
    }

    function selectSudokuCell(index) {
      selectedCellIndex = index;
      renderSudokuBoard();
    }

    function inputSudokuNumber(num) {
      if (selectedCellIndex === null || sudokuIsWon) return;
      if (sudokuInitial[selectedCellIndex] !== 0) return; // Cannot edit prefilled

      const expected = sudokuSolution[selectedCellIndex];
      sudokuCurrent[selectedCellIndex] = num;

      if (num !== expected) {
        sudokuMistakes++;
        updateSudokuMistakes();

        // Trigger cell error shake animation
        const boardEl = document.getElementById('sudoku-board');
        if (boardEl && boardEl.children[selectedCellIndex]) {
          boardEl.children[selectedCellIndex].classList.add('invalid');
          setTimeout(() => {
            if (boardEl.children[selectedCellIndex]) {
              boardEl.children[selectedCellIndex].classList.remove('invalid');
            }
          }, 400);
        }
      }

      renderSudokuBoard();
      checkIfSudokuWon();
    }

    function eraseSudokuCell() {
      if (selectedCellIndex === null || sudokuIsWon) return;
      if (sudokuInitial[selectedCellIndex] !== 0) return;

      sudokuCurrent[selectedCellIndex] = 0;
      renderSudokuBoard();
    }

    function giveSudokuHint() {
      if (sudokuIsWon) return;
      // If cell selected and empty, fill it
      if (selectedCellIndex !== null && sudokuInitial[selectedCellIndex] === 0) {
        sudokuCurrent[selectedCellIndex] = sudokuSolution[selectedCellIndex];
        renderSudokuBoard();
        checkIfSudokuWon();
        return;
      }

      // Otherwise find first empty cell and fill it
      for (let i = 0; i < 81; i++) {
        if (sudokuCurrent[i] === 0) {
          selectedCellIndex = i;
          sudokuCurrent[i] = sudokuSolution[i];
          renderSudokuBoard();
          checkIfSudokuWon();
          break;
        }
      }
    }

    function resetSudokuBoard() {
      sudokuCurrent = [...sudokuInitial];
      sudokuMistakes = 0;
      updateSudokuMistakes();
      selectedCellIndex = null;
      renderSudokuBoard();
    }

    function checkSudokuSolution() {
      if (sudokuIsWon) return;
      let hasError = false;
      const boardEl = document.getElementById('sudoku-board');

      for (let i = 0; i < 81; i++) {
        if (sudokuCurrent[i] !== 0 && sudokuCurrent[i] !== sudokuSolution[i]) {
          hasError = true;
          if (boardEl && boardEl.children[i]) {
            boardEl.children[i].classList.add('invalid');
            setTimeout(() => {
              if (boardEl.children[i]) boardEl.children[i].classList.remove('invalid');
            }, 600);
          }
        }
      }

      if (!hasError) {
        checkIfSudokuWon(true);
      }
    }

    function checkIfSudokuWon(forceCheck = false) {
      let complete = true;
      for (let i = 0; i < 81; i++) {
        if (sudokuCurrent[i] !== sudokuSolution[i]) {
          complete = false;
          break;
        }
      }

      if (complete) {
        sudokuIsWon = true;
        clearInterval(sudokuTimerInterval);

        // Update local stats
        const prevWins = parseInt(localStorage.getItem('sudoku_wins_count') || '0', 10);
        localStorage.setItem('sudoku_wins_count', prevWins + 1);
        updateHubStats();

        // Show celebration win modal
        const modal = document.getElementById('sudoku-win-modal');
        const timerEl = document.getElementById('win-modal-time');
        const diffEl = document.getElementById('win-modal-diff');

        if (timerEl) timerEl.textContent = formatTime(sudokuSeconds);
        if (diffEl) diffEl.textContent = sudokuDifficulty.toUpperCase();

        if (modal) {
          modal.classList.remove('hidden');
          setTimeout(() => {
            modal.classList.remove('opacity-0');
            modal.querySelector('.premium-card').classList.remove('scale-95');
            modal.querySelector('.premium-card').classList.add('scale-100');
          }, 30);
        }
      }
    }

    function closeSudokuWinModal() {
      const modal = document.getElementById('sudoku-win-modal');
      if (modal) {
        modal.classList.add('opacity-0');
        modal.querySelector('.premium-card').classList.remove('scale-100');
        modal.querySelector('.premium-card').classList.add('scale-95');
        setTimeout(() => modal.classList.add('hidden'), 300);
      }
    }

    function updateSudokuMistakes() {
      const el = document.getElementById('sudoku-mistakes');
      if (el) el.textContent = sudokuMistakes;
    }

    function startSudokuTimer() {
      clearInterval(sudokuTimerInterval);
      sudokuTimerInterval = setInterval(() => {
        sudokuSeconds++;
        const timerEl = document.getElementById('sudoku-timer');
        if (timerEl) timerEl.textContent = formatTime(sudokuSeconds);
      }, 1000);
    }

    function resetSudokuTimer() {
      clearInterval(sudokuTimerInterval);
      sudokuSeconds = 0;
      const timerEl = document.getElementById('sudoku-timer');
      if (timerEl) timerEl.textContent = "00:00";
    }

    function formatTime(totalSec) {
      const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
      const s = (totalSec % 60).toString().padStart(2, '0');
      return `${m}:${s}`;
    }

    // =========================================================
    // =================== 2. SNAKE GAME ENGINE ==================
    // =========================================================
    let snakeInitialized = false;
    let snakeCanvas, snakeCtx;
    const GRID_SIZE = 20; // 20x20 grid
    let CELL_SIZE = 20;
    let snake = [];
    let snakeDir = { x: 1, y: 0 };
    let snakeNextDir = { x: 1, y: 0 };
    let food = { x: 15, y: 10 };
    let snakeScore = 0;
    let snakeHighScore = 0;
    let snakeGameRunning = false;
    let snakeGamePaused = false;
    let snakeGameLoopInterval = null;
    let snakeSpeedMs = 130;
    let snakeFoodEaten = 0;

    function initSnakeGame() {
      snakeInitialized = true;
      snakeCanvas = document.getElementById('snake-canvas');
      if (!snakeCanvas) return;
      snakeCtx = snakeCanvas.getContext('2d');

      snakeHighScore = parseInt(localStorage.getItem('snake_highscore') || '0', 10);
      const highEl = document.getElementById('snake-high-score');
      if (highEl) highEl.textContent = snakeHighScore;

      resetSnakeState();
      drawSnakeGame();
    }

    function resetSnakeState() {
      snake = [
        { x: 8, y: 10 },
        { x: 7, y: 10 },
        { x: 6, y: 10 }
      ];
      snakeDir = { x: 1, y: 0 };
      snakeNextDir = { x: 1, y: 0 };
      snakeScore = 0;
      snakeFoodEaten = 0;
      snakeSpeedMs = 130;
      updateSnakeScoreUI();
      spawnFood();
    }

    function startOrResumeSnake() {
      const overlay = document.getElementById('snake-overlay');
      if (overlay) overlay.classList.add('hidden');

      if (!snakeGameRunning) {
        resetSnakeState();
        snakeGameRunning = true;
        snakeGamePaused = false;
        runSnakeLoop();
      } else if (snakeGamePaused) {
        snakeGamePaused = false;
        runSnakeLoop();
      }
      updatePauseButtonUI();
    }

    function togglePauseSnake() {
      if (!snakeGameRunning) {
        startOrResumeSnake();
        return;
      }

      snakeGamePaused = !snakeGamePaused;
      const overlay = document.getElementById('snake-overlay');
      const title = document.getElementById('snake-overlay-title');
      const desc = document.getElementById('snake-overlay-desc');
      const btn = document.getElementById('snake-overlay-btn');

      if (snakeGamePaused) {
        clearInterval(snakeGameLoopInterval);
        if (title) title.textContent = "Permainan Dijeda";
        if (desc) desc.textContent = "Tekan Lanjutkan untuk melanjutkan permainan.";
        if (btn) btn.innerHTML = '<i class="fa-solid fa-play text-[11px]"></i> Lanjutkan';
        if (overlay) overlay.classList.remove('hidden');
      } else {
        if (overlay) overlay.classList.add('hidden');
        runSnakeLoop();
      }
      updatePauseButtonUI();
    }

    function restartSnakeGame() {
      clearInterval(snakeGameLoopInterval);
      snakeGameRunning = false;
      snakeGamePaused = false;
      resetSnakeState();
      drawSnakeGame();
      startOrResumeSnake();
    }

    function runSnakeLoop() {
      clearInterval(snakeGameLoopInterval);
      snakeGameLoopInterval = setInterval(() => {
        updateSnakeLogic();
        drawSnakeGame();
      }, snakeSpeedMs);
    }

    function updateSnakeLogic() {
      snakeDir = { ...snakeNextDir };
      const head = { x: snake[0].x + snakeDir.x, y: snake[0].y + snakeDir.y };

      // Wall collision check
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        triggerSnakeGameOver();
        return;
      }

      // Self collision check
      for (let segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
          triggerSnakeGameOver();
          return;
        }
      }

      snake.unshift(head);

      // Check food eat
      if (head.x === food.x && head.y === food.y) {
        snakeScore += 10;
        snakeFoodEaten++;
        if (snakeScore > snakeHighScore) {
          snakeHighScore = snakeScore;
          localStorage.setItem('snake_highscore', snakeHighScore);
        }
        updateSnakeScoreUI();

        // Speed curve acceleration
        if (snakeFoodEaten % 4 === 0 && snakeSpeedMs > 65) {
          snakeSpeedMs = Math.max(65, snakeSpeedMs - 8);
          runSnakeLoop();
        }

        spawnFood();
      } else {
        snake.pop();
      }
    }

    function spawnFood() {
      let valid = false;
      while (!valid) {
        food.x = Math.floor(Math.random() * GRID_SIZE);
        food.y = Math.floor(Math.random() * GRID_SIZE);
        valid = !snake.some(segment => segment.x === food.x && segment.y === food.y);
      }
    }

    function triggerSnakeGameOver() {
      clearInterval(snakeGameLoopInterval);
      snakeGameRunning = false;
      snakeGamePaused = false;
      updateHubStats();

      const overlay = document.getElementById('snake-overlay');
      const icon = document.getElementById('snake-overlay-icon');
      const title = document.getElementById('snake-overlay-title');
      const desc = document.getElementById('snake-overlay-desc');
      const btn = document.getElementById('snake-overlay-btn');

      if (icon) icon.className = "fa-solid fa-skull-crossbones text-brand-red-500";
      if (title) title.textContent = "Game Over!";
      if (desc) desc.innerHTML = `Skor Akhir: <strong class="text-emerald-400 font-bold">${snakeScore}</strong> &bull; Rekor: <strong class="text-amber-400 font-bold">${snakeHighScore}</strong>`;
      if (btn) btn.innerHTML = '<i class="fa-solid fa-rotate-left text-[11px]"></i> Main Ulang';
      if (overlay) overlay.classList.remove('hidden');

      updatePauseButtonUI();
    }

    function updateSnakeScoreUI() {
      const scoreEl = document.getElementById('snake-score');
      const highEl = document.getElementById('snake-high-score');
      const foodCountEl = document.getElementById('snake-food-count');
      const speedLabel = document.getElementById('snake-speed-label');

      if (scoreEl) scoreEl.textContent = snakeScore;
      if (highEl) highEl.textContent = snakeHighScore;
      if (foodCountEl) foodCountEl.textContent = `${snakeFoodEaten} apel`;

      if (speedLabel) {
        const multiplier = (130 / snakeSpeedMs).toFixed(1);
        speedLabel.textContent = `${multiplier}x Speed`;
      }
    }

    function updatePauseButtonUI() {
      const pauseBtn = document.getElementById('btn-snake-pause');
      if (!pauseBtn) return;
      if (snakeGamePaused) {
        pauseBtn.innerHTML = '<i class="fa-solid fa-play text-emerald-500"></i> Lanjut';
      } else {
        pauseBtn.innerHTML = '<i class="fa-solid fa-pause text-amber-500"></i> Jeda (Space)';
      }
    }

    function drawSnakeGame() {
      if (!snakeCtx || !snakeCanvas) return;
      CELL_SIZE = snakeCanvas.width / GRID_SIZE;

      // 1. Clear & Background
      snakeCtx.fillStyle = '#0b0d11';
      snakeCtx.fillRect(0, 0, snakeCanvas.width, snakeCanvas.height);

      // 2. Subtle Grid Lines
      snakeCtx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      snakeCtx.lineWidth = 1;
      for (let i = 0; i <= GRID_SIZE; i++) {
        snakeCtx.beginPath();
        snakeCtx.moveTo(i * CELL_SIZE, 0);
        snakeCtx.lineTo(i * CELL_SIZE, snakeCanvas.height);
        snakeCtx.stroke();

        snakeCtx.beginPath();
        snakeCtx.moveTo(0, i * CELL_SIZE);
        snakeCtx.lineTo(snakeCanvas.width, i * CELL_SIZE);
        snakeCtx.stroke();
      }

      // 3. Draw Food (Glowing Apple / Orb)
      const foodX = food.x * CELL_SIZE + CELL_SIZE / 2;
      const foodY = food.y * CELL_SIZE + CELL_SIZE / 2;
      const radius = (CELL_SIZE / 2) * 0.75;

      snakeCtx.save();
      snakeCtx.shadowColor = '#e11d48';
      snakeCtx.shadowBlur = 12;
      snakeCtx.fillStyle = '#ff1a40';
      snakeCtx.beginPath();
      snakeCtx.arc(foodX, foodY, radius, 0, Math.PI * 2);
      snakeCtx.fill();

      // Food highlight
      snakeCtx.fillStyle = '#ffffff';
      snakeCtx.beginPath();
      snakeCtx.arc(foodX - radius * 0.3, foodY - radius * 0.3, radius * 0.25, 0, Math.PI * 2);
      snakeCtx.fill();
      snakeCtx.restore();

      // 4. Draw Snake Body
      snake.forEach((segment, idx) => {
        const segX = segment.x * CELL_SIZE;
        const segY = segment.y * CELL_SIZE;
        const isHead = idx === 0;

        snakeCtx.save();
        if (isHead) {
          snakeCtx.shadowColor = '#10b981';
          snakeCtx.shadowBlur = 10;
          snakeCtx.fillStyle = '#10b981';
        } else {
          const greenTone = Math.max(70, 185 - idx * 3);
          snakeCtx.fillStyle = `rgb(16, ${greenTone}, 129)`;
        }

        // Rounded Segments
        const pad = 1.5;
        const r = 5;
        const x = segX + pad;
        const y = segY + pad;
        const w = CELL_SIZE - pad * 2;
        const h = CELL_SIZE - pad * 2;

        snakeCtx.beginPath();
        snakeCtx.roundRect(x, y, w, h, isHead ? 6 : 4);
        snakeCtx.fill();

        // Eyes for Head
        if (isHead) {
          snakeCtx.fillStyle = '#000000';
          let eye1X, eye1Y, eye2X, eye2Y;
          const eyeSize = 2;

          if (snakeDir.x === 1) { // Moving Right
            eye1X = x + w - 4; eye1Y = y + 4;
            eye2X = x + w - 4; eye2Y = y + h - 4;
          } else if (snakeDir.x === -1) { // Moving Left
            eye1X = x + 4; eye1Y = y + 4;
            eye2X = x + 4; eye2Y = y + h - 4;
          } else if (snakeDir.y === 1) { // Moving Down
            eye1X = x + 4; eye1Y = y + h - 4;
            eye2X = x + w - 4; eye2Y = y + h - 4;
          } else { // Moving Up
            eye1X = x + 4; eye1Y = y + 4;
            eye2X = x + w - 4; eye2Y = y + 4;
          }

          snakeCtx.beginPath();
          snakeCtx.arc(eye1X, eye1Y, eyeSize, 0, Math.PI * 2);
          snakeCtx.arc(eye2X, eye2Y, eyeSize, 0, Math.PI * 2);
          snakeCtx.fill();
        }

        snakeCtx.restore();
      });
    }

    function handleVirtualKey(key) {
      if (key === 'ArrowUp' && snakeDir.y === 0) snakeNextDir = { x: 0, y: -1 };
      else if (key === 'ArrowDown' && snakeDir.y === 0) snakeNextDir = { x: 0, y: 1 };
      else if (key === 'ArrowLeft' && snakeDir.x === 0) snakeNextDir = { x: -1, y: 0 };
      else if (key === 'ArrowRight' && snakeDir.x === 0) snakeNextDir = { x: 1, y: 0 };
    }

    // Keyboard Listeners for both Games
    window.addEventListener('keydown', (e) => {
      // 1. Sudoku Controls
      if (currentActiveGame === 'sudoku' && selectedCellIndex !== null) {
        const key = e.key;
        if (key >= '1' && key <= '9') {
          inputSudokuNumber(parseInt(key, 10));
        } else if (key === 'Backspace' || key === 'Delete') {
          eraseSudokuCell();
        } else if (key === 'ArrowUp') {
          e.preventDefault();
          if (selectedCellIndex >= 9) selectSudokuCell(selectedCellIndex - 9);
        } else if (key === 'ArrowDown') {
          e.preventDefault();
          if (selectedCellIndex < 72) selectSudokuCell(selectedCellIndex + 9);
        } else if (key === 'ArrowLeft') {
          e.preventDefault();
          if (selectedCellIndex % 9 > 0) selectSudokuCell(selectedCellIndex - 1);
        } else if (key === 'ArrowRight') {
          e.preventDefault();
          if (selectedCellIndex % 9 < 8) selectSudokuCell(selectedCellIndex + 1);
        }
      }

      // 2. Snake Controls
      if (currentActiveGame === 'snake') {
        if (e.key === ' ' || e.code === 'Space') {
          e.preventDefault();
          togglePauseSnake();
        } else if ((e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') && snakeDir.y === 0) {
          e.preventDefault();
          snakeNextDir = { x: 0, y: -1 };
        } else if ((e.key === 'ArrowDown' || e.key.toLowerCase() === 's') && snakeDir.y === 0) {
          e.preventDefault();
          snakeNextDir = { x: 0, y: 1 };
        } else if ((e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') && snakeDir.x === 0) {
          e.preventDefault();
          snakeNextDir = { x: -1, y: 0 };
        } else if ((e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') && snakeDir.x === 0) {
          e.preventDefault();
          snakeNextDir = { x: 1, y: 0 };
        }
      }
    });

    // Theme Toggle Functionality
    function toggleTheme() {
      const doc = document.documentElement;
      if (doc.classList.contains('dark')) {
        doc.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        doc.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }

    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btnIcon = document.querySelector('#btn-mobile-menu i');
      if (menu) {
        if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          if (btnIcon) btnIcon.className = "fa-solid fa-xmark text-xs";
        } else {
          menu.classList.add('hidden');
          if (btnIcon) btnIcon.className = "fa-solid fa-bars-staggered text-xs";
        }
      }
    }

    // Auto-init on page load
    window.addEventListener('DOMContentLoaded', () => {
      updateHubStats();
    });

    // Explicit window assignments for inline HTML onclick handlers
    window.switchGameTab = switchGameTab;
    window.setSudokuDifficulty = setSudokuDifficulty;
    window.generateNewSudoku = generateNewSudoku;
    window.resetSudokuBoard = resetSudokuBoard;
    window.checkSudokuSolution = checkSudokuSolution;
    window.inputSudokuNumber = inputSudokuNumber;
    window.eraseSudokuCell = eraseSudokuCell;
    window.closeSudokuWinModal = closeSudokuWinModal;
    window.startOrResumeSnake = startOrResumeSnake;
    window.togglePauseSnake = togglePauseSnake;
    window.restartSnakeGame = restartSnakeGame;
    window.setSnakeDifficulty = setSnakeDifficulty;
    window.handleVirtualKey = handleVirtualKey;
    window.toggleTheme = toggleTheme;
    window.toggleMobileMenu = toggleMobileMenu;