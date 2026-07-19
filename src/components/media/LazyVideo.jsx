// src/components/media/LazyVideo.jsx
//
// For below-the-fold background/loop video. Renders only the poster
// until the element approaches the viewport, then mounts the <video>
// with preload="none" so nothing downloads until it's actually needed.
// Pauses automatically when offscreen or when the tab is hidden.

import { useEffect, useRef, useState } from "react";
import { useVideoAutoPause } from "@/lib/useVideoAutoPause";

export default function LazyVideo({
  src,
  poster,
  alt = "",
  className = "",
  style,
  loop = true,
  rootMargin = "600px 0px",
}) {
  const wrapperRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldMount(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin]);

  useVideoAutoPause(videoRef);

  return (
    <div ref={wrapperRef} className={className} style={style}>
      {shouldMount ? (
        <video
          ref={videoRef}
          poster={poster}
          aria-label={alt || undefined}
          muted
          loop={loop}
          playsInline
          autoPlay
          preload="none"
          disablePictureInPicture
          controlsList="nodownload noplaybackrate"
          className="block h-full w-full object-cover"
          style={{ objectPosition: style?.objectPosition }}
          onCanPlay={(event) => {
            const video = event.currentTarget;
            if (video.paused) {
              video.play().catch(() => {});
            }
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        poster && (
          <img
            src={poster}
            alt={alt}
            loading="lazy"
            decoding="async"
            draggable="false"
            className="block h-full w-full object-cover"
            style={{ objectPosition: style?.objectPosition }}
          />
        )
      )}
    </div>
  );
}
