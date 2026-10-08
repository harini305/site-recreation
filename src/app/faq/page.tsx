import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { FAQList } from "@/components/sections/Accordion";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { faq } from "@/content/community";
import { JsonLd, faqJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ — Good to Know Before You Visit",
  description:
    "Frequently asked questions about Samadi Super Foods & Wellness in Canggu — yoga bookings, class types, the restaurant, the supermarket and the Sunday Market.",
  path: "/faq",
  image: "hero/cafe",
});

export default function FAQPage() {
  return (
    <>
      <PageHero
        variant="contained"
        image="hero/cafe"
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        crumbs={[{ name: "FAQ", path: "/faq" }]}
        lead="Everything you might want to know before your first visit to Samadi."
      />
      <section className="section pt-0">
        <div className="container">
          <SectionHeading layout="center" title="Good to Know" />
          <FAQList items={faq} />
        </div>
      </section>
      <JsonLd data={faqJsonLd(faq)} />
      <ClosingCta title="Still Have a Question?" />
    </>
  );
}
