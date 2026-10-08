import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "brand" | "outline" | "glass" | "light" | "text";

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: "m" | "l";
  icon?: IconName;
  /** Show a trailing arrow (default for text links). */
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export function Button({ href, children, variant = "primary", size = "m", icon, arrow, className, ariaLabel }: Props) {
  const external = isExternal(href);
  const showArrow = arrow ?? variant === "text";
  const content = (
    <>
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
      {showArrow && (
        <Icon
          name={external && href.startsWith("http") ? "arrowUpRight" : "arrowRight"}
          size={18}
          className={styles.arrow}
        />
      )}
    </>
  );
  const cls = cn(styles.btn, styles[variant], size === "l" && styles.large, className);

  if (external) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {content}
        {newTab && <span className="visually-hidden"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}

export function ButtonRow({
  children,
  center,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return <div className={cn(styles.row, center && styles.center, className)}>{children}</div>;
}
