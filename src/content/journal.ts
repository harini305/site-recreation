import type { MediaKey } from "./media";

// Source: samadibali.com blog (3 posts, published 15 March 2024).

export type Block = { type: "p"; text: string } | { type: "h2"; text: string } | { type: "image"; image: MediaKey };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Yoga" | "Health & Wellness" | "Restaurant";
  date: string;
  cover: MediaKey;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "yoga-at-samadi-bali-a-practice-for-all-levels",
    title: "Yoga at Samadi Bali: A Practice for All Levels",
    excerpt:
      "Daily classes for every level — Vinyasa, Hatha, Ashtanga and Yin — in a shala open on all sides to the garden.",
    category: "Yoga",
    date: "2024-03-15",
    cover: "journal/yoga",
    body: [
      {
        type: "p",
        text: "One of the standout features of Samadi Bali is its dedication to yoga. Offering daily classes for all levels, the center hosts a variety of styles, including Vinyasa, Hatha, Ashtanga, and Yin yoga. Whether you’re looking to deepen your practice or start fresh, Samadi’s expert instructors provide guidance and support to help you grow.",
      },
      {
        type: "p",
        text: "The spacious and beautifully designed yoga shala is open on all sides to the outdoors, allowing for a seamless connection with nature. The soothing sounds of the wind and birds chirping help create a meditative environment, perfect for focusing on your breath and movement.",
      },
      { type: "image", image: "journal/shala" },
      { type: "h2", text: "Discover the Serene Retreat of Samadi Bali: A Holistic Haven for Mind, Body, and Spirit" },
      {
        type: "p",
        text: "Tucked away in the lush landscapes of Canggu, Bali, Samadi Bali is more than just a yoga studio — it’s a sanctuary where travellers, yoga practitioners, and wellness enthusiasts come to reconnect with themselves, reset, and rejuvenate. Offering a blend of yoga, meditation, healthy food, and holistic therapies, Samadi Bali has become a sought-after destination for those looking for peace and balance in their lives.",
      },
      {
        type: "p",
        text: "From the moment you step onto Samadi Bali’s grounds, you are welcomed into a space designed for tranquillity and transformation. Samadi means “awakening” in Sanskrit, a fitting name for a place where individuals come to awaken their inner peace and clarity. Surrounded by Bali’s natural beauty, the center integrates the principles of yoga, meditation, healthy living, and sustainable practices into every experience.",
      },
    ],
  },
  {
    slug: "holistic-treatments-and-wellness-offerings",
    title: "Holistic Treatments and Wellness Offerings",
    excerpt:
      "From Ayurvedic treatments to detox programs and energy healing — wellness that complements your practice.",
    category: "Health & Wellness",
    date: "2024-03-15",
    cover: "journal/wellness",
    body: [
      {
        type: "p",
        text: "Beyond yoga, Samadi Bali offers an array of holistic wellness treatments designed to nurture both body and soul. From traditional Balinese massages to detox programs and energy healing, there’s something for every need. Many guests indulge in a healing session to complement their yoga practice and enhance their sense of well-being.",
      },
      { type: "image", image: "journal/treatment" },
      { type: "h2", text: "Connecting with Bali’s Spiritual Energy" },
      {
        type: "p",
        text: "One of the center’s most popular offerings is Ayurvedic treatments — an ancient Indian healing system that balances the body’s energies through natural therapies, diet, and lifestyle practices. Whether you are seeking relaxation, rejuvenation, or a deep detox, the highly trained therapists at Samadi Bali provide personalised care to suit your specific needs.",
      },
      {
        type: "p",
        text: "Bali is often called the “Island of the Gods,” and it’s easy to see why. The island has a deeply spiritual energy, reflected in its lush landscapes, sacred temples, and rich cultural heritage. Samadi Bali, with its serene atmosphere and focus on mindful living, embodies this energy, offering a safe haven for those seeking healing, spiritual growth, and a deeper connection to the world around them.",
      },
    ],
  },
  {
    slug: "organic-food-at-samadi-bali-fuel-for-the-body",
    title: "Organic Food at Samadi Bali: Fuel for the Body",
    excerpt: "Fresh, organic, locally sourced — plant-based dishes, smoothies and juices from the Samadi Café.",
    category: "Restaurant",
    date: "2024-03-15",
    cover: "journal/food",
    body: [
      {
        type: "p",
        text: "Food is at the heart of wellness, and Samadi Bali recognises the importance of nourishing the body with fresh, organic, and locally sourced ingredients. The Samadi Café offers a delicious range of plant-based dishes, smoothies, fresh juices, and raw foods. From hearty salads to nourishing bowls, the menu is designed to replenish your energy and support your overall health goals.",
      },
      { type: "image", image: "journal/kitchen" },
      { type: "h2", text: "Nourishing Food at Samadi Bali: Healing from Within" },
      {
        type: "p",
        text: "The Samadi Café serves a variety of organic, plant-based meals designed to nourish and replenish the body. From refreshing smoothie bowls to wholesome salads and nourishing bowls, each dish is prepared with fresh, locally sourced ingredients that promote health and vitality.",
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
