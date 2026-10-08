import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { CheckList, SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { sundayMarket } from "@/content/places";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./sunday.module.css";

export const metadata = pageMetadata({
  title: "Samadi Sunday Farmers Market — Canggu",
  description:
    "Every Sunday in Canggu: organic produce from local farmers, artisan foods, plant-based cuisine, cold-pressed juices, natural skincare and handcrafted goods.",
  path: "/eat-shop/sunday-market",
  image: "sunday/s-1",
});

export default function SundayMarketPage() {
  return (
    <>
      <PageHero
        image="hero/sunday"
        eyebrow={`Samadi Sunday Farmers Market · ${sundayMarket.when}`}
        title="Organic. Artisanal. Exceptional."
        crumbs={[{ name: "Sunday Market", path: "/eat-shop/sunday-market" }]}
        lead="A curated wellness market featuring organic produce, artisan goods and conscious living."
        actions={
          <Button href={site.mapsHref} size="l" icon="pin">
            Get directions
          </Button>
        }
        scrollTo="#about"
      />

      <section id="about" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="An Elevated Market Experience"
            title="A Sophisticated Take on Bali’s Beloved Sunday Tradition"
          >
            <p>{sundayMarket.intro}</p>
          </SectionHeading>
          <div className={styles.collage}>
            <div className={styles.cell} data-card="soft">
              <Img
                k="sunday/s-1"
                sizes="(max-width: 767px) 100vw, 640px"
                className={styles.img}
                position="left center"
                reveal
              />
            </div>
            <div className={styles.cell} data-card="soft">
              <Img k="sunday/s-2" sizes="(max-width: 767px) 100vw, 640px" className={styles.img} reveal />
            </div>
            <div className={styles.cell} data-card="soft">
              <Img k="sunday/s-3" sizes="(max-width: 767px) 100vw, 640px" className={styles.img} reveal />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SplitFeature image="sunday/s-3" eyebrow="A Curated Wellness & Lifestyle Experience" title="What to Expect">
            <p>{sundayMarket.curated}</p>
            <CheckList items={sundayMarket.expect} icon="basket" />
          </SplitFeature>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitFeature image="sunday/s-2" eyebrow="Why Visit" title="A Signature Sunday in Canggu" reverse>
            <CheckList items={sundayMarket.why} icon="leaf" />
            <p>{sundayMarket.signature}</p>
            <ButtonRow>
              <Button href="/yoga/schedule" variant="brand">
                Sunday yoga classes
              </Button>
              <Button href="/eat-shop/restaurant" variant="outline">
                Brunch at the café
              </Button>
            </ButtonRow>
          </SplitFeature>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about the Sunday Market." />
    </>
  );
}
