import { cn } from "@/lib/cn";
import styles from "./ScrollCue.module.css";

/** House of Om's circular "scroll to explore" badge with a mouse glyph. */
export function ScrollCue({ href, className }: { href: string; className?: string }) {
  return (
    <a href={href} className={cn(styles.cue, className)} aria-label="Scroll to explore">
      <svg viewBox="0 0 120 120" className={styles.ring} aria-hidden="true">
        <defs>
          <path id="cue-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text>
          <textPath href="#cue-circle" startOffset="0">
            SCROLL TO EXPLORE · SCROLL TO EXPLORE ·
          </textPath>
        </text>
      </svg>
      <span className={styles.mouse} aria-hidden="true">
        <span className={styles.wheel} />
      </span>
    </a>
  );
}
