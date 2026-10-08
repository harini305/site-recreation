import { LegalPage } from "@/components/sections/LegalPage";
import { disclaimer } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website Disclaimer",
  description: "Important information regarding the use of the Samadi Bali website and services.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <LegalPage title="Website Disclaimer" eyebrow="Important information" path="/disclaimer" sections={disclaimer} />
  );
}
