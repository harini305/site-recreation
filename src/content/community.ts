// Testimonials, FAQ and other shared copy — sourced from samadibali.com.

export type Testimonial = { quote: string; name: string; origin: string; topic: "Yoga" | "Market" };

export const testimonials: Testimonial[] = [
  {
    quote:
      "I attended a Hatha yoga class with Regine. It was great and her cues were very clear. The studio is pleasant and clean. It is a welcoming community.",
    name: "Samantha Hannah",
    origin: "Korea",
    topic: "Yoga",
  },
  {
    quote:
      "Had really great vinyasa flow with Nikki. The place itself is so beautiful, with a lot of greens, and you can hear the sound of the moving leaves. So relaxing. Also had iced coffee and banana bread there — so perfect for reading books. Definitely want to come back!",
    name: "Milka Amadea",
    origin: "Indonesia",
    topic: "Yoga",
  },
  {
    quote:
      "I found Samadi the perfect place to do yoga, have vegan breakfast or lunch, have awesome vegan ice cream, and shop for fresh gluten-free buns and much more. It’s a dream come true. Yoga teacher Zee is now my favourite. Highly recommended.",
    name: "Petra Miklosikova",
    origin: "Russia",
    topic: "Yoga",
  },
  {
    quote: "My favourite place for fresh groceries and little souvenirs to bring home!",
    name: "Tatyana Oselska",
    origin: "Sweden",
    topic: "Market",
  },
  { quote: "Fresh fruit and veggies, yummy juices :)", name: "Tessa Gaston", origin: "New York", topic: "Market" },
  {
    quote: "Staff is super friendly and helpful, and the store is well located.",
    name: "Rianna Hijlkema",
    origin: "",
    topic: "Market",
  },
];

export const faq: { q: string; a: string | string[] }[] = [
  {
    q: "What is Samadi Super Foods & Wellness?",
    a: "Samadi Super Foods & Wellness is a holistic lifestyle destination that combines a yoga studio, organic supermarket, healthy restaurant, and a weekly Sunday Market in Canggu, Bali.",
  },
  {
    q: "What services do you offer?",
    a: [
      "Yoga classes (various styles & levels)",
      "Organic & natural supermarket",
      "Healthy restaurant with plant-based options",
      "Weekly Sunday Market featuring local vendors",
    ],
  },
  {
    q: "Do I need to book yoga classes in advance?",
    a: "Advance booking is recommended, especially for popular classes, but walk-ins are welcome if space is available.",
  },
  {
    q: "What types of yoga classes are available?",
    a: "We offer a variety of classes including Hatha, Vinyasa, Yin Yoga, Meditation, and special workshops.",
  },
  {
    q: "Is the restaurant fully vegan?",
    a: "Our restaurant is mostly plant-based, with vegan and vegetarian options using fresh, organic ingredients.",
  },
  {
    q: "What can I find in the supermarket?",
    a: "You’ll find organic produce, superfoods, supplements, natural skincare, and eco-friendly products.",
  },
  {
    q: "When is the Sunday Market held?",
    a: "The Sunday Market is held every Sunday morning, featuring organic food, handmade products, and local artisans.",
  },
  {
    q: "Is Samadi suitable for beginners?",
    a: "Yes! We welcome all levels, from beginners to advanced practitioners.",
  },
  {
    q: "Do you offer wellness events or workshops?",
    a: "Yes, we regularly host workshops, healing sessions, and community events.",
  },
  { q: "Where are you located?", a: "We are located at Jalan Padang Linjong 39, Canggu, Bali, Indonesia." },
];

export const stats = {
  yoga: [
    { value: 14, suffix: "+", label: "Years of experience" },
    { value: 15, suffix: "+", label: "Yoga styles" },
    { value: 20, suffix: "+", label: "Events & workshops" },
    { value: 20, suffix: "", label: "Retreats & YTT" },
  ],
  market: [
    { value: 12, suffix: "+", label: "Years of experience" },
    { value: 1000, suffix: "+", label: "Organic products" },
    { value: 500, suffix: "+", label: "Kitchen items" },
  ],
};
