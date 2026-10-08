import Image from "next/image";
import { media, type MediaKey } from "@/content/media";
import { cn } from "@/lib/cn";
import { coverSizes, fullBleedSizes, parseRatio } from "@/lib/imageSizes";
import styles from "./Img.module.css";

type Props = {
  k: MediaKey;
  sizes: string;
  /** CSS aspect-ratio for the frame, e.g. "4 / 5". Omit to fill the parent (parent must be positioned). */
  ratio?: string;
  priority?: boolean;
  alt?: string;
  className?: string;
  imgClassName?: string;
  /** Adds a clip-path reveal on scroll. */
  reveal?: boolean;
  /** Adds a subtle scroll parallax on the inner image. */
  parallax?: boolean;
  position?: string;
  fit?: "cover" | "contain";
  quality?: 75 | 85 | 90;
  /** Gentle zoom on hover (off for full-bleed backgrounds). */
  zoom?: boolean;
};

/** Every content image goes through here: fixed-ratio frame + next/image fill + sage placeholder. */
export function Img({
  k,
  sizes,
  ratio,
  priority,
  alt,
  className,
  imgClassName,
  reveal,
  parallax,
  position,
  fit = "cover",
  quality = 85,
  zoom = true,
}: Props) {
  const m = media[k];
  const srcAspect = m.width / m.height;
  // Ask for the width the photo really renders at once cropped (and over-scanned for parallax).
  const effectiveSizes =
    fit !== "cover"
      ? sizes
      : ratio
        ? coverSizes(sizes, srcAspect, parseRatio(ratio), parallax ? 1.16 : 1)
        : sizes === "100vw"
          ? fullBleedSizes(srcAspect * (parallax ? 1.16 : 1))
          : sizes;
  return (
    <div
      className={cn(styles.frame, !ratio && styles.fill, zoom && "img-zoom", className)}
      style={ratio ? { aspectRatio: ratio } : undefined}
      data-image-reveal={reveal ? "" : undefined}
    >
      <Image
        src={m.src}
        alt={alt ?? m.alt}
        fill
        sizes={effectiveSizes}
        quality={quality}
        priority={priority}
        className={cn(styles.img, parallax && styles.parallax, imgClassName)}
        style={{ objectFit: fit, objectPosition: position }}
        data-parallax={parallax ? "" : undefined}
      />
    </div>
  );
}
