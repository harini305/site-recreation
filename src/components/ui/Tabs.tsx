"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { useIsClient } from "@/lib/hooks";
import styles from "./Tabs.module.css";

export type TabItem = { id: string; label: string; content: ReactNode };

type Props = {
  items: TabItem[];
  label: string;
  /** Open the tab whose id is today's weekday ("monday" …). Applied after hydration. */
  startOnToday?: boolean;
  align?: "start" | "center";
  className?: string;
};

/** Accessible tabs with a scrollable pill strip (House of Om values / schedule tabs). */
export function Tabs({ items, label, startOnToday, align = "start", className }: Props) {
  const [chosen, setActive] = useState<string | null>(null);
  const base = useId();
  const listRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();

  // Until the visitor picks a tab: today's weekday (client only, so SSR markup stays stable) or the first tab.
  const today =
    isClient && startOnToday ? new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase() : null;
  const active = chosen ?? (today && items.some((i) => i.id === today) ? today : items[0]?.id);

  useEffect(() => {
    // Keep the active pill visible inside the strip (horizontal only — never scroll the page).
    const list = listRef.current;
    const btn = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (list && btn && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: btn.offsetLeft - list.clientWidth / 2 + btn.offsetWidth / 2, behavior: "smooth" });
    }
  }, [active]);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = items[(index + dir + items.length) % items.length];
    setActive(next.id);
    listRef.current?.querySelector<HTMLElement>(`[data-id="${next.id}"]`)?.focus();
  };

  return (
    <div className={cn(styles.root, className)}>
      <div
        ref={listRef}
        role="tablist"
        aria-label={label}
        className={cn(styles.list, align === "center" && styles.center)}
      >
        {items.map((it, i) => (
          <button
            key={it.id}
            type="button"
            role="tab"
            id={`${base}-tab-${it.id}`}
            data-id={it.id}
            aria-selected={active === it.id}
            aria-controls={`${base}-panel-${it.id}`}
            tabIndex={active === it.id ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(it.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {it.label}
          </button>
        ))}
      </div>
      {items.map((it) => (
        <div
          key={it.id}
          role="tabpanel"
          id={`${base}-panel-${it.id}`}
          aria-labelledby={`${base}-tab-${it.id}`}
          hidden={active !== it.id}
          className={styles.panel}
          tabIndex={0}
        >
          {it.content}
        </div>
      ))}
    </div>
  );
}
