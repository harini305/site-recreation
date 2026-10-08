/**
 * `sizes` describes the <img> box, but with object-fit: cover a landscape photo in a portrait frame
 * renders much wider than its box. Scale every `sizes` length by that overflow so the browser
 * downloads a sharp enough file.
 */
export function coverSizes(sizes: string, srcAspect: number, frameAspect: number, extra = 1) {
  const factor = Math.max(1, srcAspect / frameAspect) * extra;
  if (factor < 1.05) return sizes;
  return sizes
    .split(",")
    .map((part) => {
      const t = part.trim();
      const i = t.lastIndexOf(" ");
      const cond = i > 0 && t.startsWith("(") ? t.slice(0, i) : "";
      const len = cond ? t.slice(i + 1) : t;
      return `${cond ? cond + " " : ""}calc(${len} * ${factor.toFixed(2)})`;
    })
    .join(", ");
}

/** Full-bleed backgrounds: on portrait screens the photo is sized by the viewport height. */
export function fullBleedSizes(srcAspect: number) {
  return `(orientation: portrait) ${Math.round(srcAspect * 100)}vh, 100vw`;
}

export function parseRatio(ratio: string) {
  const [w, h] = ratio.split("/").map((n) => parseFloat(n));
  return h ? w / h : w;
}
