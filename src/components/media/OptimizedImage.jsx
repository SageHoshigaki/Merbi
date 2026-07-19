// src/components/media/OptimizedImage.jsx
//
// Drop-in replacement for <img> that:
// - serves responsive, auto-format/auto-quality images through ImageKit
//   when VITE_IMAGEKIT_URL is configured (srcSet + sizes)
// - falls back to the plain local file when it isn't, so nothing breaks
// - always sets width/height or a supplied aspect-ratio to prevent CLS
// - defaults to lazy/async loading; opt into eager for above-the-fold use

import { imageUrl, imageSrcSet } from "@/lib/imagekit";

export default function OptimizedImage({
  src,
  alt = "",
  widths = [480, 768, 1024, 1440, 1920],
  width,
  height,
  aspectRatio,
  quality = 80,
  crop = "maintain_ratio",
  focus,
  priority = false,
  className = "",
  style,
  draggable = false,
  ...rest
}) {
  const isRemote = /^https?:\/\//i.test(src || "");

  const resolvedSrc = isRemote ? src : imageUrl(src, { width: widths[widths.length - 1], quality, crop, focus });
  const resolvedSrcSet = isRemote ? undefined : imageSrcSet(src, { widths, quality, crop, focus });

  const dimensionStyle = aspectRatio ? { aspectRatio, ...style } : style;

  return (
    <img
      src={resolvedSrc}
      srcSet={resolvedSrcSet}
      sizes={resolvedSrcSet ? "(max-width: 768px) 100vw, (max-width: 1440px) 80vw, 1440px" : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      draggable={draggable}
      className={className}
      style={dimensionStyle}
      {...rest}
    />
  );
}
