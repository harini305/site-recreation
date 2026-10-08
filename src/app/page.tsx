import type { Metadata } from "next";
import { HomeHero } from "@/components/sections/HomeHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { CardGrid, EventCard, JournalCard, OverlayCard, ReviewCard } from "@/components/sections/Cards";
import {
  Backdrop,
  ContactPaths,
  InstagramStrip,
  PlacePanel,
  ShadowCard,
  SplitFeature,
  StatBand,
  Zigzag,
} from "@/components/sections/Blocks";
import { TeacherFan } from "@/components/sections/TeacherFan";
import { upcomingEvents } from "@/content/events";
import { featuredTeachers } from "@/content/teachers";
import { stats, testimonials } from "@/content/community";
import { posts, formatDate } from "@/content/journal";
import { upcomingIntakes, training } from "@/content/training";
import { site } from "@/content/site";
import styles from "./home.module.css";

// Events and intakes are date-filtered; regenerate daily.
export const revalidate = 86400;

export const metadata: Metadata = {
  title: { absolute: "Samadi Bali — Yoga, Wellness & Organic Food in Canggu" },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const nextIntake = upcomingIntakes()[0];
  const events = upcomingEvents();

  return (
    <>
      <HomeHero />

      {/* 02 — Intro + pillars */}
      <section id="discover" className="section">
        <div className="container">
          <SectionHeading eyebrow="Samadi Super Foods & Wellness" title="Nurture Your Body, Calm Your Mind">
            <p>
              A holistic lifestyle destination in Bali for those who value organic living, conscious eating, and overall
              well-being — an organic supermarket, a health-focused restaurant and a wellness space, brought together in
              the heart of Canggu.
            </p>
          </SectionHeading>
          <Zigzag
            items={[
              {
                image: "yoga/shala-1",
                title: "Yoga for Every Body",
                text: (
                  <p>
                    Daily classes, workshops and wellness events near Echo Beach — from dynamic Vinyasa to restorative
                    Yin — guided by local and international teachers for every level.
                  </p>
                ),
                href: "/yoga",
                linkLabel: "Classes & prices",
              },
              {
                image: "wellness/norin",
                title: "Healing & Wellness",
                text: (
                  <p>
                    Every day our Health &amp; Wellness Hub features a skilled healer, therapist or consultant —
                    breathwork, sound healing, Ayurveda and multi-day detox programs.
                  </p>
                ),
                href: "/wellness",
                linkLabel: "Meet our healers",
              },
              {
                image: "market/m-3",
                title: "Organic Food, Sourced With Care",
                text: (
                  <p>
                    Premium organic groceries, superfoods and eco-friendly products, a French bakery, and nutrient-rich,
                    plant-based dishes — every element curated for balanced, sustainable living.
                  </p>
                ),
                href: "/eat-shop/market",
                linkLabel: "Visit the market",
              },
              {
                image: "sunday/s-2",
                title: "A Community Hub",
                text: (
                  <p>
                    More than a place to eat or shop — a vibrant hub where locals and travellers meet for yoga,
                    workshops, community events and the Samadi Sunday Market.
                  </p>
                ),
                href: "/eat-shop/sunday-market",
                linkLabel: "The Sunday Market",
              },
            ]}
          />
        </div>
      </section>

      {/* 03 — Offerings */}
      <section className="section bg-alt" aria-labelledby="offerings-title">
        <div className="container">
          <SectionHeading id="offerings-title" eyebrow="Programs" title="Choose the Practice That’s Right for You">
            <p>
              Wherever you are on your journey, there’s a way to begin at Samadi — a single class, a private session, a
              healing consultation, a multi-day Ayurvedic detox or a full teacher training.
            </p>
            <p>
              <strong>Explore what feels right for you and take your next step with confidence.</strong>
            </p>
          </SectionHeading>
          <CardGrid cols={3}>
            <OverlayCard
              href="/yoga"
              image="hero/yoga"
              title="Daily Yoga Classes"
              accent="Yoga"
              pills={["All levels", "15+ styles"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/teacher-training"
              image="training/film-2"
              title="200 + 20 Hour Teacher Training"
              accent="Teacher Training"
              pills={["Yoga Alliance", "In person & online"]}
              meta="Moana · Nuanu"
            />
            <OverlayCard
              href="/wellness/detox"
              image="detox/juice-2"
              title="Ayurvedic Detox Programs"
              accent="Detox"
              pills={["3 – 21 days"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/wellness"
              image="detox/theta"
              title="Healers & Consultants"
              accent="Healers"
              pills={["By appointment"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/yoga/private"
              image="yoga/private"
              title="Private Yoga"
              accent="Private"
              pills={["Studio or villa"]}
              meta="Canggu & around"
            />
            <OverlayCard
              href="/events"
              image="events/handstand-vivienne"
              title="Events & Workshops"
              accent="Workshops"
              pills={["Weekly"]}
              meta="Samadi Canggu"
            />
          </CardGrid>

          <ShadowCard
            className={styles.priceCard}
            title="Practise With Us Every Day"
            actions={
              <>
                <Button href="/yoga" variant="brand">
                  Class prices & passes
                </Button>
                <Button href="/yoga/schedule" variant="outline">
                  Weekly schedule
                </Button>
              </>
            }
          >
            <p>
              Single classes from <strong>IDR 110,000</strong> for KTP holders, with 6- and 12-class passes and monthly
              memberships. Advance booking is recommended — walk-ins are welcome when space is available.
            </p>
          </ShadowCard>
        </div>
      </section>

      {/* 04 — Spaces */}
      <section className="section" aria-labelledby="spaces-title">
        <div className="container">
          <SectionHeading
            id="spaces-title"
            layout="center"
            eyebrow="Our Spaces"
            title="Two Places. One Way of Living."
          />
          <PlacePanel
            image="yoga/shala-4"
            title="Samadi Canggu"
            mood="Yoga • Food • Community"
            bullets={[
              "Open-air yoga shala in the garden",
              "Organic supermarket & French bakery",
              "Plant-based café & the Sunday Market",
            ]}
            actions={
              <Button href="/spaces" variant="text">
                Explore our spaces
              </Button>
            }
          >
            <p>
              Our home on Jalan Padang Linjong, near Echo Beach — a tranquil space for daily practice, holistic
              treatments and nourishing food, surrounded by greenery.
            </p>
          </PlacePanel>
          <PlacePanel
            reverse
            image="training/film-1"
            title="Moana at Nuanu"
            mood="Training • Nature • Retreat"
            bullets={[
              "Wooden sanctuary shala & open-air dome",
              "Home of our Yoga Teacher Training",
              "Nuanu Creative City, Tabanan",
            ]}
            actions={
              <Button href="/teacher-training" variant="text">
                Teacher training at Moana
              </Button>
            }
          >
            <p>
              A sanctuary to begin again — yoga and healing experiences in the heart of Nuanu Creative City, started
              with Samadi in Canggu.
            </p>
          </PlacePanel>
        </div>
      </section>

      {/* 05 — Events */}
      <Backdrop image="yoga/class-11" labelledBy="events-title">
        <SectionHeading id="events-title" eyebrow="This Month" title="Events & Workshops" light>
          <p>
            Come and join our unique workshops and events — breathwork, sound healing, handstands and more, every week
            at Samadi Canggu.
          </p>
        </SectionHeading>
        <Carousel label="Events and workshops" perView={{ base: 1.12, md: 2, lg: 3 }} tone="light">
          {events.map((e) => (
            <EventCard key={e.slug} {...e} />
          ))}
        </Carousel>
        <ButtonRow className={styles.backdropCta}>
          <Button href="/events" variant="glass">
            All events & workshops
          </Button>
        </ButtonRow>
      </Backdrop>

      {/* 06 — Teachers */}
      <section className="section" aria-labelledby="teachers-title">
        <div className="container">
          <SectionHeading id="teachers-title" layout="center" title="Meet Your Teachers">
            <p>
              A mix of talented local Indonesian and international instructors, guiding students of all levels through
              their personal yoga journeys.
            </p>
          </SectionHeading>
          <TeacherFan teachers={featuredTeachers} />
          <ButtonRow center className={styles.afterFan}>
            <Button href="/yoga/teachers" variant="brand">
              All teachers
            </Button>
          </ButtonRow>
        </div>
      </section>

      {/* 07 — Teacher training band */}
      <StatBand
        image="training/film-4"
        eyebrow="Wellness Yoga Teacher Training"
        title="More Than a 200-Hour Yoga Teacher Training"
        stats={[
          { value: 200, label: "Hours of Yoga Alliance curriculum" },
          { value: 20, label: "Hours of integrated wellness" },
          { value: 3, label: "Immersive weeks at Moana" },
          {
            value: nextIntake
              ? new Date(`${nextIntake.start}T00:00:00`).toLocaleDateString("en-GB", { day: "numeric", month: "short" })
              : "2026",
            label: "Next intake",
          },
        ]}
      >
        <ButtonRow center className={styles.bandCta}>
          <Button href="/teacher-training" size="l">
            Explore the training
          </Button>
          <Button href={training.bookingHref} variant="glass" size="l">
            Secure your place
          </Button>
        </ButtonRow>
      </StatBand>

      {/* 08 — Market feature */}
      <section className="section">
        <div className="container">
          <SplitFeature image="market/m-1" eyebrow="Super Foods Market" title="An Amazing Place to Shop Well">
            <p>
              At Samadi Organic Supermarket we offer a wide range of sustainable, healthy food products that support
              your well-being and respect the environment — fresh, organic options for a natural, eco-friendly
              lifestyle.
            </p>
            <dl className={styles.miniStats}>
              {stats.market.map((s) => (
                <div key={s.label}>
                  <dd>
                    <span data-counter={s.value}>{s.value.toLocaleString("en-US")}</span>
                    {s.suffix}
                  </dd>
                  <dt>{s.label}</dt>
                </div>
              ))}
            </dl>
            <ButtonRow>
              <Button href="/eat-shop/market" variant="brand">
                Discover the market
              </Button>
              <Button href="/eat-shop/market#shop-online" variant="text">
                Shop online
              </Button>
            </ButtonRow>
          </SplitFeature>
        </div>
      </section>

      {/* 09 — Testimonials */}
      <section className="section bg-surface" aria-labelledby="reviews-title">
        <div className="container">
          <SectionHeading id="reviews-title" layout="center" title="Words From Our Community" />
          <Carousel label="Reviews" perView={{ base: 1.08, md: 2, lg: 3 }}>
            {testimonials.map((t) => (
              <ReviewCard key={t.name} quote={t.quote} name={t.name} origin={t.origin} />
            ))}
          </Carousel>
        </div>
      </section>

      {/* 10 — Journal */}
      <section className="section" aria-labelledby="journal-title">
        <div className="container">
          <SectionHeading id="journal-title" eyebrow="Read & Explore" title="The Essence of Samadi Bali">
            <p>Notes on yoga, wellness and conscious living from our community in Canggu.</p>
          </SectionHeading>
          <Carousel label="Journal" perView={{ base: 1.1, md: 2, lg: 3 }}>
            {posts.map((p) => (
              <JournalCard
                key={p.slug}
                href={`/journal/${p.slug}`}
                image={p.cover}
                title={p.title}
                meta={`${p.category} · ${formatDate(p.date)}`}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* 11 — Contact */}
      <section className="section bg-sand" aria-labelledby="contact-title">
        <div className="container">
          <SectionHeading id="contact-title" layout="center" title="Get in Touch">
            <p>Connect with us for mindful living, organic products, and holistic wellness support.</p>
          </SectionHeading>
          <ContactPaths />
        </div>
      </section>

      <InstagramStrip />
    </>
  );
}
