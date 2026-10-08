import type { MediaKey } from "./media";

// Source: samadibali.com home ("Events & workshops this month") and the workshop posters
// published on /yoga. Price/time details are transcribed from Samadi's own poster artwork.

export type SamadiEvent = {
  slug: string;
  title: string;
  host: string;
  when: string;
  time: string;
  price?: string;
  note?: string;
  image: MediaKey;
  href: string;
  /** ISO date for one-off events — they hide automatically once passed. */
  date?: string;
  category: "Workshop" | "Breathwork" | "Sound Healing" | "Meditation" | "Movement";
};

export const events: SamadiEvent[] = [
  {
    slug: "handstand-workshop",
    title: "Handstand Workshop",
    host: "Vivienne Zeng",
    when: "Every Monday & Thursday",
    time: "11:15 – 12:45",
    price: "IDR 220K",
    note: "Beginner friendly",
    image: "events/handstand-vivienne",
    href: "https://megatix.co.id/events/handstandsamadi?source=home",
    category: "Movement",
  },
  {
    slug: "sound-healing-workshop",
    title: "Sound Healing Workshop",
    host: "Anshu",
    when: "Every Friday",
    time: "11:15 – 12:45",
    price: "IDR 350K",
    note: "Please book 1 hour before",
    image: "events/sound-anshu",
    href: "https://megatix.co.id/events/sound-healing-workshop-anshu?source=home",
    category: "Sound Healing",
  },
  {
    slug: "breathwork-workshop",
    title: "Breathwork Workshop",
    host: "Anshu",
    when: "Every Saturday",
    time: "11:15 – 12:45",
    price: "IDR 350K",
    note: "Please book 1 hour before",
    image: "yoga/style-breathwork",
    href: "https://megatix.co.id/events/breathwork-workshop-anshu?source=home",
    category: "Breathwork",
  },
  {
    slug: "meditation-sound-healing",
    title: "Meditation & Sound Healing",
    host: "Lala",
    when: "Every Thursday",
    time: "13:00 – 14:15",
    price: "IDR 350K",
    image: "events/meditation-lala",
    href: "https://megatix.co.id/events?search=SAMADI",
    category: "Meditation",
  },
  {
    slug: "flyhigh-yoga",
    title: "FlyHigh Yoga — Inversion & Adjustments",
    host: "Ricardo",
    when: "Every Saturday",
    time: "16:00 – 17:30",
    price: "IDR 250K",
    image: "yoga/style-flyhigh",
    href: "https://megatix.co.id/events?search=SAMADI",
    category: "Movement",
  },
  {
    slug: "himalayan-singing-bowls",
    title: "Himalayan Singing Bowls — Tibetan Sound Healing",
    host: "Ricardo",
    when: "Every Wednesday & Saturday",
    time: "Wed 13:30 – 14:45 · Sat 14:00 – 15:15",
    price: "1 person IDR 1,000K · 2 persons IDR 1,250K",
    note: "Please book at least 2 hours before the session",
    image: "yoga/style-bowls",
    href: "https://megatix.co.id/events?search=SAMADI",
    category: "Sound Healing",
  },
  {
    slug: "conscious-connected-breathwork",
    title: "Conscious Connected Breathwork",
    host: "Rena",
    when: "21 August 2026",
    time: "13:00 – 14:30",
    price: "IDR 300K",
    image: "events/breathwork-rena",
    href: "https://megatix.co.id/events?search=SAMADI",
    date: "2026-08-21",
    category: "Breathwork",
  },
];

/** Recurring events plus one-off events that have not happened yet. */
export function upcomingEvents(now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return events.filter((e) => !e.date || new Date(`${e.date}T23:59:59`).getTime() >= today);
}

export const eventsIntro =
  "At Samadi Bali, our events and workshops are more than just gatherings — they’re transformative experiences rooted in personal growth, creativity, healing, and connection. Whether you’re diving into yoga, exploring holistic wellness, or discovering your artistic side, each session is designed to support your journey toward mindful living.";
