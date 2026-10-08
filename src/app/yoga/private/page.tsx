import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CheckList, PlacePanel, ShadowCard } from "@/components/sections/Blocks";
import { CardGrid, IncludedCard } from "@/components/sections/Cards";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { privateYoga } from "@/content/yoga";
import { whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Private Yoga in Canggu — Studio or Villa",
  description:
    "Personalised private yoga at Samadi Bali — in our serene Canggu shala or at your villa, home or retreat. Hatha, Vinyasa, Yin and restorative yoga with certified teachers.",
  path: "/yoga/private",
  image: "yoga/private",
});

const book = whatsappMessage("Hi Samadi! I’d like to book a private yoga session.");

export default function PrivateYogaPage() {
  return (
    <>
      <PageHero
        image="yoga/private"
        eyebrow="Samadi Private Yoga"
        title="Personalised Private Yoga in Canggu"
        crumbs={[
          { name: "Yoga", path: "/yoga" },
          { name: "Private Yoga", path: "/yoga/private" },
        ]}
        lead="Each session thoughtfully designed around your needs, goals, and lifestyle — at Samadi Studio or your villa."
        actions={
          <Button href={book} size="l" icon="whatsapp">
            Book on WhatsApp
          </Button>
        }
        scrollTo="#options"
      />

      <section id="options" className="section">
        <div className="container">
          <SectionHeading eyebrow="Two Ways to Practise" title="At Our Studio or in Your Own Space">
            <p>
              Whether you are a beginner or an experienced practitioner, our private classes offer a deeper, more
              focused approach to your practice in the heart of Canggu.
            </p>
          </SectionHeading>
          {privateYoga.options.map((o, i) => (
            <PlacePanel key={o.title} image={o.image} title={o.title} reverse={i % 2 === 1}>
              <p>{o.text}</p>
            </PlacePanel>
          ))}
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading layout="center" title="Why Choose Samadi Private Yoga?" />
          <CardGrid cols={3}>
            {privateYoga.why.map((w) => (
              <IncludedCard key={w} title={w} />
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ShadowCard
            title="Who Is It For?"
            actions={
              <Button href={book} icon="whatsapp">
                Book your private yoga
              </Button>
            }
          >
            <div style={{ textAlign: "left", maxWidth: 560, marginInline: "auto" }}>
              <CheckList items={privateYoga.whoFor} />
            </div>
          </ShadowCard>
        </div>
      </section>

      <ClosingCta
        title="Book Your Private Yoga"
        text="Reconnect with your body and mind through a personalised yoga journey — in our peaceful studio or the comfort of your own space."
        message="Hi Samadi! I’d like to book a private yoga session."
      />
    </>
  );
}
