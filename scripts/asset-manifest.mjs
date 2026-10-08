// Every Samadi Bali asset used by the site.
// key = "<group>/<name>"  ->  path under https://samadibali.com/wp-content/uploads/
// `max` = longest edge kept after optimisation (px). `alt` is written to src/content/media.ts.
// Paths listed in `fallback` are tried in order when the original 404s.

export const UPLOADS = "https://samadibali.com/wp-content/uploads/";

export const assets = {
  // Brand
  "brand/logo-green": {
    path: "2026/03/cropped-cropped-logo.png",
    max: 512,
    keepPng: true,
    alt: "Samadi Super Foods & Wellness",
  },
  "brand/logo-community": {
    path: "2025/09/iMAGE.webp",
    max: 512,
    keepPng: true,
    alt: "Samadi Self Empowerment Community",
  },

  // Home hero video poster — caption-free frame from Samadi’s “SAMADI CANGGU AMBIENCE” film (YouTube 3OPbXtf9Veg)
  "hero/video-poster": { local: true, max: 1920, alt: "Yoga in the Samadi Canggu shala" },

  // Home hero (5 pillars of the original slider)
  "hero/yoga": { path: "2025/09/SLIDER-YOGA-scaled-1.jpg", max: 2400, alt: "Yoga class in the Samadi shala, Canggu" },
  "hero/workshop": { path: "2025/09/vEGB3qISmKCXgps7VYdA__DSC6602.jpg", max: 2400, alt: "Workshop at Samadi Bali" },
  "hero/market": { path: "2026/08/DSC08478-1-scaled.jpg", max: 2400, alt: "Samadi Super Foods Market" },
  "hero/cafe": { path: "2025/09/DSC01497-scaled-1.jpg", max: 2400, alt: "Plant-based dishes at the Samadi café" },
  "hero/sunday": {
    path: "2025/09/20170507-11samadi-A6500-slog2-pro-01-2.jpg",
    max: 2400,
    alt: "Samadi Sunday Farmers Market",
  },

  // Yoga
  "yoga/shala-1": {
    path: "2026/03/DSC06649-scaled.jpg",
    max: 2000,
    alt: "Students practising in the Samadi yoga shala",
  },
  "yoga/shala-2": { path: "2026/03/DSC07425-scaled.jpg", max: 2000, alt: "Yoga class at Samadi Canggu" },
  "yoga/shala-3": { path: "2026/03/DSC08307-scaled.jpg", max: 2000, alt: "Teacher guiding a class at Samadi" },
  "yoga/shala-4": { path: "2026/03/DSC08349-scaled.jpg", max: 2000, alt: "Yoga practice in the open-air shala" },
  "yoga/shala-5": { path: "2026/03/DSC08607-scaled.jpg", max: 2000, alt: "Group class at Samadi Bali" },
  "yoga/shein-class": { path: "2026/04/shein-class.jpg", max: 2000, alt: "Shein teaching a vinyasa class" },
  "yoga/vivienne-class": { path: "2026/04/vivienne-zeng.jpg", max: 2000, alt: "Vivienne Zeng teaching at Samadi" },
  "yoga/class-6": { path: "2026/06/DSC08989-1-scaled.jpg", max: 2000, alt: "Yoga class at Samadi Canggu" },
  "yoga/class-7": { path: "2026/08/DSC09302-2-scaled.jpg", max: 2000, alt: "Practice at Samadi Bali" },
  "yoga/class-8": { path: "2026/08/DSC09864-scaled.jpg", max: 2000, alt: "Students in the Samadi shala" },
  "yoga/ashtanga-portrait": {
    path: "2025/09/DSC07985-scaled.png",
    max: 1800,
    alt: "Ashtanga Mysore practice at Samadi",
  },
  "yoga/private": { path: "2025/09/DSC04919-scaled.jpg", max: 2000, alt: "Private yoga session at Samadi" },
  "yoga/ashtanga-iyan": { path: "2025/09/DSC07983-scaled.jpg", max: 2000, alt: "Ashtanga class at Samadi" },
  "yoga/class-9": { path: "2025/09/DSC08140-scaled.jpg", max: 2000, alt: "Yoga at Samadi Bali" },
  "yoga/teachers-group": { path: "2025/09/A-scaled.jpg", max: 2000, alt: "Samadi yoga teachers" },
  "yoga/class-10": { path: "2025/09/DSC09946-scaled.jpg", max: 2000, alt: "Yoga class in Canggu" },
  "yoga/class-11": { path: "2025/09/DSC01604-scaled.jpg", max: 2000, alt: "Yoga at Samadi" },
  "yoga/class-12": { path: "2025/09/DSC03997-scaled.jpg", max: 2000, alt: "Samadi community practice" },
  "yoga/style-flyhigh": {
    path: "2026/03/flyhigh-ricardo-scaled.jpg",
    fallback: ["2026/03/flyhigh-ricardo-scaled-500x500.jpg"],
    max: 1400,
    alt: "FlyHigh yoga with Ricardo",
  },
  "yoga/style-handstand": {
    path: "2026/03/handstand-scaled.jpg",
    fallback: ["2026/03/handstand-scaled-500x500.jpg"],
    max: 1400,
    alt: "Handstand workshop",
  },
  "yoga/style-breathwork": {
    path: "2026/04/breathwork-anshu-scaled.jpg",
    fallback: ["2026/04/breathwork-anshu-scaled-500x500.jpg"],
    max: 1400,
    alt: "Breathwork session with Anshu",
  },
  "yoga/style-sound": {
    path: "2026/04/soundhealing-anshu-scaled.jpg",
    fallback: ["2026/04/soundhealing-anshu-scaled-500x500.jpg"],
    max: 1400,
    alt: "Sound healing with Anshu",
  },
  "yoga/style-bowls": {
    path: "2026/04/himalayan-singing-bowl-scaled.jpg",
    fallback: ["2026/04/himalayan-singing-bowl-scaled-500x500.jpg"],
    max: 1400,
    alt: "Himalayan singing bowls",
  },
  "yoga/schedule-image": {
    path: "2026/09/schedule-october-website-5-scaled.jpg",
    max: 2000,
    alt: "Samadi yoga schedule",
  },

  // Teacher portraits
  "teachers/vivienne-zeng": {
    path: "2026/04/vivienne-zeng2.jpg",
    fallback: ["2026/04/vivienne-zeng2-600x600.jpg"],
    max: 1000,
    alt: "Vivienne Zeng",
  },
  "teachers/shein": { path: "2026/04/shein.jpg", fallback: ["2026/04/shein-600x600.jpg"], max: 1000, alt: "Shein" },
  "teachers/ricardo": {
    path: "2026/04/RICARDO.jpg",
    fallback: ["2026/04/RICARDO-600x600.jpg"],
    max: 1000,
    alt: "Ricardo",
  },
  "teachers/regine": { path: "2026/04/REGINE.jpg", fallback: ["2026/04/REGINE-600x600.jpg"], max: 1000, alt: "Regine" },
  "teachers/juliya": {
    path: "2026/04/JULIYA.jpg",
    fallback: ["2026/04/JULIYA-600x600.jpg"],
    max: 1000,
    alt: "Juliya Light",
  },
  "teachers/anshul": { path: "2026/04/anshu.jpg", fallback: ["2026/04/anshu-600x600.jpg"], max: 1000, alt: "Anshul" },
  "teachers/muriel": { path: "2026/04/muriel.jpg", fallback: ["2026/04/muriel-600x600.jpg"], max: 1000, alt: "Muriel" },
  "teachers/liza": { path: "2026/04/LIZA.jpg", fallback: ["2026/04/LIZA-600x600.jpg"], max: 1000, alt: "Liza" },

  // Wellness practitioners
  "wellness/abdi": { path: "2026/04/abdi.jpg", max: 1600, alt: "Abdi, Balinese healer" },
  "wellness/norin": { path: "2026/04/NORIN.jpg", max: 1600, alt: "Norin, breathwork facilitator" },
  "wellness/edwin": { path: "2026/04/edwin.jpg", max: 1600, alt: "Edwin, brainspotting practitioner" },
  "wellness/raj-mohan": { path: "2026/04/RAJ-MOHAN.jpg", max: 1600, alt: "Vachaspati Raj Mohan, Ayurveda consultant" },
  "wellness/divyanga": {
    path: "2026/04/WhatsApp-Image-2026-04-01-at-18.29.46.jpeg",
    max: 1600,
    alt: "Divyanga, nutrition health coach",
  },
  "wellness/jeanne": { path: "2026/04/JEANNE.jpg", max: 1600, alt: "Jeanne, yoga therapist and recovery coach" },

  // Events & workshops
  "events/handstand-vivienne": {
    path: "2026/03/VIVIENNE-ZENG-1-scaled.jpg",
    max: 1400,
    alt: "Handstand workshop with Vivienne Zeng",
  },
  "events/sound-anshu": { path: "2026/07/Anshu-Soundhealing.jpg", max: 1400, alt: "Sound healing workshop with Anshu" },
  "events/breathwork-anshu": { path: "2026/03/DSC08383-scaled.jpg", max: 1400, alt: "Breathwork workshop with Anshu" },
  "events/meditation-lala": {
    path: "2026/07/Lala-Meditation-Soundhealing-2.jpg",
    max: 1400,
    alt: "Meditation and sound healing with Lala",
  },
  "events/breathwork-rena": {
    path: "2026/07/Rena-Breathwork-scaled.jpg",
    max: 1400,
    alt: "Conscious connected breathwork with Rena",
  },

  // Detox / Ayurveda / Theta
  "detox/ayurveda-1": { path: "2026/05/DSC00850-scaled.jpg", max: 2000, alt: "Ayurveda consultation at Samadi" },
  "detox/ayurveda-2": { path: "2026/05/DSC00893-scaled.jpg", max: 2000, alt: "Ayurvedic detox at Samadi" },
  "detox/ayurveda-3": { path: "2026/05/DSC00891-scaled.jpg", max: 2000, alt: "Detox programme at Samadi" },
  "detox/theta": { path: "2026/05/DSC00886-2.jpg", max: 2000, alt: "Theta healing session" },
  "detox/juice-1": { path: "2026/05/WhatsApp-Image-2024-08-04-at-14.08.59.jpeg", max: 1600, alt: "Fresh detox juices" },
  "detox/juice-2": {
    path: "2026/05/WhatsApp-Image-2024-08-04-at-14.09.00-scaled.jpeg",
    max: 2000,
    alt: "Detox juice programme",
  },
  "detox/juice-3": {
    path: "2026/05/WhatsApp-Image-2024-08-04-at-14.09.012.jpeg",
    max: 1600,
    alt: "Cold-pressed juices",
  },
  "detox/liver": { path: "2026/05/IMG-20240725-WA0019.jpg", max: 1000, alt: "Liver detox programme" },

  // Teacher training (WYTT at Moana, Nuanu)
  "training/moana-1": { path: "2026/06/1.jpg", max: 1809, alt: "WYTT at Moana Wellness Hub" },
  "training/moana-2": { path: "2026/06/2.jpg", max: 1809, alt: "Multistyle yoga teacher training" },
  "training/moana-3": { path: "2026/06/3.jpg", max: 1809, alt: "Yoga teacher training in Bali" },
  "training/practice": { path: "2026/07/Copy-of-A7400510-scaled.jpg", max: 2000, alt: "Teacher training practice" },
  // Caption-free stills taken from Samadi's WYTT film (2026/08/WhatsApp-Video-…mp4) with ffmpeg.
  "training/film-1": { local: true, max: 2400, alt: "Open-air dome and practice deck at Moana, Nuanu" },
  "training/film-2": { local: true, max: 2000, alt: "Teacher trainee practising on the wooden deck at Moana" },
  "training/film-3": { local: true, max: 2000, alt: "Trainee resting in a joyful pose during WYTT" },
  "training/film-4": { local: true, max: 2000, alt: "WYTT trainees sharing in a circle" },
  "training/film-5": { local: true, max: 2000, alt: "Trainees playing handpans in the Moana garden" },

  // Restaurant
  "restaurant/r-1": { path: "2026/04/DSC00398-scaled.jpg", max: 2000, alt: "Samadi restaurant garden dining" },
  "restaurant/r-2": { path: "2026/04/DSC05341-scaled.jpg", max: 2000, alt: "Plant-based dish at Samadi" },
  "restaurant/r-3": { path: "2026/04/DSC06309-scaled.jpg", max: 2000, alt: "Samadi restaurant" },
  "restaurant/r-4": { path: "2026/04/DSC07140-scaled.jpg", max: 2000, alt: "Fresh food at the Samadi café" },
  "restaurant/r-5": { path: "2026/04/DSC07217-scaled.jpg", max: 2000, alt: "Samadi café table" },
  "restaurant/r-6": { path: "2026/04/DSC6306-scaled.jpg", max: 2000, alt: "Samadi restaurant interior" },
  "restaurant/r-7": { path: "2025/10/DSC03530-scaled.jpg", max: 2000, alt: "Samadi restaurant" },
  "restaurant/r-8": { path: "2025/10/DSC05274-scaled.jpg", max: 2000, alt: "Samadi café dish" },

  // Market
  "market/m-1": { path: "2025/09/DSC03995-scaled.jpg", max: 2000, alt: "Samadi Organic Supermarket aisles" },
  "market/m-2": { path: "2025/09/DSC5511-scaled.jpg", max: 2000, alt: "Organic produce at Samadi" },
  "market/m-3": { path: "2025/09/DSC5517-1-scaled.jpg", max: 2000, alt: "Samadi market shelves" },
  "market/bread": { path: "2025/10/bread.jpg", max: 800, alt: "Samadi French bakery bread" },
  "market/homemade": { path: "2025/10/homemade.jpg", max: 800, alt: "Homemade products" },
  "market/juice": { path: "2025/10/juice.jpg", max: 800, alt: "Fresh juices" },
  "market/kitchenware": { path: "2025/10/kitchenware.jpg", max: 800, alt: "Sustainable kitchenware" },
  "market/sandwich": { path: "2025/10/sandwich.jpg", max: 800, alt: "Fresh sandwiches" },
  "market/veggie": { path: "2025/10/veggie.jpg", max: 800, alt: "Local organic vegetables" },

  // Sunday market
  "sunday/s-1": {
    path: "2026/04/20170507-9samadi-A6500-slog2-pro-01.jpg",
    max: 2000,
    alt: "Samadi Sunday Market stalls",
  },
  "sunday/s-2": { path: "2026/04/DSC03502-scaled.jpg", max: 2000, alt: "Local artisans at the Sunday Market" },
  "sunday/s-3": { path: "2026/04/DSC03813-scaled.jpg", max: 2000, alt: "Fresh produce at the Sunday Market" },

  // About
  "about/storefront": {
    path: "2026/03/backround1.jpg",
    max: 1080,
    alt: "The Samadi storefront on Jalan Padang Linjong, Canggu",
  },

  // Journal
  "journal/yoga": { path: "2024/03/DSC03884-scaled.jpg", max: 2000, alt: "Yoga in Bali" },
  "journal/wellness": { path: "2024/03/DSC07131-scaled.jpeg", max: 2000, alt: "Health and wellness at Samadi" },
  "journal/food": { path: "2024/03/DSC08337-scaled.jpg", max: 2000, alt: "Organic food at Samadi Bali" },
  "journal/shala": { path: "2024/03/DSC07979-scaled.jpg", max: 2000, alt: "The open-air shala at Samadi" },
  "journal/kitchen": { path: "2024/03/DSC02024-scaled.jpg", max: 2000, alt: "The Samadi kitchen" },
  "journal/treatment": {
    path: "2024/03/w8TQdlgZRiG827xWT1HZ_8d741606-027e-41ad-80ff-87c068e9e6c6.jpg",
    max: 1200,
    alt: "Holistic treatment",
  },

  // Instagram strip
  "instagram/ig-1": { path: "2025/09/Untitled-1.jpg", max: 700, alt: "Samadi on Instagram" },
  "instagram/ig-2": { path: "2025/09/2.jpg", max: 700, alt: "Samadi on Instagram" },
  "instagram/ig-3": { path: "2025/09/3.jpg", max: 700, alt: "Samadi on Instagram" },
  "instagram/ig-4": { path: "2025/09/4.jpg", max: 700, alt: "Samadi on Instagram" },
  "instagram/ig-5": { path: "2025/09/5.jpg", max: 700, alt: "Samadi on Instagram" },
  "instagram/ig-6": { path: "2025/09/6.jpg", max: 700, alt: "Samadi on Instagram" },
};

export const videos = {
  "video/wytt": { path: "2026/08/WhatsApp-Video-2026-08-03-at-15.04.05.mp4" },
};
