import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { CardGrid, IncludedCard, OverlayCard } from "@/components/sections/Cards";
import { ShadowCard } from "@/components/sections/Blocks";
import { DayPlan } from "@/components/sections/Accordion";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { detoxBySlug, detoxPrograms, optionalNote, priceLabel } from "@/content/detox";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./detox.module.css";

export function generateStaticParams() {
  return detoxPrograms.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = detoxBySlug((await params).slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} — ${p.sanskrit}`,
    description: `${p.tagline}. ${p.intro.slice(0, 120)}…`,
    path: `/wellness/detox/${p.slug}`,
    image: p.image,
  });
}

/** Summarise a day's items into a short heading, e.g. "Consultation, Juicing & Massage". */
function dayTitle(items: { title: string }[]) {
  const names = items.map((i) => i.title.replace(/ · .*/, "").replace("Ayurveda ", ""));
  return names.length > 1 ? `${names.slice(0, -1).join(", ")} & ${names.at(-1)}` : names[0];
}

export default async function DetoxProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = detoxBySlug((await params).slug);
  if (!p) notFound();
  const book = whatsappMessage(`Hi Samadi! I’d like to book the ${p.name} (${p.sanskrit}).`);
  const others = detoxPrograms.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <PageHero
        variant="center"
        image={p.image}
        eyebrow={`${p.days} Days Detox Program`}
        title={p.sanskrit}
        crumbs={[
          { name: "Wellness", path: "/wellness" },
          { name: "Detox Programs", path: "/wellness/detox" },
          { name: p.name, path: `/wellness/detox/${p.slug}` },
        ]}
        lead={p.tagline}
        panel={
          <div className={styles.heroPanel}>
            <p className={styles.heroPrice}>{priceLabel(p)}</p>
            <ButtonRow>
              <Button href={book} icon="whatsapp">
                Book now
              </Button>
              <Button href="#plan" variant="glass">
                Daily schedule
              </Button>
            </ButtonRow>
          </div>
        }
        scrollTo="#about"
      />

      <section id="about" className="section">
        <div className="container">
          <SectionHeading eyebrow={p.name} title="What Awaits You">
            <p>{p.intro}</p>
          </SectionHeading>
          <CardGrid cols={p.awaits.length >= 4 ? 4 : 2}>
            {p.awaits.map((a) => (
              <IncludedCard key={a.title} title={a.optional ? `${a.title}*` : a.title}>
                {a.text && <p>{a.text}</p>}
              </IncludedCard>
            ))}
          </CardGrid>
        </div>
      </section>

      <section id="plan" className="section bg-cream">
        <div className="container">
          <SectionHeading eyebrow="Daily Schedule" title="Your Days, Step by Step">
            <p>Every program is personalised at your first consultation; this is the published day plan.</p>
          </SectionHeading>
          <DayPlan
            days={p.schedule.map((d) => ({ label: d.label, title: dayTitle(d.items), items: d.items }))}
            footnote={optionalNote}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShadowCard
            title={p.name}
            actions={
              <>
                <Button href={book} icon="whatsapp">
                  Book now
                </Button>
                <Button href="/wellness/ayurveda" variant="outline">
                  Start with a consultation
                </Button>
              </>
            }
          >
            <p className={styles.closingPrice}>{priceLabel(p)}</p>
            <p>{p.closing}</p>
          </ShadowCard>
        </div>
      </section>

      <section className="section bg-alt">
        <div className="container">
          <SectionHeading eyebrow="More Programs" title="Explore Other Detox Journeys" />
          <CardGrid cols={3}>
            {others.map((o) => (
              <OverlayCard
                key={o.slug}
                href={`/wellness/detox/${o.slug}`}
                image={o.image}
                title={o.sanskrit}
                pills={[`${o.days} days`, priceLabel(o)]}
                ratio="4 / 3"
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <ClosingCta message={`Hi Samadi! I have a question about the ${p.name}.`} />
    </>
  );
}
