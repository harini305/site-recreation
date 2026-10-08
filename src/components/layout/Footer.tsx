import Image from "next/image";
import Link from "next/link";
import { footerColumns, legalLinks, site, type NavLink } from "@/content/site";
import { media } from "@/content/media";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

function FooterLinks({ links }: { links: NavLink[] }) {
  return (
    <ul role="list" className={styles.links}>
      {links.map((l) => (
        <li key={l.href + l.label}>
          {l.external ? (
            <a href={l.href} target="_blank" rel="noopener noreferrer">
              {l.label} <Icon name="arrowUpRight" size={13} />
            </a>
          ) : (
            <Link href={l.href}>{l.label}</Link>
          )}
        </li>
      ))}
    </ul>
  );
}

const socialIcon = (label: string) =>
  label.startsWith("Instagram") ? "instagram" : label === "Facebook" ? "facebook" : "youtube";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Samadi Bali — home">
            <Image src={media["brand/logo-green"].src} alt="" width={72} height={72} />
          </Link>
          <p className={styles.blurb}>
            Yoga, wellness, organic food and community — a holistic lifestyle destination in the heart of Canggu, Bali.
          </p>
          <ul role="list" className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} ${s.handle}`}>
                  <Icon name={socialIcon(s.label)} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {footerColumns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h2 className={styles.colTitle}>{col.title}</h2>
              <FooterLinks links={col.links} />
            </div>
          ))}
        </nav>

        <nav className={styles.columnsMobile} aria-label="Footer (mobile)">
          {footerColumns.map((col) => (
            <details key={col.title} className={styles.accordion}>
              <summary className={styles.colTitle}>
                {col.title}
                <Icon name="plus" size={18} className={styles.plus} />
              </summary>
              <FooterLinks links={col.links} />
            </details>
          ))}
        </nav>

        <div className={styles.visit}>
          <h2 className={styles.colTitle}>Visit Samadi</h2>
          <ul role="list" className={styles.contact}>
            <li>
              <Icon name="pin" size={18} />
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
                {site.address.street}, {site.address.area}, Bali {site.address.postalCode}
              </a>
            </li>
            <li>
              <Icon name="clock" size={18} />
              <span>Market {site.marketHours.toLowerCase()}</span>
            </li>
            <li>
              <Icon name="whatsapp" size={18} />
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <Icon name="mail" size={18} />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
          <a className={styles.directions} href={site.mapsHref} target="_blank" rel="noopener noreferrer">
            Get directions <Icon name="arrowUpRight" size={16} />
          </a>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.legalName}. All rights reserved.
        </p>
        <ul role="list" className={styles.legal}>
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
