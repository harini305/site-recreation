import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CardGrid, PriceCard } from "@/components/sections/Cards";
import { BulletGrid, ShadowCard, SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ayurveda } from "@/content/wellness";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ayurveda Consultations — Prakruti & Vikruti",
  description:
    "Ayurveda consultations at Samadi Bali: Prakruti dosha analysis (Rp 1,450,000) and Vikruti healing consultations with pulse diagnosis (from Rp 1,600,000).",
  path: "/wellness/ayurveda",
  image: "detox/ayurveda-2",
});

const book = whatsappMessage("Hi Samadi! I’d like to book an Ayurveda consultation.");

export default function AyurvedaPage() {
  return (
    <>
      <PageHero
        variant="center"
        image="detox/ayurveda-2"
        eyebrow="Ayurveda Consultations"
        title="Prakruti & Vikruti Assessments"
        crumbs={[
          { name: "Wellness", path: "/wellness" },
          { name: "Ayurveda", path: "/wellness/ayurveda" },
        ]}
        lead="Elevate your health to the next level."
        actions={
          <Button href={book} size="l" icon="whatsapp">
            Book now
          </Button>
        }
        scrollTo="#consultations"
      />

      <section className="section">
        <div className="container">
          <SplitFeature
            image="detox/ayurveda-1"
            eyebrow="Treat Naturally, Live Vibrantly"
            title="Understand Your Unique Constitution"
          >
            <p>{ayurveda.intro}</p>
            <p>
              Incorporate the ancient wisdom of Ayurveda into your modern, health-conscious lifestyle — with
              personalised insights and natural solutions for inner balance and vitality.
            </p>
          </SplitFeature>
        </div>
      </section>

      <section id="consultations" className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Two Consultations" title="Choose Your Consultation" />
          <CardGrid cols={2}>
            {ayurveda.consultations.map((c, i) => (
              <PriceCard
                key={c.name}
                title={c.name}
                note={`${c.duration} — ${c.intro}`}
                items={c.includes}
                priceLabel="Price"
                price={c.price}
                cta={{ label: "Book this consultation", href: book }}
                highlight={i === 1}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Before You Come" title="How to Prepare" />
          <BulletGrid cols={2} items={ayurveda.prepare} />
        </div>
      </section>

      <section className="section-tight">
        <div className="container">
          <ShadowCard
            title="Ready for a Deeper Reset?"
            actions={
              <Button href="/wellness/detox" variant="brand">
                Explore detox programs
              </Button>
            }
          >
            <p>
              Our 3 to 21-day Ayurvedic detox programs begin with an in-depth consultation and continue with juicing,
              liver detox and Ayurveda massage.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I’d like to book an Ayurveda consultation." />
    </>
  );
}
