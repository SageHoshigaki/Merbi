// src/lib/imagekit.js
//
// Reads the ImageKit endpoint from VITE_IMAGEKIT_URL (e.g.
// https://ik.imagekit.io/merbimedia). VITE_IMAGEKIT_URL_ENDPOINT is
// still honored for backward compatibility with any existing setup.
// If neither is configured, every helper below quietly falls back to
// serving the asset straight from /public — nothing breaks, ImageKit
// delivery just isn't active yet.

const endpoint = String(
  import.meta.env.VITE_IMAGEKIT_URL ||
    import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT ||
    "",
).replace(/\/+$/, "");

function normalizePath(path) {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return `/${String(path).replace(/^\/+/, "")}`;
}

export function imageKitUrl(path, transformation = "") {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (!endpoint) {
    return normalizePath(path);
  }

  const normalizedPath = normalizePath(path);

  if (!transformation) {
    return `${endpoint}${normalizedPath}`;
  }

  return `${endpoint}/tr:${transformation}${normalizedPath}`;
}

export function imageUrl(
  path,
  {
    width,
    height,
    quality = 80,
    crop = "maintain_ratio",
    focus,
    format = "auto",
  } = {},
) {
  const transformations = [];

  if (width) transformations.push(`w-${width}`);
  if (height) transformations.push(`h-${height}`);
  if (crop) transformations.push(`c-${crop}`);
  if (focus) transformations.push(`fo-${focus}`);
  if (quality) transformations.push(`q-${quality}`);
  if (format) transformations.push(`f-${format}`);

  return imageKitUrl(path, transformations.join(","));
}

export function imageSrcSet(
  path,
  {
    widths = [480, 768, 1024, 1440, 1920],
    quality = 80,
    crop = "maintain_ratio",
    focus,
  } = {},
) {
  return widths
    .map(
      (width) =>
        `${imageUrl(path, {
          width,
          quality,
          crop,
          focus,
        })} ${width}w`,
    )
    .join(", ");
}

export function videoUrl(
  path,
  {
    width,
    height,
    quality = 70,
    crop = "maintain_ratio",
    focus,
    format = "mp4",
  } = {},
) {
  const transformations = [];

  if (width) transformations.push(`w-${width}`);
  if (height) transformations.push(`h-${height}`);
  if (crop) transformations.push(`c-${crop}`);
  if (focus) transformations.push(`fo-${focus}`);
  if (quality) transformations.push(`q-${quality}`);
  if (format) transformations.push(`f-${format}`);

  return imageKitUrl(path, transformations.join(","));
}
