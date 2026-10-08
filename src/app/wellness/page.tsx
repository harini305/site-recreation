import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CardGrid, OverlayCard } from "@/components/sections/Cards";
import { PlacePanel, ShadowCard } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { bookingRule, practitioners, wellnessIntro } from "@/content/wellness";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./wellness.module.css";

export const metadata = pageMetadata({
  title: "Health & Wellness Hub — Healers & Consultants",
  description:
    "Daily healers, therapists and consultants at Samadi Bali — chakra balancing, rebirthing breathwork, brainspotting, Ayurveda, nutrition coaching and yoga therapy in Canggu.",
  path: "/wellness",
  image: "detox/ayurveda-1",
});

export default function WellnessPage() {
  return (
    <>
      <PageHero
        image="detox/ayurveda-1"
        eyebrow="Samadi Health & Wellness Hub"
        title="Wellness Consultants & Healers"
        crumbs={[{ name: "Wellness", path: "/wellness" }]}
        panel={<p>{wellnessIntro}</p>}
        scrollTo="#healers"
      />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Programs & Consultations" title="Find Your Path to Balance">
            <p>Start with a consultation, commit to a multi-day detox, or book a session with one of our healers.</p>
          </SectionHeading>
          <CardGrid cols={3}>
            <OverlayCard
              href="/wellness/detox"
              image="detox/juice-2"
              title="Ayurvedic Detox Programs"
              accent="Detox"
              pills={["3 – 21 days"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/wellness/ayurveda"
              image="detox/ayurveda-2"
              title="Ayurveda Consultations"
              accent="Ayurveda"
              pills={["From Rp 1,450,000"]}
              meta="Samadi Canggu"
            />
            <OverlayCard
              href="/wellness/theta-healing"
              image="detox/theta"
              title="Theta Healing"
              accent="Theta"
              pills={["60 minutes"]}
              meta="Samadi Canggu"
            />
          </CardGrid>
        </div>
      </section>

      <section id="healers" className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Our Wellness Healer & Consultant" title="Meet the Practitioners">
            <p>{bookingRule}</p>
          </SectionHeading>
          {practitioners.map((p, i) => (
            <div key={p.slug} id={p.slug} className={styles.anchor}>
              <PlacePanel
                image={p.image}
                title={p.modality}
                mood={`With ${p.name} · ${p.title}`}
                reverse={i % 2 === 1}
                actions={
                  <Button
                    href={whatsappMessage(`Hi Samadi! I’d like to book a session with ${p.name} (${p.modality}).`)}
                    variant="brand"
                    icon="whatsapp"
                  >
                    Book with {p.name.split(" ").pop()}
                  </Button>
                }
              >
                {p.intro.map((t) => (
                  <p key={t.slice(0, 30)}>{t}</p>
                ))}
                <dl className={styles.pricing}>
                  {p.pricing.map((r) => (
                    <div key={r.label}>
                      <dt>{r.label}</dt>
                      <dd>{r.value}</dd>
                    </div>
                  ))}
                  {p.duration && (
                    <div>
                      <dt>Duration</dt>
                      <dd>{p.duration}</dd>
                    </div>
                  )}
                </dl>
              </PlacePanel>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShadowCard
            title="Not Sure Where to Begin?"
            actions={
              <Button href={whatsappMessage("Hi Samadi! Could you help me choose a wellness session?")} icon="whatsapp">
                Ask our team
              </Button>
            }
          >
            <p>
              Tell us how you feel and what you’re looking for — relaxation, restoration or clarity — and we’ll suggest
              the right practitioner.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I’d like to book a wellness session." />
    </>
  );
}
