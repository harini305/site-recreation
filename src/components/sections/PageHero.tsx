import Link from "next/link";
import type { ReactNode } from "react";
import type { MediaKey } from "@/content/media";
import { cn } from "@/lib/cn";
import { Img } from "@/components/ui/Img";
import { RevealText } from "@/components/motion/RevealText";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ScrollCue } from "./ScrollCue";
import styles from "./PageHero.module.css";

type Crumb = { name: string; path: string };

type Props = {
  variant?: "full" | "center" | "contained";
  image: MediaKey;
  eyebrow?: string;
  title: string;
  /** Short lead paragraph */
  lead?: ReactNode;
  /** Glass panel content (full / center variants) */
  panel?: ReactNode;
  actions?: ReactNode;
  crumbs?: Crumb[];
  imagePosition?: string;
  scrollTo?: string;
};

export function PageHero({
  variant = "full",
  image,
  eyebrow,
  title,
  lead,
  panel,
  actions,
  crumbs,
  imagePosition,
  scrollTo,
}: Props) {
  const trail = crumbs ? [{ name: "Home", path: "/" }, ...crumbs] : undefined;
  const breadcrumbs = trail && (
    <nav aria-label="Breadcrumb" className={styles.crumbs}>
      <ol>
        {trail.map((c, i) => (
          <li key={`${i}-${c.path}`}>
            {i < trail.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );

  if (variant === "contained") {
    return (
      <section className={styles.contained}>
        <div className="container">
          <div className={styles.card}>
            <Img
              k={image}
              sizes="(max-width: 767px) 160vw, (max-width: 1279px) 94vw, 1200px"
              priority
              className={styles.cardImg}
              zoom={false}
              quality={90}
              position={imagePosition}
            />
            <div className={styles.cardShade} aria-hidden="true" />
            <div className={styles.cardBody}>
              {breadcrumbs}
              {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
              <h1 className={styles.title}>
                <RevealText text={title} />
              </h1>
              {lead && <div className={styles.lead}>{lead}</div>}
              {actions && <div className={styles.actions}>{actions}</div>}
            </div>
          </div>
        </div>
        {trail && <JsonLd data={breadcrumbJsonLd(trail)} />}
      </section>
    );
  }

  return (
    <section className={cn(styles.full, variant === "center" && styles.center)} data-overlay-hero="">
      <Img k={image} sizes="100vw" priority className={styles.bg} position={imagePosition} quality={90} zoom={false} />
      <div className={styles.shade} aria-hidden="true" />
      <div className={cn("container", styles.inner)}>
        {breadcrumbs}
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>
          <RevealText text={title} />
        </h1>
        {lead && (
          <div className={styles.lead} data-reveal="">
            {lead}
          </div>
        )}
        {panel && (
          <div className={styles.panel} data-reveal="">
            {panel}
          </div>
        )}
        {actions && (
          <div className={styles.actions} data-reveal="">
            {actions}
          </div>
        )}
      </div>
      {scrollTo && <ScrollCue href={scrollTo} className={styles.cue} />}
      {trail && <JsonLd data={breadcrumbJsonLd(trail)} />}
    </section>
  );
}
