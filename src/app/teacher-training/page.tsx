import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Carousel } from "@/components/ui/Carousel";
import { Tabs } from "@/components/ui/Tabs";
import { CardGrid, IncludedCard, MediaCard } from "@/components/sections/Cards";
import {
  Banner,
  BulletGrid,
  CheckList,
  DatesList,
  PlacePanel,
  ShadowCard,
  SplitFeature,
  StatBand,
} from "@/components/sections/Blocks";
import { FAQList } from "@/components/sections/Accordion";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { curriculum, included, moana, notIncluded, training, trainingFaq, upcomingIntakes } from "@/content/training";
import { JsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import styles from "./training.module.css";

export const revalidate = 86400;

export const metadata = pageMetadata({
  title: "200 + 20 Hour Yoga Teacher Training in Bali (WYTT)",
  description:
    "Multistyle 200-hour Yoga Alliance teacher training plus 20 hours of wellness — Ayurveda, detox, chakra healing — at Moana Wellness Hub, Nuanu Creative City, Bali.",
  path: "/teacher-training",
  image: "training/film-1",
});

export default function TrainingPage() {
  const intakes = upcomingIntakes();
  const next = intakes[0];

  return (
    <>
      <PageHero
        variant="center"
        image="training/film-2"
        eyebrow="Wellness & Yoga Teachers Training · 200 + 20 hrs"
        title="Become a Certified Yoga Teacher in Bali"
        crumbs={[{ name: "Teacher Training", path: "/teacher-training" }]}
        panel={
          <div className={styles.heroPanel}>
            <div>
              <p className={styles.heroPrice}>
                <s>{training.prices[2].value}</s> <strong>{training.prices[0].value}</strong>
              </p>
              <p className={styles.heroNote}>*Super Early Bird price</p>
            </div>
            <div className={styles.heroCta}>
              <Button href={next?.href ?? training.bookingHref} size="l">
                Secure your place
              </Button>
              <p>
                {next ? (
                  <>
                    Next training:
                    <br />
                    <strong>{next.label}</strong>
                  </>
                ) : (
                  "New dates coming soon"
                )}
              </p>
            </div>
          </div>
        }
        scrollTo="#gain"
      />

      <section id="gain" className="section">
        <div className="container">
          <SectionHeading layout="center" eyebrow="What You’ll Gain" title="More Than a 200-Hour Yoga Teacher Training">
            <p>{training.intro}</p>
          </SectionHeading>
          <Carousel label="What you will gain" perView={{ base: 1.08, md: 2, lg: 2 }} dots>
            <MediaCard image="training/film-2" title="Awaken the Teacher Within">
              <p>{training.awaken.join(" ")}</p>
            </MediaCard>
            <MediaCard image="training/film-3" title="Teach with Confidence & Grace">
              <p>
                You won’t just learn yoga — you’ll learn how to teach it, and graduate ready to inspire others with
                presence and clarity.
              </p>
            </MediaCard>
            <MediaCard image="training/film-4" title="Learn from Bali’s Revered Teachers">
              <p>
                Seasoned, soulful mentors deeply devoted to the path. This is not just training — it’s transmission.
              </p>
            </MediaCard>
            <MediaCard image="training/film-5" title="Wellness Is Our Foundation">
              <p>
                Breathwork, meditation, mindful eating and community connection — wellness lives in every layer of the
                training.
              </p>
            </MediaCard>
          </Carousel>
        </div>
      </section>

      <StatBand
        image="training/film-1"
        eyebrow="Join WYTT"
        title="Held by Nature. Supported by Lineage. Uplifted by Tribe."
        stats={[
          { value: 220, label: "Total hours, Yoga Alliance certified" },
          { value: 3, label: "Immersive weeks in Bali" },
          { value: 4, label: "Yoga Alliance educational categories" },
          { value: 12, label: "Key competencies" },
        ]}
      />

      <section className="section">
        <div className="container">
          <SectionHeading title="How the Course Is Structured">
            <p>
              A comprehensive program designed to meet international standards while nurturing deep personal growth — in
              a hybrid format that honours both structure and flexibility.
            </p>
          </SectionHeading>
          <Tabs
            label="Course structure"
            items={[
              {
                id: "curriculum",
                label: "200 + 20 Hours",
                content: (
                  <CardGrid cols={2}>
                    {curriculum.structure.map((s) => (
                      <IncludedCard key={s.title} title={s.title}>
                        <p>{s.text}</p>
                      </IncludedCard>
                    ))}
                  </CardGrid>
                ),
              },
              {
                id: "alliance",
                label: "Yoga Alliance Categories",
                content: (
                  <ol className={styles.categories}>
                    {curriculum.categories.map((c) => (
                      <li key={c.n}>
                        <span>{c.n}</span>
                        {c.title}
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                id: "hybrid",
                label: "In Person & Online",
                content: (
                  <CardGrid cols={2}>
                    {curriculum.hybrid.map((h) => (
                      <IncludedCard key={h.title} title={h.title}>
                        <p>{h.text}</p>
                      </IncludedCard>
                    ))}
                  </CardGrid>
                ),
              },
              {
                id: "styles",
                label: "Multi-Style Immersion",
                content: <BulletGrid cols={2} items={curriculum.styles} />,
              },
            ]}
          />
          <div className="mt-xl">
            <Banner
              image="training/film-4"
              title="Examination & Certification"
              text="Upon completion you receive a Yoga Alliance certificate — recognised and accepted worldwide."
            />
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading eyebrow="20 Hours Extra" title="Wellness Integration for Body, Mind & Spirit">
            <p>
              As an officially acknowledged yoga school in Indonesia, Moana Wellness Hub offers a total 220-hour
              experience that merges traditional yoga with holistic wellness tools.
            </p>
          </SectionHeading>
          <CheckList items={curriculum.wellness} icon="lotus" columns={2} />
          <div className={styles.twoLists}>
            <div data-reveal="">
              <h3 className={styles.listTitle}>You’ll learn to</h3>
              <CheckList items={curriculum.teach} />
            </div>
            <div data-reveal="">
              <h3 className={styles.listTitle}>After completing WYTT you will</h3>
              <CheckList items={curriculum.outcomes} />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SplitFeature image="training/film-5" eyebrow={moana.place} title="Why Moana?" reverse>
            <p>{moana.intro}</p>
            <CheckList
              items={[...moana.why, ...moana.features.map((f) => `Featuring ${f.toLowerCase()}`)]}
              icon="leaf"
            />
          </SplitFeature>
          <div className="mt-xl">
            <VideoFeature
              kind="file"
              src="/video/wytt-720.mp4"
              poster="training/film-1"
              title="WYTT at Moana Wellness Hub"
            />
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="dates">
        <div className="container">
          <DatesList
            eyebrow="Schedule 2026"
            title="Upcoming Dates"
            cta={
              <div className={styles.priceList}>
                {training.prices.map((p) => (
                  <p key={p.label}>
                    <span>{p.label}</span>
                    <strong>{p.value}</strong>
                  </p>
                ))}
                <Button href={next?.href ?? training.bookingHref} variant="brand">
                  I’m ready to book a spot
                </Button>
              </div>
            }
            dates={intakes.map((i, idx) => ({
              label: i.label,
              href: i.href,
              note: idx === 0 ? "Next intake" : undefined,
            }))}
            after={
              <p>
                More dates will be announced soon — <a href={site.whatsappHref}>message us on WhatsApp</a> to hear
                first.
              </p>
            }
            empty={
              <p>
                New dates will be announced soon. <a href={site.whatsappHref}>Message us on WhatsApp</a> to hear first.
              </p>
            }
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading layout="center" title="What’s Included in Your Journey" />
          <CardGrid cols={3}>
            <IncludedCard image="training/practice" title={included[0].title}>
              <p>{included[0].text}</p>
            </IncludedCard>
            <IncludedCard image="restaurant/r-4" title={included[1].title}>
              <p>{included[1].text}</p>
            </IncludedCard>
            <IncludedCard image="detox/juice-3" title={included[2].title}>
              <p>{included[2].text}</p>
            </IncludedCard>
          </CardGrid>
          <div className="mt-xl">
            <PlacePanel
              image="training/film-3"
              title="Accommodation"
              mood="Not included in the course fee"
              actions={
                <Button href={training.accommodationHref} variant="brand">
                  Book Nuanu Suites
                </Button>
              }
            >
              <p>
                Guests can stay at Nuanu Suites & Accommodation using the booking link and promo code{" "}
                <strong>{training.accommodationPromo}</strong>.
              </p>
              <p className={styles.notIncluded}>
                Also not included:{" "}
                {notIncluded
                  .filter((n) => n !== "Accommodation")
                  .join(", ")
                  .toLowerCase()}
                .
              </p>
            </PlacePanel>
          </div>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading
            eyebrow="Learn From Bali’s Most Revered Teachers"
            title="This Is Not Just Training — It’s Transmission"
          >
            <p>Our faculty consists of seasoned, soulful yoga mentors deeply devoted to the path. You’ll learn from:</p>
          </SectionHeading>
          <BulletGrid cols={2} items={curriculum.faculty.map((f) => ({ title: f }))} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading layout="center" title="Frequently Asked Questions" />
          <FAQList items={trainingFaq} />
          <JsonLd data={faqJsonLd(trainingFaq)} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <ShadowCard
            title="Bali Is Calling — The Mat Is Waiting"
            actions={
              <ButtonRow center>
                <Button href={next?.href ?? training.bookingHref}>Secure your place</Button>
                <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
                  Ask a question
                </Button>
              </ButtonRow>
            }
          >
            <p>
              Awaken the teacher within, deepen your practice from the inside out, and embark on a life-shifting journey
              in paradise.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I’m interested in the Wellness Yoga Teacher Training." />
    </>
  );
}
