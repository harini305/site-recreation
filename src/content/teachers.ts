import type { MediaKey } from "./media";

export type Teacher = {
  slug: string;
  name: string;
  role: string;
  styles: string[];
  image?: MediaKey;
  bio: string[];
};

// Bios as published on samadibali.com/yoga-teachers (typos corrected only).
// Danielle, Leona and Lala use the photos Samadi assigns them in its teacher slider; they have no published bio yet.
export const teachers: Teacher[] = [
  {
    slug: "vivienne-zeng",
    name: "Vivienne Zeng",
    role: "Yoga Teacher",
    styles: ["Vinyasa", "Handstand", "Power Yoga"],
    image: "teachers/vivienne-zeng",
    bio: [
      "Vivienne has travelled worldwide to learn from different teachers and has accumulated 1,400 hours of teacher training in different areas.",
      "She teaches Alignment, Bikram, Hatha, Vinyasa, FlyHigh yoga, Power yoga, Yoga with Wheel, Restorative yoga and more. Her classes focus on good alignment so her students progress fast. Through practising and teaching she dives deep into yoga philosophy.",
      "She has benefited greatly from yoga, physically and mentally, and her passion is to share authentic yoga with others.",
    ],
  },
  {
    slug: "shein",
    name: "Shein",
    role: "Yoga Teacher",
    styles: ["Vinyasa", "Hot Yoga"],
    image: "teachers/shein",
    bio: [
      "After years of juggling yoga with a fast-paced job, I finally took the leap and moved to Bali to follow my yoga passion full-time. I did my 200-hour teacher training here in 2023, diving deep into Vinyasa, alignment, and the roots of the practice.",
      "My style is a mix of strength, flow, and mindfulness — designed to help you feel grounded but also challenged in the best way. One of my favourites is Hot Yoga, which I’ll be teaching here at Samadi.",
    ],
  },
  {
    slug: "ricardo",
    name: "Ricardo",
    role: "Yoga & Wellness Teacher",
    styles: ["Vinyasa", "FlyHigh Yoga", "Sound Healing"],
    image: "teachers/ricardo",
    bio: [
      "Experienced Yoga Alliance Registered Teacher (RYT 500+ hours) with over five years of proven teaching. Drawing from a background in the Elite Naval Marine Corps and as a personal trainer, he brings unique expertise to his global yoga practice.",
      "Having taught in diverse settings — the Netherlands, Australia, Thailand and Indonesia — he offers a multicultural teaching experience. A deep understanding of the body–mind connection enhances transformative yoga experiences for all levels, with dynamic and somatic self-exploration and a holistic approach to well-being.",
    ],
  },
  {
    slug: "regine",
    name: "Regine",
    role: "Yoga Teacher",
    styles: ["Vinyasa", "Hatha", "Yin Yang"],
    image: "teachers/regine",
    bio: [
      "Regine is a Bali-based yoga teacher trained in Rishikesh, India, and a yoga practitioner for more than six years. She teaches Vinyasa, Hatha and Ashtanga Half-Primary, as well as other styles, blending flow with strength and adding touches of Sanskrit, mantras and philosophy as a way to honour yoga’s roots.",
      "Off the mat, she surfs, explores creative pursuits, and works in R&D technology consulting.",
    ],
  },
  {
    slug: "juliya",
    name: "Juliya Light",
    role: "Yoga Teacher",
    styles: ["FlyHigh Yoga", "Hatha", "Yoga Nidra"],
    image: "teachers/juliya",
    bio: [
      "Juliya Light’s yoga roots are in the Tibetan Alternative Medicine School of Parapsychology “Wu-Wei”. In the Egyptian desert of the Sinai Peninsula, she mastered Sivananda Indian traditions from Dharamshala with Gaby Anjali. Her heart then brought her to Bali to certify in Hatha-Vinyasa Flow, and she became a registered Yoga Alliance trainer.",
      "Juliya teaches Nidra and Meditation, Hatha and Vinyasa, FlyHigh, Yin, Restorative and Healing art styles of yoga, sharing her passion for life and yoga with everyone.",
    ],
  },
  {
    slug: "anshul",
    name: "Anshul",
    role: "Wellness Teacher",
    styles: ["Breathwork", "Sound Healing"],
    image: "teachers/anshul",
    bio: [
      "Anshul blends traditional yogic wisdom with a grounded, modern approach to guide people into deeper presence and inner harmony.",
      "Through the fusion of hatha yoga, pranayama, and live sound healing using Indian classical instruments, his sessions invite stillness, clarity, and connection to breath and vibration.",
    ],
  },
  {
    slug: "muriel",
    name: "Muriel",
    role: "Yoga Teacher",
    styles: ["Hatha", "Yin Yoga", "Yoga Nidra"],
    image: "teachers/muriel",
    bio: [
      "Muriel is an experienced yoga teacher (and student) trained in Vinyasa, Hatha and Yin Yoga, with a special focus on Yin and Yoga Nidra. Inspired by the healing and regulating effects she has experienced through these practices, her path has evolved toward slower, more inward-focused teachings that support rest, balance and reconnection.",
      "Alongside yoga, she is a passionate Ayurvedic health counsellor with a special focus on women’s health, and she gently weaves this holistic perspective into her work.",
      "Her teaching style blends playfulness and openness, creating a safe and welcoming space for students of all ages and experience levels to explore their inner wisdom.",
    ],
  },
  {
    slug: "liza",
    name: "Liza",
    role: "Yoga Teacher",
    styles: ["Ashtanga"],
    image: "teachers/liza",
    bio: [
      "Yoga for me is a disciplined methodology for building physical resilience, mental clarity, and emotional regulation. It is the system I use to cultivate stability and focused attention in a high-performance world.",
      "Before fully committing to yoga, I built a successful career in proptech, working in a fast-paced, analytical environment. Choosing this path was a deliberate shift toward depth, embodiment, and long-term human performance.",
      "Rooted in Ashtanga, I integrate strength, mobility, breath control, and concentration within a progressive system. I work best with physically active students who value discipline and intelligent intensity.",
    ],
  },
  {
    slug: "danielle",
    name: "Danielle",
    role: "Yoga Teacher",
    styles: ["Hatha", "Yin Yoga", "Vinyasa", "Ashtanga"],
    image: "yoga/class-6",
    bio: [],
  },
  {
    slug: "leona",
    name: "Leona",
    role: "Yoga Teacher",
    styles: ["Mindful Movement", "Beginner", "Vinyasa Gentle Flow"],
    image: "yoga/class-8",
    bio: [],
  },
  {
    slug: "lala",
    name: "Lala",
    role: "Yoga Teacher",
    styles: ["Beginner Yoga", "Meditation", "Sound Healing"],
    image: "yoga/class-7",
    bio: [],
  },
];

export const featuredTeachers = teachers.filter((t) => t.image);

export const teacherStyles = ["Vinyasa", "Hatha", "Yin", "Ashtanga", "Breath & Sound", "FlyHigh"] as const;

export function teacherMatchesStyle(teacher: Teacher, style: (typeof teacherStyles)[number]) {
  const s = teacher.styles.join(" ").toLowerCase();
  if (style === "Breath & Sound") return s.includes("breath") || s.includes("sound") || s.includes("meditation");
  if (style === "Yin") return s.includes("yin") || s.includes("nidra");
  return s.includes(style.toLowerCase());
}
