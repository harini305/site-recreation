import type { MediaKey } from "./media";

// Source: samadibali.com/health-wellness.

export type Practitioner = {
  slug: string;
  name: string;
  title: string;
  modality: string;
  image: MediaKey;
  intro: string[];
  pricing: { label: string; value: string }[];
  duration?: string;
};

export const bookingRule = "Appointment only — reservation and down payment are required 24 hours before treatment.";

export const wellnessIntro =
  "Samadi Health & Wellness Hub is a sanctuary dedicated to nurturing both the mind and body. Every day, we feature a skilled Healer, Therapist, or Wellness Consultant, offering their unique expertise to support your well-being. Take the time to explore their bios and availability, and find the practitioner to guide you on your healing journey. Whether you’re looking for relaxation, restoration, or clarity, our team is here to assist you every step of the way.";

export const practitioners: Practitioner[] = [
  {
    slug: "abdi",
    name: "Abdi",
    title: "Wellness Healer",
    modality: "Chakra Balancing & Sound Healing",
    image: "journal/treatment",
    intro: [
      "Chakra Balancing is a holistic healing that places crystal stones on each chakra point. Each chakra has a different colour and energy. It is administered by a healer with a special “given talent”, who channels healing energy through the palms of his hands, focusing on the seven main chakra points of the body to release stress and emotional tension, clear the mind and induce a sense of harmony, tranquillity and freedom.",
      "As a Balinese, Abdi feels grateful for growing up with Balinese culture and tradition. He began meditating in 1992 and, guided by many teachers, found his calling as a healer. Yoga entered his life in 2003; in 2006 he completed his Yoga Teacher Training. In 2015 he was certified as a Sound Healer by a Nepalese sound healer and received his Gong Master certification the same year.",
    ],
    pricing: [{ label: "Session", value: "Rp 1,800,000" }],
    duration: "60 minutes",
  },
  {
    slug: "norin",
    name: "Norin",
    title: "Wellness Healer",
    modality: "Rebirthing Breathwork & Sound Healing",
    image: "wellness/norin",
    intro: [
      "Norin is a dedicated practitioner and facilitator of Rebirthing Breathwork and Sound Healing, with over 600 hours of training — including the Embodied Science of Breathwork, Advanced Breathwork and Somatic Movement, Facilitated Breathwork Repatterning, Rebirthing Breathwork Facilitator and Sound Healer level 2.",
      "Sessions begin with a 15-minute conversation to tune in to what is present in your life and set your intention, followed by somatic movement to prepare the body. As you lie down to breathe, you embark on a journey of inner exploration and healing. Afterwards Norin offers integration and guidance to help you bring new insights into daily life.",
    ],
    pricing: [{ label: "Session", value: "Rp 3,500,000" }],
    duration: "120 minutes",
  },
  {
    slug: "edwin",
    name: "Edwin",
    title: "Wellness Healer",
    modality: "Brainspotting & Transformation Breathwork",
    image: "wellness/edwin",
    intro: [
      "Brainspotting is a form of therapy that helps clients process difficult emotions or unprocessed traumatic experiences. Different eye positions are used to identify “brainspots” linked to certain experiences, emotions, or sources of distress — combined with mind–body awareness and mindfulness to help overcome issues like PTSD, depression, and anxiety.",
      "Transformation Breathwork is a direct application of conscious, connected breathing. For about an hour you lie on your back and sustain a full, flowing breath — an active form of meditation. Many people notice they are more connected to their bodies and more aware of what is emotionally present.",
    ],
    pricing: [
      { label: "Brainspotting · 75 min", value: "IDR 2,500,000" },
      { label: "Transformation Breathwork · 75 min", value: "IDR 2,500,000" },
      { label: "Combined (recommended) · 120 min", value: "IDR 4,500,000" },
    ],
  },
  {
    slug: "raj-mohan",
    name: "Vachaspati Raj Mohan",
    title: "Wellness Consultant",
    modality: "Ayurveda Yoga Sport Consultant",
    image: "wellness/raj-mohan",
    intro: [
      "With many years of dedicated practice in Kerala, Raj Mohan has journeyed to Bali to share his wisdom as an Ayurveda Yoga Sport Consultant.",
      "He offers holistic Detox consultations, Ayurveda Dosha consultations, and Ayurveda Healing consultations addressing stress, insomnia, low back pain, menstrual problems, ADHD, hormone imbalances, skin problems, pain and inflammation, liver disorders and colon problems — as well as Ayurveda training, workshops, cooking classes and retreats.",
    ],
    pricing: [
      { label: "Detox consult", value: "IDR 1,600,000" },
      { label: "Life coach consult", value: "IDR 2,200,000" },
      { label: "Dosha test consult", value: "IDR 1,400,000" },
    ],
    duration: "60 minutes",
  },
  {
    slug: "divyanga",
    name: "Divyanga",
    title: "Certified Nutrition Health Coach",
    modality: "Gut, Hormone & Ayurvedic Nutrition",
    image: "wellness/divyanga",
    intro: [
      "A personalised one-on-one consultation specialising in gut health, hormone balance, and Ayurvedic assessment. This session supports concerns such as chronic fatigue, bloating, digestive issues, IBS, gastritis, GERD, food sensitivities, and hormonal imbalances including PCOS, endometriosis, and irregular cycles.",
      "You’ll receive a comprehensive assessment and a tailored 3-week plan including nutrition, herbs, supplements, and lifestyle guidance, with ongoing WhatsApp support throughout your healing journey.",
    ],
    pricing: [{ label: "Consultation", value: "IDR 1,600,000" }],
    duration: "60 minutes",
  },
  {
    slug: "jeanne",
    name: "Jeanne",
    title: "Physical & Spiritual Recovery Coach",
    modality: "Yoga Therapy (C-IAYT) & Recovery",
    image: "wellness/jeanne",
    intro: [
      "As a certified Yoga Therapist (C-IAYT) and recovery coach, Jeanne supports healing on all levels — from physical injury or illness to emotional burnout and spiritual disconnection — weaving together therapeutic yoga, nervous system regulation, breathwork, energy healing, and intuitive coaching.",
      "Private sessions are available for physical recovery (injury, illness, post-accident), emotional resilience and nervous system healing, and spiritual reconnection and realignment.",
    ],
    pricing: [
      { label: "First session · 45 min intake", value: "Free of charge" },
      { label: "Single session · 90 min", value: "IDR 1,200,000" },
      { label: "5 sessions", value: "IDR 5,500,000" },
    ],
  },
];

export const ayurveda = {
  intro:
    "Unlock the secrets of your unique energies and find harmony in your life. Ayurvedic consultations at Samadi help you understand your body constitution and any imbalances, guiding you toward a balanced, healthy lifestyle.",
  consultations: [
    {
      name: "Prakruti / Dosha Analysis",
      duration: "30 – 45 minutes",
      price: "Rp 1,450,000",
      intro:
        "Unlock the secrets of your unique energies and find harmony in your life. Our Prakruti consultations help you understand your body constitution, guiding you towards a balanced and healthy lifestyle.",
      includes: [
        "Prakruti Assessment — discover your unique body constitution and how it influences you",
        "Pathya Ahara — tailored dietary recommendations to nourish and balance you",
        "Dinacharya — personalised lifestyle and activity changes to support your overall well-being",
      ],
    },
    {
      name: "Vikruti / Disease Analysis Healing",
      duration: "60 – 90 minutes",
      price: "From Rp 1,600,000",
      intro:
        "Embrace natural healing and enhance your vitality. Our Vikruti consultations provide a thorough analysis of any health concerns, helping you achieve a long, strong, and vibrant life.",
      includes: [
        "Dosha Analysis — understand your Ayurvedic constitution and its impact",
        "Nadi / Pulse Diagnosis — insights into your health through detailed pulse examination",
        "Asta Vidha Pariksha & Dasha Vidha Pariksha — comprehensive analysis of body systems",
        "Aushadha & Chikitsa — herbal supplements and Ayurvedic therapies to support healing",
        "Pathya Ahara & Dinacharya — customised diet and lifestyle changes",
      ],
    },
  ],
  prepare: [
    { title: "Diet", text: "Avoid heavy foods and strenuous physical activity before your consultation." },
    {
      title: "Documents",
      text: "Bring your latest medical reports and a list of any health supplements you are currently taking.",
    },
  ],
};

export const theta = {
  duration: "60 minutes",
  price: "Rp 1,500,000",
  intro:
    "Welcome to Theta Healing, a world-renowned energy healing technique designed to transform your body, mind, and spirit. Connect with the divine and experience profound changes in your life.",
  what: "Theta Healing is a meditation technique and spiritual philosophy that uses focused thought and prayer. The method offers physical, emotional, and spiritual healing by tapping into the Theta brain wave.",
  benefits: [
    { title: "Positive Lifestyle", text: "Embrace positivity and live your best life." },
    { title: "Remove Negative Beliefs", text: "Let go of limiting beliefs." },
    { title: "Physical & Emotional Health", text: "Enhance your overall well-being." },
    { title: "Release Stress & Anxiety", text: "Find peace and calm." },
    { title: "Reach Your Full Potential", text: "Unlock your true potential." },
  ],
  closing:
    "Personalised insights and natural solutions to help you achieve inner balance, vitality, and a deeper connection to your true self.",
};
