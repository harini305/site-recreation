import type { Metadata } from "next";
import { createElement } from "react";
import { media, type MediaKey } from "@/content/media";
import { site } from "@/content/site";

export function pageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: MediaKey;
}): Metadata {
  const img = image ? media[image] : undefined;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · Samadi Bali`,
      description,
      url: path,
      images: img ? [{ url: img.src, width: img.width, height: img.height, alt: img.alt }] : undefined,
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: JSON.stringify(data).replace(/</g, "\\u003c") },
  });
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    image: `${site.url}/images/hero/yoga.webp`,
    logo: `${site.url}/images/brand/logo-green.png`,
    email: site.email,
    telephone: "+6281325257500",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: "Canggu",
      addressRegion: "Bali",
      postalCode: site.address.postalCode,
      addressCountry: "ID",
    },
    sameAs: site.socials.map((s) => s.href),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string | string[] }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: Array.isArray(it.a) ? it.a.join(". ") : it.a },
    })),
  };
}
