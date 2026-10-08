import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./Accordion.module.css";

/* ---------- FAQ accordion ---------- */
export function FAQList({ items, className }: { items: { q: string; a: ReactNode | string[] }[]; className?: string }) {
  return (
    <div className={cn(styles.faq, className)}>
      {items.map((it) => (
        <details key={it.q} className={styles.item} data-reveal="">
          <summary className={styles.summary}>
            <span>{it.q}</span>
            <span className={styles.toggle} aria-hidden="true">
              <Icon name="plus" size={20} />
            </span>
          </summary>
          <div className={styles.answer}>
            {Array.isArray(it.a) ? (
              <ul>
                {it.a.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : typeof it.a === "string" ? (
              <p>{it.a}</p>
            ) : (
              it.a
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

/* ---------- Day / week plan (House of Om "Week 1 — Hatha yoga foundation") ---------- */
export function DayPlan({
  days,
  footnote,
}: {
  days: { label: string; title: string; items: { title: string; text?: string; optional?: boolean }[] }[];
  footnote?: string;
}) {
  return (
    <div className={styles.plan}>
      {days.map((d, i) => (
        <details key={d.label + i} className={styles.day} open={i === 0} data-reveal="">
          <summary className={styles.daySummary}>
            <span className={styles.dayLabel}>{d.label}</span>
            <span className={styles.dayTitle}>
              {d.title}
              <Icon name="chevronRight" size={20} className={styles.chev} />
            </span>
          </summary>
          <ol className={styles.dayItems}>
            {d.items.map((it, j) => (
              <li key={j} data-card="">
                <span className={styles.dayItemTitle}>
                  {it.title}
                  {it.optional && <sup aria-label="recommended add-on">*</sup>}
                </span>
                {it.text && <span className={styles.dayItemText}>{it.text}</span>}
              </li>
            ))}
          </ol>
        </details>
      ))}
      {footnote && <p className={styles.footnote}>* {footnote}</p>}
    </div>
  );
}
