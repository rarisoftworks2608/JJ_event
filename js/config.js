/**
 * ===================================================================
 * JAI JINENDRA EVENTS - CENTRAL CONFIGURATION FILE
 * ===================================================================
 * 
 * Update your business details, contact information, services, and 
 * gallery items in this file. You do NOT need to touch HTML markup 
 * to change phone numbers, email, or services!
 */

const SITE_CONFIG = {
  // Business Core Information
  business: {
    name: "Jai Jinendra Events",
    shortName: "JJ Events",
    establishedYear: 2026,
    tagline: "Creating Timeless Celebrations & Royal Memories",
    subTagline: "From grand wedding decors and cinematic drone coverage to high-energy birthdays and seamless corporate affairs, we bring your dream events to life.",
    email: "jaijinedraevents@gmail.com",
    phone: "+91 90217 02266", // Update with your actual phone number
    phoneDisplay: "+91 90217 02266",
    whatsappNumber: "919021702266", // Phone number without '+' or spaces for WhatsApp API
    instagramHandle: "jaijinendraevents",
    instagramUrl: "https://instagram.com/jaijinendraevents",
    facebookUrl: "https://facebook.com/jaijinendraevents",
    youtubeUrl: "https://youtube.com/@jaijinendraevents",
    location: "Pune / Mumbai & Across India", // Update with your city or service area
    serviceArea: "Maharashtra, Goa & Destination Events Pan-India",
    address: "Shanta Kanta Niwas, Flat No. 305, Gehlot Building, Shivshambhonagar, Kondhwa BK, Pune, 411048.",
    googleMapsEmbedUrl: "https://www.google.com/maps?q=Shanta%20Kanta%20Niwas%2C%20Flat%20No.%20305%2C%20Gehlot%20Building%2C%20Shivshambhonagar%2C%20Kondhwa%20BK%2C%20Pune%2C%20411048&output=embed",
    operatingHours: "Mon - Sun: 9:00 AM - 9:00 PM (IST)",
  },

  // Key Stats Counter
  stats: [
    { label: "Grand Events Planned", value: "150+" },
    { label: "Happy Families", value: "100%" },
    { label: "Curated Services", value: "13+" },
    { label: "Established", value: "2026" }
  ],

  // 13 Services featured on the website
  services: [
    {
      id: "wedding-decorations",
      title: "Wedding Decorations & Full Event Management",
      shortDesc: "Royal mandap setups, floral themes, welcoming entry passages, and end-to-end luxury wedding coordination.",
      icon: "rings-wedding",
      category: "Wedding",
      featured: true,
      features: [
        "Traditional & modern royal mandap designs",
        "Varmala stage & hydraulic/drone concepts",
        "Grand welcoming entryways & pathway floral decor",
        "Complete guest hospitality & venue coordination"
      ]
    },
    {
      id: "baby-shower",
      title: "Baby Shower Celebrations",
      shortDesc: "Whimsical pastels, traditional godh bharai setups, custom floral cradle decors, and joyous family photo corners.",
      icon: "baby-carriage",
      category: "Family",
      featured: true,
      features: [
        "Godh Bharai / Dohale Jevan traditional themes",
        "Custom pastel balloon & fresh floral backdrops",
        "Mom-to-be throne & photo booth props",
        "Engaging games & family welcoming rituals"
      ]
    },
    {
      id: "birthday-events",
      title: "Birthday Events",
      shortDesc: "Themed birthday extravaganzas for toddlers, teens, and milestone adult celebrations with bespoke backdrops.",
      icon: "cake-candles",
      category: "Celebration",
      featured: true,
      features: [
        "Custom 3D character backdrops & neon signage",
        "Balloon art, balloon arches & confetti cannons",
        "Magicians, game hosts, tattoo artists & mascots",
        "Cake cutting special stage setup & sound"
      ]
    },
    {
      id: "engagement",
      title: "Engagement Ceremonies",
      shortDesc: "Romantic ring ceremony aesthetics, bespoke floral arches, fairy light canopies, and mood lighting.",
      icon: "gem",
      category: "Wedding",
      featured: true,
      features: [
        "Exclusive ring tray presentation setups",
        "Elegant floral backdrop & couple seating",
        "Ambient stage lighting & cold pyro effects",
        "Custom couple name monogram & signage"
      ]
    },
    {
      id: "corporate-events",
      title: "Corporate Events",
      shortDesc: "Polished conferences, annual award galas, product launches, dealer meets, and team-building summits.",
      icon: "building",
      category: "Corporate",
      featured: true,
      features: [
        "High-definition AV projection & acoustics",
        "Professional stage, podium & truss rigging",
        "Delegate registration desk & badging setup",
        "Award night lighting, trophies & live relay"
      ]
    },
    {
      id: "catering-services",
      title: "Catering Services (All Types)",
      shortDesc: "Authentic Jain cuisine, traditional Rajasthani/Gujarati thalis, North/South Indian delicacies, and live global counters.",
      icon: "utensils",
      category: "Hospitality",
      featured: true,
      features: [
        "Pure vegetarian & 100% authentic Jain catering",
        "Live chaat, mocktail, Italian & oriental counters",
        "Royal buffet presentation with brass/copper chafers",
        "Trained uniform staff & hygienic food stations"
      ]
    },
    {
      id: "anchoring-mc",
      title: "Anchoring / MC Services",
      shortDesc: "Dynamic, multilingual masters of ceremonies to host Sangeet nights, weddings, and formal corporate banquets.",
      icon: "microphone",
      category: "Entertainment",
      featured: false,
      features: [
        "Bilingual / Multilingual anchors (Hindi, English, Gujarati, Marathi)",
        "Crowd engaging Sangeet & family games",
        "Protocol-trained corporate MCs",
        "Seamless event flow & timeline moderation"
      ]
    },
    {
      id: "led-wall-setup",
      title: "LED Wall Setup",
      shortDesc: "Ultra-high resolution P2/P3 indoor and outdoor LED video walls for crystal clear visuals and live camera feeds.",
      icon: "tv",
      category: "Technical",
      featured: false,
      features: [
        "Seamless P2.5 & P3 outdoor/indoor LED displays",
        "Dynamic stage backdrop visual graphics & countdowns",
        "Split-screen live camera feeds & slide presentations",
        "Custom video switcher & technical operators"
      ]
    },
    {
      id: "crane-services",
      title: "Crane Services",
      shortDesc: "Heavy-duty Jimmy Jib / camera crane setups for grand sweeping bird's-eye angles of Varmala, stages, and crowds.",
      icon: "camera-rotate",
      category: "Technical",
      featured: false,
      features: [
        "24ft to 40ft Jimmy Jib crane setups",
        "Smooth sweeping 360-degree panoramic shots",
        "Live feed integration directly to LED walls",
        "Experienced crane camera operators"
      ]
    },
    {
      id: "drone-services",
      title: "Drone Services",
      shortDesc: "Licensed aerial 4K drone videography and photography for cinematic aerial entries, venue coverage, and processions.",
      icon: "plane",
      category: "Technical",
      featured: true,
      features: [
        "4K Ultra-HD cinematic aerial footage",
        "Baraat & venue bird's eye view coverage",
        "Day and night low-light aerial videography",
        "Certified, safety-first remote pilots"
      ]
    },
    {
      id: "live-streaming",
      title: "YouTube & Facebook Live Streaming",
      shortDesc: "Multi-camera broadcast-quality live streaming for distant family and friends across the globe with low latency.",
      icon: "video",
      category: "Technical",
      featured: false,
      features: [
        "Multi-camera live switching with audio mixing",
        "Dedicated bonded high-speed cellular internet link",
        "Custom graphics, photo overlays & family names",
        "Private or public YouTube & Facebook stream links"
      ]
    },
    {
      id: "photography-cinematography",
      title: "Photography & Cinematography",
      shortDesc: "Candid photography, traditional albums, and Bollywood-style cinematic teaser films crafted with passion.",
      icon: "camera",
      category: "Media",
      featured: true,
      features: [
        "Award-winning candid & portrait photographers",
        "Cinematic wedding teaser & 4K highlight film",
        "Luxury leatherette flush-mount photo albums",
        "Traditional continuous ceremony coverage"
      ]
    },
    {
      id: "reels-content",
      title: "Reels / Short-Form Video Content",
      shortDesc: "Same-day social media reel creators delivering trendy, viral Instagram reels right during your event.",
      icon: "mobile-screen",
      category: "Media",
      featured: true,
      features: [
        "Dedicated on-site reel creator & mobile videographer",
        "Same-day or next-day viral reel delivery",
        "Trending music curation & aesthetic color grading",
        "Collaborator-ready tags for bride, groom & guests"
      ]
    }
  ],

  // Gallery categories and photo items
  // NOTE FOR USER: Add your photos to /public/gallery/<category>/ and list their filenames below!
  galleryCategories: [
    { id: "all", name: "All Celebrations" },
    { id: "wedding", name: "Wedding", folder: "wedding" },
    { id: "haldi", name: "Haldi & Mehndi", folder: "haldi" },
    { id: "pre-wedding", name: "Pre-Wedding", folder: "pre-wedding" },
    { id: "baby-shower", name: "Baby Shower", folder: "baby-shower" },
    { id: "pre-pregnancy", name: "Pre-Pregnancy", folder: "pre-pregnancy" },
    { id: "birthday", name: "Birthday", folder: "birthday" },
    { id: "corporate", name: "Corporate", folder: "corporate" }
  ],

  galleryItems: [
    {
      id: "w1",
      category: "wedding",
      title: "Royal Wedding Mandap",
      description: "Grand floral mandap architecture styled for a traditional Indian wedding ceremony.",
      image: "./public/gallery/wedding/012.jpg"
    },
    {
      id: "w2",
      category: "wedding",
      title: "Wedding Ceremony Highlights",
      description: "Candid moments captured during the sacred wedding rituals and celebrations.",
      image: "./public/gallery/wedding/013.jpg"
    },
    {
      id: "w3",
      category: "wedding",
      title: "Grand Wedding Decor",
      description: "Elegant thematic decor and staging crafted for a royal wedding celebration.",
      image: "./public/gallery/wedding/05.jpg"
    },
    {
      id: "w4",
      category: "wedding",
      title: "Varmala Ceremony Moment",
      description: "The joyous garland exchange ceremony between the bride and groom.",
      image: "./public/gallery/wedding/07.jpg"
    },
    {
      id: "w5",
      category: "wedding",
      title: "Wedding Stage Setup",
      description: "Custom stage design with floral backdrops and ambient lighting for the couple.",
      image: "./public/gallery/wedding/09.jpg"
    },
    {
      id: "w6",
      category: "wedding",
      title: "Bridal Entry Celebration",
      description: "A memorable entry moment styled with music, lighting, and floral pathways.",
      image: "./public/gallery/wedding/IMG-20250714-WA0002.jpg"
    },
    {
      id: "w7",
      category: "wedding",
      title: "Traditional Wedding Rituals",
      description: "Time-honored wedding customs captured with warmth and authenticity.",
      image: "./public/gallery/wedding/IMG-20250714-WA0004.jpg"
    },
    {
      id: "w8",
      category: "wedding",
      title: "Wedding Reception Decor",
      description: "Sophisticated reception styling designed for an unforgettable evening.",
      image: "./public/gallery/wedding/IMG-20250714-WA0005.jpg"
    },
    {
      id: "w9",
      category: "wedding",
      title: "Royal Wedding Mandap 2",
      description: "Grand floral mandap architecture styled for a traditional Indian wedding ceremony.",
      image: "./public/gallery/wedding/IMG-20250714-WA0006.jpg"
    },
    {
      id: "w10",
      category: "wedding",
      title: "Wedding Ceremony Highlights 2",
      description: "Candid moments captured during the sacred wedding rituals and celebrations.",
      image: "./public/gallery/wedding/IMG-20250714-WA0013.jpg"
    },
    {
      id: "w11",
      category: "wedding",
      title: "Grand Wedding Decor 2",
      description: "Elegant thematic decor and staging crafted for a royal wedding celebration.",
      image: "./public/gallery/wedding/IMG-20250714-WA0029.jpg"
    },
    {
      id: "w12",
      category: "wedding",
      title: "Varmala Ceremony Moment 2",
      description: "The joyous garland exchange ceremony between the bride and groom.",
      image: "./public/gallery/wedding/IMG-20250714-WA0031.jpg"
    },
    {
      id: "w13",
      category: "wedding",
      title: "Wedding Stage Setup 2",
      description: "Custom stage design with floral backdrops and ambient lighting for the couple.",
      image: "./public/gallery/wedding/IMG-20250714-WA0032.jpg"
    },
    {
      id: "w14",
      category: "wedding",
      title: "Bridal Entry Celebration 2",
      description: "A memorable entry moment styled with music, lighting, and floral pathways.",
      image: "./public/gallery/wedding/IMG-20250714-WA0033.jpg"
    },
    {
      id: "w15",
      category: "wedding",
      title: "Traditional Wedding Rituals 2",
      description: "Time-honored wedding customs captured with warmth and authenticity.",
      image: "./public/gallery/wedding/IMG-20250714-WA0034.jpg"
    },
    {
      id: "w16",
      category: "wedding",
      title: "Wedding Reception Decor 2",
      description: "Sophisticated reception styling designed for an unforgettable evening.",
      image: "./public/gallery/wedding/IMG-20250714-WA0035.jpg"
    },
    {
      id: "w17",
      category: "wedding",
      title: "Royal Wedding Mandap 3",
      description: "Grand floral mandap architecture styled for a traditional Indian wedding ceremony.",
      image: "./public/gallery/wedding/IMG-20250714-WA0047.jpg"
    },
    {
      id: "w18",
      category: "wedding",
      title: "Wedding Ceremony Highlights 3",
      description: "Candid moments captured during the sacred wedding rituals and celebrations.",
      image: "./public/gallery/wedding/IMG-20250714-WA0048.jpg"
    },
    {
      id: "w19",
      category: "wedding",
      title: "Grand Wedding Decor 3",
      description: "Elegant thematic decor and staging crafted for a royal wedding celebration.",
      image: "./public/gallery/wedding/IMG-20250714-WA0058.jpg"
    },
    {
      id: "w20",
      category: "wedding",
      title: "Varmala Ceremony Moment 3",
      description: "The joyous garland exchange ceremony between the bride and groom.",
      image: "./public/gallery/wedding/IMG-20250714-WA0059.jpg"
    },
    {
      id: "w21",
      category: "wedding",
      title: "Wedding Stage Setup 3",
      description: "Custom stage design with floral backdrops and ambient lighting for the couple.",
      image: "./public/gallery/wedding/IMG-20250714-WA0061.jpg"
    },
    {
      id: "w22",
      category: "wedding",
      title: "Bridal Entry Celebration 3",
      description: "A memorable entry moment styled with music, lighting, and floral pathways.",
      image: "./public/gallery/wedding/IMG-20250714-WA0066.jpg"
    },
    {
      id: "w23",
      category: "wedding",
      title: "Traditional Wedding Rituals 3",
      description: "Time-honored wedding customs captured with warmth and authenticity.",
      image: "./public/gallery/wedding/IMG-20250714-WA0070.jpg"
    },
    {
      id: "w24",
      category: "wedding",
      title: "Wedding Reception Decor 3",
      description: "Sophisticated reception styling designed for an unforgettable evening.",
      image: "./public/gallery/wedding/IMG-20250714-WA0095.jpg"
    },
    {
      id: "w25",
      category: "wedding",
      title: "Royal Wedding Mandap 4",
      description: "Grand floral mandap architecture styled for a traditional Indian wedding ceremony.",
      image: "./public/gallery/wedding/IMG-20250714-WA0097.jpg"
    },
    {
      id: "w26",
      category: "wedding",
      title: "Wedding Ceremony Highlights 4",
      description: "Candid moments captured during the sacred wedding rituals and celebrations.",
      image: "./public/gallery/wedding/IMG-20250714-WA0099.jpg"
    },
    {
      id: "w27",
      category: "wedding",
      title: "Grand Wedding Decor 4",
      description: "Elegant thematic decor and staging crafted for a royal wedding celebration.",
      image: "./public/gallery/wedding/IMG-20250714-WA0110.jpg"
    },
    {
      id: "w28",
      category: "wedding",
      title: "Varmala Ceremony Moment 4",
      description: "The joyous garland exchange ceremony between the bride and groom.",
      image: "./public/gallery/wedding/IMG-20250714-WA0112.jpg"
    },
    {
      id: "w29",
      category: "wedding",
      title: "Wedding Stage Setup 4",
      description: "Custom stage design with floral backdrops and ambient lighting for the couple.",
      image: "./public/gallery/wedding/IMG-20250714-WA0113.jpg"
    },
    {
      id: "w30",
      category: "wedding",
      title: "Bridal Entry Celebration 4",
      description: "A memorable entry moment styled with music, lighting, and floral pathways.",
      image: "./public/gallery/wedding/IMG-20250714-WA0114.jpg"
    },
    {
      id: "w31",
      category: "wedding",
      title: "Traditional Wedding Rituals 4",
      description: "Time-honored wedding customs captured with warmth and authenticity.",
      image: "./public/gallery/wedding/IMG-20250714-WA0116.jpg"
    },
    {
      id: "w32",
      category: "wedding",
      title: "Wedding Reception Decor 4",
      description: "Sophisticated reception styling designed for an unforgettable evening.",
      image: "./public/gallery/wedding/IMG-20250714-WA0118.jpg"
    },
    {
      id: "w33",
      category: "wedding",
      title: "Royal Wedding Mandap 5",
      description: "Grand floral mandap architecture styled for a traditional Indian wedding ceremony.",
      image: "./public/gallery/wedding/IMG-20250714-WA0119.jpg"
    },
    {
      id: "w34",
      category: "wedding",
      title: "Wedding Ceremony Highlights 5",
      description: "Candid moments captured during the sacred wedding rituals and celebrations.",
      image: "./public/gallery/wedding/IMG-20250714-WA0120.jpg"
    },
    {
      id: "w35",
      category: "wedding",
      title: "Grand Wedding Decor 5",
      description: "Elegant thematic decor and staging crafted for a royal wedding celebration.",
      image: "./public/gallery/wedding/IMG-20250714-WA0130.jpg"
    },
    {
      id: "w36",
      category: "wedding",
      title: "Varmala Ceremony Moment 5",
      description: "The joyous garland exchange ceremony between the bride and groom.",
      image: "./public/gallery/wedding/WhatsApp%20Image%202025-06-30%20at%2020.03.02_40cf8399.jpg"
    },
    {
      id: "h1",
      category: "haldi",
      title: "Haldi Ceremony Decor",
      description: "Vibrant yellow and marigold styling for the traditional haldi ceremony.",
      image: "./public/gallery/haldi/010.jpg"
    },
    {
      id: "h2",
      category: "haldi",
      title: "Sunshine Marigold Setup",
      description: "Bright marigold floral decor capturing the festive haldi spirit.",
      image: "./public/gallery/haldi/06.jpg"
    },
    {
      id: "h3",
      category: "haldi",
      title: "Traditional Haldi Rituals",
      description: "Family and friends coming together for the auspicious turmeric ceremony.",
      image: "./public/gallery/haldi/08.jpg"
    },
    {
      id: "h4",
      category: "haldi",
      title: "Festive Yellow Theme",
      description: "A cheerful yellow-themed setup designed for haldi celebrations.",
      image: "./public/gallery/haldi/IMG-20250714-WA0012.jpg"
    },
    {
      id: "h5",
      category: "haldi",
      title: "Family Haldi Celebration",
      description: "Warm family moments captured during the haldi festivities.",
      image: "./public/gallery/haldi/IMG-20250714-WA0014.jpg"
    },
    {
      id: "h6",
      category: "haldi",
      title: "Vibrant Ceremony Highlights",
      description: "Colorful decor and joyful energy from the haldi ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0019.jpg"
    },
    {
      id: "h7",
      category: "haldi",
      title: "Haldi Ceremony Decor 2",
      description: "Vibrant yellow and marigold styling for the traditional haldi ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0020.jpg"
    },
    {
      id: "h8",
      category: "haldi",
      title: "Sunshine Marigold Setup 2",
      description: "Bright marigold floral decor capturing the festive haldi spirit.",
      image: "./public/gallery/haldi/IMG-20250714-WA0021.jpg"
    },
    {
      id: "h9",
      category: "haldi",
      title: "Traditional Haldi Rituals 2",
      description: "Family and friends coming together for the auspicious turmeric ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0038.jpg"
    },
    {
      id: "h10",
      category: "haldi",
      title: "Festive Yellow Theme 2",
      description: "A cheerful yellow-themed setup designed for haldi celebrations.",
      image: "./public/gallery/haldi/IMG-20250714-WA0039.jpg"
    },
    {
      id: "h11",
      category: "haldi",
      title: "Family Haldi Celebration 2",
      description: "Warm family moments captured during the haldi festivities.",
      image: "./public/gallery/haldi/IMG-20250714-WA0041.jpg"
    },
    {
      id: "h12",
      category: "haldi",
      title: "Vibrant Ceremony Highlights 2",
      description: "Colorful decor and joyful energy from the haldi ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0046.jpg"
    },
    {
      id: "h13",
      category: "haldi",
      title: "Haldi Ceremony Decor 3",
      description: "Vibrant yellow and marigold styling for the traditional haldi ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0051.jpg"
    },
    {
      id: "h14",
      category: "haldi",
      title: "Sunshine Marigold Setup 3",
      description: "Bright marigold floral decor capturing the festive haldi spirit.",
      image: "./public/gallery/haldi/IMG-20250714-WA0052.jpg"
    },
    {
      id: "h15",
      category: "haldi",
      title: "Traditional Haldi Rituals 3",
      description: "Family and friends coming together for the auspicious turmeric ceremony.",
      image: "./public/gallery/haldi/IMG-20250714-WA0055.jpg"
    },
    {
      id: "h16",
      category: "haldi",
      title: "Festive Yellow Theme 3",
      description: "A cheerful yellow-themed setup designed for haldi celebrations.",
      image: "./public/gallery/haldi/WhatsApp%20Image%202025-06-30%20at%2020.03.02_fe37d1d5.jpg"
    },
    {
      id: "pw1",
      category: "pre-wedding",
      title: "Pre-Wedding Portrait Session",
      description: "Cinematic pre-wedding portraits capturing the couple's romance.",
      image: "./public/gallery/pre-wedding/TWS00556-Enhanced-NR.jpg"
    },
    {
      id: "pw2",
      category: "pre-wedding",
      title: "Romantic Couple Shoot",
      description: "Candid, romantic moments from an intimate pre-wedding photoshoot.",
      image: "./public/gallery/pre-wedding/TWS00595-Enhanced-NR.jpg"
    },
    {
      id: "pw3",
      category: "pre-wedding",
      title: "Cinematic Pre-Wedding Moment",
      description: "Story-driven pre-wedding photography with a cinematic touch.",
      image: "./public/gallery/pre-wedding/TWS00720-Enhanced-NR.jpg"
    },
    {
      id: "bs1",
      category: "baby-shower",
      title: "Traditional Godh Bharai Setup",
      description: "Classic godh bharai styling with floral and ritual elements.",
      image: "./public/gallery/baby-shower/IMG_9631.JPG"
    },
    {
      id: "bs2",
      category: "baby-shower",
      title: "Floral Cradle & Pastel Styling",
      description: "Dreamy pastel decor with a custom floral cradle centerpiece.",
      image: "./public/gallery/baby-shower/IMG_9632.JPG"
    },
    {
      id: "bs3",
      category: "baby-shower",
      title: "Family Blessing Moment",
      description: "Loved ones gathering to bless the mom-to-be during the celebration.",
      image: "./public/gallery/baby-shower/IMG_9633.JPG"
    },
    {
      id: "bs4",
      category: "baby-shower",
      title: "Custom Themed Backdrop",
      description: "A bespoke themed backdrop designed for the baby shower celebration.",
      image: "./public/gallery/baby-shower/IMG_9636.JPG"
    },
    {
      id: "bs5",
      category: "baby-shower",
      title: "Mom-to-Be Special Seating",
      description: "An elegant throne-style seating setup for the guest of honor.",
      image: "./public/gallery/baby-shower/IMG_9637.JPG"
    },
    {
      id: "bs6",
      category: "baby-shower",
      title: "Festive Welcome Entrance",
      description: "A beautifully decorated entrance welcoming guests to the celebration.",
      image: "./public/gallery/baby-shower/IMG_9640.JPG"
    },
    {
      id: "bs7",
      category: "baby-shower",
      title: "Celebration Highlights",
      description: "Joyful highlights captured throughout the baby shower festivities.",
      image: "./public/gallery/baby-shower/IMG_9642.JPG"
    },
    {
      id: "pp1",
      category: "pre-pregnancy",
      title: "Maternity Portrait Session",
      description: "Soft, elegant portraits celebrating the journey to motherhood.",
      image: "./public/gallery/pre-pregnancy/DSC00417.jpg"
    },
    {
      id: "pp2",
      category: "pre-pregnancy",
      title: "Pre-Pregnancy Photoshoot",
      description: "A gentle, styled photoshoot capturing this special milestone.",
      image: "./public/gallery/pre-pregnancy/DSC00422.jpg"
    },
    {
      id: "pp3",
      category: "pre-pregnancy",
      title: "Soft Studio Maternity Look",
      description: "Studio-styled maternity portraits with soft, flattering light.",
      image: "./public/gallery/pre-pregnancy/DSC00443.jpg"
    },
    {
      id: "pp4",
      category: "pre-pregnancy",
      title: "Outdoor Maternity Session",
      description: "Natural outdoor setting chosen for a serene maternity shoot.",
      image: "./public/gallery/pre-pregnancy/DSC00482.jpg"
    },
    {
      id: "pp5",
      category: "pre-pregnancy",
      title: "Elegant Baby Bump Portrait",
      description: "A graceful portrait celebrating the beauty of pregnancy.",
      image: "./public/gallery/pre-pregnancy/DSC00511.jpg"
    },
    {
      id: "pp6",
      category: "pre-pregnancy",
      title: "Golden Hour Maternity Shoot",
      description: "Warm golden-hour tones captured during an outdoor session.",
      image: "./public/gallery/pre-pregnancy/DSC00560.jpg"
    },
    {
      id: "pp7",
      category: "pre-pregnancy",
      title: "Candid Maternity Moment",
      description: "An authentic, candid moment from the maternity photoshoot.",
      image: "./public/gallery/pre-pregnancy/DSC00567.jpg"
    },
    {
      id: "pp8",
      category: "pre-pregnancy",
      title: "Dreamy Maternity Styling",
      description: "Thoughtfully styled maternity portraits with a dreamy aesthetic.",
      image: "./public/gallery/pre-pregnancy/DSC00587.jpg"
    },
    {
      id: "pp9",
      category: "pre-pregnancy",
      title: "Maternity Portrait Session 2",
      description: "Soft, elegant portraits celebrating the journey to motherhood.",
      image: "./public/gallery/pre-pregnancy/DSC00595.jpg"
    },
    {
      id: "pp10",
      category: "pre-pregnancy",
      title: "Pre-Pregnancy Photoshoot 2",
      description: "A gentle, styled photoshoot capturing this special milestone.",
      image: "./public/gallery/pre-pregnancy/DSC00604.jpg"
    },
    {
      id: "pp11",
      category: "pre-pregnancy",
      title: "Soft Studio Maternity Look 2",
      description: "Studio-styled maternity portraits with soft, flattering light.",
      image: "./public/gallery/pre-pregnancy/DSC00607.jpg"
    },
    {
      id: "pp12",
      category: "pre-pregnancy",
      title: "Outdoor Maternity Session 2",
      description: "Natural outdoor setting chosen for a serene maternity shoot.",
      image: "./public/gallery/pre-pregnancy/DSC00621.jpg"
    },
    {
      id: "pp13",
      category: "pre-pregnancy",
      title: "Elegant Baby Bump Portrait 2",
      description: "A graceful portrait celebrating the beauty of pregnancy.",
      image: "./public/gallery/pre-pregnancy/DSC00633.jpg"
    },
    {
      id: "pp14",
      category: "pre-pregnancy",
      title: "Golden Hour Maternity Shoot 2",
      description: "Warm golden-hour tones captured during an outdoor session.",
      image: "./public/gallery/pre-pregnancy/DSC00636.jpg"
    },
    {
      id: "pp15",
      category: "pre-pregnancy",
      title: "Candid Maternity Moment 2",
      description: "An authentic, candid moment from the maternity photoshoot.",
      image: "./public/gallery/pre-pregnancy/DSC00644.jpg"
    },
    {
      id: "pp16",
      category: "pre-pregnancy",
      title: "Dreamy Maternity Styling 2",
      description: "Thoughtfully styled maternity portraits with a dreamy aesthetic.",
      image: "./public/gallery/pre-pregnancy/DSC00650.jpg"
    },
    {
      id: "pp17",
      category: "pre-pregnancy",
      title: "Maternity Portrait Session 3",
      description: "Soft, elegant portraits celebrating the journey to motherhood.",
      image: "./public/gallery/pre-pregnancy/DSC00663.jpg"
    },
    {
      id: "pp18",
      category: "pre-pregnancy",
      title: "Pre-Pregnancy Photoshoot 3",
      description: "A gentle, styled photoshoot capturing this special milestone.",
      image: "./public/gallery/pre-pregnancy/DSC00676.jpg"
    },
    {
      id: "pp19",
      category: "pre-pregnancy",
      title: "Soft Studio Maternity Look 3",
      description: "Studio-styled maternity portraits with soft, flattering light.",
      image: "./public/gallery/pre-pregnancy/DSC00681.jpg"
    },
    {
      id: "pp20",
      category: "pre-pregnancy",
      title: "Outdoor Maternity Session 3",
      description: "Natural outdoor setting chosen for a serene maternity shoot.",
      image: "./public/gallery/pre-pregnancy/DSC00696.jpg"
    },
    {
      id: "pp21",
      category: "pre-pregnancy",
      title: "Elegant Baby Bump Portrait 3",
      description: "A graceful portrait celebrating the beauty of pregnancy.",
      image: "./public/gallery/pre-pregnancy/DSC00701.jpg"
    },
    {
      id: "pp22",
      category: "pre-pregnancy",
      title: "Golden Hour Maternity Shoot 3",
      description: "Warm golden-hour tones captured during an outdoor session.",
      image: "./public/gallery/pre-pregnancy/DSC00705.jpg"
    },
    {
      id: "pp23",
      category: "pre-pregnancy",
      title: "Candid Maternity Moment 3",
      description: "An authentic, candid moment from the maternity photoshoot.",
      image: "./public/gallery/pre-pregnancy/DSC00711.jpg"
    },
    {
      id: "pp24",
      category: "pre-pregnancy",
      title: "Dreamy Maternity Styling 3",
      description: "Thoughtfully styled maternity portraits with a dreamy aesthetic.",
      image: "./public/gallery/pre-pregnancy/DSC00717.jpg"
    },
    {
      id: "pp25",
      category: "pre-pregnancy",
      title: "Maternity Portrait Session 4",
      description: "Soft, elegant portraits celebrating the journey to motherhood.",
      image: "./public/gallery/pre-pregnancy/DSC00723.jpg"
    },
    {
      id: "pp26",
      category: "pre-pregnancy",
      title: "Pre-Pregnancy Photoshoot 4",
      description: "A gentle, styled photoshoot capturing this special milestone.",
      image: "./public/gallery/pre-pregnancy/DSC00725.jpg"
    },
    {
      id: "pp27",
      category: "pre-pregnancy",
      title: "Soft Studio Maternity Look 4",
      description: "Studio-styled maternity portraits with soft, flattering light.",
      image: "./public/gallery/pre-pregnancy/DSC00730.jpg"
    },
    {
      id: "pp28",
      category: "pre-pregnancy",
      title: "Outdoor Maternity Session 4",
      description: "Natural outdoor setting chosen for a serene maternity shoot.",
      image: "./public/gallery/pre-pregnancy/DSC00734.jpg"
    },
    {
      id: "pp29",
      category: "pre-pregnancy",
      title: "Elegant Baby Bump Portrait 4",
      description: "A graceful portrait celebrating the beauty of pregnancy.",
      image: "./public/gallery/pre-pregnancy/DSC00737.jpg"
    },
    {
      id: "pp30",
      category: "pre-pregnancy",
      title: "Golden Hour Maternity Shoot 4",
      description: "Warm golden-hour tones captured during an outdoor session.",
      image: "./public/gallery/pre-pregnancy/DSC00742.jpg"
    },
    {
      id: "pp31",
      category: "pre-pregnancy",
      title: "Candid Maternity Moment 4",
      description: "An authentic, candid moment from the maternity photoshoot.",
      image: "./public/gallery/pre-pregnancy/DSC00746.jpg"
    },
    {
      id: "pp32",
      category: "pre-pregnancy",
      title: "Dreamy Maternity Styling 4",
      description: "Thoughtfully styled maternity portraits with a dreamy aesthetic.",
      image: "./public/gallery/pre-pregnancy/DSC00754.jpg"
    },
    {
      id: "pp33",
      category: "pre-pregnancy",
      title: "Maternity Portrait Session 5",
      description: "Soft, elegant portraits celebrating the journey to motherhood.",
      image: "./public/gallery/pre-pregnancy/DSC00759.jpg"
    },
    {
      id: "pp34",
      category: "pre-pregnancy",
      title: "Pre-Pregnancy Photoshoot 5",
      description: "A gentle, styled photoshoot capturing this special milestone.",
      image: "./public/gallery/pre-pregnancy/DSC00763.jpg"
    },
    {
      id: "pp35",
      category: "pre-pregnancy",
      title: "Soft Studio Maternity Look 5",
      description: "Studio-styled maternity portraits with soft, flattering light.",
      image: "./public/gallery/pre-pregnancy/DSC00774.jpg"
    },
    {
      id: "pp36",
      category: "pre-pregnancy",
      title: "Outdoor Maternity Session 5",
      description: "Natural outdoor setting chosen for a serene maternity shoot.",
      image: "./public/gallery/pre-pregnancy/DSC00783.jpg"
    },
    {
      id: "b1",
      category: "birthday",
      title: "Themed Birthday Decor",
      description: "Custom themed decor designed to bring the birthday vision to life.",
      image: "./public/gallery/birthday/DSC_1182.JPG"
    },
    {
      id: "b2",
      category: "birthday",
      title: "Cake Cutting Celebration",
      description: "The special cake-cutting moment surrounded by loved ones.",
      image: "./public/gallery/birthday/DSC_1184.JPG"
    },
    {
      id: "b3",
      category: "birthday",
      title: "Balloon & Backdrop Styling",
      description: "Vibrant balloon installations and a custom photo backdrop.",
      image: "./public/gallery/birthday/DSC_4102.JPG"
    },
    {
      id: "b4",
      category: "birthday",
      title: "Milestone Birthday Setup",
      description: "Elegant styling designed for a memorable milestone birthday.",
      image: "./public/gallery/birthday/DSC_4112.JPG"
    },
    {
      id: "b5",
      category: "birthday",
      title: "Festive Party Highlights",
      description: "Fun, high-energy highlights from the birthday celebration.",
      image: "./public/gallery/birthday/DSC_4113.JPG"
    },
    {
      id: "b6",
      category: "birthday",
      title: "Custom Character Theme",
      description: "A playful character-themed setup designed for the birthday star.",
      image: "./public/gallery/birthday/DSC_4115.JPG"
    },
    {
      id: "b7",
      category: "birthday",
      title: "Birthday Stage Setup",
      description: "A dedicated stage setup for cake cutting and celebrations.",
      image: "./public/gallery/birthday/DSC_4181.JPG"
    },
    {
      id: "b8",
      category: "birthday",
      title: "Joyful Family Moments",
      description: "Candid family moments captured during the birthday festivities.",
      image: "./public/gallery/birthday/DSC_4186.JPG"
    },
    {
      id: "b9",
      category: "birthday",
      title: "Themed Birthday Decor 2",
      description: "Custom themed decor designed to bring the birthday vision to life.",
      image: "./public/gallery/birthday/DSC_4531.JPG"
    },
    {
      id: "b10",
      category: "birthday",
      title: "Cake Cutting Celebration 2",
      description: "The special cake-cutting moment surrounded by loved ones.",
      image: "./public/gallery/birthday/DSC_4536.JPG"
    },
    {
      id: "b11",
      category: "birthday",
      title: "Balloon & Backdrop Styling 2",
      description: "Vibrant balloon installations and a custom photo backdrop.",
      image: "./public/gallery/birthday/DSC_4540.JPG"
    },
    {
      id: "b12",
      category: "birthday",
      title: "Milestone Birthday Setup 2",
      description: "Elegant styling designed for a memorable milestone birthday.",
      image: "./public/gallery/birthday/DSC_4549.JPG"
    },
    {
      id: "b13",
      category: "birthday",
      title: "Festive Party Highlights 2",
      description: "Fun, high-energy highlights from the birthday celebration.",
      image: "./public/gallery/birthday/DSC_4553.JPG"
    },
    {
      id: "b14",
      category: "birthday",
      title: "Custom Character Theme 2",
      description: "A playful character-themed setup designed for the birthday star.",
      image: "./public/gallery/birthday/DSC_4635.JPG"
    },
    {
      id: "b15",
      category: "birthday",
      title: "Birthday Stage Setup 2",
      description: "A dedicated stage setup for cake cutting and celebrations.",
      image: "./public/gallery/birthday/IMG_0736.JPG"
    },
    {
      id: "b16",
      category: "birthday",
      title: "Joyful Family Moments 2",
      description: "Candid family moments captured during the birthday festivities.",
      image: "./public/gallery/birthday/RNP_4121.JPG"
    },
    {
      id: "b17",
      category: "birthday",
      title: "Themed Birthday Decor 3",
      description: "Custom themed decor designed to bring the birthday vision to life.",
      image: "./public/gallery/birthday/RNP_4125.JPG"
    },
    {
      id: "b18",
      category: "birthday",
      title: "Cake Cutting Celebration 3",
      description: "The special cake-cutting moment surrounded by loved ones.",
      image: "./public/gallery/birthday/RNP_4132.JPG"
    },
    {
      id: "b19",
      category: "birthday",
      title: "Balloon & Backdrop Styling 3",
      description: "Vibrant balloon installations and a custom photo backdrop.",
      image: "./public/gallery/birthday/RNP_4218.JPG"
    },
    {
      id: "b20",
      category: "birthday",
      title: "Milestone Birthday Setup 3",
      description: "Elegant styling designed for a memorable milestone birthday.",
      image: "./public/gallery/birthday/WhatsApp%20Image%202025-08-03%20at%204.42.35%20PM.jpeg"
    },
    {
      id: "b21",
      category: "birthday",
      title: "Festive Party Highlights 3",
      description: "Fun, high-energy highlights from the birthday celebration.",
      image: "./public/gallery/birthday/WhatsApp%20Image%202025-08-03%20at%204.42.36%20PM%20(1).jpeg"
    },
    {
      id: "b22",
      category: "birthday",
      title: "Custom Character Theme 3",
      description: "A playful character-themed setup designed for the birthday star.",
      image: "./public/gallery/birthday/WhatsApp%20Image%202025-08-03%20at%204.42.36%20PM.jpeg"
    },
    {
      id: "c1",
      category: "corporate",
      title: "Corporate Event Setup",
      description: "Polished staging and production for a professional corporate event.",
      image: "./public/gallery/corporate/DSC_0826.JPG"
    },
    {
      id: "c2",
      category: "corporate",
      title: "Conference & Stage Production",
      description: "High-definition AV and stage production for a corporate gathering.",
      image: "./public/gallery/corporate/DSC_0857.JPG"
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      name: "Siddharth & Ananya Shah",
      event: "Destination Wedding & Sangeet",
      city: "Pune",
      text: "Jai Jinendra Events made our wedding feel like a royal fairy tale! The mandap floral work and the drone cinematography were simply world-class. Our guests are still raving about the arrangements.",
      rating: 5
    },
    {
      name: "Pooja & Ritesh Mehta",
      event: "Baby Shower Celebration",
      city: "Mumbai",
      text: "Every single detail of the Dohale Jevan setup was flawless. The pastel decor and flower cradle exceeded all our expectations. Thank you for making our special milestone so memorable!",
      rating: 5
    },
    {
      name: "Vikram Kothari",
      event: "Corporate Annual Gala & Awards",
      city: "Pune",
      text: "Flawless technical execution with the LED walls, sound, and MC coordination. Jai Jinendra Events handled our 500+ delegate event with total professionalism and poise.",
      rating: 5
    }
  ],

  // FAQ list
  faqs: [
    {
      q: "How early should we book our event with Jai Jinendra Events?",
      a: "For weddings and major galas, we recommend booking 2 to 6 months in advance to secure peak auspicious dates and preferred venues. However, for intimate birthdays or baby showers, we can accommodate bookings with 2 to 3 weeks' notice."
    },
    {
      q: "Do you offer customized themes and package combinations?",
      a: "Yes, 100%! Every event is tailor-made. You can select specific individual services (e.g. LED wall, Drone, Photography, Catering) or opt for end-to-end full event management."
    },
    {
      q: "Do you specialize in pure vegetarian and Jain catering?",
      a: "Absolutely. We have extensive expertise in authentic Jain food preparation (no onion, garlic, or root vegetables) as well as multi-cuisine vegetarian spreads prepared with the highest hygiene standards."
    },
    {
      q: "Do you travel for destination events outside your home city?",
      a: "Yes, our team and technical production crew travel across Maharashtra, Goa, Rajasthan, Gujarat, and destination spots across India."
    }
  ]
};

// Make available in browser global window
if (typeof window !== 'undefined') {
  window.SITE_CONFIG = SITE_CONFIG;
}

