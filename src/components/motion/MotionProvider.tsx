"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Easing tokens mirror House of Om's (see styles/tokens.css).
const EASE_IMAGE = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";

/**
 * Site-wide scroll motion driven by data attributes, so pages stay server components:
 *   [data-reveal]        fade + 16px rise (batched/staggered)
 *   [data-reveal-lines]  masked word rise for headings (see RevealText)
 *   [data-image-reveal]  clip-path wipe up + image settle
 *   [data-parallax]      gentle scrubbed drift (≥768px only)
 *   [data-counter]       count up to the element's value
 */
export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const all = gsap.utils.toArray<HTMLElement>(
          "[data-reveal], [data-reveal-lines] .line-inner, [data-image-reveal]",
        );
        if (all.length) gsap.set(all, { clearProps: "all", opacity: 1 });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Text & cards
        const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
        if (reveals.length) gsap.set(reveals, { y: 16 });
        ScrollTrigger.batch(reveals, {
          start: "top bottom",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.08, overwrite: true }),
        });

        // Headings
        gsap.utils.toArray<HTMLElement>("[data-reveal-lines]").forEach((el) => {
          gsap.to(el.querySelectorAll(".line-inner"), {
            yPercent: 0,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.035,
            scrollTrigger: { trigger: el, start: "top bottom", once: true },
          });
        });

        // Images
        gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((frame) => {
          const img = frame.querySelector("img");
          const tl = gsap.timeline({ scrollTrigger: { trigger: frame, start: "top bottom", once: true } });
          tl.fromTo(
            frame,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: EASE_IMAGE },
          );
          if (img) tl.from(img, { scale: 1.15, duration: 1.6, ease: EASE_IMAGE }, 0);
        });

        // Counters
        gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
          const target = Number(el.dataset.counter);
          if (!Number.isFinite(target)) return;
          const state = { v: 0 };
          gsap.to(state, {
            v: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top bottom", once: true },
            onUpdate: () => {
              el.textContent = Math.round(state.v).toLocaleString("en-US");
            },
          });
        });
      });

      mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: 0.5 },
            },
          );
        });
      });

      // Late-loading fonts/images can shift layout; re-measure once everything settles.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh);
      return () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}
