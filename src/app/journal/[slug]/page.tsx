import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/Heading";
import { Img } from "@/components/ui/Img";
import { Button } from "@/components/ui/Button";
import { CardGrid, JournalCard } from "@/components/sections/Cards";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { RevealText } from "@/components/motion/RevealText";
import { formatDate, postBySlug, posts } from "@/content/journal";
import { site } from "@/content/site";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { media } from "@/content/media";
import styles from "../journal.module.css";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return pageMetadata({ title: p.title, description: p.excerpt, path: `/journal/${p.slug}`, image: p.cover });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = postBySlug((await params).slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== post.slug);
  const url = `${site.url}/journal/${post.slug}`;

  return (
    <>
      <article className={styles.article}>
        <div className="container">
          <header className={styles.head}>
            <nav aria-label="Breadcrumb">
              <Link href="/journal" className={styles.meta}>
                Journal
              </Link>
            </nav>
            <h1>
              <RevealText text={post.title} />
            </h1>
            <p className={styles.meta} style={{ marginTop: 12 }}>
              {post.category} · <time dateTime={post.date}>{formatDate(post.date)}</time> · Samadi Bali
            </p>
          </header>
          <div className={styles.cover}>
            <Img
              k={post.cover}
              sizes="(max-width: 1100px) 94vw, 1100px"
              ratio="16 / 9"
              priority
              className={styles.coverImg}
            />
          </div>
          <div className={styles.body}>
            {post.body.map((b, i) =>
              b.type === "p" ? (
                <p key={i}>{b.text}</p>
              ) : b.type === "h2" ? (
                <h2 key={i}>{b.text}</h2>
              ) : (
                <Img
                  key={i}
                  k={b.image}
                  sizes="(max-width: 767px) 92vw, 760px"
                  ratio="3 / 2"
                  className={styles.inlineImg}
                  reveal
                />
              ),
            )}
          </div>
          <div className={styles.share}>
            <Button href="/journal" variant="text">
              All articles
            </Button>
            <Button href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} variant="text">
              Share on Facebook
            </Button>
          </div>
        </div>
      </article>

      <section className="section">
        <div className="container">
          <SectionHeading title="Keep Reading" />
          <CardGrid cols={2}>
            {others.map((p) => (
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

      <ClosingCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          image: `${site.url}${media[post.cover].src}`,
          author: { "@type": "Organization", name: site.legalName },
          publisher: { "@type": "Organization", name: site.legalName },
          mainEntityOfPage: url,
        }}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: post.title, path: `/journal/${post.slug}` },
        ])}
      />
    </>
  );
}
