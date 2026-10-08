import { SectionHeading } from "@/components/ui/Heading";
import { ContactPaths } from "./Blocks";

/** End-of-page call to action — WhatsApp, email, phone and directions (frontend only, no forms). */
export function ClosingCta({
  title = "Let’s Plan Your Samadi Day",
  text = "Message us on WhatsApp, send an email or simply drop by — we’re happy to help you find the right class, treatment or program.",
  message,
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <section className="section bg-sand">
      <div className="container">
        <SectionHeading layout="center" title={title}>
          <p>{text}</p>
        </SectionHeading>
        <ContactPaths message={message} />
      </div>
    </section>
  );
}
