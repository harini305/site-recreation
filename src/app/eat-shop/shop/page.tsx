import { PageHero } from "@/components/sections/PageHero";
import { Shop } from "@/components/shop/Shop";
import { shopCategories, shopProducts } from "@/content/shop";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Shop Online — Samadi Supermarket",
  description:
    "Order organic produce, fresh bakery, Velato gelato, superfoods and eco essentials from Samadi Supermarket in Canggu — delivered or ready for pick-up.",
  path: "/eat-shop/shop",
  image: "market/veggie",
});

export default function ShopPage() {
  return (
    <>
      <PageHero
        image="market/veggie"
        eyebrow="Samadi Supermarket · Shop Online"
        title="Bali’s Freshest Picks — Just a Click Away"
        crumbs={[
          { name: "Super Foods Market", path: "/eat-shop/market" },
          { name: "Shop Online", path: "/eat-shop/shop" },
        ]}
        lead="Fill your basket with organic produce, fresh bread and daily essentials, then send your order to the market team on WhatsApp for delivery or pick-up."
        scrollTo="#shop"
      />

      <section id="shop" className="section">
        <div className="container">
          <Shop products={shopProducts} categories={shopCategories} />
        </div>
      </section>
    </>
  );
}
