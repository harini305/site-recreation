import type { NextConfig } from "next";

const detox = ["3", "5", "7", "10", "14", "21"].map((d) => ({
  source: `/${d}-days-detox-program`,
  destination: `/wellness/detox/${d}-day`,
  permanent: true,
}));

// Old samadibali.com URLs -> new structure (kept so links and search results keep working).
const legacy: [string, string][] = [
  ["/about-us", "/about"],
  ["/founder", "/about"],
  ["/samadi-team", "/about"],
  ["/yoga-schedules", "/yoga/schedule"],
  ["/yoga-teachers", "/yoga/teachers"],
  ["/private-yoga", "/yoga/private"],
  ["/price-table", "/yoga"],
  ["/workshops-events", "/events"],
  ["/add-workshop", "/events"],
  ["/ytt-retreats", "/teacher-training"],
  ["/health-wellness", "/wellness"],
  ["/7-days-liver-detox-program", "/wellness/detox/7-day-liver"],
  ["/ayurveda-consultation", "/wellness/ayurveda"],
  ["/theta-healing-consultation", "/wellness/theta-healing"],
  ["/restaurant", "/eat-shop/restaurant"],
  ["/restaurant-2", "/eat-shop/restaurant"],
  ["/super-market", "/eat-shop/market"],
  ["/sunday-market", "/eat-shop/sunday-market"],
  ["/shop", "/eat-shop/shop"],
  ["/blog", "/journal"],
  ["/latest-news", "/journal"],
  ["/yoga-at-samadi-bali-a-practice-for-all-levels", "/journal/yoga-at-samadi-bali-a-practice-for-all-levels"],
  ["/holistic-treatments-and-wellness-offerings", "/journal/holistic-treatments-and-wellness-offerings"],
  ["/organic-food-at-samadi-bali-fuel-for-the-body", "/journal/organic-food-at-samadi-bali-fuel-for-the-body"],
  ["/get-in-touch", "/contact"],
  ["/contact-us-1", "/contact"],
  ["/booking-form", "/contact"],
  ["/link", "/contact"],
  ["/gallery", "/spaces"],
  ["/privacy-policy-samadi", "/privacy-policy"],
  ["/website-disclaimer", "/disclaimer"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85, 90],
    imageSizes: [64, 128, 256, 384, 512],
    // Product photos for the on-site shop come from the store's Olsera CDN.
    remotePatterns: [{ protocol: "https", hostname: "d1d8o7q9jg8pjk.cloudfront.net", pathname: "/p/**" }],
    deviceSizes: [360, 390, 640, 768, 828, 1024, 1280, 1440, 1920, 2560],
  },
  async redirects() {
    return [
      ...legacy.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...detox,
      { source: "/:slug(wytt-.*)", destination: "/teacher-training", permanent: true },
      { source: "/events/:slug+", destination: "/events", permanent: true },
    ];
  },
};

export default nextConfig;
