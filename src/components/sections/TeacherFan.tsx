"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { media } from "@/content/media";
import type { Teacher } from "@/content/teachers";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./TeacherFan.module.css";

/** House of Om's fanned teacher carousel: active portrait centred and enlarged. */
export function TeacherFan({ teachers }: { teachers: Teacher[] }) {
  const list = teachers.filter((t) => t.image);
  const [active, setActive] = useState(Math.floor(list.length / 2));
  const touchX = useRef<number | null>(null);
  const n = list.length;
  const go = (d: number) => setActive((a) => (a + d + n) % n);
  const current = list[active];

  return (
    <div className={styles.root}>
      <div
        className={styles.stage}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {list.map((t, i) => {
          let offset = i - active;
          if (offset > n / 2) offset -= n;
          if (offset < -n / 2) offset += n;
          const abs = Math.abs(offset);
          const hidden = abs > 2;
          return (
            <button
              key={t.slug}
              type="button"
              className={cn(styles.card, offset === 0 && styles.active)}
              style={
                {
                  "--offset": offset,
                  "--abs": abs,
                  zIndex: 10 - abs,
                  opacity: hidden ? 0 : 1,
                  pointerEvents: hidden ? "none" : undefined,
                } as React.CSSProperties
              }
              onClick={() => setActive(i)}
              aria-label={`Show ${t.name}`}
              aria-pressed={offset === 0}
              tabIndex={hidden ? -1 : 0}
            >
              <span className={styles.name}>{t.name.split(" ")[0]}</span>
              <span className={styles.photo}>
                <Image
                  src={media[t.image!].src}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 140vw, 600px"
                  quality={85}
                  style={{ objectFit: "cover", objectPosition: "center 25%" }}
                />
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.caption} aria-live="polite">
        <p className={styles.capName}>{current.name}</p>
        <p className={styles.capStyles}>{current.styles.join(" · ")}</p>
      </div>

      <div className={styles.controls}>
        <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="Previous teacher">
          <Icon name="arrowLeft" size={22} />
        </button>
        {current.bio.length ? (
          <Link href={`/yoga/teachers#${current.slug}`} className={styles.profile}>
            Read {current.name.split(" ")[0]}’s story
          </Link>
        ) : (
          <Link href="/yoga/schedule" className={styles.profile}>
            See {current.name.split(" ")[0]}’s classes
          </Link>
        )}
        <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Next teacher">
          <Icon name="arrowRight" size={22} />
        </button>
      </div>
    </div>
  );
}
