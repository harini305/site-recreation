"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { media } from "@/content/media";
import { teacherMatchesStyle, teacherStyles, type Teacher } from "@/content/teachers";
import { whatsappMessage } from "@/content/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { TeacherCard } from "./Cards";
import styles from "./TeacherDirectory.module.css";

type Filter = "All" | (typeof teacherStyles)[number];

export function TeacherDirectory({ teachers }: { teachers: Teacher[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);

  const shown = filter === "All" ? teachers : teachers.filter((t) => teacherMatchesStyle(t, filter));
  const open = teachers.find((t) => t.slug === openSlug);

  // Open from the URL hash (e.g. /yoga/teachers#regine) and keep the hash in sync.
  useEffect(() => {
    const fromHash = () => {
      const slug = decodeURIComponent(window.location.hash.slice(1));
      setOpenSlug(teachers.some((t) => t.slug === slug && t.bio.length) ? slug : null);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [teachers]);

  const close = useCallback(() => {
    history.replaceState(null, "", window.location.pathname);
    setOpenSlug(null);
    lastFocus.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <div className={styles.filters} role="group" aria-label="Filter teachers by style">
        {(["All", ...teacherStyles] as Filter[]).map((f) => (
          <button
            key={f}
            type="button"
            className={styles.chip}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="visually-hidden" aria-live="polite">
        Showing {shown.length} teachers
      </p>

      <ul role="list" className={styles.grid}>
        {shown.map((t) => (
          <li key={t.slug} id={`card-${t.slug}`}>
            {t.bio.length ? (
              <a
                href={`#${t.slug}`}
                className={styles.cardLink}
                onClick={(e) => (lastFocus.current = e.currentTarget)}
                aria-label={`${t.name} — read biography`}
              >
                <TeacherCard
                  image={t.image}
                  name={t.name}
                  role={t.role}
                  styles={t.styles}
                  footer={
                    <span className={styles.more}>
                      Read story <Icon name="arrowRight" size={16} />
                    </span>
                  }
                />
              </a>
            ) : (
              <div className={styles.cardStatic}>
                <TeacherCard
                  image={t.image}
                  name={t.name}
                  role={t.role}
                  styles={t.styles}
                  footer={
                    <Link href="/yoga/schedule" className={styles.more}>
                      See classes on the schedule <Icon name="arrowRight" size={16} />
                    </Link>
                  }
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className={styles.drawerRoot} data-open={Boolean(open)} aria-hidden={!open}>
        <div className={styles.backdrop} onClick={close} />
        <aside className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby="teacher-name" inert={!open}>
          {open && (
            <>
              <button ref={closeRef} type="button" className={styles.close} onClick={close}>
                <Icon name="close" size={24} />
                <span className="visually-hidden">Close biography</span>
              </button>
              {open.image && (
                <div className={styles.photo}>
                  <Image
                    src={media[open.image].src}
                    alt={media[open.image].alt}
                    fill
                    sizes="(max-width: 767px) 130vw, 720px"
                    quality={85}
                    style={{ objectFit: "cover", objectPosition: "center 25%" }}
                  />
                </div>
              )}
              <div className={styles.body}>
                <p className={styles.role}>{open.role}</p>
                <h2 id="teacher-name" className={styles.name}>
                  {open.name}
                </h2>
                <ul role="list" className={styles.tags}>
                  {open.styles.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className={styles.bio}>
                  {open.bio.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
                <div className={styles.actions}>
                  <Link href="/yoga/schedule" className={cn(styles.action, styles.primary)}>
                    See {open.name.split(" ")[0]}’s classes
                  </Link>
                  <a
                    href={whatsappMessage(`Hi Samadi! I’d like to book a private session with ${open.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.action}
                  >
                    <Icon name="whatsapp" size={18} /> Private session
                  </a>
                </div>
              </div>
            </>
          )}
        </aside>
      </div>
    </>
  );
}
