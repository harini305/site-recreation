import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Img } from "@/components/ui/Img";
import { Icon } from "@/components/ui/Icon";
import { CardGrid, JournalCard } from "@/components/sections/Cards";
import { InstagramStrip } from "@/components/sections/Blocks";
import { formatDate, posts } from "@/content/journal";
import { pageMetadata } from "@/lib/seo";
import styles from "./journal.module.css";

export const metadata = pageMetadata({
  title: "Journal — Yoga, Wellness & Organic Food",
  description:
    "Notes from Samadi Bali on yoga for all levels, holistic treatments and organic, plant-based food in Canggu.",
  path: "/journal",
  image: "journal/yoga",
});

export default function JournalPage() {
  const [lead, ...rest] = posts;
  return (
    <>
      <PageHero
        variant="contained"
        image="journal/shala"
        eyebrow="Read & Explore"
        title="The Samadi Journal"
        crumbs={[{ name: "Journal", path: "/journal" }]}
        lead="Insights on yoga, wellness and conscious living from our community in Canggu."
      />

      <section className="section pt-0">
        <div className="container">
          <Link href={`/journal/${lead.slug}`} className={styles.feature} data-reveal="">
            <Img k={lead.cover} sizes="(max-width: 767px) 92vw, 640px" ratio="4 / 3" className={styles.featureImg} />
            <span className={styles.featureBody}>
              <span className={styles.meta}>
                {lead.category} · {formatDate(lead.date)}
              </span>
              <span className={styles.featureTitle}>{lead.title}</span>
              <span className={styles.excerpt}>{lead.excerpt}</span>
              <span className={styles.read}>
                Read article <Icon name="arrowRight" size={18} />
              </span>
            </span>
          </Link>

          <SectionHeading className="mt-xl" title="More From the Journal" />
          <CardGrid cols={2}>
            {rest.map((p) => (
              <JournalCard
                key={p.slug}
                href={`/journal/${p.slug}`}
                image={p.cover}
                title={p.title}
                meta={`${p.category} · ${formatDate(p.date)}`}
              />
            ))}
          </CardGrid>
        </div>
      </section>

      <InstagramStrip />
    </>
  );
}
