import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CardGrid, IncludedCard, PriceCard } from "@/components/sections/Cards";
import { SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { theta } from "@/content/wellness";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./theta.module.css";

export const metadata = pageMetadata({
  title: "Theta Healing Consultation",
  description:
    "Theta Healing at Samadi Bali — a 60-minute energy healing consultation to release negative beliefs, stress and anxiety. Rp 1,500,000.",
  path: "/wellness/theta-healing",
  image: "detox/theta",
});

const book = whatsappMessage("Hi Samadi! I’d like to book a Theta Healing consultation.");

export default function ThetaPage() {
  return (
    <>
      <PageHero
        variant="center"
        image="detox/theta"
        eyebrow="60 Minutes"
        title="Theta Healing Consultation"
        crumbs={[
          { name: "Wellness", path: "/wellness" },
          { name: "Theta Healing", path: "/wellness/theta-healing" },
        ]}
        lead="Discover the power of Theta Healing."
        actions={
          <Button href={book} size="l" icon="whatsapp">
            Book now
          </Button>
        }
        scrollTo="#what"
      />

      <section id="what" className="section">
        <div className="container">
          <SplitFeature image="detox/ayurveda-3" eyebrow="What Is Theta Healing?" title="Transform Body, Mind & Spirit">
            <p>{theta.intro}</p>
            <p>{theta.what}</p>
          </SplitFeature>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" eyebrow="Benefits" title="What Theta Healing Can Support" />
          <CardGrid cols={3}>
            {theta.benefits.map((b) => (
              <IncludedCard key={b.title} title={b.title}>
                <p>{b.text}</p>
              </IncludedCard>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.priceWrap}>
            <PriceCard
              title="Theta Healing Consultation"
              note={theta.closing}
              rows={[
                { label: "Duration", value: theta.duration },
                { label: "Price", value: theta.price },
              ]}
              cta={{ label: "Book on WhatsApp", href: book }}
              highlight
            />
          </div>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about Theta Healing." />
    </>
  );
}
