import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { CardGrid, EventCard } from "@/components/sections/Cards";
import { SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { eventsIntro, upcomingEvents } from "@/content/events";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = pageMetadata({
  title: "Events & Workshops in Canggu",
  description:
    "Weekly workshops at Samadi Bali — handstands, breathwork, sound healing, meditation and FlyHigh yoga in Canggu. Book on Megatix.",
  path: "/events",
  image: "events/handstand-vivienne",
});

export default function EventsPage() {
  const events = upcomingEvents();
  return (
    <>
      <PageHero
        variant="contained"
        image="hero/workshop"
        eyebrow="Event & Workshops This Month"
        title="Where Conscious Community Meets Inspired Practice"
        crumbs={[{ name: "Events & Workshops", path: "/events" }]}
      />

      <section className="section pt-0">
        <div className="container">
          <SectionHeading eyebrow="Weekly at Samadi" title="Events & Workshops">
            <p>{eventsIntro}</p>
          </SectionHeading>
          <CardGrid cols={3}>
            {events.map((e) => (
              <EventCard key={e.slug} {...e} />
            ))}
          </CardGrid>
          <ButtonRow center className="mt-l">
            <Button href={site.bookingHref} variant="brand">
              See all Samadi events on Megatix
            </Button>
          </ButtonRow>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SplitFeature
            image="events/breathwork-anshu"
            eyebrow="Join the Community"
            title="Workshops for Every Kind of Practice"
            ratio="4 / 5"
          >
            <p>
              Each session is designed to support your journey toward mindful living — dive into yoga, explore holistic
              wellness, or simply connect with like-minded people.
            </p>
            <p>Most workshops ask you to book ahead on Megatix. Questions about an event? Message us on WhatsApp.</p>
            <ButtonRow>
              <Button href="/yoga/schedule" variant="brand">
                Weekly schedule
              </Button>
              <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
                Ask about an event
              </Button>
            </ButtonRow>
          </SplitFeature>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about an event or workshop." />
    </>
  );
}
