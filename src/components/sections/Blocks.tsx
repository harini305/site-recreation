import type { ReactNode } from "react";
import type { MediaKey } from "@/content/media";
import { site, whatsappMessage } from "@/content/site";
import { cn } from "@/lib/cn";
import { Img } from "@/components/ui/Img";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { RevealText } from "@/components/motion/RevealText";
import styles from "./Blocks.module.css";

/* ---------- Zigzag rows (House of Om "Where your practice finds purpose") ---------- */
export function Zigzag({
  items,
}: {
  items: { image: MediaKey; title: string; text: ReactNode; href?: string; linkLabel?: string }[];
}) {
  return (
    <div className={styles.zigzag}>
      {items.map((it, i) => (
        <div key={it.title} className={cn(styles.zigRow, i % 2 === 1 && styles.zigFlip)}>
          <Img
            k={it.image}
            sizes="(max-width: 767px) 90vw, 340px"
            ratio="1 / 1"
            className={styles.zigImg}
            reveal
            parallax
          />
          <div className={styles.zigText} data-reveal="">
            <h3 className={styles.zigTitle}>{it.title}</h3>
            <div className={styles.zigBody}>{it.text}</div>
            {it.href && (
              <Button href={it.href} variant="text">
                {it.linkLabel ?? "Discover more"}
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Split feature: large image + text ---------- */
export function SplitFeature({
  image,
  eyebrow,
  title,
  children,
  reverse,
  ratio = "4 / 5",
  imageNode,
}: {
  image?: MediaKey;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  reverse?: boolean;
  ratio?: string;
  imageNode?: ReactNode;
}) {
  return (
    <div className={cn(styles.split, reverse && styles.splitReverse)}>
      <div className={styles.splitMedia}>
        {imageNode ??
          (image && (
            <Img
              k={image}
              sizes="(max-width: 767px) 92vw, 560px"
              ratio={ratio}
              className={styles.splitImg}
              reveal
              parallax
            />
          ))}
      </div>
      <div className={styles.splitText}>
        {eyebrow && (
          <p className={styles.eyebrow} data-reveal="">
            {eyebrow}
          </p>
        )}
        <h2 className={styles.splitTitle}>
          <RevealText text={title} />
        </h2>
        <div className={styles.splitBody} data-reveal="">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------- Place panel (House of Om location card) ---------- */
export function PlacePanel({
  image,
  title,
  mood,
  children,
  bullets,
  reverse,
  actions,
}: {
  image: MediaKey;
  title: string;
  mood?: string;
  children: ReactNode;
  bullets?: string[];
  reverse?: boolean;
  actions?: ReactNode;
}) {
  return (
    <article className={cn(styles.place, reverse && styles.placeReverse)} data-reveal="" data-card="panel">
      <div className={styles.placeText}>
        <h3 className={styles.placeTitle}>{title}</h3>
        {mood && <p className={styles.mood}>{mood}</p>}
        <div className={styles.placeBody}>{children}</div>
        {bullets && <CheckList items={bullets} icon="lotus" />}
        {actions && <div className={styles.placeActions}>{actions}</div>}
      </div>
      <Img k={image} sizes="(max-width: 767px) 90vw, 560px" ratio="3 / 2" className={styles.placeImg} />
    </article>
  );
}

/* ---------- Check list ---------- */
export function CheckList({ items, icon = "check", columns }: { items: ReactNode[]; icon?: IconName; columns?: 2 }) {
  return (
    <ul role="list" className={cn(styles.checks, columns === 2 && styles.checks2)}>
      {items.map((it, i) => (
        <li key={i}>
          <Icon name={icon} size={20} className={styles.checkIcon} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Full-bleed panel with hashtags + glass info bar (House of Om /locations) ---------- */
export function FullBleedPanel({
  image,
  tags,
  title,
  children,
  cta,
  info,
  id,
}: {
  image: MediaKey;
  tags?: string[];
  title: string;
  children: ReactNode;
  cta?: ReactNode;
  info?: ReactNode;
  id?: string;
}) {
  return (
    <section className={styles.bleed} id={id}>
      <Img k={image} sizes="100vw" className={styles.bleedImg} parallax zoom={false} />
      <div className={styles.bleedShade} aria-hidden="true" />
      <div className={cn("container", styles.bleedInner)}>
        {tags && (
          <ul role="list" className={styles.tags} data-reveal="">
            {tags.map((t) => (
              <li key={t}>#{t}</li>
            ))}
          </ul>
        )}
        <h2 className={styles.bleedTitle}>
          <RevealText text={title} />
        </h2>
        <div className={styles.bleedText} data-reveal="">
          {children}
        </div>
        {cta && (
          <div className={styles.bleedCta} data-reveal="">
            {cta}
          </div>
        )}
        {info && (
          <div className={styles.glassBar} data-reveal="">
            {info}
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------- Backdrop: full-bleed photo behind light content (House of Om "Social impact") ---------- */
export function Backdrop({
  image,
  children,
  id,
  labelledBy,
}: {
  image: MediaKey;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section className={styles.backdrop} id={id} aria-labelledby={labelledBy}>
      <Img k={image} sizes="100vw" className={styles.bleedImg} parallax zoom={false} />
      <div className={styles.backdropShade} aria-hidden="true" />
      <div className={cn("container", styles.backdropInner)}>{children}</div>
    </section>
  );
}

/* ---------- Stat band: full-bleed image, statement, glass stats ---------- */
export function StatBand({
  image,
  eyebrow,
  title,
  stats,
  children,
}: {
  image: MediaKey;
  eyebrow?: string;
  title: string;
  stats: { value: number | string; suffix?: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <section className={styles.band}>
      <Img k={image} sizes="100vw" className={styles.bleedImg} parallax zoom={false} />
      <div className={styles.bandShade} aria-hidden="true" />
      <div className={cn("container", styles.bandInner)}>
        {eyebrow && (
          <p className={styles.bandEyebrow} data-reveal="">
            {eyebrow}
          </p>
        )}
        <h2 className={styles.bandTitle}>
          <RevealText text={title} />
        </h2>
        <dl className={styles.stats} data-reveal="">
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt>{s.label}</dt>
              <dd>
                {typeof s.value === "number" ? (
                  <span data-counter={s.value}>{s.value.toLocaleString("en-US")}</span>
                ) : (
                  s.value
                )}
                {s.suffix}
              </dd>
            </div>
          ))}
        </dl>
        {children}
      </div>
    </section>
  );
}

/* ---------- Shadow card (House of Om accreditation / scholarship card) ---------- */
export function ShadowCard({
  title,
  children,
  actions,
  className,
}: {
  title: string;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(styles.shadowCard, className)} data-reveal="" data-card="panel">
      <h2 className={styles.shadowTitle}>{title}</h2>
      {children && <div className={styles.shadowText}>{children}</div>}
      {actions && <div className={styles.shadowActions}>{actions}</div>}
    </div>
  );
}

/* ---------- Image banner with centred title ---------- */
export function Banner({ image, title, text }: { image: MediaKey; title: string; text?: string }) {
  return (
    <div className={styles.banner} data-reveal="">
      <Img k={image} sizes="(max-width: 1279px) 94vw, 1200px" className={styles.bannerImg} />
      <div className={styles.bannerShade} aria-hidden="true" />
      <div className={styles.bannerBody}>
        <h3 className={styles.bannerTitle}>{title}</h3>
        {text && <p>{text}</p>}
      </div>
    </div>
  );
}

/* ---------- Bullet grid (House of Om "Additional training elements") ---------- */
export function BulletGrid({ items, cols = 3 }: { items: { title: string; text?: ReactNode }[]; cols?: 2 | 3 }) {
  return (
    <ul role="list" className={cn(styles.bullets, cols === 2 && styles.bullets2)}>
      {items.map((it) => (
        <li key={it.title} data-reveal="">
          <h3 className={styles.bulletTitle}>{it.title}</h3>
          {it.text && <div className={styles.bulletText}>{it.text}</div>}
        </li>
      ))}
    </ul>
  );
}

/* ---------- Daily schedule rows (tan / white alternating, inside a white card) ---------- */
export function DailyRows({
  rows,
  note,
}: {
  rows: { label: string; value: string; href?: string; sub?: string }[];
  note?: string;
}) {
  return (
    <div className={styles.rows}>
      <ul role="list" className={styles.rowList}>
        {rows.map((r, i) => (
          <li key={i} className={styles.row}>
            <span className={styles.rowValue}>{r.value}</span>
            <span className={styles.rowLabel}>
              {r.label}
              {r.sub && <small>{r.sub}</small>}
            </span>
            {r.href && (
              <a href={r.href} target="_blank" rel="noopener noreferrer" className={styles.rowLink}>
                Book <Icon name="arrowUpRight" size={14} />
                <span className="visually-hidden"> {r.label} (opens in a new tab)</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      {note && <p className={styles.rowNote}>{note}</p>}
    </div>
  );
}

/* ---------- Upcoming dates (sticky heading left, dotted rail list right) ---------- */
export function DatesList({
  eyebrow,
  title,
  cta,
  dates,
  empty,
  after,
}: {
  eyebrow?: string;
  title: string;
  cta?: ReactNode;
  dates: { label: string; href: string; note?: string }[];
  empty?: ReactNode;
  /** Note shown under the list */
  after?: ReactNode;
}) {
  return (
    <div className={styles.dates}>
      <div className={styles.datesHead}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h2 className={styles.datesTitle}>{title}</h2>
        {cta && <div className={styles.datesCta}>{cta}</div>}
      </div>
      {dates.length ? (
        <div>
          <ul role="list" className={styles.datesList}>
            {dates.map((d, i) => (
              <li key={d.label} data-reveal="">
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(styles.date, i === 0 && styles.dateNext)}
                >
                  <span>
                    {d.label}
                    {d.note && <small>{d.note}</small>}
                  </span>
                  <Icon name="arrowUpRight" size={18} />
                </a>
              </li>
            ))}
          </ul>
          {after && <div className={styles.datesAfter}>{after}</div>}
        </div>
      ) : (
        <div className={styles.datesEmpty}>{empty}</div>
      )}
    </div>
  );
}

/* ---------- Contact paths ("Let's map out your path") ---------- */
export function ContactPaths({ message = "Hi Samadi! I’d like to know more." }: { message?: string }) {
  const paths: { icon: IconName; title: string; text: string; href: string; label: string }[] = [
    {
      icon: "whatsapp",
      title: "WhatsApp",
      text: "The quickest way to book private sessions, treatments and programs.",
      href: whatsappMessage(message),
      label: site.phoneDisplay,
    },
    {
      icon: "mail",
      title: "Email",
      text: "For detailed questions, groups and collaborations.",
      href: `mailto:${site.email}`,
      label: site.email,
    },
    {
      icon: "phone",
      title: "Call us",
      text: "Speak with our team in Canggu.",
      href: site.phoneHref,
      label: site.phoneDisplay,
    },
    {
      icon: "pin",
      title: "Visit",
      text: `${site.address.street}, Canggu — near Echo Beach.`,
      href: site.mapsHref,
      label: "Get directions",
    },
  ];
  return (
    <ul role="list" className={styles.paths}>
      {paths.map((p) => {
        const newTab = p.href.startsWith("http");
        return (
          <li key={p.title} data-reveal="">
            <a
              href={p.href}
              className={styles.path}
              target={newTab ? "_blank" : undefined}
              rel={newTab ? "noopener noreferrer" : undefined}
            >
              <span className={styles.pathIcon}>
                <Icon name={p.icon} size={24} />
              </span>
              <span className={styles.pathTitle}>{p.title}</span>
              <span className={styles.pathText}>{p.text}</span>
              <span className={styles.pathLabel}>
                {p.label} <Icon name={newTab ? "arrowUpRight" : "arrowRight"} size={16} />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}

/* ---------- Instagram strip ---------- */
export function InstagramStrip() {
  const ig = site.socials[0];
  const images: MediaKey[] = [
    "instagram/ig-1",
    "instagram/ig-2",
    "instagram/ig-3",
    "instagram/ig-4",
    "instagram/ig-5",
    "instagram/ig-6",
  ];
  return (
    <section className={styles.ig} aria-labelledby="ig-title">
      <div className={cn("container", styles.igHead)}>
        <h2 id="ig-title" className={styles.igTitle}>
          Follow us on Instagram
        </h2>
        <a href={ig.href} target="_blank" rel="noopener noreferrer" className={styles.igHandle}>
          <Icon name="instagram" size={18} />
          <span>
            Follow <strong>{ig.handle}</strong>
          </span>
        </a>
      </div>
      <ul role="list" className={styles.igGrid}>
        {images.map((k) => (
          <li key={k}>
            <a
              href={ig.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igItem}
              aria-label={`Samadi on Instagram (${ig.handle})`}
            >
              <Img k={k} sizes="(max-width: 767px) 33vw, 17vw" ratio="1 / 1" />
              <span className={styles.igHover} aria-hidden="true">
                <Icon name="instagram" size={28} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
