import Link from "next/link";
import type { ReactNode } from "react";
import type { MediaKey } from "@/content/media";
import { cn } from "@/lib/cn";
import { Img } from "@/components/ui/Img";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import styles from "./Cards.module.css";

/* ---------- Overlay card (House of Om program card) ---------- */
export function OverlayCard({
  href,
  image,
  title,
  accent,
  pills,
  meta,
  ratio = "4 / 5",
  sizes = "(max-width: 767px) 92vw, (max-width: 1023px) 46vw, 380px",
}: {
  href: string;
  image: MediaKey;
  title: string;
  /** Word(s) of the title rendered in the accent colour */
  accent?: string;
  pills?: string[];
  meta?: string;
  ratio?: string;
  sizes?: string;
}) {
  const external = href.startsWith("http");
  const body = (
    <>
      <Img k={image} sizes={sizes} ratio={ratio} className={styles.overlayImg} />
      <span className={styles.overlayShade} aria-hidden="true" />
      <span className={styles.overlayBody}>
        {pills && (
          <span className={styles.pills}>
            {pills.map((p) => (
              <span key={p} className={styles.pill}>
                {p}
              </span>
            ))}
          </span>
        )}
        <span className={styles.overlayTitle}>
          {accent ? (
            <>
              {title.split(accent)[0]}
              <em>{accent}</em>
              {title.split(accent)[1]}
            </>
          ) : (
            title
          )}
        </span>
        {meta && (
          <span className={styles.overlayMeta}>
            <Icon name="pin" size={14} /> {meta}
          </span>
        )}
      </span>
    </>
  );
  return external ? (
    <a href={href} className={styles.overlay} target="_blank" rel="noopener noreferrer" data-reveal="" data-card="">
      {body}
    </a>
  ) : (
    <Link href={href} className={styles.overlay} data-reveal="" data-card="">
      {body}
    </Link>
  );
}

/* ---------- Media card: image + accent title + text ---------- */
export function MediaCard({
  image,
  title,
  children,
  ratio = "3 / 2",
  href,
  sizes = "(max-width: 767px) 88vw, 560px",
  fit,
}: {
  image: MediaKey;
  title: string;
  children?: ReactNode;
  ratio?: string;
  href?: string;
  sizes?: string;
  fit?: "cover" | "contain";
}) {
  const inner = (
    <>
      <Img k={image} sizes={sizes} ratio={ratio} className={styles.mediaImg} fit={fit} />
      <h3 className={styles.mediaTitle}>
        {title}
        {href && <Icon name="arrowRight" size={18} className={styles.titleArrow} />}
      </h3>
      {children && <div className={styles.mediaText}>{children}</div>}
    </>
  );
  return href ? (
    <Link href={href} className={cn(styles.media, styles.mediaLink)} data-reveal="" data-card="soft">
      {inner}
    </Link>
  ) : (
    <article className={styles.media} data-reveal="" data-card="soft">
      {inner}
    </article>
  );
}

/* ---------- Included card: image + check badge + white body ---------- */
export function IncludedCard({ image, title, children }: { image?: MediaKey; title: string; children?: ReactNode }) {
  return (
    <article className={cn(styles.included, !image && styles.includedPlain)} data-reveal="" data-card="soft">
      {image && <Img k={image} sizes="(max-width: 767px) 90vw, 400px" ratio="5 / 3" className={styles.includedImg} />}
      <div className={styles.includedBody}>
        <span className={styles.check} aria-hidden="true">
          <Icon name="check" size={18} />
        </span>
        <h3 className={styles.includedTitle}>{title}</h3>
        {children && <div className={styles.includedText}>{children}</div>}
      </div>
    </article>
  );
}

/* ---------- Price card (House of Om accommodation card) ---------- */
export function PriceCard({
  title,
  note,
  items = [],
  rows,
  price,
  priceLabel,
  cta,
  highlight,
}: {
  title: string;
  note?: string;
  items?: ReactNode[];
  /** Label / value price rows */
  rows?: { label: string; value: string }[];
  price?: string;
  priceLabel?: string;
  cta?: { label: string; href: string };
  highlight?: boolean;
}) {
  return (
    <article className={cn(styles.price, highlight && styles.priceHighlight)} data-reveal="" data-card="">
      <header className={styles.priceHead}>
        <h3 className={styles.priceTitle}>{title}</h3>
        {note && <p className={styles.priceNote}>{note}</p>}
      </header>
      {rows && (
        <dl className={styles.priceRows}>
          {rows.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {items.length > 0 && (
        <ul role="list" className={styles.priceList}>
          {items.map((it, i) => (
            <li key={i}>
              <span className={styles.tick} aria-hidden="true">
                <Icon name="check" size={13} />
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
      {price && (
        <p className={styles.priceValue}>
          {priceLabel && <span>{priceLabel}</span>}
          <strong>{price}</strong>
        </p>
      )}
      {cta && (
        <Button href={cta.href} variant="brand" className={styles.priceCta}>
          {cta.label}
        </Button>
      )}
    </article>
  );
}

/* ---------- Review card (peach) ---------- */
export function ReviewCard({ quote, name, origin }: { quote: string; name: string; origin?: string }) {
  return (
    <figure className={styles.review} data-card="">
      <figcaption className={styles.reviewHead}>
        <span className={styles.avatar} aria-hidden="true">
          {name
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span>
          <span className={styles.reviewName}>{name}</span>
          {origin && <span className={styles.reviewOrigin}>{origin}</span>}
        </span>
      </figcaption>
      <blockquote className={styles.reviewQuote}>“{quote}”</blockquote>
    </figure>
  );
}

/* ---------- Journal card ---------- */
export function JournalCard({
  href,
  image,
  title,
  meta,
}: {
  href: string;
  image: MediaKey;
  title: string;
  meta?: string;
}) {
  return (
    <Link href={href} className={styles.journal} data-card="soft">
      <Img k={image} sizes="(max-width: 767px) 88vw, 400px" ratio="4 / 3" className={styles.journalImg} />
      {meta && <span className={styles.journalMeta}>{meta}</span>}
      <h3 className={styles.journalTitle}>{title}</h3>
    </Link>
  );
}

/* ---------- Event card ---------- */
export function EventCard({
  image,
  title,
  host,
  when,
  time,
  price,
  note,
  href,
}: {
  image: MediaKey;
  title: string;
  host: string;
  when: string;
  time: string;
  price?: string;
  note?: string;
  href: string;
}) {
  return (
    <article className={styles.event} data-card="">
      <Img k={image} sizes="(max-width: 767px) 88vw, 380px" ratio="1 / 1" className={styles.eventImg} />
      <div className={styles.eventBody}>
        <p className={styles.eventWhen}>
          <Icon name="calendar" size={16} /> {when}
        </p>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventHost}>with {host}</p>
        <dl className={styles.eventFacts}>
          <div>
            <dt>Time</dt>
            <dd>{time}</dd>
          </div>
          {price && (
            <div>
              <dt>Price</dt>
              <dd>{price}</dd>
            </div>
          )}
        </dl>
        {note && <p className={styles.eventNote}>{note}</p>}
        <Button href={href} variant="text" className={styles.eventCta}>
          Book on Megatix
        </Button>
      </div>
    </article>
  );
}

/* ---------- Teacher card (grid) ---------- */
export function TeacherCard({
  image,
  name,
  role,
  styles: tags,
  onSelectHref,
  footer,
}: {
  image?: MediaKey;
  name: string;
  role: string;
  styles: string[];
  onSelectHref?: string;
  /** Call to action shown as the card's last row (inside the card, never overlapping) */
  footer?: ReactNode;
}) {
  const body = (
    <>
      {image ? (
        <Img
          k={image}
          sizes="(max-width: 767px) 90vw, 360px"
          ratio="4 / 5"
          className={styles.teacherImg}
          position="center 25%"
        />
      ) : (
        <div className={styles.teacherMono} aria-hidden="true">
          <span>{name[0]}</span>
        </div>
      )}
      <div className={styles.teacherBody}>
        <h3 className={styles.teacherName}>
          {name}
          {onSelectHref && <Icon name="arrowRight" size={18} className={styles.titleArrow} />}
        </h3>
        <p className={styles.teacherRole}>{role}</p>
        <p className={styles.teacherStyles}>{tags.join(" · ")}</p>
        {footer && <div className={styles.teacherFooter}>{footer}</div>}
      </div>
    </>
  );
  return onSelectHref ? (
    <a href={onSelectHref} className={cn(styles.teacher, styles.mediaLink)} data-card="">
      {body}
    </a>
  ) : (
    <article className={styles.teacher} data-card="">
      {body}
    </article>
  );
}

/* ---------- Location card (House of Om /locations grid) ---------- */
export function LocationCard({
  href,
  image,
  place,
  title,
  children,
}: {
  href: string;
  image: MediaKey;
  place: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={styles.location} data-reveal="" data-card="">
      <span className={styles.locationMedia}>
        <Img k={image} sizes="(max-width: 767px) 90vw, 560px" ratio="16 / 10" className={styles.locationImg} />
        <span className={styles.locationPill}>
          <Icon name="pin" size={14} /> {place}
        </span>
      </span>
      <span className={styles.locationTitle}>
        {title} <Icon name="arrowRight" size={18} className={styles.titleArrow} />
      </span>
      <span className={styles.locationText}>{children}</span>
    </Link>
  );
}

/* ---------- Grid helper ---------- */
export function CardGrid({
  children,
  cols = 3,
  className,
}: {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  className?: string;
}) {
  return <div className={cn(styles.grid, styles[`cols${cols}`], className)}>{children}</div>;
}
