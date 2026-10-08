"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/content/site";
import { media } from "@/content/media";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./MenuDrawer.module.css";

type Props = { open: boolean; onClose: () => void; pathname: string };

export function MenuDrawer({ open, onClose, pathname }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  // undefined = default (the group containing the current page); otherwise the visitor's choice.
  const [userExpanded, setExpanded] = useState<string | null | undefined>(undefined);
  const expanded =
    userExpanded !== undefined
      ? userExpanded
      : (mainNav.find((g) => g.children?.some((c) => pathname.startsWith(c.href)))?.label ?? null);
  const close = useCallback(() => {
    setExpanded(undefined);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panel?.querySelector<HTMLElement>("button, a");
    window.setTimeout(() => first?.focus(), 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key !== "Tab" || !panel) return;
      const focusables = panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
      const list = Array.from(focusables).filter((el) => el.offsetParent !== null);
      if (!list.length) return;
      const firstEl = list[0];
      const lastEl = list[list.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div className={styles.root} data-open={open} aria-hidden={!open}>
      <div className={styles.backdrop} onClick={close} />
      <div
        ref={panelRef}
        id="site-menu"
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
      >
        <div className={styles.top}>
          <Link href="/" className={styles.logo} onClick={close}>
            <Image src={media["brand/logo-green"].src} alt="Samadi — home" width={48} height={48} />
          </Link>
          <button type="button" className={styles.close} onClick={close}>
            <Icon name="close" size={26} />
            <span className="visually-hidden">Close menu</span>
          </button>
        </div>

        <nav aria-label="Site menu links" className={styles.nav}>
          <ul role="list" className={styles.groups}>
            <li className={styles.group} style={{ "--i": 0 } as React.CSSProperties}>
              <Link href="/" className={styles.groupLink} onClick={close}>
                Home
              </Link>
            </li>
            {mainNav.map((g, i) => (
              <li key={g.label} className={styles.group} style={{ "--i": i + 1 } as React.CSSProperties}>
                {g.children ? (
                  <>
                    <button
                      type="button"
                      className={styles.groupLink}
                      aria-expanded={expanded === g.label}
                      onClick={() => setExpanded(expanded === g.label ? null : g.label)}
                    >
                      {g.label}
                      <Icon name="plus" size={22} className={styles.plus} />
                    </button>
                    <div className={styles.sub} data-open={expanded === g.label}>
                      <ul role="list" className={styles.subList}>
                        {g.children.map((c) => (
                          <li key={c.href + c.label}>
                            {c.external ? (
                              <a href={c.href} target="_blank" rel="noopener noreferrer" className={styles.subLink}>
                                {c.label} <Icon name="arrowUpRight" size={14} />
                              </a>
                            ) : (
                              <Link
                                href={c.href}
                                onClick={close}
                                className={cn(styles.subLink, pathname === c.href && styles.current)}
                                aria-current={pathname === c.href ? "page" : undefined}
                              >
                                {c.label}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={g.href} className={styles.groupLink} onClick={close}>
                    {g.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <Link href="/yoga/schedule" className={styles.cta} onClick={close}>
            Book a class <Icon name="arrowRight" size={18} />
          </Link>
          <ul role="list" className={styles.contact}>
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" /> WhatsApp {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>
                <Icon name="mail" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapsHref} target="_blank" rel="noopener noreferrer">
                <Icon name="pin" /> {site.address.street}, Canggu
              </a>
            </li>
          </ul>
          <ul role="list" className={styles.socials}>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} ${s.handle}`}>
                  <Icon
                    name={
                      s.label.startsWith("Instagram") ? "instagram" : s.label === "Facebook" ? "facebook" : "youtube"
                    }
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.media} aria-hidden="true">
        <Image src={media["hero/yoga"].src} alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
      </div>
    </div>
  );
}
