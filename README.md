# Jai Jinendra Events — Official Website

A modern, mobile-first, high-performance website for **Jai Jinendra Events** (Established 2026), built with **Semantic HTML5, Tailwind CSS CLI, and Vanilla JavaScript**.

Designed with a warm, royal Indian celebratory palette (Royal Maroon & Imperial Gold), smooth animations, mobile navigation drawer, interactive category-filtered gallery with fullscreen lightbox, and instant WhatsApp inquiry dispatching.

---

## 📁 Project Directory Structure

```text
JJ_Event/
├── index.html              # Home page (Hero slider, stats, services teaser, gallery teaser, testimonials, CTA)
├── about.html              # About page (Our story since 2026, 4-step workflow, core values)
├── services.html           # Full showcase of all 13 dedicated event services
├── gallery.html            # Category-filtered photo gallery with fullscreen lightbox modal
├── contact.html            # Event inquiry form with instant WhatsApp & Email generation + Map
│
├── js/
│   ├── config.js           # ⚙️ CENTRAL SETTINGS: Edit phone, email, WhatsApp, services & gallery items here!
│   └── script.js           # Mobile drawer, lightbox modal, filter tabs, hero carousel, form handlers
│
├── src/
│   └── input.css           # Tailwind base, Google Fonts, and custom festive utility classes
│
├── css/
│   └── style.css           # Compiled, production-ready minified Tailwind CSS output
│
├── public/
│   ├── gallery/            # 📸 Photo folders for your Google Drive photos
│   │   ├── baby-shower/    # Baby Shower & Dohale Jevan photos
│   │   ├── birthday/       # Birthday & Milestone Jubilee photos
│   │   ├── corporate/      # Corporate & Summit photos
│   │   ├── haldi/          # Haldi & Mehndi photos
│   │   ├── pre-pregnancy/  # Pre-Pregnancy & Maternity photos
│   │   ├── pre-wedding/    # Pre-Wedding & Royal Portraits photos
│   │   └── wedding/        # Wedding Mandap & Grand Ceremony photos
│   └── images/             # Additional branding images and icons
│
├── tailwind.config.js      # Tailwind CSS theme configuration (custom colors, fonts, shadows)
├── package.json            # NPM build scripts & Tailwind dependencies
└── README.md               # Documentation & maintenance guide
```

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- **Node.js** (v18 or higher) installed on your system.

### 2. Install Dependencies
```bash
npm install
```

### 3. Build & Watch Tailwind CSS
- **During Development (Auto-recompile on save):**
  ```bash
  npm run dev
  ```
- **For Production Minified Build:**
  ```bash
  npm run build
  ```
- **Local Live Preview Server:**
  ```bash
  npm run serve
  ```
  Or simply open `index.html` in your web browser (or use the VS Code "Live Server" extension).

---

## ⚙️ How to Update Business Details (No HTML editing needed!)

All business information, contact details, services list, and gallery photos are centralized in **`js/config.js`**. 

Open `js/config.js` and edit the `SITE_CONFIG` object:

```javascript
const SITE_CONFIG = {
  business: {
    name: "Jai Jinendra Events",
    establishedYear: 2026,
    email: "jaijinedraevents@gmail.com",
    phone: "+91 98765 43210",              // <--- EDIT YOUR PHONE NUMBER
    phoneDisplay: "+91 98765 43210",
    whatsappNumber: "919876543210",         // <--- NUMBERS ONLY (with country code, no + or spaces)
    instagramHandle: "jaijinendraevents",
    instagramUrl: "https://instagram.com/jaijinendraevents",
    location: "Pune / Mumbai & Across India", // <--- EDIT YOUR CITY / SERVICE REGION
    serviceArea: "Maharashtra & Destination Events Pan-India",
  },
  // ...
};
```

---

## 📸 How to Add Your Event Photos from Google Drive

1. Download the photos from your shared Google Drive category folders.
2. Drop the photo files into the matching subfolder in `public/gallery/`:
   - `public/gallery/wedding/`
   - `public/gallery/haldi/`
   - `public/gallery/pre-wedding/`
   - `public/gallery/baby-shower/`
   - `public/gallery/pre-pregnancy/`
   - `public/gallery/birthday/`
   - `public/gallery/corporate/`
3. Open `js/config.js` and update the `galleryItems` array with your filenames or URLs:
   ```javascript
   {
     id: "w1",
     category: "wedding",
     title: "Royal Crimson Mandap",
     description: "Temple style floral mandap with ambient fairy lighting.",
     image: "./public/gallery/wedding/my-photo-1.jpg"
   }
   ```
4. Refresh `gallery.html` to see the new photos in the gallery and fullscreen lightbox.

> **Tip for Fast Loading:** Compress images to under 400 KB each using [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app) before adding them to keep page loading blazing fast on mobile devices.

---

## 📋 The 13 Featured Services

The site comes pre-configured with all 13 starting services:
1. **Wedding Decorations & Full Wedding Event Management**
2. **Baby Shower & Dohale Jevan**
3. **Birthday Events & Milestone Jubilees**
4. **Engagement Ceremonies**
5. **Corporate Events & Conferences**
6. **Catering Services (Pure Jain & All Types)**
7. **Anchoring / MC Services**
8. **LED Wall Setup (P2.5 High Definition)**
9. **Crane Services (Jimmy Jib 24-40ft)**
10. **Drone Services (4K Aerial Cinematography)**
11. **YouTube & Facebook Live Streaming**
12. **Photography & Cinematography**
13. **Reels / Short-Form Video Content**

---

## 💬 WhatsApp & Email Inquiry Dispatcher

- When a client fills out the inquiry form on `contact.html`, clicking **"Send Inquiry via WhatsApp"** automatically generates a clean, structured message (including client name, phone, selected event type, date, guest count, venue, and special notes) and opens WhatsApp directly to chat with `+91 98765 43210`.
- An alternative **"Send Inquiry via Email"** button prepares a pre-filled `mailto:` message.

### Optional Future Backend Upgrades:
If you later wish to receive emails directly in your inbox without opening an email client:
- **Formspree:** Change `<form id="event-inquiry-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
- **EmailJS:** Add the EmailJS script tag to `contact.html` and trigger `emailjs.sendForm(...)` in `script.js`.

---

## 🌐 Deployment Guide

### Option 1: Netlify (Recommended - 2 Minutes)
1. Drag and drop the `JJ_Event` folder into [Netlify Drop](https://app.netlify.com/drop).
2. Or connect your GitHub repository and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `.` (root)

### Option 2: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or import via GitHub on [vercel.com](https://vercel.com).
2. Deploy as a static site.

### Option 3: Traditional CPanel / Apache / Nginx
1. Run `npm run build` locally.
2. Upload all files and folders (`index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`, `css/`, `js/`, `public/`) to your hosting server's `public_html` directory.

---

© 2026 **Jai Jinendra Events**. All Rights Reserved.

