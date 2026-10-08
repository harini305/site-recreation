import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { BulletGrid, PlacePanel, SplitFeature, StatBand } from "@/components/sections/Blocks";
import { CardGrid, OverlayCard } from "@/components/sections/Cards";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { about } from "@/content/places";
import { stats } from "@/content/community";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Samadi",
  description:
    "Samadi Super Foods & Wellness combines an organic supermarket, a vegan café and a holistic wellness centre in Canggu — a community where wellness becomes a way of life.",
  path: "/about",
  image: "yoga/shala-2",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="yoga/shala-2"
        eyebrow="Our Story"
        title="Welcome to Samadi"
        crumbs={[{ name: "About", path: "/about" }]}
        panel={
          <>
            <p>{about.welcome[0]}</p>
            <p>{about.welcome[1]}</p>
          </>
        }
        scrollTo="#story"
      />

      <section id="story" className="section">
        <div className="container">
          <SplitFeature image="restaurant/r-6" eyebrow="A Lifestyle Space" title="Where Wellness Becomes a Way of Life">
            <p>{about.welcome[2]}</p>
            <p>{about.welcome[3]}</p>
            <p>{about.community}</p>
          </SplitFeature>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading
            layout="center"
            eyebrow="Samadi Missions"
            title={about.missionLine}
            titleClassName="statement"
          />
          <div className="two-col" data-reveal="">
            {about.mission.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Choose Us" title="What Guides Everything We Do">
            <p>
              Quality, sustainability and genuine care — whether you join a class, book a treatment, or simply shop for
              your week.
            </p>
          </SectionHeading>
          <Tabs
            label="Why choose Samadi"
            items={[
              { id: "yoga", label: "Our Yoga", content: <BulletGrid items={about.whyYoga} /> },
              { id: "market", label: "Our Market", content: <BulletGrid items={about.whyMarket} /> },
            ]}
          />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <VideoFeature kind="youtube" id={about.videoId} poster="yoga/class-8" title="Samadi Bali" />
        </div>
      </section>

      <StatBand
        image="yoga/teachers-group"
        eyebrow="Samadi in numbers"
        title="A Wellness & Yoga Community in the Heart of Canggu"
        stats={[...stats.yoga.slice(0, 3), { value: 1000, suffix: "+", label: "Organic products" }]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Explore" title="Everything Under One Roof">
            <p>Combine your yoga class with a nourishing meal, a healing session, or a visit to the market.</p>
          </SectionHeading>
          <CardGrid cols={3}>
            <OverlayCard
              href="/yoga"
              image="yoga/shala-5"
              title="Yoga & Workshops"
              accent="Yoga"
              pills={["Daily"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/wellness"
              image="detox/ayurveda-2"
              title="Healing & Detox"
              accent="Healing"
              pills={["By appointment"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/eat-shop/restaurant"
              image="restaurant/r-2"
              title="Café & Market"
              accent="Café"
              pills={["Open daily"]}
              meta="Samadi Canggu"
            />
          </CardGrid>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <PlacePanel
            image="about/storefront"
            title="Visit Us in Canggu"
            mood="Jalan Padang Linjong 39"
            bullets={[
              "Near Echo Beach",
              "Market open daily, 7.30 – 21.30",
              "Free Samadi tote with purchases over IDR 200k",
            ]}
            actions={
              <ButtonRow>
                <Button href="/spaces" variant="brand">
                  Our spaces
                </Button>
                <Button href="/contact" variant="outline">
                  Contact & directions
                </Button>
              </ButtonRow>
            }
          >
            <p>
              Find us on Jalan Padang Linjong in Canggu — yoga shala, café, supermarket and Sunday Market, all in one
              place.
            </p>
          </PlacePanel>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
