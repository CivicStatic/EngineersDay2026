/**
 * ==========================================================================
 * ENGINEER'S DAY 2026 // INTERACTIVE CLIENT SCRIPT
 * Features: Anti-Gravity Physics Engine, Dynamic Masonry Wall, Procedural Audio
 * ==========================================================================
 */

(function () {
  'use strict';

  // --- SVG Engineering Icons Definition Library ---
  const SVG_ICONS = {
    gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>`,
    microchip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"></rect>
      <rect x="9" y="9" width="6" height="6"></rect>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path>
    </svg>`,
    compass: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="5" r="2"></circle>
      <path d="m11 7-7 15M13 7l7 15M6.5 16h11"></path>
    </svg>`,
    wrench: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>`,
    hardhat: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 17a10 10 0 0 1 20 0H2z"></path>
      <path d="M12 7v5M8 9l1 3M16 9l-1 3M2 17h20v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2z"></path>
    </svg>`,
    lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-7 7c0 3.03 1.5 5.5 4 6.5V17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1.5c2.5-1 4-3.47 4-6.5a7 7 0 0 0-7-7z"></path>
    </svg>`,
    circuit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="3"></circle>
      <circle cx="18" cy="18" r="3"></circle>
      <circle cx="18" cy="6" r="2"></circle>
      <path d="M6 9v3a3 3 0 0 0 3 3h6M18 9v6"></path>
    </svg>`
  };

  const ICON_KEYS = Object.keys(SVG_ICONS);

  // --- Procedural Web Audio Engine ---
  class TechAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = true;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    setMuted(mute) {
      this.isMuted = mute;
      if (!mute) this.init();
    }

    playChime(freq = 880, duration = 0.4) {
      if (this.isMuted) return;
      this.init();
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + duration * 0.3);

        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + duration);
      } catch (e) {
        console.warn('Audio synthesis error:', e);
      }
    }

    playSuccessHarmonic() {
      if (this.isMuted) return;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((f, i) => {
        setTimeout(() => this.playChime(f, 0.45), i * 90);
      });
    }

    playClickTick() {
      if (this.isMuted) return;
      this.init();
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1400, now);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } catch (e) {}
    }
  }

  const soundEngine = new TechAudioEngine();

  // --- Anti-Gravity Particle & Icon Generator ---
  function initAntiGravityEngine() {
    const viewport = document.getElementById('antigravityViewport');
    if (!viewport) return;

    const ICON_COUNT = 24; // Optimal density for smooth 60fps
    const depths = ['depth-deep', 'depth-mid', 'depth-close'];

    for (let i = 0; i < ICON_COUNT; i++) {
      createFloatingIcon(viewport, depths, i);
    }
  }

  function createFloatingIcon(viewport, depths, index) {
    const el = document.createElement('div');
    el.className = 'floating-icon';

    const randomIconKey = ICON_KEYS[Math.floor(Math.random() * ICON_KEYS.length)];
    el.innerHTML = SVG_ICONS[randomIconKey];

    // Randomized physics attributes
    const depth = depths[Math.floor(Math.random() * depths.length)];
    el.classList.add(depth);

    const size = depth === 'depth-deep' ? 24 + Math.random() * 16 :
                 depth === 'depth-mid' ? 36 + Math.random() * 22 :
                 54 + Math.random() * 28;

    const leftPercent = Math.random() * 96; // 0% to 96%
    const duration = depth === 'depth-deep' ? 28 + Math.random() * 18 :
                     depth === 'depth-mid' ? 20 + Math.random() * 14 :
                     14 + Math.random() * 10;

    const delay = -(Math.random() * duration); // Stagger so screen is populated immediately
    const sway1 = (Math.random() - 0.5) * 80;
    const sway2 = (Math.random() - 0.5) * 110;
    const sway3 = (Math.random() - 0.5) * 70;
    const targetOpacity = depth === 'depth-close' ? 0.35 : depth === 'depth-mid' ? 0.22 : 0.12;

    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.left = `${leftPercent}%`;
    el.style.animationDuration = `${duration}s`;
    el.style.animationDelay = `${delay}s`;
    el.style.setProperty('--sway-1', `${sway1}px`);
    el.style.setProperty('--sway-2', `${sway2}px`);
    el.style.setProperty('--sway-3', `${sway3}px`);
    el.style.setProperty('--target-opacity', targetOpacity);

    viewport.appendChild(el);
  }

  // --- Inspirational Quotes Deck ---
  const QUOTES = [
    {
      text: "Scientists study the world as it is; engineers create the world that has never been.",
      author: "Theodore von Kármán",
      title: "Aerospace Pioneer & Mathematician",
      spec: "SPEC: AEROSPACE // CORE LAW #01"
    },
    {
      text: "Remember, your work is only as good as the service it renders to mankind. To engineer is to serve.",
      author: "Sir M. Visvesvaraya",
      title: "Father of Indian Engineering • Bharat Ratna",
      spec: "SPEC: CIVIL // BHARAT RATNA 1955"
    },
    {
      text: "There was no choice but to be pioneers; no other path had yet been paved.",
      author: "Margaret Hamilton",
      title: "Director of Software Eng., Apollo Program (NASA)",
      spec: "SPEC: COMPUTING // APOLLO 11 AGC"
    },
    {
      text: "The present is theirs; the future, for which I really worked, is mine.",
      author: "Nikola Tesla",
      title: "Inventor of Alternating Current (AC) Systems",
      spec: "SPEC: ELECTRICAL // ELECTROMAGNETISM"
    },
    {
      text: "Information is the resolution of uncertainty.",
      author: "Claude Shannon",
      title: "Father of Information Theory",
      spec: "SPEC: INFORMATION // BINARY DIGIT 1948"
    },
    {
      text: "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
      author: "Dr. A.P.J. Abdul Kalam",
      title: "Aerospace Engineer & 11th President of India",
      spec: "SPEC: PROPULSION // SLV-III & MISSILE TECH"
    }
  ];

  let currentQuoteIndex = 0;

  function setupQuoteCarousel() {
    const quoteText = document.getElementById('quoteText');
    const quoteAuthor = document.getElementById('quoteAuthor');
    const quoteTitle = document.getElementById('quoteTitle');
    const quoteSpec = document.getElementById('quoteSpec');
    const prevBtn = document.getElementById('quotePrev');
    const nextBtn = document.getElementById('quoteNext');

    if (!quoteText || !prevBtn || !nextBtn) return;

    function renderQuote(index) {
      const q = QUOTES[index];
      quoteText.style.opacity = '0';
      quoteText.style.transform = 'translateY(8px)';
      
      setTimeout(() => {
        quoteText.textContent = `"${q.text}"`;
        quoteAuthor.textContent = q.author;
        quoteTitle.textContent = q.title;
        if (quoteSpec) quoteSpec.textContent = q.spec;
        
        quoteText.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        quoteText.style.opacity = '1';
        quoteText.style.transform = 'translateY(0)';
      }, 200);
    }

    prevBtn.addEventListener('click', () => {
      soundEngine.playClickTick();
      currentQuoteIndex = (currentQuoteIndex - 1 + QUOTES.length) % QUOTES.length;
      renderQuote(currentQuoteIndex);
    });

    nextBtn.addEventListener('click', () => {
      soundEngine.playClickTick();
      currentQuoteIndex = (currentQuoteIndex + 1) % QUOTES.length;
      renderQuote(currentQuoteIndex);
    });

    // Auto-advance quote every 12 seconds
    setInterval(() => {
      currentQuoteIndex = (currentQuoteIndex + 1) % QUOTES.length;
      renderQuote(currentQuoteIndex);
    }, 12000);
  }

  // --- Pre-seeded Tributes for Gratitude Wall ---
  const SEED_TRIBUTES = [
    {
      id: 'trib-001',
      engineerName: 'Sir M. Visvesvaraya',
      discipline: 'civil',
      disciplineLabel: 'Civil & Infrastructure',
      author: 'Civic Static Collective',
      message: 'Thank you for designing the Krishna Raja Sagara dam, the automatic floodgates at Khadakwasla, and showing the world that disciplined engineering can transform an entire nation.',
      timestamp: 'Sep 15, 2026',
      applauds: 154,
      isLiked: false
    },
    {
      id: 'trib-002',
      engineerName: 'Margaret Hamilton',
      discipline: 'computing',
      disciplineLabel: 'Software & Systems',
      author: 'Apollo Legacy Group',
      message: 'Salute to the mother of software engineering who prioritized the Apollo 11 computer tasks during lunar descent. Zero software bugs in human flight history!',
      timestamp: 'Sep 15, 2026',
      applauds: 129,
      isLiked: false
    },
    {
      id: 'trib-003',
      engineerName: 'Nikola Tesla',
      discipline: 'electrical',
      disciplineLabel: 'Electrical & Power',
      author: 'Grid Architects',
      message: 'To the visionary whose AC induction motors, polyphase distribution, and wireless concepts power every factory, household, and server farm on Earth today.',
      timestamp: 'Sep 14, 2026',
      applauds: 142,
      isLiked: false
    },
    {
      id: 'trib-004',
      engineerName: 'APJ Abdul Kalam',
      discipline: 'aerospace',
      disciplineLabel: 'Aerospace & Rockets',
      author: 'Aero Dynamics Lab',
      message: 'The People\'s President and Missile Man who engineered India\'s indigenous satellite launch vehicles from scratch, inspiring millions of young minds to reach the stars.',
      timestamp: 'Sep 14, 2026',
      applauds: 168,
      isLiked: false
    },
    {
      id: 'trib-005',
      engineerName: 'Alan Turing',
      discipline: 'computing',
      disciplineLabel: 'Computer Science',
      author: 'Cryptographic Guild',
      message: 'For the conceptual foundations of computing, artificial intelligence, and the Bombe machine that saved countless millions of lives during World War II.',
      timestamp: 'Sep 13, 2026',
      applauds: 115,
      isLiked: false
    },
    {
      id: 'trib-006',
      engineerName: 'Grace Hopper',
      discipline: 'computing',
      disciplineLabel: 'Compilers & Languages',
      author: 'Compiler Craft',
      message: 'For teaching machines to understand human language, inventing the compiler, and instilling the motto: "A ship in port is safe; but that is not what ships are built for."',
      timestamp: 'Sep 13, 2026',
      applauds: 98,
      isLiked: false
    },
    {
      id: 'trib-007',
      engineerName: 'E. Sreedharan (Metro Man)',
      discipline: 'civil',
      disciplineLabel: 'Civil & Transit',
      author: 'Urban Transit Group',
      message: 'For carving the Konkan Railway through rugged Western Ghats and delivering the Delhi Metro ahead of schedule and under budget with pristine engineering precision.',
      timestamp: 'Sep 12, 2026',
      applauds: 87,
      isLiked: false
    },
    {
      id: 'trib-008',
      engineerName: 'Rosalind Franklin & Bioengineers',
      discipline: 'bioengineering',
      disciplineLabel: 'Bio & Genetic Eng',
      author: 'Synthetic Biology Lab',
      message: 'Honoring the engineers and scientists translating DNA sequences into life-saving CRISPR therapies, diagnostic nanobots, and resilient agricultural crops.',
      timestamp: 'Sep 12, 2026',
      applauds: 76,
      isLiked: false
    }
  ];

  const STORAGE_KEY = 'engineers_day_tributes_2026';
  let tributes = [];

  function loadTributes() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          tributes = parsed;
          return;
        }
      }
    } catch (e) {
      console.warn('LocalStorage error loading tributes:', e);
    }
    tributes = [...SEED_TRIBUTES];
    saveTributes();
  }

  function saveTributes() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tributes));
    } catch (e) {
      console.warn('LocalStorage error saving tributes:', e);
    }
  }

  function getInitials(name) {
    if (!name) return 'ENG';
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }

  function renderMasonryWall(filter = 'all', searchQuery = '') {
    const masonryContainer = document.getElementById('cardsMasonry');
    if (!masonryContainer) return;

    masonryContainer.innerHTML = '';

    const q = searchQuery.toLowerCase().trim();
    const filtered = tributes.filter(t => {
      const matchesCategory = (filter === 'all' || t.discipline === filter);
      const matchesSearch = !q || 
        t.engineerName.toLowerCase().includes(q) || 
        t.author.toLowerCase().includes(q) || 
        t.message.toLowerCase().includes(q) ||
        t.disciplineLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      masonryContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--metallic-400); font-family: var(--font-mono);">
          <div style="font-size: 2.2rem; margin-bottom: 12px; color: var(--blue-primary);">// 404: NO_TRIBUTES_FOUND</div>
          <p>No tributes matched your current filter or query. Be the first to leave one below!</p>
        </div>
      `;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('article');
      card.className = 'tribute-card';
      card.setAttribute('data-id', item.id);
      if (item.justAdded) {
        card.classList.add('just-added');
        delete item.justAdded; // Only animate entrance once
      }

      card.innerHTML = `
        <div class="card-header">
          <div class="engineer-target">
            <div class="engineer-avatar" aria-hidden="true">${getInitials(item.engineerName)}</div>
            <div class="engineer-meta">
              <h3>${escapeHTML(item.engineerName)}</h3>
              <div class="engineer-discipline">
                <span class="discipline-dot"></span>
                <span>${escapeHTML(item.disciplineLabel)}</span>
              </div>
            </div>
          </div>
          <time class="tribute-timestamp">${escapeHTML(item.timestamp)}</time>
        </div>
        <div class="card-body">
          <p class="tribute-message">"${escapeHTML(item.message)}"</p>
        </div>
        <div class="card-footer">
          <div class="sender-tag">By <span>${escapeHTML(item.author)}</span></div>
          <div class="card-actions">
            <button type="button" class="applaud-btn ${item.isLiked ? 'active' : ''}" data-id="${item.id}" aria-label="Applaud this tribute">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="${item.isLiked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span class="count">${item.applauds || 0}</span>
            </button>
          </div>
        </div>
      `;

      masonryContainer.appendChild(card);
    });

    // Attach applaud event handlers
    const applaudBtns = masonryContainer.querySelectorAll('.applaud-btn');
    applaudBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        handleApplaud(id, btn);
      });
    });

    updateTelemetryCount();
  }

  function handleApplaud(id, btn) {
    const item = tributes.find(t => t.id === id);
    if (!item) return;

    if (item.isLiked) {
      item.isLiked = false;
      item.applauds = Math.max(0, (item.applauds || 1) - 1);
      btn.classList.remove('active');
    } else {
      item.isLiked = true;
      item.applauds = (item.applauds || 0) + 1;
      btn.classList.add('active');
      soundEngine.playChime(1046.5, 0.3); // High celebratory chime
    }

    const countSpan = btn.querySelector('.count');
    if (countSpan) countSpan.textContent = item.applauds;

    saveTributes();
  }

  function updateTelemetryCount() {
    const countEl = document.getElementById('telemetryTributes');
    if (countEl) {
      countEl.textContent = `${tributes.length}`;
    }
  }

  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Tribute Submission Form Handling ---
  function setupTributeForm() {
    const form = document.getElementById('tributeForm');
    const messageInput = document.getElementById('tributeMessage');
    const charCount = document.getElementById('charCount');
    const formStatus = document.getElementById('formStatus');

    if (!form || !messageInput) return;

    // Live character counter
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      if (charCount) charCount.textContent = `${len}/350`;
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const author = document.getElementById('authorName').value.trim();
      const engineerName = document.getElementById('engineerName').value.trim();
      const disciplineSelect = document.getElementById('engineerDiscipline');
      const discipline = disciplineSelect.value;
      const disciplineLabel = disciplineSelect.options[disciplineSelect.selectedIndex].text;
      const message = messageInput.value.trim();

      if (!author || !engineerName || !discipline || !message) {
        if (formStatus) {
          formStatus.className = 'form-status error';
          formStatus.textContent = '// ERROR: ALL FIELDS REQUIRED';
        }
        return;
      }

      const newTribute = {
        id: 'trib-' + Date.now(),
        author,
        engineerName,
        discipline,
        disciplineLabel,
        message,
        timestamp: 'Just now',
        applauds: 1,
        isLiked: true,
        justAdded: true
      };

      // Add to front of array
      tributes.unshift(newTribute);
      saveTributes();

      // Reset filters and render
      const activeFilterBtn = document.querySelector('.filter-tab.active');
      const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
      renderMasonryWall(currentFilter);

      // Play audio harmonic
      soundEngine.playSuccessHarmonic();

      // Clear form
      form.reset();
      if (charCount) charCount.textContent = '0/350';
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = '// SUCCESS: TRIBUTE LOGGED TO SYSTEM';
        setTimeout(() => {
          formStatus.textContent = '';
        }, 5000);
      }

      // Smooth scroll to Wall section to see tribute
      const wallSec = document.getElementById('gratitude-wall');
      if (wallSec) {
        wallSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Filtering & Search ---
  function setupWallControls() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    const searchInput = document.getElementById('wallSearch');
    let currentFilter = 'all';

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        soundEngine.playClickTick();
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.getAttribute('data-filter');
        renderMasonryWall(currentFilter, searchInput ? searchInput.value : '');
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        renderMasonryWall(currentFilter, searchInput.value);
      });
    }
  }

  // --- Audio Toggle & Gravity HUD Controls ---
  function setupSystemControls() {
    const audioToggle = document.getElementById('audioToggle');
    const audioLabel = document.getElementById('audioLabel');

    if (audioToggle) {
      audioToggle.addEventListener('click', () => {
        const isNowMuted = !soundEngine.isMuted;
        soundEngine.setMuted(isNowMuted);
        audioToggle.classList.toggle('active', !isNowMuted);
        
        if (audioLabel) {
          audioLabel.textContent = isNowMuted ? 'Muted' : 'Audio ON';
        }
        
        if (!isNowMuted) {
          soundEngine.playChime(880, 0.3);
        }
      });
    }

    // Gravity speed HUD buttons
    const hudBtns = document.querySelectorAll('.hud-btn');
    const viewport = document.getElementById('antigravityViewport');

    hudBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        hudBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-gravity');
        soundEngine.playClickTick();

        if (!viewport) return;
        const icons = viewport.querySelectorAll('.floating-icon');

        icons.forEach(icon => {
          if (mode === 'zero-g') {
            icon.style.animationDuration = '45s';
          } else if (mode === 'hyper') {
            icon.style.animationDuration = '10s';
          } else {
            // Normal
            const depth = icon.classList.contains('depth-deep') ? 34 :
                          icon.classList.contains('depth-mid') ? 24 : 16;
            icon.style.animationDuration = `${depth}s`;
          }
        });
      });
    });
  }

  // --- Smooth Anchor Navigation ---
  function setupNavLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // --- Initialization on DOM Ready ---
  document.addEventListener('DOMContentLoaded', () => {
    initAntiGravityEngine();
    setupQuoteCarousel();
    loadTributes();
    renderMasonryWall();
    setupTributeForm();
    setupWallControls();
    setupSystemControls();
    setupNavLinks();
  });
})();
