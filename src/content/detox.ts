import type { MediaKey } from "./media";

// Source: samadibali.com/*-days-detox-program. Day plans follow the published order exactly.
// Sentences that were cut off mid-word in the source are tidied without adding new claims.
// Programs without a published price show "Contact for price".

export type DetoxItem = { title: string; text?: string; optional?: boolean };
export type DetoxDay = { label: string; items: DetoxItem[] };
export type DetoxProgram = {
  slug: string;
  days: number;
  name: string;
  sanskrit: string;
  tagline: string;
  price?: string;
  image: MediaKey;
  intro: string;
  awaits: DetoxItem[];
  schedule: DetoxDay[];
  closing: string;
};

const massage = (text: string): DetoxItem => ({ title: "Ayurveda Massage", text, optional: true });
const sauna: DetoxItem = { title: "Sauna & Cold Plunge", optional: true };

const consultDay: DetoxItem[] = [
  {
    title: "Consultation · 14:30",
    text: "A 45-minute comprehensive consultation, including pulse diagnosis, dosha analysis, and personalised detox guidance.",
  },
  { title: "Juicing", text: "Two refreshing juices." },
  massage("Unwind and detoxify with a therapeutic session."),
  sauna,
];
const cleanseDay: DetoxItem[] = [
  { title: "Juicing", text: "Nourishing juices through the day." },
  { title: "Liver Detox", text: "Cleanse and rejuvenate your liver." },
  massage("Continue your healing journey."),
  sauna,
];
const followUpDay: DetoxItem[] = [
  { title: "Juicing", text: "Start your day with revitalising juices." },
  { title: "Follow-up Consultation", text: "Receive guidance to maintain your newfound balance and vitality." },
];

const pattern = (seq: ("A" | "B" | "C")[]): DetoxDay[] =>
  seq.map((k, i) => ({
    label: `Day ${i + 1}`,
    items: k === "A" ? consultDay : k === "B" ? cleanseDay : followUpDay,
  }));

const sharedIntro =
  "Embark on a journey of self-discovery and holistic healing with our Ayurveda Detox Program. Designed for the modern woman seeking a deeper connection to herself and a health-conscious lifestyle, this program offers a sanctuary from the hustle and bustle of everyday life.";

const sharedAwaits: DetoxItem[] = [
  { title: "Invigorating Juice Fasting", text: "Cleanse your body with fresh, nutrient-rich juices." },
  {
    title: "Holistic Wellness",
    text: "Restore balance, boost your energy, enhance mental clarity, detoxify your digestive system, and strengthen your immune system.",
  },
];

const closing =
  "Rediscover your inner harmony and vitality with our Ayurveda Detox Program. Let the ancient wisdom of Ayurveda guide you towards a spiritually enriched, health-conscious lifestyle.";

export const optionalNote = "Recommended — ask us about preferred partners and discount vouchers.";

export const detoxPrograms: DetoxProgram[] = [
  {
    slug: "3-day",
    days: 3,
    name: "3 Days Detox Program",
    sanskrit: "Hrisva Shodhana",
    tagline: "Rejuvenate your spirit in just 3 days",
    price: "Rp 3,200,000",
    image: "wellness/raj-mohan",
    intro:
      "Embark on a journey of self-discovery and holistic healing with our 3-day Ayurveda Detox Program. Designed for the modern woman seeking a deeper connection to herself and a health-conscious lifestyle, this program offers a sanctuary from the hustle and bustle of everyday life.",
    awaits: sharedAwaits,
    schedule: pattern(["A", "B", "C"]),
    closing,
  },
  {
    slug: "5-day",
    days: 5,
    name: "5 Days Detox Program",
    sanskrit: "Avara Shodhana",
    tagline: "Transform your gut, transform your life",
    price: "Rp 3,900,000",
    image: "wellness/divyanga",
    intro:
      "Immerse yourself in a transformative 5-day journey designed for the modern woman seeking optimal health and spiritual rejuvenation. Our Avara Shodhana program focuses on a profound gut cleanse, ensuring you emerge feeling fresh, recharged, and vibrant.",
    awaits: [
      { title: "Enhanced Physical Fitness", text: "Boost your overall physical well-being." },
      { title: "Comprehensive Liver Detox", text: "Liver cleansing twice for optimal system purification." },
      { title: "Ayurveda Massages", text: "Liquefy and eliminate toxins.", optional: true },
      { title: "Sauna & Cold Plunge", optional: true },
    ],
    schedule: [
      {
        label: "Day 1",
        items: [
          { title: "Juicing", text: "Three nutrient-packed juices to cleanse and nourish." },
          { title: "Ayurveda Consultation", text: "Begin with an in-depth consultation to tailor your detox journey." },
          massage("Relax and detoxify."),
          sauna,
        ],
      },
      {
        label: "Day 2",
        items: [
          { title: "Juicing", text: "Three refreshing juices to maintain your cleanse." },
          { title: "Liver Detox", text: "Focus on cleansing your liver." },
          massage("Continue the detox process."),
          sauna,
        ],
      },
      {
        label: "Day 3",
        items: [
          { title: "Juicing", text: "Three revitalising juices." },
          { title: "Liver Detox", text: "A second liver detox session." },
          massage("Further cleanse and relax."),
          sauna,
        ],
      },
      {
        label: "Day 4",
        items: [
          { title: "Juicing", text: "Three fresh juices to sustain your detox." },
          massage("Continue your healing journey with a therapeutic massage."),
        ],
      },
      {
        label: "Day 5",
        items: [
          { title: "Juicing", text: "Three nourishing juices to complete your detox." },
          {
            title: "Ayurveda Consultation",
            text: "Conclude with a follow-up consultation to ensure lasting benefits.",
          },
        ],
      },
    ],
    closing,
  },
  {
    slug: "7-day",
    days: 7,
    name: "7 Days Detox Program",
    sanskrit: "Mridu Shodhana",
    tagline: "Achieve balance & enhanced vitality",
    price: "Rp 6,400,000",
    image: "detox/juice-2",
    intro:
      "Embark on a holistic 7-day journey with our Mridu Shodhana program, crafted for the modern woman seeking harmony and improved body function. This program offers a perfect balance of purification and rejuvenation, ensuring you feel revitalised and empowered.",
    awaits: [
      { title: "Feel 50% Better", text: "Experience a noticeable improvement in your overall well-being." },
      { title: "Enhanced Metabolism", text: "Boost your metabolic processes for better energy." },
      { title: "Increased Agility & Physical Power", text: "Improve your body movements." },
      { title: "Mental Clarity", text: "Achieve a sharper and more focused mind." },
      { title: "Comprehensive Liver Detox", text: "Liver cleansing three times." },
      { title: "Ayurveda Massages", text: "Help to melt and eliminate toxins from the tissues.", optional: true },
      { title: "Sauna & Cold Plunge", optional: true },
    ],
    schedule: [
      {
        label: "Day 1",
        items: [
          { title: "Juicing", text: "Three rejuvenating juices to cleanse and nourish." },
          {
            title: "Ayurveda Consultation",
            text: "Start with an in-depth consultation to personalise your detox plan.",
          },
          massage("Relax and begin the detoxification process."),
          sauna,
        ],
      },
      {
        label: "Day 2",
        items: [
          { title: "Juicing", text: "Three nutrient-rich juices." },
          { title: "Liver Detox", text: "Focus on cleansing your liver." },
          massage("Continue to detoxify."),
          sauna,
        ],
      },
      {
        label: "Day 3",
        items: [
          { title: "Juicing", text: "Three revitalising juices." },
          { title: "Liver Detox", text: "Another liver detox session." },
          { title: "Ayurveda Consultation", text: "A follow-up to refine your detox plan." },
          sauna,
        ],
      },
      {
        label: "Day 4",
        items: [
          { title: "Juicing", text: "Three fresh juices to sustain your detox." },
          { title: "Liver Detox", text: "Final liver detox." },
          massage("Continue your healing journey with a therapeutic massage."),
        ],
      },
      {
        label: "Day 5",
        items: [
          { title: "Juicing", text: "Three nourishing juices." },
          { title: "Ayurveda Consultation", text: "Review your progress and make any necessary adjustments." },
          massage("Continue detoxifying your body."),
          sauna,
        ],
      },
      {
        label: "Day 6",
        items: [{ title: "Juicing", text: "Three refreshing juices." }, massage("Maintain your detox.")],
      },
      {
        label: "Day 7",
        items: [
          { title: "Juicing", text: "Three nutrient-packed juices to complete your detox." },
          { title: "Follow-up Consultation", text: "Conclude with a final consultation." },
        ],
      },
    ],
    closing:
      "Reclaim your vitality and harmony with our Mridu Shodhana program. Let the ancient wisdom of Ayurveda guide you towards a spiritually enriched, health-conscious lifestyle, empowering you to feel your best every day.",
  },
  {
    slug: "7-day-liver",
    days: 7,
    name: "7 Days Liver Detox Program",
    sanskrit: "Yakrut Shodhana",
    tagline: "Renew your energy and glow from within",
    image: "detox/ayurveda-3",
    intro: sharedIntro,
    awaits: sharedAwaits,
    schedule: pattern(["A", "B", "C", "C", "A", "B", "C"]),
    closing,
  },
  {
    slug: "10-day",
    days: 10,
    name: "10 Days Detox Program",
    sanskrit: "Madhyama Shodhana",
    tagline: "Elevate your health to the next level",
    image: "detox/ayurveda-1",
    intro: sharedIntro,
    awaits: sharedAwaits,
    schedule: pattern(["A", "B", "C", "C", "A", "B", "C", "C", "A", "B"]),
    closing,
  },
  {
    slug: "14-day",
    days: 14,
    name: "14 Days Detox Program",
    sanskrit: "Uthama Shodhana",
    tagline: "The ultimate detox for complete body and mind rejuvenation",
    image: "detox/ayurveda-2",
    intro: sharedIntro,
    awaits: sharedAwaits,
    schedule: pattern(["A", "B", "C", "C", "A", "B", "C", "C", "A", "B", "B", "B", "A", "B"]),
    closing,
  },
  {
    slug: "21-day",
    days: 21,
    name: "21 Days Detox Program",
    sanskrit: "Uthama Shodhana",
    tagline: "Elevate your wellness with the ultimate detox",
    image: "detox/theta",
    intro: sharedIntro,
    awaits: sharedAwaits,
    schedule: [
      { label: "Days 1 – 3", items: consultDay },
      { label: "Days 4 – 7", items: cleanseDay },
      { label: "Days 8 – 11", items: followUpDay },
      { label: "Days 12 – 16", items: consultDay },
      { label: "Days 17 – 20", items: cleanseDay },
      { label: "Day 21", items: followUpDay },
    ],
    closing,
  },
];

export const detoxBySlug = (slug: string) => detoxPrograms.find((p) => p.slug === slug);
export const priceLabel = (p: DetoxProgram) => p.price ?? "Contact for price";
