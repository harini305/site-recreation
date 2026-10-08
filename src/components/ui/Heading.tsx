import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { RevealText } from "@/components/motion/RevealText";
import styles from "./Heading.module.css";

export function Eyebrow({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn(styles.eyebrow, light && styles.light, className)} data-reveal="">
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  /** Paragraph(s) shown beside (split) or under (center/left) the title. */
  children?: ReactNode;
  layout?: "split" | "center" | "left";
  as?: "h1" | "h2";
  light?: boolean;
  className?: string;
  titleClassName?: string;
  id?: string;
};

/**
 * House of Om section intro: eyebrow + Bagnard title, with the supporting copy either
 * in the right column ("split") or underneath ("center" / "left").
 */
export function SectionHeading({
  eyebrow,
  title,
  children,
  layout = "split",
  as = "h2",
  light,
  className,
  titleClassName,
  id,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <header className={cn(styles.heading, styles[layout], light && styles.lightHeading, className)}>
      <div className={styles.titleCol}>
        {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
        <Tag id={id} className={cn(styles.title, titleClassName)}>
          <RevealText text={title} />
        </Tag>
      </div>
      {children && (
        <div className={styles.copy} data-reveal="">
          {children}
        </div>
      )}
    </header>
  );
}
