// ============================================================
// SINGLE PAGE APPLICATION (SPA) ROUTER
// Seamless Navigation, History Support, State Persistence & Dynamic Updates
// ============================================================

(function () {
  'use strict';

  const PAGE_CONFIG = {
    'index.html': {
      viewId: 'view-dashboard',
      title: 'Dashboard Pembelajaran',
      subtitle: 'Selamat datang di repositori digital dan portofolio tugas Kelas 11.',
      docTitle: 'Dashboard - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-dashboard',
      mobileNav: 'mobile-nav-dashboard',
      isProfil: false
    },
    'profil.html': {
      viewId: 'view-profil',
      title: 'Profil Pribadi',
      subtitle: 'Informasi detail, latar belakang pendidikan, dan portofolio saya.',
      docTitle: 'Profil Pribadi - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-profil',
      mobileNav: 'mobile-nav-profil',
      isProfil: true
    },
    'informatika.html': {
      viewId: 'view-informatika',
      title: 'Tugas Informatika',
      subtitle: 'Kumpulan tugas, modul, dan repositori proyek Informatika.',
      docTitle: 'Informatika - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-informatika',
      mobileNav: 'mobile-nav-informatika',
      isProfil: false
    },
    'bahasa.html': {
      viewId: 'view-bahasa',
      title: 'Tugas Bahasa Indonesia',
      subtitle: 'Kumpulan tugas, analisis teks, dan materi Bahasa Indonesia.',
      docTitle: 'Bahasa Indonesia - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-bahasa-indonesia',
      mobileNav: 'mobile-nav-bahasa-indonesia',
      isProfil: false
    },
    'jadwal.html': {
      viewId: 'view-jadwal',
      title: 'Jadwal Pelajaran',
      subtitle: 'Jadwal kegiatan belajar mengajar Kelas 11 semester berjalan.',
      docTitle: 'Jadwal Pelajaran - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-jadwal-pelajaran',
      mobileNav: 'mobile-nav-jadwal-pelajaran',
      isProfil: false
    },
    'minigames.html': {
      viewId: 'view-minigames',
      title: 'Mini Games',
      subtitle: 'Take a break and have some fun ðŸŽ®',
      docTitle: 'Mini Games - Portofolio & Repositori Tugas Sekolah',
      desktopNav: 'nav-minigames',
      mobileNav: 'mobile-nav-minigames',
      isProfil: false
    }
  };

  let currentPage = 'profil.html';

  function getPageName(url) {
    if (!url) return '';
    try {
      const parsed = new URL(url, window.location.href);
      let pathname = parsed.pathname;
      let filename = pathname.substring(pathname.lastIndexOf('/') + 1);
      if (!filename || filename === '') filename = 'index.html';
      return filename.toLowerCase();
    } catch (e) {
      let clean = url.split('#')[0].split('?')[0];
      let filename = clean.substring(clean.lastIndexOf('/') + 1);
      if (!filename || filename === '') filename = 'index.html';
      return filename.toLowerCase();
    }
  }

  function detectCurrentPage() {
    // A. Check URL Pathname
    const pathname = window.location.pathname;
    let file = pathname.substring(pathname.lastIndexOf('/') + 1).toLowerCase();
    if (file && PAGE_CONFIG[file]) {
      return file;
    }

    // B. Check Active Nav Element in Initial HTML
    const activeNav = document.querySelector('.nav-item.active-nav-item, .nav-item.bg-brand-red-500\\/15, .nav-item.text-brand-red-500');
    if (activeNav) {
      const href = activeNav.getAttribute('href');
      const detected = getPageName(href);
      if (detected && PAGE_CONFIG[detected]) return detected;
    }

    // C. Check Header Title Text
    const titleEl = document.getElementById('page-title');
    if (titleEl && titleEl.textContent) {
      const text = titleEl.textContent.toLowerCase();
      if (text.includes('profil')) return 'profil.html';
      if (text.includes('informatika')) return 'informatika.html';
      if (text.includes('bahasa')) return 'bahasa.html';
      if (text.includes('jadwal')) return 'jadwal.html';
      if (text.includes('game')) return 'minigames.html';
      if (text.includes('dashboard')) return 'index.html';
    }

    // D. Check Document Title
    const docTitle = (document.title || '').toLowerCase();
    if (docTitle.includes('profil')) return 'profil.html';
    if (docTitle.includes('informatika')) return 'informatika.html';
    if (docTitle.includes('bahasa')) return 'bahasa.html';
    if (docTitle.includes('jadwal')) return 'jadwal.html';
    if (docTitle.includes('game')) return 'minigames.html';
    if (docTitle.includes('dashboard')) return 'index.html';

    return 'profil.html';
  }

  function updateNavActive(targetPage) {
    if (!targetPage) targetPage = currentPage;
    const cfg = PAGE_CONFIG[targetPage];
    if (!cfg) return;

    // Reset all desktop & mobile nav items
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove(
        'active-nav-item',
        'bg-brand-red-500/15',
        'text-brand-red-500',
        'border-brand-red-500/30',
        'dark:text-brand-red-400',
        'font-bold'
      );
      item.classList.add('text-textSecondary');
      item.removeAttribute('aria-current');

      const indicator = item.querySelector('.nav-indicator');
      if (indicator) {
        indicator.classList.remove('opacity-100');
        indicator.classList.add('opacity-0');
      }
    });

    // Apply Active Classes to Desktop and Mobile items
    const desktopEl = document.getElementById(cfg.desktopNav);
    const mobileEl = document.getElementById(cfg.mobileNav);

    [desktopEl, mobileEl].forEach(el => {
      if (el) {
        el.classList.add(
          'active-nav-item',
          'bg-brand-red-500/15',
          'text-brand-red-500',
          'border-brand-red-500/30',
          'dark:text-brand-red-400',
          'font-bold'
        );
        el.classList.remove('text-textSecondary');
        el.setAttribute('aria-current', 'page');

        const indicator = el.querySelector('.nav-indicator');
        if (indicator) {
          indicator.classList.remove('opacity-0');
          indicator.classList.add('opacity-100');
        }
      }
    });

    // If inside an iframe child, notify parent shell if accessible
    try {
      if (window.parent && window.parent !== window) {
        if (typeof window.parent.syncActiveNav === 'function') {
          window.parent.syncActiveNav(targetPage);
        } else {
          window.parent.postMessage({ type: 'NAV_CHANGE', page: targetPage }, '*');
        }
      }
    } catch (e) {}
  }

  function updateMiniPlayerVisibility(pageName) {
    const miniPlayer = document.getElementById('scroll-mini-player');
    if (!miniPlayer) return;

    if (pageName === 'profil.html') {
      window.dispatchEvent(new CustomEvent('spa-page-changed', {
        detail: { page: pageName, isProfilPage: true }
      }));
    } else {
      miniPlayer.classList.remove('translate-y-28', 'opacity-0', 'pointer-events-none');
      miniPlayer.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

      window.dispatchEvent(new CustomEvent('spa-page-changed', {
        detail: { page: pageName, isProfilPage: false }
      }));
    }
  }

  function switchPage(pageName, pushState = true) {
    if (!PAGE_CONFIG[pageName]) return;
    const cfg = PAGE_CONFIG[pageName];

    // 1. Close mobile drawer if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }

    // 2. Switch active view panel
    const allViews = document.querySelectorAll('.view-panel');
    allViews.forEach(v => {
      v.classList.add('hidden');
    });

    const targetView = document.getElementById(cfg.viewId);
    if (targetView) {
      targetView.classList.remove('hidden');
    }

    // 3. Update main header title & subtitle
    const pageTitleEl = document.getElementById('page-title');
    const pageSubtitleEl = document.getElementById('page-subtitle');
    if (pageTitleEl) pageTitleEl.textContent = cfg.title;
    if (pageSubtitleEl) pageSubtitleEl.textContent = cfg.subtitle;

    // 4. Update browser document title & history state
    document.title = cfg.docTitle;
    if (pushState && window.history) {
      try {
        history.pushState({ page: pageName }, cfg.docTitle, pageName);
      } catch (e) {}
    }

    // 5. Update Navbar Active classes immediately
    updateNavActive(pageName);

    // 6. Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 7. Run page initializers (tasks, schedules, filters, mini games)
    if (typeof window.initPageScripts === 'function') {
      window.initPageScripts(pageName);
    }
    if (pageName === 'minigames.html' && typeof window.updateHubStats === 'function') {
      window.updateHubStats();
    }

    // 8. If on profil.html, rebind profile card UI controls
    if (pageName === 'profil.html') {
      window.dispatchEvent(new CustomEvent('spa-page-changed', {
        detail: { page: pageName, isProfilPage: true }
      }));

      setTimeout(() => {
        if (typeof window.rebindMusicPlayerUI === 'function') {
          window.rebindMusicPlayerUI();
        }

        const miniPlayer = document.getElementById('scroll-mini-player');
        const playerContainer = document.getElementById('premium-music-player') || document.getElementById('music-player-container');
        if (miniPlayer && playerContainer && window._playerContainerObserver) {
          window._playerContainerObserver.observe(playerContainer);
        }
      }, 50);
    }

    // 9. Update mini-player visibility
    updateMiniPlayerVisibility(pageName);

    // 10. Re-create Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    currentPage = pageName;
  }

  function interceptLinks() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href], .nav-item');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#') || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('javascript:')) {
        return;
      }
      if (link.target === '_blank') return;

      const pageName = getPageName(href);
      if (!pageName) {
        e.preventDefault();
        window.location.href = href;
        return;
      }

      const cfg = PAGE_CONFIG[pageName];
      const targetView = cfg ? document.getElementById(cfg.viewId) : null;

      // Pure SPA DOM switch if view exists
      if (cfg && targetView) {
        e.preventDefault();
        switchPage(pageName, true);
      } else {
        e.preventDefault();
        window.location.href = href;
      }
    }, true);
  }

  window.addEventListener('popstate', (e) => {
    const state = e.state;
    if (state && state.page && PAGE_CONFIG[state.page]) {
      switchPage(state.page, false);
    } else {
      const detected = detectCurrentPage();
      if (PAGE_CONFIG[detected]) {
        switchPage(detected, false);
      }
    }
  });

  // Cross-frame message listener
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'NAV_CHANGE' && e.data.page && PAGE_CONFIG[e.data.page]) {
      updateNavActive(e.data.page);
    }
  });

  function init() {
    const page = detectCurrentPage();
    currentPage = page;

    try {
      history.replaceState({ page: currentPage }, PAGE_CONFIG[currentPage].docTitle, window.location.href);
    } catch (e) {}

    interceptLinks();
    switchPage(currentPage, false);

    // DOM Mutation Observer to ensure active class never gets out of sync
    const observer = new MutationObserver(() => {
      updateNavActive();
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      observer.observe(panel, { attributes: true, attributeFilter: ['class', 'style'] });
    });

    // Interval check for ultimate robustness
    setInterval(() => {
      updateNavActive();
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.spaNavigate = (pageName) => switchPage(pageName, true);
  window.syncActiveNav = (pageName) => updateNavActive(pageName);
})();