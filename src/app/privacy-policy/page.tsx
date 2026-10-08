import { LegalPage } from "@/components/sections/LegalPage";
import { privacyPolicy } from "@/content/legal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Samadi Super Foods & Wellness collects, uses and protects your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" eyebrow="Legal" path="/privacy-policy" sections={privacyPolicy} />;
}
