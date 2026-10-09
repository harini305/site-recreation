// Global business details, navigation and footer — all sourced from samadibali.com.

export const site = {
  name: "Samadi Bali",
  legalName: "Samadi Super Foods & Wellness",
  tagline: "Super Foods & Wellness",
  url: "https://samadibali.com",
  description:
    "Samadi Super Foods & Wellness is a holistic lifestyle destination in Canggu, Bali — yoga classes, wellness treatments, Ayurvedic detox, an organic supermarket, a plant-based café and the Sunday Farmers Market.",
  email: "contact@samadibali.com",
  phoneDisplay: "+62 813-2525-7500",
  phoneHref: "tel:+6281325257500",
  whatsappHref: "https://wa.me/6281325257500",
  address: {
    street: "Jalan Padang Linjong 39",
    area: "Canggu, Kuta Utara",
    region: "Badung, Bali",
    postalCode: "80361",
    country: "Indonesia",
  },
  mapsHref: "https://maps.app.goo.gl/GdrR5ZdKrYN1vu4PA",
  marketHours: "Open daily, 7.30 – 21.30",
  /** Samadi Supermarket's own WhatsApp line — online shop orders go here. */
  marketWhatsapp: "6287774259604",
  bookingHref: "https://megatix.co.id/events?search=SAMADI",
  zenwelHref: "https://widget.zenwel.com/863947864/samadi-yoga-centre?lang=id&lid=527",
  socials: [
    { label: "Instagram", handle: "@samadiyogacanggu", href: "https://www.instagram.com/samadiyogacanggu/" },
    {
      label: "Instagram — Market",
      handle: "@samadi.super.market",
      href: "https://www.instagram.com/samadi.super.market/",
    },
    { label: "Facebook", handle: "samadicanggu", href: "https://www.facebook.com/samadicanggu/" },
    { label: "YouTube", handle: "@smdicnggu4044", href: "https://www.youtube.com/@smdicnggu4044" },
  ],
} as const;

export const whatsappMessage = (text: string) => `${site.whatsappHref}?text=${encodeURIComponent(text)}`;

export type NavLink = { label: string; href: string; external?: boolean; description?: string };
export type NavGroup = { label: string; href: string; children?: NavLink[]; image?: string };

export const mainNav: NavGroup[] = [
  {
    label: "Yoga",
    href: "/yoga",
    image: "yoga/shala-2",
    children: [
      { label: "Classes & Prices", href: "/yoga", description: "Daily classes for every level" },
      { label: "Weekly Schedule", href: "/yoga/schedule", description: "Find a class and book" },
      { label: "Teachers", href: "/yoga/teachers", description: "Local and international guides" },
      { label: "Private Yoga", href: "/yoga/private", description: "At the studio or your villa" },
      { label: "Events & Workshops", href: "/events", description: "Breathwork, sound, handstands" },
    ],
  },
  { label: "Teacher Training", href: "/teacher-training" },
  {
    label: "Wellness",
    href: "/wellness",
    image: "detox/ayurveda-1",
    children: [
      { label: "Healers & Consultants", href: "/wellness", description: "Daily practitioners" },
      { label: "Detox Programs", href: "/wellness/detox", description: "3 to 21 days of Ayurvedic cleansing" },
      { label: "Ayurveda Consultations", href: "/wellness/ayurveda", description: "Prakruti & Vikruti assessments" },
      { label: "Theta Healing", href: "/wellness/theta-healing", description: "Energy healing, 60 minutes" },
    ],
  },
  {
    label: "Eat & Shop",
    href: "/eat-shop/restaurant",
    image: "market/m-3",
    children: [
      { label: "Café Restaurant", href: "/eat-shop/restaurant", description: "Plant-based garden dining" },
      { label: "Super Foods Market", href: "/eat-shop/market", description: "Organic groceries & bakery" },
      { label: "Sunday Farmers Market", href: "/eat-shop/sunday-market", description: "Every Sunday in Canggu" },
      { label: "Shop Online", href: "/eat-shop/shop", description: "Order from our online supermarket" },
    ],
  },
  {
    label: "About",
    href: "/about",
    image: "restaurant/r-6",
    children: [
      { label: "Our Story", href: "/about", description: "More than yoga — a way of life" },
      { label: "Our Spaces", href: "/spaces", description: "Canggu campus & Moana at Nuanu" },
      { label: "Journal", href: "/journal", description: "Notes on yoga, food & wellness" },
      { label: "FAQ", href: "/faq", description: "Good to know before you visit" },
      { label: "Contact", href: "/contact", description: "WhatsApp, email & directions" },
    ],
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Yoga",
    links: [
      { label: "Classes & Prices", href: "/yoga" },
      { label: "Weekly Schedule", href: "/yoga/schedule" },
      { label: "Teachers", href: "/yoga/teachers" },
      { label: "Private Yoga", href: "/yoga/private" },
      { label: "Events & Workshops", href: "/events" },
      { label: "Teacher Training", href: "/teacher-training" },
    ],
  },
  {
    title: "Wellness",
    links: [
      { label: "Healers & Consultants", href: "/wellness" },
      { label: "Detox Programs", href: "/wellness/detox" },
      { label: "Ayurveda Consultations", href: "/wellness/ayurveda" },
      { label: "Theta Healing", href: "/wellness/theta-healing" },
    ],
  },
  {
    title: "Eat & Shop",
    links: [
      { label: "Café Restaurant", href: "/eat-shop/restaurant" },
      { label: "Super Foods Market", href: "/eat-shop/market" },
      { label: "Sunday Farmers Market", href: "/eat-shop/sunday-market" },
      { label: "Shop Online", href: "/eat-shop/shop" },
    ],
  },
  {
    title: "Samadi",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Our Spaces", href: "/spaces" },
      { label: "Journal", href: "/journal" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Website Disclaimer", href: "/disclaimer" },
];
