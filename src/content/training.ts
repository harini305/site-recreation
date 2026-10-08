import type { MediaKey } from "./media";

// Source: samadibali.com/wytt-* (Multistyle 200 HRS Yoga Training & 20 HRS Wellness Training)
// and /ytt-retreats. Held at Moana Wellness Hub, Nuanu Creative City.

export const training = {
  name: "Wellness Yoga Teacher Training",
  short: "WYTT",
  title: "Multistyle 200 HRS Yoga Training & 20 HRS Wellness Training",
  venue: "Moana Wellness Hub · Nuanu Creative City, Tabanan",
  bookingHref: "https://megatix.co.id/events/WYTT-Bali-2026?source=presenter",
  accommodationHref: "https://secure.guestaps.com/nuanusuite/be/promo/MOANAACCO2026",
  accommodationPromo: "MOANAACCO2026",
  heroImage: "training/practice" as MediaKey,
  prices: [
    { label: "Super Early Bird", value: "Rp 19,200,000" },
    { label: "Early Bird", value: "Rp 22,400,000" },
    { label: "Full Price", value: "Rp 25,600,000" },
  ],
  intro:
    "Three immersive weeks of Yoga Alliance certified education combined with 20 hours of integrated wellness designed to help you learn deeply, recover fully, and become a more sustainable yoga teacher.",
  awaken: [
    "This is more than a certification. It’s a soul-awakening transformation.",
    "After completing the course, you will receive a Yoga Alliance certificate — recognised and accepted worldwide.",
  ],
};

export type Intake = { start: string; end: string; label: string; href: string };

export const intakes: Intake[] = [
  { start: "2026-06-21", end: "2026-07-12", label: "21 June – 12 July 2026", href: training.bookingHref },
  {
    start: "2026-09-06",
    end: "2026-09-27",
    label: "6 – 27 September 2026",
    href: "https://megatix.co.id/events/wytt-multistyle-200-hrs-yoga-training-20-hrs-wellness-training-6-27-september-2026?source=presenter",
  },
  {
    start: "2026-10-04",
    end: "2026-10-25",
    label: "4 – 25 October 2026",
    href: "https://megatix.co.id/events/wytt-4-25-october-2026-multistyle-200-hrs-yoga-training-20-hrs-wellness-training?source=presenter",
  },
  { start: "2026-11-22", end: "2026-12-13", label: "22 November – 13 December 2026", href: training.bookingHref },
];

/** Intakes that have not started yet. */
export function upcomingIntakes(now = new Date()) {
  const t = now.getTime();
  return intakes.filter((i) => new Date(`${i.start}T00:00:00`).getTime() > t);
}

export const curriculum = {
  structure: [
    {
      title: "200 hours · Yoga Alliance curriculum",
      text: "Based on the official Yoga Alliance® curriculum, covering all four educational categories and 12 key competencies.",
    },
    {
      title: "+ 20 hours · Wellness by Moana",
      text: "Designed by Moana Wellness Hub — holistic wellness, Ayurveda, detox, chakra healing, and integrative practices for a truly soul-centred learning experience.",
    },
  ],
  categories: [
    { n: "01", title: "Techniques, Training & Practice" },
    { n: "02", title: "Anatomy & Physiology" },
    { n: "03", title: "Yoga Humanities" },
    { n: "04", title: "Professional Essentials" },
  ],
  hybrid: [
    {
      title: "In-Person Modules in Bali",
      text: "Deepen your practice in an intimate group with direct transmission from master teachers. The vibrant energy of Bali is part of your learning.",
    },
    {
      title: "Online Theory Modules",
      text: "Short on time? Study philosophy, anatomy, and methodology at your own rhythm before integrating it in person. You choose how long you stay in Bali.",
    },
  ],
  wellness: [
    "Ayurveda & detox wisdom",
    "Holistic assessment of body, mind & spirit imbalances",
    "Chakra diagnostics & energy healing",
    "Dosha profiling (Vata, Pitta, Kapha) with tailored wellness advice",
    "Daily practices: affirmations, detox drinks, pranayama & asana",
    "Mantra chanting and mindfulness",
    "Healing nutrition by energy type",
    "Essential oils, crystals, and nature-based rituals",
    "Smoothie & juice recipes for clarity and radiance",
  ],
  styles: [
    { title: "Vinyasa", text: "Our foundation — intelligent, breath-led flow." },
    { title: "Hatha", text: "Precision, structure & deep alignment." },
    { title: "Yin & Restorative", text: "Nervous system reset & emotional release." },
    { title: "Dynamic & Traditional Flows", text: "Diverse movement languages to find your voice." },
  ],
  teach: [
    "Craft intelligent, intuitive sequences",
    "Master verbal cueing & embodied language",
    "Offer safe hands-on adjustments",
    "Create sacred, inclusive spaces",
    "Cultivate your authentic teaching voice",
  ],
  faculty: [
    "Master Vinyasa instructors with decades of experience",
    "Philosophy & anatomy experts who make theory engaging",
    "Wisdom keepers who bridge ancient tradition with modern relevance",
    "A certified yoga therapist, bridging clinical depth, wellness and embodied yoga wisdom",
  ],
  outcomes: [
    "Teach confidently",
    "Sequence intelligently",
    "Understand anatomy",
    "Support nervous system regulation",
    "Build sustainable practices",
    "Prevent burnout",
    "Lead with confidence",
    "Become Yoga Alliance certified",
  ],
};

export const included = [
  {
    title: "220 hours Yoga Alliance",
    text: "200 hours of Yoga Alliance curriculum plus 20 hours of holistic wellness education.",
  },
  { title: "Breakfast, lunch & dinner", text: "Daily meals throughout the training." },
  { title: "Drinks", text: "Infused water, coffee and tea." },
];

export const notIncluded = ["Flight tickets", "Travel and medical insurance", "Visa expenses", "Accommodation"];

export const moana = {
  name: "Moana Wellness Hub",
  place: "Nuanu Creative City, Tabanan",
  intro:
    "Welcome to Moana, a sanctuary to begin again — yoga and healing experiences in the heart of Nuanu Creative City. Moana offers an integrated wellness program for health, happiness and harmony in all spectrums of life. It started with Samadi in Canggu, and has many years of developing connection.",
  features: [
    "A wooden sanctuary shala",
    "An open-air dome",
    "A bonfire area",
    "Outdoor spaces",
    "A bamboo-style restaurant",
  ],
  why: [
    "Inspired by the ocean and island spirit",
    "Rooted in yoga and surrounded by nature",
    "Teachers who live what they teach",
  ],
  quote: "Held by nature. Supported by lineage. Uplifted by tribe.",
};

export const trainingFaq: { q: string; a: string }[] = [
  {
    q: "Who is this 200-hour Yoga Teacher Training in Bali for?",
    a: "This training is open to dedicated yoga practitioners, aspiring yoga teachers, and anyone who wants to deepen their personal practice. Previous teaching experience is not required.",
  },
  {
    q: "Is this Yoga Teacher Training Yoga Alliance certified?",
    a: "Yes. The program follows the official 200-hour Yoga Alliance curriculum, and graduates receive a Yoga Alliance-recognised certification upon successful completion.",
  },
  {
    q: "Why does this program include 220 hours instead of 200 hours?",
    a: "The course includes 200 hours of Yoga Alliance curriculum plus an additional 20 hours of holistic wellness education covering Ayurveda, chakra healing, detox practices, breathwork, and integrative wellness.",
  },
  {
    q: "Where is the training held?",
    a: "The training takes place at Moana Wellness Hub in Nuanu Creative City, Tabanan, Bali, surrounded by nature and purpose-built wellness facilities.",
  },
  {
    q: "Can I complete part of the course online?",
    a: "Yes. Selected theory modules such as yoga philosophy, anatomy, and methodology can be completed online, providing greater flexibility for international students.",
  },
  {
    q: "Will I be ready to teach after graduation?",
    a: "Yes. Throughout the training you will develop teaching skills, practise leading classes, improve verbal cueing, learn hands-on adjustments, and gain the confidence to teach yoga professionally.",
  },
  {
    q: "What makes this Yoga Teacher Training unique?",
    a: "This program combines internationally recognised Yoga Alliance standards with holistic wellness education, Ayurveda, chakra healing, nature immersion, and guidance from experienced yoga teachers in Bali.",
  },
  {
    q: "What yoga styles will I learn?",
    a: "Students practise and study multiple yoga styles, including Vinyasa, Hatha, Yin, Restorative Yoga, meditation, pranayama, and traditional yogic practices to develop a well-rounded teaching foundation.",
  },
  {
    q: "Can beginners join this Yoga Teacher Training?",
    a: "Yes. While a regular yoga practice is recommended, you do not need to be an experienced teacher. The course is designed for both dedicated practitioners and future yoga instructors.",
  },
  {
    q: "What subjects are covered during the training?",
    a: "The curriculum includes yoga philosophy, anatomy, teaching methodology, sequencing, alignment, meditation, pranayama, Ayurveda, wellness coaching, chakra healing, professional ethics, and supervised teaching practice.",
  },
  {
    q: "Is accommodation included in the course fee?",
    a: "Accommodation is not included. Participants can book their stay separately at Nuanu Suites and partner accommodations using the recommended booking link and promotional code.",
  },
  {
    q: "Are meals included?",
    a: "Yes. Daily breakfast, lunch, dinner, drinking water, tea, and coffee are included throughout the training.",
  },
  {
    q: "What is not included in the training fee?",
    a: "International flights, travel insurance, medical insurance, visa expenses, and accommodation are not included in the course price.",
  },
  {
    q: "How do I reserve my place?",
    a: "Secure your place by registering through the official booking page. Early Bird and Super Early Bird pricing are available for a limited time.",
  },
];
