import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Img } from "@/components/ui/Img";
import { CardGrid, IncludedCard, ReviewCard } from "@/components/sections/Cards";
import { BulletGrid, PlacePanel, ShadowCard, SplitFeature, StatBand } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { market } from "@/content/places";
import { stats, testimonials } from "@/content/community";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./market.module.css";

export const metadata = pageMetadata({
  title: "Samadi Super Foods Market — Organic Supermarket in Canggu",
  description:
    "Organic produce from local farmers, French bakery, Velato vegan gelato, superfoods and zero-plastic packaging. Open daily 7.30 – 21.30 in Canggu, or shop online.",
  path: "/eat-shop/market",
  image: "market/m-1",
});

export default function MarketPage() {
  return (
    <>
      <PageHero
        image="market/m-3"
        eyebrow="Samadi Super Market"
        title="Shop Smart. Live Fresh. The Bali Way."
        crumbs={[{ name: "Super Foods Market", path: "/eat-shop/market" }]}
        lead={market.intro}
        actions={
          <>
            <Button href="/eat-shop/shop" size="l">
              Shop online
            </Button>
            <Button href={site.mapsHref} variant="glass" size="l" icon="pin">
              Visit the store
            </Button>
          </>
        }
        scrollTo="#story"
      />

      <section id="story" className="section">
        <div className="container">
          <SplitFeature
            image="market/m-1"
            eyebrow={site.marketHours}
            title="Your Organic & Healthy Food Store in Canggu"
          >
            {market.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </SplitFeature>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Why Choose Us" title="Quality Over Quantity" />
          <CardGrid cols={4}>
            {market.why.map((w) => (
              <IncludedCard key={w.title} title={w.title}>
                <p>{w.text}</p>
              </IncludedCard>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Supermarket Product" title="Our Organic Products & Kitchen Stuff">
            <p>
              From daily bread and pure fresh juices to local farmers’ fruit and vegetables — and quality kitchen and
              table ware.
            </p>
          </SectionHeading>
          <ul role="list" className={styles.categories}>
            {market.categories.map((c) => (
              <li key={c.label} data-reveal="" data-card="soft">
                <Img
                  k={c.image}
                  sizes="(max-width: 767px) 45vw, 380px"
                  ratio="1 / 1"
                  alt={c.label}
                  className={styles.tile}
                />
              </li>
            ))}
          </ul>
          <div className="mt-xl">
            <BulletGrid items={market.highlights} />
          </div>
        </div>
      </section>

      <StatBand
        image="market/m-2"
        eyebrow="Super Foods Market"
        title="Daily Fresh Supplies, French Bakery, Homemade Products"
        stats={stats.market}
      />

      <section className="section">
        <div className="container">
          <PlacePanel
            image="market/veggie"
            title={market.eggs.title}
            mood="With Animals Do Not Speak Human"
            bullets={market.eggs.points.map((p) => `${p.title} — ${p.text}`)}
          >
            {market.eggs.text.map((t) => (
              <p key={t.slice(0, 24)}>{t}</p>
            ))}
          </PlacePanel>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <SectionHeading layout="center" title="Loved by Locals & Travellers" />
          <Carousel label="Market reviews" perView={{ base: 1.08, md: 2, lg: 3 }}>
            {testimonials
              .filter((t) => t.topic === "Market")
              .map((t) => (
                <ReviewCard key={t.name} quote={t.quote} name={t.name} origin={t.origin} />
              ))}
          </Carousel>
          <ButtonRow center className="mt-l">
            <Button href="/eat-shop/sunday-market" variant="outline">
              The Sunday Market
            </Button>
          </ButtonRow>
        </div>
      </section>

      <section id="shop-online" className="section">
        <div className="container">
          <ShadowCard
            title="Bali’s Freshest Picks — Just a Click Away"
            actions={
              <>
                <Button href="/eat-shop/shop" variant="brand" icon="basket">
                  Start shopping
                </Button>
                <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
                  Order questions
                </Button>
              </>
            }
          >
            <p>
              Get the best of Bali’s fresh produce and daily essentials delivered straight to your door. Trusted by
              locals and expats alike, our online shop offers everything you need — fresh, fast, and just a few clicks
              away. Fill your basket here and send the order straight to the market team on WhatsApp.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about the supermarket." />
    </>
  );
}
