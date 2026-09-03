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
 * 6. Contact form -> WhatsApp instant generator & mailto dispatcher
 * 7. Service pre-selection link handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initDynamicConfig();
  initNavigation();
  initScrollEffects();
  initHeroSlider();
  initGalleryAndLightbox();
  initContactForm();
  initServicePreselection();
});

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
      const defaultMsg = encodeURIComponent(`Hello Jai Jinendra Events! I would like to inquire about event management services for an upcoming event.`);
      el.setAttribute('href', `https://wa.me/${cfg.whatsappNumber}?text=${defaultMsg}`);
    } else if (type === 'phone') {
      el.setAttribute('href', `tel:${cfg.phone.replace(/[^0-9+]/g, '')}`);
    } else if (type === 'email') {
      el.setAttribute('href', `mailto:${cfg.email}?subject=Event%20Inquiry%20-%20Jai%20Jinendra%20Events`);
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
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Sticky Header elevation on scroll
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    });
  }

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
      ? SITE_CONFIG.galleryItems 
      : SITE_CONFIG.galleryItems.filter(item => item.category.toLowerCase() === category.toLowerCase());

    activeGalleryList = filtered;

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `
        <div class="col-span-full text-center py-16">
          <div class="inline-flex p-4 rounded-full bg-gold-50 text-gold-600 mb-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          </div>
          <h3 class="text-xl font-serif text-charcoal-800 mb-2">Photos Coming Soon</h3>
          <p class="text-stone-500 text-sm max-w-md mx-auto">We are updating high-resolution photographs for this category. Stay tuned or inquire with our team directly!</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-item reveal-on-scroll relative group overflow-hidden rounded-2xl shadow-card bg-stone-100 cursor-pointer break-inside-avoid mb-6';
      card.setAttribute('data-category', item.category);
      card.setAttribute('data-index', index);

      // Category display name
      const catObj = SITE_CONFIG.galleryCategories.find(c => c.id === item.category);
      const catName = catObj ? catObj.name : item.category;

      card.innerHTML = `
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy" 
          class="w-full h-auto block group-hover:scale-105 transition-transform duration-700 ease-out"
          onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80';"
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
      const cat = tab.getAttribute('data-category');
      
      filterTabs.forEach(t => {
        t.classList.remove('bg-primary-800', 'text-white', 'shadow-maroon');
        t.classList.add('bg-white', 'text-charcoal-700', 'hover:bg-gold-50', 'border', 'border-gold-200');
      });

      tab.classList.add('bg-primary-800', 'text-white', 'shadow-maroon');
      tab.classList.remove('bg-white', 'text-charcoal-700', 'hover:bg-gold-50', 'border', 'border-gold-200');

      renderGallery(cat);
    });
  });

  // Initial render
  renderGallery('all');

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

  function updateLightboxContent() {
    const item = activeGalleryList[currentLightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
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
 * Contact & Inquiry Form with instant WhatsApp formatter and Mailto dispatcher
 */
function initContactForm() {
  const form = document.getElementById('event-inquiry-form');
  if (!form || typeof SITE_CONFIG === 'undefined') return;

  const cfg = SITE_CONFIG.business;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]')?.value.trim() || 'Guest';
    const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Not provided';
    const eventType = form.querySelector('[name="event_type"]')?.value || 'General Inquiry';
    const eventDate = form.querySelector('[name="event_date"]')?.value || 'To be decided';
    const guestCount = form.querySelector('[name="guest_count"]')?.value || 'Not specified';
    const city = form.querySelector('[name="city"]')?.value.trim() || cfg.location;
    const message = form.querySelector('[name="message"]')?.value.trim() || 'No additional notes.';

    // Construct formatted WhatsApp message
    const waMessage = 
`✨ *NEW EVENT INQUIRY - JAI JINENDRA EVENTS* ✨

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
    const originalText = submitBtn ? submitBtn.innerHTML : 'Send Inquiry';

    if (submitBtn) {
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Opening WhatsApp...
      `;
    }

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      if (submitBtn) submitBtn.innerHTML = originalText;
    }, 400);
  });

  // Mailto fallback button handler
  const mailtoBtn = document.getElementById('send-email-fallback-btn');
  if (mailtoBtn) {
    mailtoBtn.addEventListener('click', () => {
      const name = form.querySelector('[name="name"]')?.value.trim() || 'Guest';
      const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Not provided';
      const eventType = form.querySelector('[name="event_type"]')?.value || 'General Inquiry';
      const eventDate = form.querySelector('[name="event_date"]')?.value || 'To be decided';
      const guestCount = form.querySelector('[name="guest_count"]')?.value || 'Not specified';
      const city = form.querySelector('[name="city"]')?.value.trim() || cfg.location;
      const message = form.querySelector('[name="message"]')?.value.trim() || 'No additional notes.';

      const subject = encodeURIComponent(`Event Inquiry for ${eventType} - ${name}`);
      const body = encodeURIComponent(
`Hello Jai Jinendra Events Team,

Here are my event inquiry details:

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

