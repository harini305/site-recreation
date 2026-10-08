"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { mainNav, site } from "@/content/site";
import { media } from "@/content/media";
import { cn } from "@/lib/cn";
import { useScrolledPast } from "@/lib/hooks";
import { Icon } from "@/components/ui/Icon";
import { MenuDrawer } from "./MenuDrawer";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const scrolled = useScrolledPast(40);
  // Menus remember the route they were opened on, so they close automatically after navigation.
  const [submenu, setSubmenu] = useState<{ index: number; path: string } | null>(null);
  const [drawerPath, setDrawerPath] = useState<string | null>(null);
  const openIndex = submenu?.path === pathname ? submenu.index : null;
  const drawerOpen = drawerPath === pathname;
  const closeTimer = useRef<number | undefined>(undefined);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const setOpenIndex = useCallback(
    (i: number | null) => setSubmenu(i === null ? null : { index: i, path: pathname }),
    [pathname],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpenIndex]);

  const open = (i: number) => {
    window.clearTimeout(closeTimer.current);
    setOpenIndex(i);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenIndex(null), 140);
  };

  const closeDrawer = useCallback(() => {
    setDrawerPath(null);
    menuButtonRef.current?.focus();
  }, []);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className={styles.header} data-scrolled={scrolled}>
        <div className={cn("container-wide", styles.bar)}>
          <Link href="/" className={styles.logo} aria-label={`${site.name} — home`}>
            <Image src={media["brand/logo-green"].src} alt="" width={56} height={56} priority />
            <span className={styles.wordmark} aria-hidden="true">
              <span>Samadi</span>
              <small>Canggu · Bali</small>
            </span>
          </Link>

          <nav className={styles.nav} aria-label="Main">
            <ul role="list" className={styles.navList}>
              {mainNav.map((group, i) => (
                <li
                  key={group.label}
                  className={styles.navItem}
                  onMouseEnter={() => group.children && open(i)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={group.href}
                    className={cn(styles.navLink, isActive(group.href) && styles.active)}
                    aria-current={pathname === group.href ? "page" : undefined}
                  >
                    {group.label}
                  </Link>
                  {group.children && (
                    <>
                      <button
                        type="button"
                        className={styles.caret}
                        aria-expanded={openIndex === i}
                        aria-controls={`menu-${i}`}
                        aria-label={`${group.label} submenu`}
                        onClick={() => (openIndex === i ? setOpenIndex(null) : open(i))}
                      >
                        <Icon name="chevronDown" size={16} />
                      </button>
                      <div
                        id={`menu-${i}`}
                        className={styles.panel}
                        data-open={openIndex === i}
                        // Right-most menus open towards the left so they never run off the screen.
                        data-align={i >= mainNav.length - 2 ? "end" : "center"}
                        onFocus={() => open(i)}
                        onBlur={scheduleClose}
                      >
                        <ul role="list" className={styles.panelList}>
                          {group.children.map((c) => {
                            const inner = (
                              <>
                                <span className={styles.panelLabel}>
                                  {c.label}
                                  {c.external && <Icon name="arrowUpRight" size={14} />}
                                </span>
                                {c.description && <span className={styles.panelDesc}>{c.description}</span>}
                              </>
                            );
                            return (
                              <li key={c.href + c.label}>
                                {c.external ? (
                                  <a
                                    href={c.href}
                                    className={styles.panelLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {inner}
                                  </a>
                                ) : (
                                  <Link href={c.href} className={styles.panelLink} onClick={() => setOpenIndex(null)}>
                                    {inner}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                        {group.image && (
                          <div className={styles.panelMedia}>
                            <Image
                              src={media[group.image as keyof typeof media].src}
                              alt=""
                              fill
                              sizes="520px"
                              quality={85}
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link href="/yoga/schedule" className={styles.book}>
              Book a class
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className={styles.menuButton}
              aria-expanded={drawerOpen}
              aria-controls="site-menu"
              onClick={() => setDrawerPath(pathname)}
            >
              <Icon name="menu" size={24} />
              <span className="visually-hidden">Open menu</span>
            </button>
          </div>
        </div>
      </header>
      <MenuDrawer open={drawerOpen} onClose={closeDrawer} pathname={pathname} />
    </>
  );
}
