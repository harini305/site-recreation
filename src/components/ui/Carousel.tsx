"use client";

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import styles from "./Carousel.module.css";

type Props = {
  children: ReactNode;
  label: string;
  /** Visible slides per breakpoint, e.g. { base: 1.15, md: 2, lg: 3 } */
  perView?: { base: number; md?: number; lg?: number };
  dots?: boolean;
  /** "dark" arrows for light backgrounds, "light" for image backgrounds */
  tone?: "dark" | "light";
  className?: string;
};

/** Scroll-snap carousel with House of Om's round arrow buttons. */
export function Carousel({
  children,
  label,
  perView = { base: 1.15, md: 2, lg: 3 },
  dots,
  tone = "dark",
  className,
}: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  const count = Children.count(children);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
    const first = el.children[0] as HTMLElement | undefined;
    if (first)
      setActive(Math.round(el.scrollLeft / (first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0"))));
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0") : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const goTo = (i: number) => {
    const el = track.current;
    const item = el?.children[i] as HTMLElement | undefined;
    if (el && item) el.scrollTo({ left: item.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <div
      className={cn(styles.root, tone === "light" && styles.light, className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      style={
        {
          "--pv-base": perView.base,
          "--pv-md": perView.md ?? perView.base,
          "--pv-lg": perView.lg ?? perView.md ?? perView.base,
        } as React.CSSProperties
      }
    >
      <ul ref={track} className={styles.track} role="list" tabIndex={0}>
        {Children.map(children, (child, i) => (
          <li className={styles.slide} aria-roledescription="slide" aria-label={`${i + 1} of ${count}`}>
            {child}
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={cn(styles.arrow, styles.prev)}
        onClick={() => go(-1)}
        disabled={atStart}
        aria-label="Previous slide"
      >
        <Icon name="arrowLeft" size={22} />
      </button>
      <button
        type="button"
        className={cn(styles.arrow, styles.next)}
        onClick={() => go(1)}
        disabled={atEnd}
        aria-label="Next slide"
      >
        <Icon name="arrowRight" size={22} />
      </button>
      {dots && count > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: count }, (_, i) => (
            <button
              key={i}
              type="button"
              className={styles.dot}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
