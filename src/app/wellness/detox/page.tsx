import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CardGrid, PriceCard } from "@/components/sections/Cards";
import { BulletGrid, ShadowCard, SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { detoxPrograms, priceLabel } from "@/content/detox";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Ayurvedic Detox Programs in Bali — 3 to 21 Days",
  description:
    "Ayurvedic detox programs at Samadi Bali — juice fasting, liver detox, Ayurveda massage and consultations over 3, 5, 7, 10, 14 or 21 days, plus a 7-day liver detox.",
  path: "/wellness/detox",
  image: "detox/juice-2",
});

export default function DetoxOverviewPage() {
  return (
    <>
      <PageHero
        image="detox/juice-2"
        eyebrow="Ayurveda Detox Program"
        title="Rediscover Your Inner Harmony & Vitality"
        crumbs={[
          { name: "Wellness", path: "/wellness" },
          { name: "Detox Programs", path: "/wellness/detox" },
        ]}
        lead="Let the ancient wisdom of Ayurveda guide you towards a spiritually enriched, health-conscious lifestyle."
        actions={
          <Button href="#programs" size="l">
            Compare programs
          </Button>
        }
        scrollTo="#programs"
      />

      <section className="section">
        <div className="container">
          <SplitFeature image="detox/ayurveda-1" eyebrow="How It Works" title="A Sanctuary From Everyday Life">
            <p>
              Each program begins with an Ayurvedic consultation — pulse diagnosis, dosha analysis and personalised
              detox guidance — followed by days of fresh juices, liver detox sessions and therapeutic Ayurveda massage.
            </p>
            <BulletGrid
              cols={2}
              items={[
                { title: "Juice fasting", text: "Fresh, nutrient-rich juices through the day." },
                { title: "Liver detox", text: "Cleanse and rejuvenate your liver." },
                { title: "Ayurveda massage", text: "Melt and eliminate toxins from the tissues." },
                { title: "Consultations", text: "Begin, refine and conclude with an Ayurveda consultation." },
              ]}
            />
          </SplitFeature>
        </div>
      </section>

      <section id="programs" className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Choose Your Program" title="From 3 Days to 21 Days">
            <p>
              Sauna & cold plunge sessions are recommended add-ons — ask us about preferred partners and discount
              vouchers.
            </p>
          </SectionHeading>
          <CardGrid cols={3}>
            {detoxPrograms.map((p) => (
              <PriceCard
                key={p.slug}
                title={p.name}
                note={`${p.sanskrit} — ${p.tagline}`}
                items={p.awaits.slice(0, 3).map((a) => a.title)}
                priceLabel="Price"
                price={priceLabel(p)}
                cta={{ label: "View program", href: `/wellness/detox/${p.slug}` }}
                highlight={p.slug === "7-day"}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShadowCard
            title="Not Sure Which Detox Is Right for You?"
            actions={
              <>
                <Button href="/wellness/ayurveda" variant="brand">
                  Book a consultation first
                </Button>
                <Button
                  href={whatsappMessage("Hi Samadi! Which detox program would suit me?")}
                  variant="outline"
                  icon="whatsapp"
                >
                  Ask on WhatsApp
                </Button>
              </>
            }
          >
            <p>
              An Ayurveda consultation helps you understand your constitution and choose the program that fits your body
              and goals.
            </p>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I’d like to know more about your detox programs." />
    </>
  );
}
