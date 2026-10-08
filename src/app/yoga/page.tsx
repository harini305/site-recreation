import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { CardGrid, EventCard, MediaCard, PriceCard, ReviewCard } from "@/components/sections/Cards";
import { PlacePanel, ShadowCard, SplitFeature } from "@/components/sections/Blocks";
import { TeacherFan } from "@/components/sections/TeacherFan";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { priceTiers, yogaStyles } from "@/content/yoga";
import { featuredTeachers } from "@/content/teachers";
import { upcomingEvents } from "@/content/events";
import { testimonials } from "@/content/community";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = pageMetadata({
  title: "Yoga Classes in Canggu — Prices & Styles",
  description:
    "Daily yoga classes at Samadi Bali near Echo Beach, Canggu — Vinyasa, Yin, Hatha, Ashtanga and more for all levels. Single classes from IDR 110,000.",
  path: "/yoga",
  image: "yoga/vivienne-class",
});

export default function YogaPage() {
  return (
    <>
      <PageHero
        image="yoga/vivienne-class"
        eyebrow="Samadi Yoga"
        title="Yoga Classes in Canggu"
        crumbs={[{ name: "Yoga", path: "/yoga" }]}
        lead="Daily classes, workshops and wellness events near Echo Beach — a sanctuary for locals and travellers seeking transformation and healing through yoga."
        actions={
          <>
            <Button href="/yoga/schedule" size="l">
              Book a class
            </Button>
            <Button href="#prices" variant="glass" size="l">
              Prices & passes
            </Button>
          </>
        }
        scrollTo="#intro"
      />

      <section id="intro" className="section">
        <div className="container">
          <SplitFeature image="yoga/shala-3" eyebrow="A Holistic Journey" title="For Mind, Body, and Soul">
            <p>
              Canggu is well known for its thriving wellness community, and Samadi Bali stands out as a sanctuary for
              both locals and travellers seeking transformation and healing through yoga.
            </p>
            <p>
              Our studio offers a variety of styles tailored to your needs. For an energising, structured practice, our
              Ashtanga classes will challenge your strength and focus. For relaxation, our Yin sessions provide a
              calming, restorative experience. And if you’re new to yoga, Hatha offers a gentle introduction to the
              foundations.
            </p>
            <ButtonRow>
              <Button href="/yoga/schedule" variant="brand">
                See the weekly schedule
              </Button>
              <Button href="/yoga/teachers" variant="text">
                Meet the teachers
              </Button>
            </ButtonRow>
          </SplitFeature>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Samadi Yoga Class" title="Yoga Classes for All Levels">
            <p>
              Whether you’re a beginner, a seasoned yogi, or just visiting Bali — a wide variety of classes designed to
              support your unique journey.
            </p>
          </SectionHeading>
          <Carousel label="Yoga styles" perView={{ base: 1.08, md: 2, lg: 2 }} dots>
            {yogaStyles.map((s) => (
              <MediaCard key={s.name} image={s.image} title={s.name}>
                <p>{s.text}</p>
              </MediaCard>
            ))}
          </Carousel>
        </div>
      </section>

      <section id="prices" className="section">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Yoga Class Price & Rates" title="Class Prices & Passes">
            <p>Choose the rate that applies to you — single drop-ins, class passes, or a monthly membership.</p>
          </SectionHeading>
          <CardGrid cols={3}>
            {priceTiers.map((t) => (
              <PriceCard
                key={t.id}
                title={t.name}
                note={t.note}
                rows={t.items.map((i) => ({ label: i.label, value: i.price }))}
                highlight={t.id === "regular"}
                cta={{ label: "Book a class", href: "/yoga/schedule" }}
              />
            ))}
          </CardGrid>
          <p className="text-center mt-l" data-reveal="">
            Advance booking is recommended, especially for popular classes — walk-ins are welcome if space is available.
          </p>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHeading eyebrow="Workshop & Event This Month" title="Go Deeper With a Workshop">
            <p>Handstands, breathwork, sound healing and more — special sessions every week at Samadi.</p>
          </SectionHeading>
          <Carousel label="Workshops" perView={{ base: 1.1, md: 2, lg: 3 }}>
            {upcomingEvents().map((e) => (
              <EventCard key={e.slug} {...e} />
            ))}
          </Carousel>
          <ButtonRow className="mt-l">
            <Button href="/events" variant="brand">
              All events & workshops
            </Button>
          </ButtonRow>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading layout="center" title="Our Yoga Teachers">
            <p>Highly skilled teachers from Indonesia and around the world, committed to supporting your growth.</p>
          </SectionHeading>
          <TeacherFan teachers={featuredTeachers} />
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <SectionHeading layout="center" title="What Students Say" />
          <Carousel label="Student reviews" perView={{ base: 1.08, md: 2, lg: 3 }}>
            {testimonials
              .filter((t) => t.topic === "Yoga")
              .map((t) => (
                <ReviewCard key={t.name} quote={t.quote} name={t.name} origin={t.origin} />
              ))}
          </Carousel>
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <PlacePanel
            image="yoga/private"
            title="Prefer One-to-One?"
            mood="Private Yoga · Studio or Villa"
            bullets={["Fully customised to your goals", "Individuals, couples or small groups", "Flexible scheduling"]}
            actions={
              <Button href="/yoga/private" variant="brand">
                Private yoga
              </Button>
            }
          >
            <p>Practise in our serene shala or let a Samadi teacher come to your villa, home or retreat in Canggu.</p>
          </PlacePanel>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShadowCard
            title="Become a Certified Yoga Teacher in Bali"
            actions={
              <>
                <Button href="/teacher-training" variant="brand">
                  Teacher training
                </Button>
                <Button href={site.bookingHref} variant="outline">
                  All Samadi events on Megatix
                </Button>
              </>
            }
          >
            <p>
              Our 200 + 20 hour Wellness Yoga Teacher Training combines the Yoga Alliance curriculum with Ayurveda,
              detox and holistic wellness — three immersive weeks at Moana, Nuanu.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about yoga classes." />
    </>
  );
}
