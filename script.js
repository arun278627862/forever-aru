/**
 * ============================================================================
 * FOREVER ARU ❤️ — CINEMATIC ROMANTIC EXPERIENCE
 * Arun & Pinki • First Meeting: 04 February 2026
 * ============================================================================
 */

'use strict';

/* ----------------------------------------------------------------------------
 * 1. CENTRAL CONFIGURATION SECTION (Easily Editable)
 * ---------------------------------------------------------------------------- */
const CONFIG = {
  // Couple Information
  COUPLE: {
    husbandName: "Arun",
    wifeName: "Pinki",
    nickname: "Aru",
    tagline: "Our first meeting, our memories, and our forever love.",
    mainMessage: "Aru, tum meri favourite person ho. ❤️",
    signature: "With all my love, Arun.",
    // First meeting date: 4 February 2026 (IST timezone +05:30)
    firstMeetingDateStr: "2026-02-04T00:00:00+05:30"
  },

  // Password Protection Setting
  // (Note: Client-side playful romantic lock for surprise storytelling)
  PASSWORD: {
    accepted: ["aru", "pinki", "0402", "04022026", "love", "foreveraru", "forever"],
    hintText: "Hint: Enter 'aru' or our meeting date '0402' ❤️"
  },

  // Personal Love Letter Content
  LOVE_LETTER: [
    "4 February 2026 — woh din jab main tumse pehli baar mila.",
    "Kabhi-kabhi life mein ek chhota sa moment bhi bahut special ban jaata hai. Mere liye hamari first meeting ek aisi hi beautiful memory hai.",
    "Aru, tumhari smile mere face par bhi smile le aati hai. Tumse baat karna, tumhare saath time spend karna, aur tumhare saath naye moments banana mere liye bahut special hai.",
    "You are not just a part of my story; you make my story more beautiful.",
    "Main chahta hoon ki hum saath mein aur bhi beautiful memories banayein, ek doosre ko samjhein, ek doosre ka support banein, aur har din apne relationship ko aur strong banayein.",
    "Jab bhi tum yeh website kholo, yaad rakhna ki kisi ne ise tumhare liye pyaar se banaya hai.",
    "You are my Pinki, my Aru, and my favourite person. ❤️",
    "Tumhari smile hamesha bani rahe, tum khush raho, aur hamari story hamesha pyaar se bhari rahe."
  ],

  // Surprise Messages List
  SURPRISE_MESSAGES: [
    "Chaand si mehbooba ho meri... Haan Aru, tum bilkul waisi ho jaisa maine socha tha! ❤️",
    "Aru, tumhari smile meri favourite hai. ❤️",
    "Pinki, tum mere din ko aur beautiful bana deti ho.",
    "Aaj bhi tumhari ek smile mera mood achha kar sakti hai.",
    "My favourite place is wherever we share a happy moment.",
    "Aru, chalo aur bhi beautiful memories banate hain. 💕",
    "Tum special ho, aur yeh website bhi sirf tumhare liye special hai.",
    "One story, two hearts, and many beautiful memories — Arun ❤️ Pinki."
  ],

  // Downloaded Bollywood Romantic Soundtracks (Direct Non-Stop Play)
  BOLLYWOOD_PLAYLIST: [
    {
      title: "Chaand Si Mehbooba Ho Meri ❤️",
      artist: "Mukesh • Himalay Ki Godmein",
      src: "assets/music/chaand-si-mehbooba.webm",
      startTime: 38,
      durationLimit: 120 // Up to 2 minutes playback, then advances
    },
    {
      title: "Tujh Mein Rab Dikhta Hai ❤️",
      artist: "Roop Kumar Rathod • RNBDJ",
      src: "assets/music/tujh-mein-rab.mp3",
      startTime: 0,
      durationLimit: 120
    },
    {
      title: "Mere Rang Mein Rangne Wali ❤️",
      artist: "S.P. Balasubrahmanyam • Maine Pyar Kiya",
      src: "assets/music/mere-rang-mein-rangne-wali.webm",
      startTime: 0,
      durationLimit: 120
    },
    {
      title: "Hum Tum Kitne Paas Hai ❤️",
      artist: "Udit Narayan & Alka Yagnik",
      src: "assets/music/hum-tum-kitne-paas.webm",
      startTime: 0,
      durationLimit: 120
    },
    {
      title: "Raabta (Male Version) ❤️",
      artist: "Arijit Singh • Agent Vinod",
      src: "assets/music/raabta.mp3",
      startTime: 0,
      durationLimit: 120
    },
    {
      title: "Tum Hi Ho ❤️",
      artist: "Arijit Singh • Aashiqui 2",
      src: "assets/music/romantic.mp3",
      startTime: 0,
      durationLimit: 120
    },
    {
      title: "Raataan Lambiyan ❤️",
      artist: "Jubin Nautiyal & Asees Kaur • Shershaah",
      src: "assets/music/raataan-lambiyan.mp3",
      startTime: 0,
      durationLimit: 120
    }
  ],

  // Photo Gallery Configuration — Real Moments of Arun & Pinki
  GALLERY_PHOTOS: [
    {
      src: "assets/photos/first-meeting-4feb.jpg",
      caption: "1. Hamari Pehli Mulaqat ❤️",
      category: "couple",
      description: "04 February 2026 — Woh botanical garden ka din jahan se hamara safar shuru hua.",
      isPortrait: true
    },
    {
      src: "assets/photos/2-dusri-mulaqat.jpg",
      caption: "2. Dusri Mulaqat — Parivaar & Khushiyan 🌸",
      category: "couple",
      description: "Dusri mulaqat ke pyare pal — pure parivaar ke aashirwaad aur muskan ke sang.",
      isPortrait: true
    },
    {
      src: "assets/photos/3-sagai-stage.jpg",
      caption: "3. 3rd Time — Sagai Ceremony 💍",
      category: "couple",
      description: "Sagai ke shahi pal, jab hum ek doosre ke hamesha ke liye ho gaye.",
      isPortrait: true
    },
    {
      src: "assets/photos/28.jpeg",
      caption: "Teri Aankhon Ka Jaadu ✨",
      category: "pinki",
      description: "Aru ki pyari si muskan aur chamakti aankhon ka noor.",
      isPortrait: true
    },
    {
      src: "assets/photos/29.jpeg",
      caption: "Ek Pyara Ehsaas 💖",
      category: "couple",
      description: "Har pal jo tumhare saath guzarta hai, woh dil ke sabse kareeb hota hai.",
      isPortrait: true
    },
    {
      src: "assets/photos/30.jpeg",
      caption: "Meri Roshni, Meri Aru 🌹",
      category: "pinki",
      description: "Har ada mein khoobsurati, har muskan mein bepanaah pyaar.",
      isPortrait: true
    },
    {
      src: "assets/photos/31.jpeg",
      caption: "Forever My Queen 👑",
      category: "pinki",
      description: "Aru, tum mere dil ki rani ho aur hamesha rahogi.",
      isPortrait: true
    },
    {
      src: "assets/photos/4-bike-ride.jpg",
      caption: "4. 4th Time — Hawaon Ke Sang Bike Ride 🏍️",
      category: "couple",
      description: "Bike ride par thandi hawayein aur kandhe par sar rakh kar muskurana.",
      isPortrait: true
    },
    {
      src: "assets/photos/5-dhoop-chaon.jpg",
      caption: "5. 5th Time — Dhoop-Chaon Couple Selfie ☀️",
      category: "couple",
      description: "Dhoop-chaon ki pyari si selfie, zindagi ke har mod par saath chalne ka vaada.",
      isPortrait: true
    },
    {
      src: "assets/photos/27.jpeg",
      caption: "Forever My Love ❤️",
      category: "couple",
      description: "Kala shahi joda, roshan deepak, aur 'Forever My Love' — hamesha ke liye ek jaan.",
      isPortrait: true
    },
    {
      src: "assets/photos/cover.jpg",
      caption: "Forever Humsafar ✨",
      category: "couple",
      description: "Haath thaam kar ek doosre ka, har safar mein saath chalne ka vaada.",
      isPortrait: true
    },
    {
      src: "assets/photos/26.jpeg",
      caption: "Deepon Si Roshan Aru 🪔",
      category: "pinki",
      description: "Diwali ki lighton ke beech, meri pyaari Aru ki khoobsurat muskan aur noor.",
      isPortrait: true
    },
    {
      src: "assets/photos/pinki-1.jpg",
      caption: "Gulab Si Meri Aru 🌸",
      category: "pinki",
      description: "Khilte hue phoolon ke beech, meri sabse pyaari aur sundar Aru.",
      isPortrait: true
    },
    {
      src: "assets/photos/25.jpeg",
      caption: "Golden Hour Ki Roshni 🌅",
      category: "pinki",
      description: "Dhalta hua suraj aur Aru ki nashili aankhon ka jaadu — har nazar mein bepanaah pyaar.",
      isPortrait: true
    },
    {
      src: "assets/photos/arun-pinki-1.jpg",
      caption: "Woh Pyaari Nazar 💕",
      category: "couple",
      description: "Lal chunni ke aanchal mein, jab nigahein aapse mili aur dil thehar gaya.",
      isPortrait: false
    },
    {
      src: "assets/photos/arun-pinki-ring.jpg",
      caption: "Bandhan Dil Ka 💍",
      category: "couple",
      description: "Angoothi ki chamak aur dil se dil ka hamesha ke liye vaada.",
      isPortrait: true
    },
    {
      src: "assets/photos/pinki-2.jpg",
      caption: "Meri Shehzadi 👑",
      category: "pinki",
      description: "Shaahi lehenge mein sharmaati hui, meri sabse pyaari rani.",
      isPortrait: true
    },
    {
      src: "assets/photos/arun-pinki-2.jpg",
      caption: "Khushiyon Bhari Muskan 📸",
      category: "couple",
      description: "Saath mein muskuraate hue, hamari sabse pyaari aur khoobsurat selfie.",
      isPortrait: false
    },
    {
      src: "assets/photos/arun-pinki-sweet.jpg",
      caption: "Mithas Pyaar Ki 🍬",
      category: "couple",
      description: "Aru ke haathon ki mithai, hamare rishte mein ghulti mithaas.",
      isPortrait: true
    },
    {
      src: "assets/photos/arun-pinki-3.jpg",
      caption: "Hawaon Ke Sang 🏍️",
      category: "couple",
      description: "Bike ride par thandi hawayein aur aapka kandhe par sar rakh ke muskurana.",
      isPortrait: false
    },
    {
      src: "assets/photos/pinki-3.jpg",
      caption: "Stylish Aru 😎",
      category: "pinki",
      description: "Kala chashma aur chehre par confidence aur noor bhari muskan!",
      isPortrait: true
    },
    {
      src: "assets/photos/pinki-4.jpg",
      caption: "Dil Wali Meri Aru ❤️",
      category: "pinki",
      description: "Har lamhe ko dil se jeene wali, mere jeevan ki roshni.",
      isPortrait: true
    },
    {
      src: "assets/photos/arun-pinki-throne.jpg",
      caption: "Raj Mahal Ka Joda 💫",
      category: "couple",
      description: "Stage par baithe huye, ek doosre ke liye bane huye humsafar.",
      isPortrait: false
    },
    {
      src: "assets/photos/family-ceremony.jpg",
      caption: "Badon Ka Aashirwaad 🌸",
      category: "family",
      description: "Mata-pita aur parivaar ki duayein aur ashirwad hamare saath hain.",
      isPortrait: false
    },
    {
      src: "assets/photos/family-celebration.jpg",
      caption: "Apno Ka Jashn 🎉",
      category: "family",
      description: "Bhai-behno ki hasee-mazaak aur pure parivaar ki khushiyan.",
      isPortrait: false
    }
  ]
};

/* ----------------------------------------------------------------------------
 * 2. AMBIENT PARTICLES ENGINE (Floating Hearts & Rose Petals)
 * ---------------------------------------------------------------------------- */
class AmbientParticleEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d', { alpha: true });
    this.particles = [];
    const isMobile = window.innerWidth < 768;
    this.maxParticles = isMobile ? 16 : 28;
    this.animationFrameId = null;
    this.isPaused = false;
    this.burstParticlesList = [];

    this.init();
  }

  init() {
    this.resize();
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => this.resize(), 150);
    }, { passive: true });
    
    // Create initial pool of ambient particles
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    // Handle visibility change to save CPU / battery
    document.addEventListener('visibilitychange', () => {
      this.isPaused = document.hidden;
      if (!this.isPaused && !this.animationFrameId) {
        this.loop();
      }
    });

    this.loop();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createParticle(randomY = false) {
    const isPetal = Math.random() > 0.45;
    return {
      type: isPetal ? 'petal' : 'heart',
      x: Math.random() * this.canvas.width,
      y: randomY ? Math.random() * this.canvas.height : this.canvas.height + 20,
      size: isPetal ? (9 + Math.random() * 9) : (10 + Math.random() * 11),
      speedY: isPetal ? (0.5 + Math.random() * 0.7) : -(0.4 + Math.random() * 0.8), // Petals fall down, hearts rise up
      speedX: (Math.random() - 0.5) * 0.6,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      opacity: 0.35 + Math.random() * 0.45
    };
  }

  triggerBurst(x, y, count = 18) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      this.burstParticlesList.push({
        type: Math.random() > 0.35 ? 'heart' : 'sparkle',
        x: x || window.innerWidth / 2,
        y: y || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 7 + Math.random() * 10,
        opacity: 1,
        decay: 0.02 + Math.random() * 0.025
      });
    }
  }

  drawHeart(ctx, x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 30, size / 30);
    ctx.fillStyle = `rgba(239, 35, 60, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-15, -15, -25, 5, 0, 25);
    ctx.bezierCurveTo(25, 5, 15, -15, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  drawPetal(ctx, x, y, size, rotation, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.fillStyle = `rgba(255, 154, 162, ${opacity})`;
    ctx.beginPath();
    ctx.ellipse(0, 0, size * 0.45, size * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(ctx, x, y, size, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = `rgba(243, 208, 140, ${opacity})`;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  loop() {
    if (this.isPaused) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update & draw ambient floating particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5;
      p.rotation += p.rotSpeed;

      if (p.type === 'heart') {
        this.drawHeart(this.ctx, p.x, p.y, p.size, p.opacity);
        // Reset if moved off top
        if (p.y < -30) this.particles[i] = this.createParticle(false);
      } else {
        this.drawPetal(this.ctx, p.x, p.y, p.size, p.rotation, p.opacity);
        // Reset if moved off bottom
        if (p.y > this.canvas.height + 30) {
          const newP = this.createParticle(false);
          newP.y = -20;
          this.particles[i] = newP;
        }
      }
    }

    // Update & draw celebratory burst particles
    for (let i = this.burstParticlesList.length - 1; i >= 0; i--) {
      const bp = this.burstParticlesList[i];
      bp.x += bp.vx;
      bp.y += bp.vy;
      bp.vy += 0.08; // gentle gravity
      bp.opacity -= bp.decay;

      if (bp.opacity <= 0) {
        this.burstParticlesList.splice(i, 1);
        continue;
      }

      if (bp.type === 'heart') {
        this.drawHeart(this.ctx, bp.x, bp.y, bp.size, bp.opacity);
      } else {
        this.drawSparkle(this.ctx, bp.x, bp.y, bp.size, bp.opacity);
      }
    }

    this.animationFrameId = requestAnimationFrame(() => this.loop());
  }
}

/* ----------------------------------------------------------------------------
 * 3. PROCEDURAL ROMANTIC AUDIO SYNTHESIZER (Graceful Fallback)
 * ---------------------------------------------------------------------------- */
class RomanticAudioSynthesizer {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.timerId = null;
    this.chords = [
      [261.63, 329.63, 392.00, 493.88], // C major 7
      [220.00, 261.63, 329.63, 392.00], // A minor 7
      [174.61, 220.00, 261.63, 329.63], // F major 7
      [196.00, 246.94, 293.66, 349.23]  // G 7
    ];
    this.currentChord = 0;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.audioCtx = new AudioContextClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playTone(freq, time, duration = 1.8) {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(time);
    osc.stop(time + duration);
  }

  start() {
    this.init();
    if (!this.audioCtx) return;
    this.isPlaying = true;
    let step = 0;

    const playSequence = () => {
      if (!this.isPlaying) return;
      const now = this.audioCtx.currentTime;
      const chord = this.chords[this.currentChord % this.chords.length];
      const note = chord[step % chord.length];

      this.playTone(note, now, 2.2);

      step++;
      if (step % chord.length === 0) {
        this.currentChord++;
      }
      this.timerId = setTimeout(playSequence, 650);
    };

    playSequence();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) clearTimeout(this.timerId);
  }
}

/* ----------------------------------------------------------------------------
 * 4. DAYS-TOGETHER COUNTER ENGINE
 * ---------------------------------------------------------------------------- */
class DaysTogetherCounter {
  constructor(dateString) {
    this.startDate = new Date(dateString);
    this.daysEl = document.getElementById('daysCount');
    this.hoursEl = document.getElementById('hoursCount');
    this.minsEl = document.getElementById('minutesCount');
    this.secsEl = document.getElementById('secondsCount');
    this.intervalId = null;

    this.init();
  }

  init() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);

    // Sync immediately when tab regains focus
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) this.update();
    });
  }

  update() {
    const now = new Date();
    const diffMs = now - this.startDate;

    if (diffMs < 0) {
      // If date is set in the future
      if (this.daysEl) this.daysEl.textContent = "00";
      if (this.hoursEl) this.hoursEl.textContent = "00";
      if (this.minsEl) this.minsEl.textContent = "00";
      if (this.secsEl) this.secsEl.textContent = "00";
      return;
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const days = Math.floor(totalHours / 24);

    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    if (this.daysEl) this.daysEl.textContent = String(days).padStart(2, '0');
    if (this.hoursEl) this.hoursEl.textContent = String(hours).padStart(2, '0');
    if (this.minsEl) this.minsEl.textContent = String(minutes).padStart(2, '0');
    if (this.secsEl) this.secsEl.textContent = String(seconds).padStart(2, '0');
  }
}

/* ----------------------------------------------------------------------------
 * 5. PHOTO GALLERY & LIGHTBOX CONTROLLER
 * ---------------------------------------------------------------------------- */
class GalleryController {
  constructor(photos, onPhotoClick) {
    this.photos = photos;
    this.onPhotoClick = onPhotoClick;
    this.grid = document.getElementById('galleryGrid');
    this.filterTabs = document.querySelectorAll('.filter-tab');
    this.currentFilter = 'all';

    this.init();
  }

  init() {
    this.render();
    this.setupFilters();
  }

  render() {
    if (!this.grid) return;
    this.grid.innerHTML = '';

    const filtered = this.photos.filter(p => {
      if (this.currentFilter === 'all') return true;
      return p.category === this.currentFilter;
    });

    filtered.forEach((photo, index) => {
      const card = document.createElement('article');
      card.className = `polaroid-card ${photo.isPortrait ? 'portrait' : 'landscape'}`;
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View photo: ${photo.caption}`);

      card.innerHTML = `
        <div class="polaroid-img-wrap">
          <img 
            src="${photo.src}" 
            alt="${photo.caption}" 
            class="polaroid-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='assets/photos/cover.jpg';"
          >
        </div>
        <div class="polaroid-caption-wrap">
          <h3 class="polaroid-caption font-script">${photo.caption}</h3>
          <p class="polaroid-desc">${photo.description || 'Arun ❤️ Pinki'}</p>
        </div>
      `;

      // 3D tilt effect on desktop mousemove
      this.attachTilt(card);

      // Open Lightbox
      const handleOpen = () => {
        const fullIndex = this.photos.indexOf(photo);
        this.onPhotoClick(fullIndex);
      };

      card.addEventListener('click', handleOpen);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleOpen();
        }
      });

      this.grid.appendChild(card);
    });
  }

  attachTilt(card) {
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let rafId = null;
      card.addEventListener('mousemove', (e) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;
          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
          rafId = null;
        });
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      });
    }
  }

  setupFilters() {
    this.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        this.currentFilter = tab.dataset.filter;
        this.render();
      });
    });
  }
}

class Lightbox {
  constructor(photos) {
    this.photos = photos;
    this.currentIndex = 0;
    this.modal = document.getElementById('lightboxModal');
    this.img = document.getElementById('lightboxImg');
    this.caption = document.getElementById('lightboxCaption');
    this.desc = document.getElementById('lightboxDescription');
    this.counter = document.getElementById('lightboxCounter');
    this.closeBtn = document.getElementById('lightboxCloseBtn');
    this.prevBtn = document.getElementById('lightboxPrevBtn');
    this.nextBtn = document.getElementById('lightboxNextBtn');
    this.backdrop = document.getElementById('lightboxBackdrop');

    // Touch swipe handling
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.bindEvents();
  }

  open(index) {
    this.currentIndex = index;
    this.update();
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.photos.length;
    this.update();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    this.update();
  }

  update() {
    const photo = this.photos[this.currentIndex];
    if (!photo) return;

    if (this.img) {
      this.img.classList.add('switching');
      const tempImg = new Image();
      tempImg.onload = () => {
        this.img.src = photo.src;
        this.img.alt = photo.caption;
        this.img.classList.remove('switching');
      };
      tempImg.src = photo.src;
    }
    if (this.caption) this.caption.textContent = photo.caption;
    if (this.desc) this.desc.textContent = photo.description || '';
    if (this.counter) this.counter.textContent = `${this.currentIndex + 1} / ${this.photos.length}`;

    // Preload next and previous images for instant touch-navigation
    const nextIdx = (this.currentIndex + 1) % this.photos.length;
    const prevIdx = (this.currentIndex - 1 + this.photos.length) % this.photos.length;
    if (this.photos[nextIdx]) { const i1 = new Image(); i1.src = this.photos[nextIdx].src; }
    if (this.photos[prevIdx]) { const i2 = new Image(); i2.src = this.photos[prevIdx].src; }
  }

  bindEvents() {
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());
    if (this.backdrop) this.backdrop.addEventListener('click', () => this.close());
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());

    // Keyboard navigation
    window.addEventListener('keydown', (e) => {
      if (this.modal.classList.contains('hidden')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowRight') this.next();
      if (e.key === 'ArrowLeft') this.prev();
    });

    // Touch swipe navigation for mobile
    this.modal.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.modal.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }

  handleSwipe() {
    const diff = this.touchEndX - this.touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) this.next(); // swiped left
      else this.prev();         // swiped right
    }
  }
}

/* ----------------------------------------------------------------------------
 * 6. SURPRISE MESSAGE MANAGER
 * ---------------------------------------------------------------------------- */
class SurpriseMessageManager {
  constructor(messages, particleEngine) {
    this.messages = messages;
    this.particleEngine = particleEngine;
    this.currentIndex = 0;
    this.textEl = document.getElementById('surpriseMessageText');
    this.btn = document.getElementById('nextSurpriseBtn');
    this.counterEl = document.getElementById('surpriseCounterText');

    this.init();
  }

  init() {
    if (this.btn) {
      this.btn.addEventListener('click', (e) => this.showNext(e));
    }
  }

  showNext(event) {
    if (!this.textEl) return;
    
    // Animate out
    this.textEl.classList.add('animating');

    // Trigger celebratory particle burst at button location
    if (this.particleEngine) {
      const rect = this.btn.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      this.particleEngine.triggerBurst(x, y, 20);
    }

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.messages.length;
      this.textEl.textContent = this.messages[this.currentIndex];
      if (this.counterEl) {
        this.counterEl.textContent = `Message ${this.currentIndex + 1} of ${this.messages.length}`;
      }
      this.textEl.classList.remove('animating');
    }, 280);
  }
}

/* ----------------------------------------------------------------------------
 * 6.5 SCRATCH TO REVEAL CARD MANAGER (Arun's Favorite — 31.jpeg)
 * ---------------------------------------------------------------------------- */
class ScratchCardManager {
  constructor(canvasId, particleEngine) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particleEngine = particleEngine;
    this.isDrawing = false;
    this.isRevealed = false;
    this.scratchedPixels = 0;
    this.totalPixels = 0;
    this.directRevealBtn = document.getElementById('revealInstantlyBtn');
    this.statusText = document.querySelector('.scratch-hint-text');

    this.init();
  }

  init() {
    this.setupCanvas();
    this.bindEvents();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!this.isRevealed) this.setupCanvas();
      }, 150);
    }, { passive: true });
  }

  setupCanvas() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width || 320;
    this.canvas.height = rect.height || 420;

    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Draw luxurious gold-rose scratch coating
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#d4af37');
    grad.addColorStop(0.3, '#701424');
    grad.addColorStop(0.7, '#2b070d');
    grad.addColorStop(1, '#caa030');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle pattern overlay
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < w; i += 24) {
      for (let j = 0; j < h; j += 24) {
        ctx.beginPath();
        ctx.arc(i + 12, j + 12, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Centered romantic text on scratch card
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Playfair Display, serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 6;
    ctx.fillText('✨ Aru — Secret Surprise ✨', w / 2, h / 2 - 20);

    ctx.font = '14px Cormorant Garamond, serif';
    ctx.fillStyle = '#ffd1dc';
    ctx.fillText('Scratch with love to reveal 💖', w / 2, h / 2 + 15);
    ctx.shadowBlur = 0;
  }

  bindEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (e) => {
      if (!this.isDrawing || this.isRevealed) return;
      const pos = getPos(e);

      this.ctx.globalCompositeOperation = 'destination-out';
      this.ctx.beginPath();
      this.ctx.arc(pos.x, pos.y, 28, 0, Math.PI * 2);
      this.ctx.fill();

      // Check progress periodically
      if (Math.random() > 0.6) {
        this.checkScratchProgress();
      }
    };

    // Touch events for mobile phones
    this.canvas.addEventListener('touchstart', (e) => {
      this.isDrawing = true;
      scratch(e);
    }, { passive: true });

    this.canvas.addEventListener('touchmove', (e) => {
      scratch(e);
    }, { passive: true });

    this.canvas.addEventListener('touchend', () => {
      this.isDrawing = false;
      this.checkScratchProgress();
    });

    // Mouse events for desktop
    this.canvas.addEventListener('mousedown', (e) => {
      this.isDrawing = true;
      scratch(e);
    });

    this.canvas.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', () => {
      if (this.isDrawing) {
        this.isDrawing = false;
        this.checkScratchProgress();
      }
    });

    // Direct Reveal Button
    if (this.directRevealBtn) {
      this.directRevealBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.revealCompletely();
      });
    }
  }

  checkScratchProgress() {
    if (this.isRevealed) return;

    try {
      const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
      const data = imgData.data;
      let clearPixels = 0;
      const totalSampled = data.length / 16; // sample every 4th pixel for high performance

      for (let i = 3; i < data.length; i += 16) {
        if (data[i] === 0) clearPixels++;
      }

      const percent = (clearPixels / totalSampled) * 100;
      if (percent > 38) {
        this.revealCompletely();
      }
    } catch (e) {
      // Ignore security errors if any
    }
  }

  revealCompletely() {
    if (this.isRevealed) return;
    this.isRevealed = true;

    this.canvas.classList.add('fade-out');

    if (this.statusText) {
      this.statusText.innerHTML = '❤️ <strong>Meri Sabse Pyaari Queen — Aru!</strong> ✨';
      this.statusText.style.color = '#ffccd5';
    }

    if (this.directRevealBtn) {
      this.directRevealBtn.style.display = 'none';
    }

    // Trigger celebration hearts burst
    if (this.particleEngine) {
      const rect = this.canvas.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      this.particleEngine.triggerBurst(cx, cy, 35);
    }
  }
}

/* ----------------------------------------------------------------------------
 * 7. MAIN APP ORCHESTRATION & EVENT BINDINGS
 * ---------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

  // A. Initialize Ambient Particles
  const particleEngine = new AmbientParticleEngine('ambientCanvas');

  // B. Initialize Days-Together Counter
  new DaysTogetherCounter(CONFIG.COUPLE.firstMeetingDateStr);

  // C. Initialize Surprise Messages
  new SurpriseMessageManager(CONFIG.SURPRISE_MESSAGES, particleEngine);

  // C.5 Initialize Arun's Favorite Scratch Card (31.jpeg)
  new ScratchCardManager('scratchCanvas', particleEngine);

  // D. Initialize Gallery & Lightbox
  const lightbox = new Lightbox(CONFIG.GALLERY_PHOTOS);
  new GalleryController(CONFIG.GALLERY_PHOTOS, (index) => lightbox.open(index));

  // E. Direct Bollywood Romantic Soundtrack (Downloaded Local MP3s — Direct romance with small pause control)
  const musicWidget = document.getElementById('musicPlayer');
  const musicTitle = document.getElementById('musicTitle');
  const musicStatus = document.getElementById('musicStatus');
  const musicDiscWrap = document.getElementById('musicDiscWrap');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicToggleIcon = document.getElementById('musicToggleIcon');
  const audioEl = document.getElementById('romanticAudio');

  let currentTrackIdx = 0;
  let isPlaying = false;
  let isUserPaused = false; // Flag to respect user choice: once stopped, never auto-start

  const updateSoundtrackBadge = (title, status) => {
    if (musicTitle && title) musicTitle.textContent = title;
    if (musicStatus && status) musicStatus.textContent = status;
  };

  const setPlayingState = (playing) => {
    isPlaying = playing;
    if (musicWidget) {
      if (playing) {
        musicWidget.classList.add('playing');
        musicWidget.classList.remove('paused');
      } else {
        musicWidget.classList.remove('playing');
        musicWidget.classList.add('paused');
      }
    }
    if (musicToggleIcon) {
      musicToggleIcon.textContent = playing ? '⏸️' : '▶️';
    }
    if (musicToggleBtn) {
      const label = playing ? 'Pause romantic music' : 'Play romantic music';
      musicToggleBtn.setAttribute('title', label);
      musicToggleBtn.setAttribute('aria-label', label);
    }
  };

  const playDirectBollywoodSong = (index = currentTrackIdx, forcePlay = false) => {
    if (!audioEl || !CONFIG.BOLLYWOOD_PLAYLIST || !CONFIG.BOLLYWOOD_PLAYLIST.length) return;

    // If user explicitly paused/stopped music, do NOT play unless forcePlay is true (user clicked play/toggle)
    if (isUserPaused && !forcePlay) return;

    currentTrackIdx = index % CONFIG.BOLLYWOOD_PLAYLIST.length;
    const track = CONFIG.BOLLYWOOD_PLAYLIST[currentTrackIdx];
    updateSoundtrackBadge(track.title, track.artist);

    // Only set src and reload if it differs
    const targetSrc = track.src;
    const needsReload = !audioEl.src || !audioEl.src.includes(targetSrc);
    if (needsReload) {
      audioEl.src = targetSrc;
      audioEl.load();
    }

    // Direct fast start (skip long prelude/intro silence if specified)
    if (track.startTime && audioEl.currentTime < track.startTime) {
      audioEl.currentTime = track.startTime;
    }

    const promise = audioEl.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          if (track.startTime && Math.abs(audioEl.currentTime - track.startTime) > 2) {
            audioEl.currentTime = track.startTime;
          }
          setPlayingState(true);
        })
        .catch((err) => {
          console.log('Audio autoplay waiting for user interaction:', err.name);
        });
    }
  };

  const toggleMusicPlayback = () => {
    if (!audioEl) return;
    if (isPlaying && !audioEl.paused) {
      // User explicitly stopped/paused the music
      audioEl.pause();
      isUserPaused = true;
      setPlayingState(false);
    } else {
      // User explicitly wants to start/resume the music
      isUserPaused = false;
      const promise = audioEl.play();
      if (promise !== undefined) {
        promise
          .then(() => setPlayingState(true))
          .catch((err) => {
            console.log('Playback resume error:', err);
            playDirectBollywoodSong(currentTrackIdx, true);
          });
      }
    }
  };

  if (musicToggleBtn) {
    musicToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMusicPlayback();
    });
  }

  // Auto advance to next song when current track ends or reaches specified endTime (only if user hasn't paused)
  if (audioEl) {
    audioEl.addEventListener('ended', () => {
      if (!isUserPaused) {
        playDirectBollywoodSong(currentTrackIdx + 1);
      }
    });

    // Check 2-minute (120s) playback limit for all songs, smoothly advancing to next song
    audioEl.addEventListener('timeupdate', () => {
      const currentTrack = CONFIG.BOLLYWOOD_PLAYLIST[currentTrackIdx];
      if (currentTrack && !isUserPaused && isPlaying) {
        const start = currentTrack.startTime || 0;
        const limit = currentTrack.durationLimit || 120; // Maximum 2 minutes
        const elapsed = audioEl.currentTime - start;
        if (elapsed >= limit) {
          playDirectBollywoodSong(currentTrackIdx + 1);
        }
      }
    });

    audioEl.addEventListener('play', () => {
      setPlayingState(true);
    });

    audioEl.addEventListener('pause', () => {
      setPlayingState(false);
    });

    audioEl.addEventListener('error', (e) => {
      console.warn('Audio playback note, moving to next track:', e);
      if (!isUserPaused) {
        setTimeout(() => playDirectBollywoodSong(currentTrackIdx + 1), 1000);
      }
    });
  }

  // Tapping the spinning heart disc skips to next Bollywood song directly (user explicitly tapped)
  if (musicDiscWrap) {
    musicDiscWrap.addEventListener('click', (e) => {
      e.stopPropagation();
      isUserPaused = false;
      const rect = musicDiscWrap.getBoundingClientRect();
      particleEngine.triggerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
      playDirectBollywoodSong(currentTrackIdx + 1, true);
    });

    musicDiscWrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        e.stopPropagation();
        isUserPaused = false;
        playDirectBollywoodSong(currentTrackIdx + 1, true);
      }
    });
  }

  // Direct play triggers on the very first touch/click/key anywhere on the page (initial start only)
  const directPlayOnce = () => {
    if (!isPlaying && !isUserPaused) {
      playDirectBollywoodSong(currentTrackIdx);
    }
    // Remove one-time auto listeners so clicks won't trigger audio later
    document.removeEventListener('click', directPlayOnce);
    document.removeEventListener('touchstart', directPlayOnce);
    document.removeEventListener('keydown', directPlayOnce);
  };

  document.addEventListener('click', directPlayOnce, { passive: true, once: true });
  document.addEventListener('touchstart', directPlayOnce, { passive: true, once: true });
  document.addEventListener('keydown', directPlayOnce, { passive: true, once: true });

  // F. Scene 1: Password Unlock Experience
  const welcomeScreen = document.getElementById('welcomeScreen');
  const passwordInput = document.getElementById('passwordInput');
  const passwordError = document.getElementById('passwordError');
  const togglePasswordBtn = document.getElementById('togglePasswordBtn');
  const hintBtn = document.getElementById('hintBtn');
  const hintText = document.getElementById('hintText');
  const unlockBtn = document.getElementById('unlockBtn');
  const envelopeScreen = document.getElementById('envelopeScreen');

  // Toggle password visibility
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    });
  }

  // Toggle hint
  if (hintBtn && hintText) {
    hintBtn.addEventListener('click', () => {
      hintText.classList.toggle('hidden');
    });
  }

  // Password validation handler
  const handlePasswordSubmit = () => {
    const val = (passwordInput.value || '').trim().toLowerCase();
    
    if (CONFIG.PASSWORD.accepted.includes(val)) {
      // Success!
      passwordError.textContent = "Welcome, my love! ❤️ Opening your surprise...";
      passwordError.className = "password-feedback success";
      
      // Celebrate with heart burst
      particleEngine.triggerBurst(window.innerWidth / 2, window.innerHeight / 2, 40);

      // Ensure romantic soundtrack is playing seamlessly
      if (!isPlaying) {
        playDirectBollywoodSong(0);
      }

      setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        envelopeScreen.classList.remove('hidden');
      }, 900);

    } else {
      // Gentle romantic error
      passwordError.textContent = "Aru, try again! Hint: type 'aru' or '0402' ❤️";
      passwordError.className = "password-feedback error";
      passwordInput.focus();
    }
  };

  if (unlockBtn) unlockBtn.addEventListener('click', handlePasswordSubmit);
  if (passwordInput) {
    passwordInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handlePasswordSubmit();
    });
  }

  // G. Scene 2: Envelope Opening & Handwritten Love Letter
  const envelopeElement = document.getElementById('envelopeElement');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const enterWebsiteBtn = document.getElementById('enterWebsiteBtn');
  const letterLines = document.getElementById('letterLines');
  const mainWebsite = document.getElementById('mainWebsite');
  let letterOpened = false;

  const populateLetterLines = () => {
    if (!letterLines) return;
    letterLines.innerHTML = '';
    CONFIG.LOVE_LETTER.forEach((line) => {
      const p = document.createElement('p');
      p.className = 'letter-line';
      p.textContent = line;
      letterLines.appendChild(p);
    });
  };

  populateLetterLines();

  // Reading Font Style Switcher (Handwritten, Classic Book Serif, Clean Modern)
  const fontToggleBtns = document.querySelectorAll('.font-toggle-btn');
  if (fontToggleBtns.length && letterLines) {
    let currentFontMode = 'handwriting';
    try {
      currentFontMode = localStorage.getItem('forever_aru_letter_font') || 'handwriting';
    } catch (e) {
      currentFontMode = 'handwriting';
    }

    const setLetterFontMode = (mode) => {
      letterLines.classList.remove('font-mode-handwriting', 'font-mode-serif', 'font-mode-sans');
      letterLines.classList.add(`font-mode-${mode}`);

      fontToggleBtns.forEach((btn) => {
        const isMatch = btn.getAttribute('data-font') === mode;
        btn.classList.toggle('active', isMatch);
        btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
      });

      try {
        localStorage.setItem('forever_aru_letter_font', mode);
      } catch (e) {}
    };

    setLetterFontMode(currentFontMode);

    fontToggleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const mode = btn.getAttribute('data-font');
        if (mode) setLetterFontMode(mode);
      });
    });
  }

  const revealLetter = () => {
    if (letterOpened) return;
    letterOpened = true;

    envelopeElement.classList.add('open');
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    if (envelopeWrapper) envelopeWrapper.classList.add('open');
    const envelopeSceneContainer = document.querySelector('.envelope-scene-container');
    if (envelopeSceneContainer) envelopeSceneContainer.classList.add('letter-open');

    // Release 3D container transforms after flap opens so position:fixed centers cleanly in viewport
    setTimeout(() => {
      if (envelopeWrapper) envelopeWrapper.style.perspective = 'none';
      if (envelopeElement) envelopeElement.style.transformStyle = 'flat';
    }, 450);

    particleEngine.triggerBurst(window.innerWidth / 2, window.innerHeight / 2, 35);

    // Sequentially reveal each paragraph of the letter
    const lines = document.querySelectorAll('.letter-line');
    lines.forEach((line, i) => {
      setTimeout(() => {
        line.classList.add('revealed');
      }, 500 + i * 400);
    });

    if (openLetterBtn) {
      openLetterBtn.style.display = 'none';
    }

    // Smoothly scroll down so the signature and 'Our Beautiful Story' button are fully revealed and prominent
    const totalRevealTime = 500 + lines.length * 400 + 350;
    setTimeout(() => {
      const letterPaper = document.getElementById('letterPaper');
      if (letterPaper) {
        letterPaper.scrollTo({
          top: letterPaper.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, totalRevealTime);
  };

  if (envelopeElement) envelopeElement.addEventListener('click', revealLetter);
  if (openLetterBtn) openLetterBtn.addEventListener('click', revealLetter);

  // Direct scene access via query param (e.g. ?scene=letter or ?scene=letter-open)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scene') === 'letter' || urlParams.get('scene') === 'letter-open') {
    if (welcomeScreen) welcomeScreen.classList.add('hidden');
    if (envelopeScreen) envelopeScreen.classList.remove('hidden');
    if (urlParams.get('scene') === 'letter-open') {
      setTimeout(() => {
        revealLetter();
      }, 200);
    }
  } else if (urlParams.get('scene') === 'main') {
    if (welcomeScreen) welcomeScreen.classList.add('hidden');
    if (envelopeScreen) envelopeScreen.classList.add('hidden');
    if (mainWebsite) mainWebsite.classList.remove('hidden');
  }

  // Transition from Letter to Main Romantic Website
  if (enterWebsiteBtn) {
    enterWebsiteBtn.addEventListener('click', () => {
      // Ensure romantic soundtrack is playing seamlessly
      if (!isPlaying) {
        playDirectBollywoodSong(0);
      }

      envelopeScreen.classList.add('hidden');
      mainWebsite.classList.remove('hidden');

      // Gentle smooth scroll to top of main website
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Trigger celebratory floating hearts
      particleEngine.triggerBurst(window.innerWidth / 2, window.innerHeight * 0.3, 30);
    });
  }

  // H. Scene 7: Relive Our Story Button
  const reliveBtn = document.getElementById('reliveBtn');
  if (reliveBtn) {
    reliveBtn.addEventListener('click', () => {
      // Replay first romantic track (Tum Hi Ho)
      playDirectBollywoodSong(0);

      // Smoothly scroll back to the hero section
      const hero = document.getElementById('heroSection');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      particleEngine.triggerBurst(window.innerWidth / 2, window.innerHeight / 2, 35);
    });
  }

});
