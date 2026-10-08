import type { MediaKey } from "./media";

// Source: samadibali.com/yoga (prices) and /yoga-schedules (styles + weekly schedule).

export type PriceTier = { id: string; name: string; note: string; items: { label: string; price: string }[] };

export const priceTiers: PriceTier[] = [
  {
    id: "domestic",
    name: "Domestic / KTP Holder",
    note: "Indonesian ID card holders",
    items: [
      { label: "Single class", price: "IDR 110,000" },
      { label: "6 class pass", price: "IDR 550,000" },
      { label: "12 class pass", price: "IDR 1,000,000" },
      { label: "Monthly pass", price: "IDR 2,200,000" },
    ],
  },
  {
    id: "kitas",
    name: "KITAS Holder",
    note: "Residents with a KITAS permit",
    items: [
      { label: "Single class", price: "IDR 135,000" },
      { label: "6 class pass", price: "IDR 675,000" },
      { label: "12 class pass", price: "IDR 1,250,000" },
      { label: "Monthly pass", price: "IDR 2,700,000" },
    ],
  },
  {
    id: "regular",
    name: "Regular",
    note: "Visitors and travellers",
    items: [
      { label: "Single class", price: "IDR 155,000" },
      { label: "6 class pass", price: "IDR 775,000" },
      { label: "12 class pass", price: "IDR 1,450,000" },
      { label: "Monthly pass", price: "IDR 3,100,000" },
    ],
  },
];

export type YogaStyle = { name: string; text: string; image: MediaKey };

export const yogaStyles: YogaStyle[] = [
  {
    name: "Vinyasa",
    text: "Energise your body with dynamic, breath-connected sequences. Our Vinyasa classes focus on fluid movement, strength, flexibility, and mental clarity — perfect for building heat and flow.",
    image: "yoga/shein-class",
  },
  {
    name: "Yin",
    text: "Slow down and go inward. These deeply restorative sessions help release long-held tension and promote stillness — ideal for balancing a busy lifestyle and calming the nervous system.",
    image: "yoga/class-10",
  },
  {
    name: "Hatha",
    text: "Discover the foundational path of yoga through a steady and grounding pace. Great for beginners and those wanting to deepen their awareness of breath, alignment, and presence.",
    image: "yoga/shala-3",
  },
  {
    name: "Ashtanga",
    text: "Step into discipline and tradition with the structured sequence of Ashtanga yoga. These classes build strength, focus, and resilience while honouring a classical approach to practice.",
    image: "yoga/ashtanga-iyan",
  },
  {
    name: "Variations & Special Classes",
    text: "Explore unique offerings like Power Yoga, Restorative Yoga, Kundalini and Meditation. Whether you seek intensity, healing, or mindful rest, there is something for everyone.",
    image: "yoga/class-12",
  },
];

export type ScheduleClass = { time: string; name: string; teacher: string; href: string };
export type ScheduleDay = { day: string; short: string; classes: ScheduleClass[] };

const mx = (slug: string) => `https://megatix.co.id/events/${slug}`;

export const scheduleMonthLabel = "Weekly schedule";
export const scheduleNote = "All schedules are subject to change. Please check the booking page before you come.";

export const weeklySchedule: ScheduleDay[] = [
  {
    day: "Monday",
    short: "Mon",
    classes: [
      { time: "09:30 – 10:45", name: "Vinyasa Flow", teacher: "Vivienne Zeng", href: mx("vinyasa-flow-vivienne-zeng") },
      { time: "11:15 – 12:45", name: "Handstand Workshop", teacher: "Vivienne Zeng", href: mx("handstandsamadi") },
      { time: "16:00 – 17:15", name: "Hatha", teacher: "Regine", href: mx("hatha-regine") },
      { time: "17:45 – 19:00", name: "Yin Yang", teacher: "Regine", href: mx("yin-yang-regine") },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    classes: [
      { time: "08:00 – 08:45", name: "Breathwork Session", teacher: "Anshu", href: mx("breathwork-session-anshu") },
      { time: "09:30 – 10:45", name: "Vinyasa Flow", teacher: "Regine", href: mx("vinyasa-flow-regine") },
      {
        time: "16:00 – 17:30",
        name: "Mindful Movement Beginner",
        teacher: "Leona",
        href: mx("mindful-movement-beginner-leona"),
      },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    classes: [
      { time: "09:30 – 10:45", name: "Vinyasa Flow", teacher: "Vivienne Zeng", href: mx("vinyasa-flow-vivienne-zeng") },
      { time: "17:45 – 19:00", name: "Beginner Flow", teacher: "Leona", href: mx("vinyasa-gentle-flow-leona") },
      { time: "17:45 – 19:00", name: "Vinyasa Gentle Flow", teacher: "Leona", href: mx("vinyasa-gentle-flow-leona") },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    classes: [
      { time: "08:00 – 08:45", name: "Breathwork Session", teacher: "Anshu", href: mx("breathwork-session-anshu") },
      { time: "11:15 – 12:45", name: "Handstand Workshop", teacher: "Vivienne Zeng", href: mx("handstandsamadi") },
      {
        time: "13:00 – 14:15",
        name: "Meditation & Sound Healing",
        teacher: "Lala",
        href: "https://megatix.co.id/events?search=SAMADI",
      },
      {
        time: "16:00 – 17:15",
        name: "Mindful Movement",
        teacher: "Leona",
        href: mx("mindful-movement-beginner-leona"),
      },
      {
        time: "18:30 – 19:45",
        name: "Beginner Class",
        teacher: "Lala",
        href: "https://megatix.co.id/events?search=SAMADI",
      },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    classes: [
      { time: "07:30 – 08:45", name: "Hatha", teacher: "Danielle", href: "https://megatix.co.id/events?search=SAMADI" },
      { time: "09:30 – 10:45", name: "Power Yoga", teacher: "Vivienne Zeng", href: mx("power-yoga") },
      {
        time: "11:15 – 12:45",
        name: "Sound Healing Workshop",
        teacher: "Anshu",
        href: mx("sound-healing-workshop-anshu"),
      },
      { time: "16:00 – 17:15", name: "Hatha", teacher: "Regine", href: mx("hatha-regine") },
      { time: "17:45 – 19:00", name: "Yin Yang", teacher: "Regine", href: mx("yin-yang-regine") },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    classes: [
      { time: "11:15 – 12:30", name: "Breathwork Workshop", teacher: "Anshu", href: mx("breathwork-workshop-anshu") },
      { time: "16:00 – 17:15", name: "Vinyasa", teacher: "Danielle", href: mx("vinyasa-danielle") },
      { time: "17:45 – 18:30", name: "Sound Healing Session", teacher: "Anshu", href: mx("sound-healing-anshu") },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    classes: [
      { time: "09:30 – 10:45", name: "Vinyasa Flow", teacher: "Vivienne Zeng", href: mx("vinyasa-flow-vivienne-zeng") },
      { time: "16:00 – 17:15", name: "Vinyasa Flow", teacher: "Danielle", href: mx("vinyasa-flow-danielle") },
      { time: "17:45 – 19:00", name: "Yin Yang", teacher: "Danielle", href: mx("yin-yang-danielle") },
    ],
  },
];

export const privateYoga = {
  options: [
    {
      title: "Private Yoga at Samadi Bali Studio",
      text: "Enjoy a calm and inspiring environment by practising directly at Samadi Bali. Our serene yoga shala provides the perfect space to relax, recharge, and reconnect with your body and mind — fully immersed in the authentic Samadi atmosphere, surrounded by nature and a supportive community.",
      image: "yoga/private" as MediaKey,
    },
    {
      title: "Private Yoga Outside Samadi",
      text: "Prefer to practise in your own space? Our experienced yoga teachers can come to your villa, home, or retreat location in Canggu and surrounding areas — ideal for travellers, groups, or anyone seeking comfort and privacy while still receiving high-quality, personalised instruction.",
      image: "yoga/class-7" as MediaKey,
    },
  ],
  why: [
    "Fully customised sessions based on your goals — flexibility, strength, relaxation, or recovery",
    "A wide range of styles including Hatha, Vinyasa, Yin, and restorative yoga",
    "Professional, certified yoga instructors",
    "Flexible scheduling to suit your lifestyle",
    "Available for individuals, couples, or small groups",
  ],
  whoFor: [
    "Beginners looking for a strong foundation",
    "Advanced practitioners wanting to deepen their practice",
    "Individuals with injuries or specific physical needs",
    "Retreat groups, couples, or families",
    "Anyone seeking a more personal and meaningful yoga experience in Bali",
  ],
};
