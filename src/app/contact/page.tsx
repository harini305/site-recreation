import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ContactPaths, PlacePanel } from "@/components/sections/Blocks";
import { CardGrid, IncludedCard } from "@/components/sections/Cards";
import { site, whatsappMessage } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./contact.module.css";

export const metadata = pageMetadata({
  title: "Contact & Directions",
  description:
    "Contact Samadi Bali — WhatsApp +62 813-2525-7500, contact@samadibali.com, Jalan Padang Linjong 39, Canggu. Book classes, treatments and programs.",
  path: "/contact",
  image: "about/storefront",
});

const enquiries = [
  {
    title: "Yoga classes & workshops",
    text: "Book each class or workshop on Megatix.",
    label: "Weekly schedule",
    href: "/yoga/schedule",
  },
  {
    title: "Private yoga",
    text: "At our studio or your villa — tell us your goals and dates.",
    label: "Ask on WhatsApp",
    href: whatsappMessage("Hi Samadi! I’d like to book a private yoga session."),
  },
  {
    title: "Healers, detox & Ayurveda",
    text: "Appointment only — reservation and down payment 24 hours before treatment.",
    label: "Book on WhatsApp",
    href: whatsappMessage("Hi Samadi! I’d like to book a wellness session."),
  },
  {
    title: "Teacher training",
    text: "Dates, prices and booking for the 200 + 20 hour WYTT.",
    label: "Training details",
    href: "/teacher-training",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        variant="contained"
        image="hero/market"
        eyebrow="Get in Touch"
        title="Let’s Stay in Touch"
        crumbs={[{ name: "Contact", path: "/contact" }]}
        lead="Connect with us for mindful living, organic products, and holistic wellness support."
      />

      <section className="section pt-0">
        <div className="container">
          <ContactPaths />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SectionHeading eyebrow="How Can We Help?" title="Choose the Quickest Route">
            <p>Most bookings happen through Megatix or WhatsApp — pick what you need and we’ll take it from there.</p>
          </SectionHeading>
          <CardGrid cols={4}>
            {enquiries.map((e) => (
              <IncludedCard key={e.title} title={e.title}>
                <p>{e.text}</p>
                <p className={styles.cardLink}>
                  <Button href={e.href} variant="text">
                    {e.label}
                  </Button>
                </p>
              </IncludedCard>
            ))}
          </CardGrid>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PlacePanel
            image="yoga/shala-4"
            title="Visit Samadi Canggu"
            mood="Near Echo Beach"
            actions={
              <ButtonRow>
                <Button href={site.mapsHref} variant="brand" icon="pin">
                  Open in Google Maps
                </Button>
                <Button href={site.phoneHref} variant="outline" icon="phone">
                  Call us
                </Button>
              </ButtonRow>
            }
          >
            <dl className={styles.details}>
              <div>
                <dt>
                  <Icon name="pin" size={18} /> Address
                </dt>
                <dd>
                  {site.address.street}, {site.address.area}, {site.address.region} {site.address.postalCode},{" "}
                  {site.address.country}
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="clock" size={18} /> Market hours
                </dt>
                <dd>{site.marketHours}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="whatsapp" size={18} /> WhatsApp & phone
                </dt>
                <dd>
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt>
                  <Icon name="mail" size={18} /> Email
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </PlacePanel>
        </div>
      </section>

      <section className="section-tight bg-surface">
        <div className="container">
          <SectionHeading layout="center" title="Connect With Our Community">
            <p>Follow Samadi for class updates, workshops, market news and community stories.</p>
          </SectionHeading>
          <ul role="list" className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  <Icon
                    name={
                      s.label.startsWith("Instagram") ? "instagram" : s.label === "Facebook" ? "facebook" : "youtube"
                    }
                    size={22}
                  />
                  <span>
                    <strong>{s.label}</strong>
                    {s.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
