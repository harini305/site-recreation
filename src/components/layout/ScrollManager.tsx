"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Eased scroll to a section, leaving room for the fixed header. */
function glideTo(target: Element | number) {
  const header = document.querySelector<HTMLElement>("header[data-scrolled]")?.offsetHeight ?? 0;
  // Land on the section's content, not its padded edge, so the heading sits just below the header.
  const padding = typeof target === "number" ? 0 : parseFloat(getComputedStyle(target).paddingTop) || 0;
  const y =
    typeof target === "number"
      ? target
      : Math.max(0, target.getBoundingClientRect().top + window.scrollY + padding - header - 28);
  if (reducedMotion()) {
    window.scrollTo({ top: y, behavior: "instant" });
    return;
  }
  const distance = Math.abs(y - window.scrollY);
  gsap.to(window, {
    scrollTo: { y, autoKill: true },
    duration: Math.min(1.4, 0.6 + distance / 4000),
    ease: "power3.inOut",
    overwrite: true,
  });
}

/**
 * - Every navigation lands on the top of the new page (its hero).
 * - Links to a #section glide there smoothly — on the same page, or after arriving from another page.
 * - Clicking a link to the page you're already on glides back to the top.
 */
export function ScrollManager() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const hash = decodeURIComponent(window.location.hash.slice(1));
    if (!hash) return;
    // Arrived with a #section: show the page from the top, then glide down once it has laid out.
    const id = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) glideTo(el);
    }, 450);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    // Capture phase: runs before Next's <Link>; preventing default makes <Link> skip its own handling.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest("a");
      if (!a || a.target === "_blank" || !a.href) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname) return;

      if (url.hash) {
        const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (!el) return;
        e.preventDefault();
        history.pushState(history.state, "", url.hash);
        glideTo(el);
        if (el.id === "main") (el as HTMLElement).focus({ preventScroll: true });
        return;
      }
      e.preventDefault();
      glideTo(0);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
