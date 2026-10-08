"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { media, type MediaKey } from "@/content/media";
import { Icon } from "@/components/ui/Icon";
import styles from "./VideoFeature.module.css";

type Props =
  | { kind: "file"; src: string; poster: MediaKey; title: string }
  | { kind: "youtube"; id: string; poster: MediaKey; title: string };

/**
 * Click-to-play video. Nothing heavy loads until the visitor presses play:
 * the local MP4 uses preload="none"; YouTube is a facade until clicked.
 */
export function VideoFeature(props: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const poster = media[props.poster];

  const start = () => {
    setPlaying(true);
    if (props.kind === "file") window.setTimeout(() => videoRef.current?.play(), 30);
  };

  return (
    <div className={styles.frame}>
      {playing ? (
        props.kind === "file" ? (
          // The film has captions burned into the picture.
          <video
            ref={videoRef}
            className={styles.player}
            src={props.src}
            controls
            playsInline
            preload="none"
            poster={poster.src}
          />
        ) : (
          <iframe
            className={styles.player}
            src={`https://www.youtube-nocookie.com/embed/${props.id}?autoplay=1&rel=0`}
            title={props.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )
      ) : (
        <button type="button" className={styles.facade} onClick={start}>
          <Image
            src={poster.src}
            alt=""
            fill
            sizes="(max-width: 1279px) 94vw, 1200px"
            quality={85}
            style={{ objectFit: "cover" }}
          />
          <span className={styles.shade} aria-hidden="true" />
          <span className={styles.badge} aria-hidden="true">
            <svg viewBox="0 0 120 120" className={styles.ring}>
              <defs>
                <path id={`vid-${props.poster}`} d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
              </defs>
              <text>
                <textPath href={`#vid-${props.poster}`}>WATCH VIDEO · WATCH VIDEO · WATCH VIDEO ·</textPath>
              </text>
            </svg>
            <span className={styles.play}>
              <Icon name="play" size={30} />
            </span>
          </span>
          <span className="visually-hidden">Play video: {props.title}</span>
        </button>
      )}
    </div>
  );
}
