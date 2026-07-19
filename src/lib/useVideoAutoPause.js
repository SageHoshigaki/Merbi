// src/lib/useVideoAutoPause.js
//
// Attaches to a <video> ref and:
// - pauses it once it scrolls out of view (IntersectionObserver)
// - resumes it when it scrolls back into view, if it was playing because
//   of autoplay/user intent
// - pauses it when the browser tab becomes hidden, resumes on return
// - fails silently if autoplay is blocked (never throws)
// - fully cleans up the observer and listeners on unmount
//
// This does not change markup, className, or visual behavior — it only
// controls play/pause on an existing element.

import { useEffect } from "react";

export function useVideoAutoPause(videoRef, { threshold = 0.15 } = {}) {
  useEffect(() => {
    const video = videoRef.current;
    if (!video || typeof video.pause !== "function" || video.tagName !== "VIDEO") {
      return undefined;
    }

    let wasPlayingBeforeHidden = false;
    let isIntersecting = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersecting = entry.isIntersecting;

          if (!entry.isIntersecting) {
            if (!video.paused) {
              video.pause();
            }
          } else if (document.visibilityState === "visible") {
            tryPlay();
          }
        });
      },
      { threshold },
    );

    observer.observe(video);

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        wasPlayingBeforeHidden = !video.paused;
        video.pause();
      } else if (wasPlayingBeforeHidden && isIntersecting) {
        tryPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [videoRef, threshold]);
}

export default useVideoAutoPause;
