"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { media } from "@/content/media";
import { cn } from "@/lib/cn";
import { useIsClient, useMediaQuery } from "@/lib/hooks";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { ScrollCue } from "./ScrollCue";
import styles from "./HomeHero.module.css";

gsap.registerPlugin(useGSAP);

const trust: { icon: IconName; label: string }[] = [
  { icon: "lotus", label: "15+ yoga styles, daily" },
  { icon: "sparkle", label: "Healers & Ayurvedic detox" },
  { icon: "basket", label: "Organic market & café" },
  { icon: "sun", label: "Yoga Alliance teacher training" },
];

/**
 * Full-bleed video hero — a 22-second loop cut from Samadi's own “SAMADI CANGGU AMBIENCE” film
 * (caption-free scenes only), muted and looping like House of Om's hero.
 */
export function HomeHero() {
  const root = useRef<HTMLElement>(null);
  const isClient = useIsClient();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const desktop = useMediaQuery("(min-width: 1024px)");
  const poster = media["hero/video-poster"];
  const src = desktop ? "/video/hero-1080.mp4" : "/video/hero-720.mp4";
  const showVideo = isClient && !reduced;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.from("[data-hero-media]", { scale: 1.12, duration: 2.2, ease: "power2.out" }, 0)
          .from("[data-hero-copy] .line-inner", { yPercent: 110, duration: 1.1, stagger: 0.06 }, 0.25)
          .from("[data-hero-fade]", { opacity: 0, y: 18, duration: 0.9, stagger: 0.1 }, 0.7)
          .from("[data-hero-trust]", { opacity: 0, y: 20, duration: 0.8, stagger: 0.08 }, 1);
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className={styles.hero} data-overlay-hero="" aria-label="Welcome to Samadi Bali">
      <div className={styles.media} aria-hidden="true" data-hero-media="">
        <Image
          src={poster.src}
          alt=""
          fill
          priority
          quality={90}
          sizes={`(orientation: portrait) ${Math.round((poster.width / poster.height) * 100)}vh, 100vw`}
          style={{ objectFit: "cover" }}
        />
        {showVideo && (
          <video
            key={src}
            className={styles.video}
            src={src}
            poster={poster.src}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
          />
        )}
      </div>
      <div className={styles.scrim} aria-hidden="true" />

      <div className={cn("container", styles.inner)} data-hero-copy="">
        <p className={styles.eyebrow} data-hero-fade="">
          Super Foods &amp; Wellness · Canggu, Bali
        </p>
        <h1 className={styles.title}>
          <span className="rw">
            <span className="line-inner">Samadi</span>
          </span>
        </h1>
        <p className={styles.subtitle}>
          {"More Than Yoga, A Way of Life".split(" ").map((w, i) => (
            <span className="rw" key={i}>
              <span className="line-inner">{w}&nbsp;</span>
            </span>
          ))}
        </p>
        <p className={styles.lead} data-hero-fade="">
          Daily yoga, holistic healing, organic food and a warm community — all in one tranquil space near Echo Beach.
        </p>
        <div data-hero-fade="">
          <ButtonRow center>
            <Button href="/yoga/schedule" size="l">
              Book a class
            </Button>
            <Button href="#discover" variant="glass" size="l">
              Explore Samadi
            </Button>
          </ButtonRow>
        </div>

        <ul role="list" className={styles.trust}>
          {trust.map((t) => (
            <li key={t.label} className={styles.trustItem} data-hero-trust="">
              <Icon name={t.icon} size={30} />
              <span>{t.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <ScrollCue href="#discover" className={styles.cue} />
    </section>
  );
}
