import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Img } from "@/components/ui/Img";
import { CheckList, PlacePanel, SplitFeature, Zigzag } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { restaurant } from "@/content/places";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./restaurant.module.css";

export const metadata = pageMetadata({
  title: "Samadi Café Restaurant — Plant-Based Dining in Canggu",
  description:
    "Mindful, plant-based dining in a tranquil garden in Canggu — organic, locally sourced vegetarian and vegan dishes, fresh juices, superfood smoothies and specialty coffee.",
  path: "/eat-shop/restaurant",
  image: "restaurant/r-1",
});

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        image="restaurant/r-1"
        eyebrow="Café Restaurant"
        title="Samadi Restaurant"
        crumbs={[{ name: "Restaurant", path: "/eat-shop/restaurant" }]}
        panel={<p>{restaurant.intro}</p>}
        actions={
          <Button href={site.mapsHref} size="l" icon="pin">
            Restaurant directions
          </Button>
        }
        scrollTo="#experience"
      />

      <section id="experience" className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Café Restaurant Is 100% Healthy" title="A Conscious Culinary Experience">
            <p>{restaurant.sections[0].text}</p>
          </SectionHeading>
          <Zigzag
            items={[
              {
                image: "restaurant/r-2",
                title: restaurant.sections[1].title,
                text: <p>{restaurant.sections[1].text}</p>,
              },
              {
                image: "restaurant/r-5",
                title: restaurant.sections[2].title,
                text: <p>{restaurant.sections[2].text}</p>,
              },
            ]}
          />
        </div>
      </section>

      <section className={styles.gallery} aria-label="Restaurant gallery">
        <div className="container">
          <Carousel label="Restaurant photos" perView={{ base: 1.15, md: 2.2, lg: 3 }}>
            {restaurant.gallery.map((k) => (
              <Img key={k} k={k} sizes="(max-width: 767px) 85vw, 420px" ratio="4 / 5" className={styles.shot} />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SplitFeature
            image="restaurant/r-3"
            eyebrow="What Makes It Unique"
            title="Wholesome Food, Elevated Yet Relaxed"
            reverse
          >
            <CheckList items={restaurant.unique} icon="leaf" />
            <ButtonRow>
              <Button href={site.mapsHref} variant="brand" icon="pin">
                Get directions
              </Button>
              <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
                Ask about the menu
              </Button>
            </ButtonRow>
          </SplitFeature>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <PlacePanel
            image="market/bread"
            title="Take Samadi Home"
            mood="Super Foods Market · Bakery · Velato"
            actions={
              <Button href="/eat-shop/market" variant="brand">
                Visit the market
              </Button>
            }
          >
            <p>
              Next door, our organic supermarket stocks fresh bread from the Samadi Bakery, vegan gelato from Velato and
              everything for a healthy pantry.
            </p>
          </PlacePanel>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about the restaurant." />
    </>
  );
}
