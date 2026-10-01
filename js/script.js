/**
 * ===================================================================
 * JAI JINENDRA EVENTS - MAIN INTERACTION SCRIPT
 * ===================================================================
 * Handles:
 * 1. Dynamic config injection across pages
 * 2. Mobile navigation menu drawer & sticky header
 * 3. Scroll reveal animations
 * 4. Interactive Hero slider
 * 5. Gallery filter system & Lightbox modal with next/prev/keyboard controls
 * 6. Wedding Films section (pre-wedding films & wedding highlights)
 * 7. Contact form -> WhatsApp instant generator & mailto dispatcher
 * 8. Service pre-selection link handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initDynamicConfig();
  initNavigation();
  initScrollEffects();
  initHeroSlider();
  initGalleryAndLightbox();
  initGalleryCounts();
  initFilms();
  initContactForm();
  initServicePreselection();
});

/**
 * Optimized web copies of a gallery photo (built by `npm run images` into js/image-manifest.js).
 * Falls back to the original file if the photo has not been optimized yet.
 */
function getOptimizedImage(originalPath) {
  const manifest = window.IMAGE_MANIFEST || {};
  const entry = manifest[decodeURIComponent(originalPath).replace(/^\.\//, '')];
  if (!entry) {
    return { src: originalPath, srcset: '', width: 0, height: 0 };
  }
  const variants = entry.srcset;
  const medium = variants[Math.min(1, variants.length - 1)];
  return {
    src: `./${medium[1]}`,
    srcset: variants.map(([width, file]) => `./${file} ${width}w`).join(', '),
    width: entry.w,
    height: entry.h
  };
}

// Swap the active styling between a row of pill buttons (gallery & film filters)
function setActivePill(pills, activePill) {
  const activeClasses = ['bg-primary-800', 'text-white', 'shadow-maroon-glow'];
  const inactiveClasses = ['bg-white', 'text-stone-700', 'hover:bg-gold-50', 'border', 'border-stone-200'];
  pills.forEach(pill => {
    pill.classList.remove(...activeClasses);
    pill.classList.add(...inactiveClasses);
    pill.setAttribute('aria-pressed', 'false');
  });
  activePill.classList.add(...activeClasses);
  activePill.classList.remove(...inactiveClasses);
  activePill.setAttribute('aria-pressed', 'true');
}

/**
 * Hydrate dynamic business information from SITE_CONFIG into DOM elements
 */
function initDynamicConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  const cfg = SITE_CONFIG.business;

  // Replace text content for data-config tags
  document.querySelectorAll('[data-config]').forEach(el => {
    const key = el.getAttribute('data-config');
    if (cfg[key]) {
      el.textContent = cfg[key];
    }
  });

  // Update dynamic hrefs (e.g. WhatsApp, phone, email, Instagram)
  document.querySelectorAll('[data-config-href]').forEach(el => {
    const type = el.getAttribute('data-config-href');
    if (type === 'whatsapp') {
      const defaultMsg = encodeURIComponent(`Hello Jai Jinendra Events! I would like to make an enquiry about event management services for an upcoming event.`);
      el.setAttribute('href', `https://wa.me/${cfg.whatsappNumber}?text=${defaultMsg}`);
    } else if (type === 'phone') {
      el.setAttribute('href', `tel:${cfg.phone.replace(/[^0-9+]/g, '')}`);
    } else if (type === 'email') {
      el.setAttribute('href', `mailto:${cfg.email}?subject=Event%20Enquiry%20-%20Jai%20Jinendra%20Events`);
    } else if (type === 'instagram') {
      el.setAttribute('href', cfg.instagramUrl);
    }
  });

  // Auto-update copyright year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/**
 * Mobile Navigation Menu & Sticky Header
 */
function initNavigation() {
  // ARC-style navbar: transparent over the hero, solid navy bar once the page is scrolled
  const header = document.getElementById('main-header');
  if (header) {
    const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Mobile Drawer Toggle
  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('translate-x-full');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.remove('hidden');
      setTimeout(() => mobileMenuBackdrop.classList.remove('opacity-0'), 10);
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('translate-x-full');
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.classList.add('opacity-0');
      setTimeout(() => mobileMenuBackdrop.classList.add('hidden'), 300);
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }
  if (mobileMenuBackdrop) {
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
  }

  // Close mobile menu on clicking any navigation link
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }
}

/**
 * Scroll Reveal Animations via IntersectionObserver
 */
function initScrollEffects() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

/**
 * Hero Background Slideshow / Carousel
 */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((s, i) => {
      if (i === index) {
        s.classList.remove('opacity-0', 'scale-105');
        s.classList.add('opacity-100', 'scale-100');
      } else {
        s.classList.add('opacity-0');
        s.classList.remove('opacity-100', 'scale-100');
      }
    });

    dots.forEach((d, i) => {
      if (i === index) {
        d.classList.add('bg-gold-500', 'w-8');
        d.classList.remove('bg-white/50', 'w-2.5');
      } else {
        d.classList.remove('bg-gold-500', 'w-8');
        d.classList.add('bg-white/50', 'w-2.5');
      }
    });

    currentSlide = index;
  }

  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetSlideShow() {
    clearInterval(slideInterval);
    startSlideShow();
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      resetSlideShow();
    });
  });

  const nextBtn = document.getElementById('hero-next-btn');
  const prevBtn = document.getElementById('hero-prev-btn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetSlideShow();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prev = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(prev);
      resetSlideShow();
    });
  }

  startSlideShow();
}

/**
 * Gallery Filter System & Interactive Lightbox Modal
 */
let currentLightboxIndex = 0;
let activeGalleryList = [];

// Rendered photo width in the masonry grid (3 / 2 / 1 columns) so the browser downloads the right size
const GALLERY_GRID_SIZES = '(min-width: 1280px) 375px, (min-width: 1024px) calc(33vw - 53px), (min-width: 640px) calc(50vw - 52px), calc(50vw - 30px)';

// "All" view: alternate between categories so it opens with a mix of every event type
function interleaveByCategory(items) {
  const groups = SITE_CONFIG.galleryCategories
    .filter(cat => cat.id !== 'all')
    .map(cat => items.filter(item => item.category === cat.id));
  const longest = Math.max(0, ...groups.map(group => group.length));
  const mixed = [];
  for (let i = 0; i < longest; i++) {
    groups.forEach(group => {
      if (group[i]) mixed.push(group[i]);
    });
  }
  return mixed;
}

function initGalleryAndLightbox() {
  const galleryGrid = document.getElementById('gallery-grid');
  const filterTabs = document.querySelectorAll('.gallery-filter-btn');
  const lightboxModal = document.getElementById('lightbox-modal');

  if (!galleryGrid || typeof SITE_CONFIG === 'undefined') return;

  activeGalleryList = SITE_CONFIG.galleryItems;

  // Render gallery items dynamically
  function renderGallery(category = 'all') {
    galleryGrid.innerHTML = '';

    const filtered = category === 'all'
      ? interleaveByCategory(SITE_CONFIG.galleryItems)
      : SITE_CONFIG.galleryItems.filter(item => item.category.toLowerCase() === category.toLowerCase());

    activeGalleryList = filtered;

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `
        <div class="col-span-full text-center py-16">
          <div class="inline-flex p-4 rounded-full bg-gold-50 text-gold-600 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xl font-serif text-charcoal-800 mb-2">Photos Coming Soon</h3>
          <p class="text-stone-500 text-sm max-w-md mx-auto">We are updating high-resolution photographs for this category. Stay tuned or send an enquiry to our team directly!</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item reveal-on-scroll break-inside-avoid mb-3 sm:mb-6';
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-index', index);

      // Category display name
      const catObj = SITE_CONFIG.galleryCategories.find(c => c.id === item.category);
      const catName = catObj ? catObj.name : item.category;
      const photo = getOptimizedImage(item.image);

      // width/height reserve the photo's real shape so the grid never jumps or crops while loading
      card.innerHTML = `
        <img
          src="${photo.src}"
          ${photo.srcset ? `srcset="${photo.srcset}" sizes="${GALLERY_GRID_SIZES}"` : ''}
          ${photo.width ? `width="${photo.width}" height="${photo.height}"` : ''}
          alt="${item.title}"
          loading="lazy"
          decoding="async"
        />
        <div class="gallery-overlay">
          <span class="inline-block self-start px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-gold-300 bg-primary-900/80 rounded-full mb-2 backdrop-blur-sm border border-gold-400/30">
            ${catName}
          </span>
          <h4 class="text-lg md:text-xl font-serif text-white font-semibold leading-snug drop-shadow-md">
            ${item.title}
          </h4>
          <p class="text-xs md:text-sm text-stone-200 mt-1 line-clamp-2 drop-shadow">
            ${item.description}
          </p>
          <div class="mt-3 flex items-center gap-1.5 text-xs text-gold-300 font-medium">
            <span>Click to view fullscreen</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      `;

      // If the optimized copy is missing, fall back to the original photo; hide the card only if that fails too
      const img = card.querySelector('img');
      img.addEventListener('error', () => {
        if (img.dataset.triedOriginal) {
          card.classList.add('hidden');
          return;
        }
        img.dataset.triedOriginal = 'true';
        img.removeAttribute('srcset');
        img.src = item.image;
      });

      card.addEventListener('click', () => {
        openLightbox(index);
      });

      galleryGrid.appendChild(card);
    });

    // Re-observe scroll elements
    initScrollEffects();
  }

  // Setup Category filter tabs
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setActivePill(filterTabs, tab);
      renderGallery(tab.getAttribute('data-category'));
    });
  });

  // Initial render - gallery.html?category=wedding opens straight on that category
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  const requestedTab = Array.from(filterTabs).find(tab => tab.getAttribute('data-category') === requestedCategory);
  if (requestedTab) {
    requestedTab.click();
  } else {
    renderGallery('all');
  }

  // Lightbox functions
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-description');
  const lightboxCategory = document.getElementById('lightbox-category');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  function openLightbox(index) {
    if (!lightboxModal || !activeGalleryList.length) return;
    currentLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.remove('hidden');
    setTimeout(() => {
      lightboxModal.classList.remove('opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.add('opacity-0');
    setTimeout(() => {
      lightboxModal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
  }

  // On-screen width of a photo in the lightbox: fits 94vw x 78vh and is never enlarged beyond its real size
  function lightboxDisplayWidth(photo) {
    const fitToHeight = window.innerHeight * 0.78 * (photo.width / photo.height);
    return Math.round(Math.min(window.innerWidth * 0.94, 1400, fitToHeight, photo.width));
  }

  function setLightboxSource(img, photo) {
    img.removeAttribute('srcset');
    if (photo.srcset) {
      img.sizes = `${lightboxDisplayWidth(photo)}px`;
      img.srcset = photo.srcset;
    }
    img.src = photo.src;
  }

  // Load the previous & next photos in the background so arrow navigation is instant
  function preloadLightboxNeighbours() {
    [1, -1].forEach(step => {
      const neighbour = activeGalleryList[(currentLightboxIndex + step + activeGalleryList.length) % activeGalleryList.length];
      if (neighbour) setLightboxSource(new Image(), getOptimizedImage(neighbour.image));
    });
  }

  function updateLightboxContent() {
    const item = activeGalleryList[currentLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      const photo = getOptimizedImage(item.image);
      // Dim until the sharp version has arrived so the old photo never sits under the new caption
      lightboxImg.classList.add('opacity-40');
      lightboxImg.onload = () => lightboxImg.classList.remove('opacity-40');
      lightboxImg.onerror = () => {
        lightboxImg.onerror = null;
        lightboxImg.removeAttribute('srcset');
        lightboxImg.src = item.image;
      };
      setLightboxSource(lightboxImg, photo);
      lightboxImg.alt = item.title;
      preloadLightboxNeighbours();
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.description;
    
    if (lightboxCategory) {
      const catObj = SITE_CONFIG.galleryCategories.find(c => c.id === item.category);
      lightboxCategory.textContent = catObj ? catObj.name : item.category;
    }

    if (lightboxCounter) {
      lightboxCounter.textContent = `${currentLightboxIndex + 1} of ${activeGalleryList.length}`;
    }
  }

  function showNextLightbox() {
    if (!activeGalleryList.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % activeGalleryList.length;
    updateLightboxContent();
  }

  function showPrevLightbox() {
    if (!activeGalleryList.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + activeGalleryList.length) % activeGalleryList.length;
    updateLightboxContent();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxNext) lightboxNext.addEventListener('click', showNextLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevLightbox);

  // Close on background click
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-backdrop')) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || lightboxModal.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
  });
}

/**
 * Live photo counts on the home page category tiles, e.g. <span data-gallery-count="wedding">
 */
function initGalleryCounts() {
  if (typeof SITE_CONFIG === 'undefined') return;
  document.querySelectorAll('[data-gallery-count]').forEach(el => {
    const category = el.getAttribute('data-gallery-count');
    const count = SITE_CONFIG.galleryItems.filter(item => item.category === category).length;
    if (count) el.textContent = `${count} ${count === 1 ? 'photo' : 'photos'}`;
  });
}

/**
 * Wedding Films section (gallery.html#films) built from SITE_CONFIG.videos
 */
function parseVideoUrl(url) {
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/))([\w-]{11})/);
  if (youtube) {
    return {
      embed: `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0&playsinline=1`,
      thumb: `https://i.ytimg.com/vi/${youtube[1]}/maxresdefault.jpg`,
      thumbFallback: `https://i.ytimg.com/vi/${youtube[1]}/hqdefault.jpg`
    };
  }
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return { embed: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1` };
  }
  const drive = url.match(/drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]+)/);
  if (drive) {
    return {
      embed: `https://drive.google.com/file/d/${drive[1]}/preview`,
      thumb: `https://drive.google.com/thumbnail?id=${drive[1]}&sz=w1280`
    };
  }
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) {
    return { file: url };
  }
  return { external: url };
}

// Pop-up player shared by all film cards; each video opens at its own shape, uncropped
function openFilmPlayer(video, source, poster) {
  let modal = document.getElementById('film-player');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'film-player';
    modal.className = 'fixed inset-0 z-[70] hidden items-center justify-center p-4 bg-black/90 backdrop-blur-sm';
    modal.innerHTML = `
      <button type="button" aria-label="Close film" class="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors">
        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="film-player-stage flex flex-col items-center"></div>
    `;
    document.body.appendChild(modal);
    const close = () => {
      modal.querySelector('.film-player-stage').innerHTML = '';  // stops playback
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    };
    modal.querySelector('button').addEventListener('click', close);
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) close(); });
  }

  const stage = modal.querySelector('.film-player-stage');
  const player = source.file
    ? `<video src="${source.file}" controls autoplay playsinline ${poster ? `poster="${poster}"` : ''} class="film-player-video"></video>`
    : `<iframe src="${source.embed}" title="${video.title}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen class="film-player-embed ${video.vertical ? 'is-vertical' : ''}"></iframe>`;
  stage.innerHTML = `${player}<p class="mt-4 font-serif text-lg text-white text-center">${video.title}</p>`;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function createFilmCard(video) {
  const source = parseVideoUrl(video.url || '');
  const poster = video.poster ? getOptimizedImage(video.poster).src : source.thumb;

  // Every card is the same size; the cover fills a fixed 4:5 frame
  const card = document.createElement('article');
  card.className = 'reveal-on-scroll w-[calc(50%-0.5rem)] sm:w-[300px] lg:w-[320px]';
  card.innerHTML = `
    <div class="film-card">
      <button type="button" class="film-frame" aria-label="Play film: ${video.title}">
        <span class="absolute inset-0 bg-gradient-to-br from-primary-900 via-obsidian-950 to-obsidian-900"></span>
        ${poster ? `<img src="${poster}" alt="" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover">` : ''}
        <span class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20"></span>
        <span class="absolute inset-0 flex items-center justify-center">
          <span class="film-play">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </span>
      </button>
      <div class="px-2 pt-4 pb-2 flex-1">
        <h3 class="font-serif text-sm sm:text-lg font-bold text-obsidian-950 line-clamp-2 sm:line-clamp-1">${video.title}</h3>
        ${video.description ? `<p class="hidden sm:block text-stone-600 text-sm mt-1 leading-relaxed line-clamp-2 min-h-[2.75rem]">${video.description}</p>` : ''}
      </div>
    </div>
  `;

  const frame = card.querySelector('.film-frame');

  // YouTube's HD cover is missing for some uploads (it returns a 120px placeholder) - use the standard one then
  const posterImg = frame.querySelector('img');
  if (posterImg) {
    posterImg.addEventListener('load', () => {
      if (posterImg.naturalWidth <= 120 && source.thumbFallback) posterImg.src = source.thumbFallback;
    });
    posterImg.addEventListener('error', () => {
      if (source.thumbFallback && posterImg.src !== source.thumbFallback) {
        posterImg.src = source.thumbFallback;
      } else {
        posterImg.remove();
      }
    });
  }

  if (source.external) {
    frame.addEventListener('click', () => window.open(source.external, '_blank', 'noopener'));
    return card;
  }

  // The video only loads when clicked, so the page stays fast
  frame.addEventListener('click', () => openFilmPlayer(video, source, poster));

  return card;
}

function initFilms() {
  const filmsSection = document.getElementById('films');
  const filmsGrid = document.getElementById('films-grid');
  const filmTabs = document.querySelectorAll('.film-filter-btn');
  if (!filmsSection || !filmsGrid || typeof SITE_CONFIG === 'undefined') return;

  const videos = SITE_CONFIG.videos || [];

  // Until the first film is added, show the photo gallery first and the films section after it
  const photosSection = document.getElementById('photos');
  if (!videos.length && photosSection) {
    photosSection.after(filmsSection);
  }

  function renderFilms(category) {
    const list = videos.filter(video => video.category === category);
    filmsGrid.innerHTML = '';

    if (!list.length) {
      const catObj = (SITE_CONFIG.videoCategories || []).find(c => c.id === category);
      const catName = catObj ? catObj.name : 'Our films';
      const waText = encodeURIComponent(`Hello Jai Jinendra Events! I would love to watch your ${catName.toLowerCase()}.`);
      filmsGrid.innerHTML = `
        <div class="col-span-full w-full">
          <div class="max-w-2xl mx-auto text-center bg-white rounded-2xl border border-gold-200/70 shadow-luxury px-6 py-10">
            <div class="inline-flex w-14 h-14 items-center justify-center rounded-full bg-gold-100 text-gold-700 mb-4">
              <svg class="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <h3 class="font-serif text-xl font-bold text-obsidian-950">${catName} are being uploaded</h3>
            <p class="text-stone-600 text-sm mt-2 max-w-md mx-auto">Want to watch one right now? Message us and we will share a full film with you on WhatsApp.</p>
            <a href="https://wa.me/${SITE_CONFIG.business.whatsappNumber}?text=${waText}" target="_blank" rel="noopener noreferrer" class="btn-gold-luxury text-xs mt-6">
              <span>Request a Film on WhatsApp</span>
            </a>
          </div>
        </div>
      `;
      return;
    }

    list.forEach(video => filmsGrid.appendChild(createFilmCard(video)));
    initScrollEffects();
  }

  filmTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setActivePill(filmTabs, tab);
      renderFilms(tab.getAttribute('data-film-category'));
    });
  });

  // Open on the first category that actually has films
  const firstWithFilms = Array.from(filmTabs).find(tab =>
    videos.some(video => video.category === tab.getAttribute('data-film-category'))
  );
  const startTab = firstWithFilms || filmTabs[0];
  if (startTab) startTab.click();
}

/**
 * Contact & Enquiry Form with instant WhatsApp formatter and Mailto dispatcher
 */
function initContactForm() {
  const form = document.getElementById('event-inquiry-form');
  if (!form || typeof SITE_CONFIG === 'undefined') return;

  const cfg = SITE_CONFIG.business;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value.trim() || 'Guest';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Not provided';
    const eventType = form.querySelector('[name="event_type"]')?.value || 'General Enquiry';
    const eventDate = form.querySelector('[name="event_date"]')?.value || 'To be decided';
    const guestCount = form.querySelector('[name="guest_count"]')?.value || 'Not specified';
    const city = form.querySelector('[name="city"]')?.value.trim() || cfg.location;
    const message = form.querySelector('[name="message"]')?.value.trim() || 'No additional notes.';

    // Construct formatted WhatsApp message
    const waMessage = 
`✨ *NEW EVENT ENQUIRY - JAI JINENDRA EVENTS* ✨

👤 *Client Name:* ${name}
📞 *Phone Number:* ${phone}
🎉 *Event Type:* ${eventType}
📅 *Event Date:* ${eventDate}
👥 *Expected Guests:* ${guestCount}
📍 *City / Venue:* ${city}

📝 *Special Requirements / Notes:*
${message}

---
_Sent via Jai Jinendra Events Website_`;

    const encodedWaMsg = encodeURIComponent(waMessage);
    const whatsappUrl = `https://wa.me/${cfg.whatsappNumber}?text=${encodedWaMsg}`;

    // Notification feedback
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn ? submitBtn.innerHTML : 'Send Enquiry';

    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Opening WhatsApp...
      `;
    }

    // Open WhatsApp straight from the click (a delayed window.open gets blocked as a pop-up on phones);
    // if the browser still blocks the new tab, open WhatsApp in this tab instead
    const waWindow = window.open(whatsappUrl, '_blank');
    if (!waWindow) window.location.href = whatsappUrl;
    setTimeout(() => {
      if (submitBtn) submitBtn.innerHTML = originalText;
    }, 1200);
  });

  // Mailto fallback button handler
  const mailtoBtn = document.getElementById('send-email-fallback-btn');
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      // Same required fields as the WhatsApp button (name, phone, event type)
      if (!form.reportValidity()) return;
      const name = form.querySelector('[name="name"]')?.value.trim() || 'Guest';
      const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Not provided';
      const eventType = form.querySelector('[name="event_type"]')?.value || 'General Enquiry';
      const eventDate = form.querySelector('[name="event_date"]')?.value || 'To be decided';
      const guestCount = form.querySelector('[name="guest_count"]')?.value || 'Not specified';
      const city = form.querySelector('[name="city"]')?.value.trim() || cfg.location;
      const message = form.querySelector('[name="message"]')?.value.trim() || 'No additional notes.';

      const subject = encodeURIComponent(`Event Enquiry for ${eventType} - ${name}`);
      const body = encodeURIComponent(
`Hello Jai Jinendra Events Team,

Here are my event enquiry details:

Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${eventDate}
Expected Guests: ${guestCount}
City / Location: ${city}

Notes / Requirements:
${message}

Looking forward to connecting with you.

Warm regards,
${name}`
      );

      window.location.href = `mailto:${cfg.email}?subject=${subject}&body=${body}`;
    });
  }
}

/**
 * Handle URL Query parameters for Service Preselection (e.g. contact.html?service=wedding-decorations)
 */
function initServicePreselection() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceParam = urlParams.get('service');
  if (!serviceParam) return;

  const eventTypeDropdown = document.querySelector('[name="event_type"]');
  if (!eventTypeDropdown || typeof SITE_CONFIG === 'undefined') return;

  const matchingService = SITE_CONFIG.services.find(s => s.id === serviceParam);
  if (matchingService) {
    // Look for matching option value or text
    for (let i = 0; i < eventTypeDropdown.options.length; i++) {
      if (eventTypeDropdown.options[i].text.toLowerCase().includes(matchingService.title.toLowerCase()) ||
          eventTypeDropdown.options[i].value.toLowerCase().includes(matchingService.id.toLowerCase())) {
        eventTypeDropdown.selectedIndex = i;
        break;
      }
    }
  }
}

