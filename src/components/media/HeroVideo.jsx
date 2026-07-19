// src/components/media/HeroVideo.jsx
//
// For the single critical above-the-fold hero video. Mounts
// immediately (never lazy-gated), shows the poster instantly, and
// preloads only this one asset — never every hero-column asset.

import { useRef } from "react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

export default function HeroVideo({
  src,
  poster,
  alt = "",
  className = "",
  style,
  preload = "auto",
  loop = true,
}) {
  const videoRef = useRef(null);

  useVideoAutoPause(videoRef);

  return (
    <video
      ref={videoRef}
      poster={poster}
      aria-label={alt || undefined}
      muted
      loop={loop}
      playsInline
      autoPlay
      preload={preload}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      className={className}
      style={style}
      onCanPlay={(event) => {
        const video = event.currentTarget;
        if (video.paused) {
          video.play().catch(() => {});
        }
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
