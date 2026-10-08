import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CardGrid, LocationCard, OverlayCard } from "@/components/sections/Cards";
import { FullBleedPanel, PlacePanel } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { canggu } from "@/content/places";
import { moana, training } from "@/content/training";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./spaces.module.css";

export const metadata = pageMetadata({
  title: "Our Spaces — Samadi Canggu & Moana at Nuanu",
  description:
    "Samadi Canggu on Jalan Padang Linjong — yoga shala, café, organic supermarket and Sunday Market — and Moana Wellness Hub at Nuanu Creative City, home of our teacher training.",
  path: "/spaces",
  image: "yoga/shala-4",
});

const choices = [
  {
    title: "You want a daily practice — and a good breakfast after",
    text: "Drop into a class in the garden shala, then stay for a plant-based brunch at the café.",
    place: "Samadi Canggu",
    href: "/yoga/schedule",
  },
  {
    title: "You need a reset for body and mind",
    text: "Book a healer, an Ayurveda consultation or a multi-day detox at our Health & Wellness Hub.",
    place: "Samadi Canggu",
    href: "/wellness",
  },
  {
    title: "You’re ready to become a yoga teacher",
    text: "Three immersive weeks of Yoga Alliance training plus 20 hours of wellness, surrounded by nature.",
    place: "Moana at Nuanu",
    href: "/teacher-training",
  },
  {
    title: "You love a slow Sunday morning",
    text: "Meet local organic farmers and artisans at the Samadi Sunday Market — every Sunday morning.",
    place: "Samadi Canggu",
    href: "/eat-shop/sunday-market",
  },
];

export default function SpacesPage() {
  return (
    <>
      <PageHero
        variant="contained"
        image="yoga/shala-4"
        eyebrow="Our Spaces"
        title="From Garden Shala to Jungle Sanctuary"
        crumbs={[{ name: "Our Spaces", path: "/spaces" }]}
        lead="Find the setting that inspires your practice — in the heart of Canggu, or at Nuanu Creative City."
      />

      <section className="section pt-0">
        <div className="container">
          <CardGrid cols={2}>
            <LocationCard href="#canggu" image="hero/cafe" place="Canggu, Bali" title="Samadi Canggu">
              Our home near Echo Beach — yoga shala, café restaurant, organic supermarket and the Sunday Market, all in
              one tranquil space.
            </LocationCard>
            <LocationCard href="#moana" image="training/film-1" place="Nuanu, Tabanan" title="Moana at Nuanu">
              A wooden sanctuary shala and open-air dome at Nuanu Creative City — home of our Wellness Yoga Teacher
              Training.
            </LocationCard>
          </CardGrid>
        </div>
      </section>

      <FullBleedPanel
        id="canggu"
        image="yoga/shala-5"
        tags={["EchoBeach", "GardenShala", "Community"]}
        title="Samadi Canggu"
        cta={
          <Button href={site.mapsHref} icon="pin">
            Get directions
          </Button>
        }
        info={
          <>
            <div className={styles.infoCol}>
              <p className={styles.infoLabel}>Address</p>
              <p>
                {site.address.street}, {site.address.area}, {site.address.region} {site.address.postalCode}
              </p>
              <p className={styles.infoLabel}>Market hours</p>
              <p>{site.marketHours}</p>
            </div>
            <ul role="list" className={styles.infoLinks}>
              {[
                { label: "Yoga shala & weekly classes", href: "/yoga" },
                { label: "Café restaurant", href: "/eat-shop/restaurant" },
                { label: "Super Foods Market", href: "/eat-shop/market" },
                { label: "Health & Wellness Hub", href: "/wellness" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    {l.label} <Icon name="arrowRight" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        }
      >
        <p>{canggu.intro}</p>
      </FullBleedPanel>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="At Samadi Canggu" title="Everything in One Tranquil Space" />
          <CardGrid cols={4}>
            <OverlayCard href="/yoga" image="yoga/shala-1" title="Yoga Shala" pills={["Daily classes"]} ratio="3 / 4" />
            <OverlayCard
              href="/eat-shop/restaurant"
              image="restaurant/r-1"
              title="Café Restaurant"
              pills={["Plant-based"]}
              ratio="3 / 4"
            />
            <OverlayCard
              href="/eat-shop/market"
              image="market/m-1"
              title="Super Foods Market"
              pills={["7.30 – 21.30"]}
              ratio="3 / 4"
            />
            <OverlayCard
              href="/eat-shop/sunday-market"
              image="sunday/s-1"
              title="Sunday Market"
              pills={["Sundays"]}
              ratio="3 / 4"
            />
          </CardGrid>
        </div>
      </section>

      <FullBleedPanel
        id="moana"
        image="training/film-1"
        tags={["Nuanu", "Nature", "TeacherTraining"]}
        title="Moana at Nuanu"
        cta={
          <Button href="/teacher-training" icon="sun">
            Teacher training at Moana
          </Button>
        }
        info={
          <>
            <div className={styles.infoCol}>
              <p className={styles.infoLabel}>Location</p>
              <p>
                {moana.name} · {moana.place}, Bali
              </p>
              <p className={styles.infoLabel}>On site</p>
              <p>{moana.features.join(" · ")}</p>
            </div>
            <ul role="list" className={styles.infoLinks}>
              <li>
                <Link href="/teacher-training#dates">
                  Upcoming training dates <Icon name="arrowRight" size={18} />
                </Link>
              </li>
              <li>
                <a href={training.accommodationHref} target="_blank" rel="noopener noreferrer">
                  Stay at Nuanu Suites <Icon name="arrowUpRight" size={18} />
                </a>
              </li>
            </ul>
          </>
        }
      >
        <p>{moana.intro}</p>
      </FullBleedPanel>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" title="Which Samadi Experience Feels Right for You?" />
          <ul role="list" className={styles.choices}>
            {choices.map((c) => (
              <li key={c.title} data-reveal="">
                <Link href={c.href} className={styles.choice}>
                  <span className={styles.choiceTitle}>{c.title}</span>
                  <span className={styles.choiceText}>{c.text}</span>
                  <span className={styles.choicePlace}>
                    {c.place} <Icon name="arrowRight" size={16} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PlacePanel
            image="about/storefront"
            title="Find Us in Canggu"
            mood={`${site.address.street} · near Echo Beach`}
            actions={
              <ButtonRow>
                <Button href={site.mapsHref} variant="brand" icon="pin">
                  Open in Google Maps
                </Button>
                <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
                  WhatsApp us
                </Button>
              </ButtonRow>
            }
          >
            <p>Look for the Samadi storefront on Jalan Padang Linjong — the shala, café and market are all inside.</p>
          </PlacePanel>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
