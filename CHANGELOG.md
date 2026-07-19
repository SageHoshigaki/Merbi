# Merbi — Production Hardening Changelog

Visual design, copy, layout, section order, GSAP animation timing, and the
animated vertical hero media wall are unchanged. Everything below is
performance, reliability, and correctness work.

## Performance

- Recompressed **all 39 site videos** with FFmpeg (H.264, yuv420p, no audio,
  faststart) — total video payload dropped from ~157 MB to ~37 MB (~76%
  smaller). See `MEDIA-REPORT.md` for the per-file breakdown.
- `public/videos/mark.mp4` was 4K portrait (2160×3840, 20.4 MB) despite only
  ever being displayed as a small hero-wall tile; downscaled to 720×1280
  (0.59 MB) with no visible quality loss at its actual display size.
- Optimized **all JPEGs** (jpegoptim, quality 85, progressive, metadata
  stripped) and **all PNGs** (pngquant, quality 75–90) across `public/images`
  — total image payload dropped from ~79 MB to ~31 MB (~61% smaller). The
  largest single-file wins: `marketingstrat/hero.jpg` 3.2 MB → 437 KB,
  `creativeteam/Creative.jpg` 3.8 MB → 395 KB, `creativeteam/ben.jpg` 2.0 MB
  → 412 KB.
- Added a shared `useVideoAutoPause` hook and wired it into every
  autoplaying `<video>` in the app (it was previously only implemented in
  the homepage hero carousel). Every background/loop video now pauses when
  it scrolls offscreen and when the browser tab is hidden, and resumes when
  appropriate — this cuts wasted decode/CPU work on long scroll pages
  significantly without changing how anything looks or when it starts
  playing.
- Added `OptimizedImage`, `LazyVideo`, and `HeroVideo` components
  (`src/components/media/`) for future use; below-the-fold `LazyVideo` never
  downloads its source until it approaches the viewport (`preload="none"`),
  and `HeroVideo` is reserved for the single critical above-the-fold asset.
- Fixed `vercel.json`: added a SPA rewrite (`/((?!api/).*) → /index.html`)
  so direct navigation and refreshes on any route (e.g. `/web-design`) work
  in production — there was no rewrite configured before, so a hard refresh
  on any non-root route would have 404'd on Vercel. Added long-lived
  immutable `Cache-Control` headers for `/videos/*`, `/images/*`, and the
  Vite-hashed `/assets/*` build output.
- Bumped `vite` to resolve a high-severity dev-server advisory
  (`npm audit fix`, 0 vulnerabilities remaining).

## Images

- ImageKit env var now reads `VITE_IMAGEKIT_URL` (the name specified for
  this project) with `VITE_IMAGEKIT_URL_ENDPOINT` kept as a fallback for
  backward compatibility. Since no ImageKit endpoint is currently set, every
  helper in `src/lib/imagekit.js` transparently falls back to serving the
  local file — nothing changes visually today, but the moment
  `VITE_IMAGEKIT_URL` is set in Vercel, images will start being served
  through ImageKit with responsive widths/format/quality automatically.
- Removed a `console.warn` that would have fired on every single image
  render once ImageKit helpers are used without an endpoint configured.
- Added a new `OptimizedImage` component that generates `srcSet`/`sizes`
  through ImageKit when configured, and otherwise renders the plain local
  file — ready to drop into any component.

## Videos

- See **Performance** above for compression numbers.
- Filled in three video references that pointed at files that didn't
  exist (`/videos/landing/aura.mp4`, `/videos/landing/greentea.mp4`,
  `/videos/web-design-direction.mp4`) by reusing existing, otherwise-unused
  clips from the asset library that fit the same context, then compressing
  them the same as everything else. Nothing was fabricated — these are your
  own existing shots, just newly assigned to those slots.
- Generated missing poster frames for every video that referenced one that
  didn't exist (18 posters total — see `MEDIA-REPORT.md`), extracted
  directly from each video's own footage so the poster always matches what
  plays next.

## Forms (Resend inquiry form)

- The inquiry form (`StartAProject.jsx` + `api/send-inquiry.ts`) was already
  well-built: server-side validation/trimming, email format check,
  honeypot, duplicate-submit prevention, and loading/success/error UI states
  were all already in place.
- Removed two verbose debug `console.log` calls from the API route (payload
  dump and full Resend response dump) and moved the remaining success log
  to only fire after delivery is actually confirmed.
- Stopped forwarding Resend's raw SDK error message to the client on
  delivery failure (previously `result.error.message` was returned
  as-is) — the client now always gets a generic, safe message while the
  real error is still logged server-side for debugging.

## Responsive behavior

- No structural responsive changes were needed — spot checks at 320/375/
  390/430px and tablet/laptop/desktop/ultrawide widths in the built site
  didn't turn up overflow, clipped text, or broken nav behavior.

## Browser compatibility

- Every autoplaying video already used `muted`, `playsInline`, and
  `disablePictureInPicture`, and play calls were already wrapped so a
  blocked autoplay fails silently — this is correct for Safari/iOS and was
  left as-is.
- Fixed two `onError` image fallbacks that were pointing at invalid paths
  (see **Bugs fixed**) which meant the fallback itself would also fail to
  load in production.

## Bugs fixed

- **SPA route refresh / direct navigation would 404 on Vercel** — no
  rewrite existed in `vercel.json`. Fixed (see Performance).
- **Two files had a literal leading space in their filename**
  (` WebDesignHero.jsx`, ` MerbiWebDesignHero.jsx`) and were imported using
  that same broken-looking path. Renamed both files and fixed the imports
  in `src/pages/WebDesign.jsx`.
- **28 broken media references** — images, posters, and videos referenced
  in JSX that pointed at files which didn't exist in `public/`. All 28 now
  resolve (verified by serving the production build and requesting every
  referenced asset URL — see verification note below).
- `CreativeTeamAccessHero.jsx`: the `onError` fallback pointed at
  `"public/images/creativeteam/Creative.jpg"` — a path with a literal
  `public/` prefix, which doesn't exist at that URL once built (only the
  contents of `public/` are served, from the root). Both the primary image
  and its fallback were broken; fixed to point directly at the valid file.
- `SmarterCreativeSection.jsx`: the primary `src` pointed at a local file
  that never existed, so the browser was always paying for one failed
  request before falling back to an Unsplash URL. Pointed `src` directly at
  the working Unsplash URL — same image renders, one fewer failed network
  request per page load.
- A dead, fully-unused `Header()` function (leftover placeholder nav with
  `href="#"` links) inside `CreativeTeamAccessHero.jsx` was removed.
- Removed unused imports flagged by ESLint across `MarketingPage.jsx`,
  `MarketingStrategyServices.jsx`, `DesignServicesPage.jsx`,
  `MerbiCreativeStackSync.jsx`, `LandingHero.jsx`, and the shadcn
  `ui/button.jsx` / `ui/card.jsx` files (unused `React` namespace import,
  no longer needed with the automatic JSX runtime).
- Fixed `vite.config.js` using `__dirname`, which isn't defined in an ESM
  module — replaced with the standard `fileURLToPath(import.meta.url)`
  pattern.
- Fixed two `react-hooks/set-state-in-effect` lint errors (`Navbar.jsx`
  route-change effect, `SuccessNumbers.jsx` counter reset) using functional
  state updaters that bail out when there's nothing to change, preserving
  the exact existing behavior and animation timing.
- **Content fix**: the homepage hero supporting paragraph didn't match the
  exact copy specified for this project. Updated to read exactly
  *"Marketing beyond imagination delivers innovative strategies, impactful
  results, and transformative growth for your brand."* — no styling or
  layout touched.
- `npm audit fix` resolved a high-severity `vite` dev-server advisory.

## Verification performed

- `npm run build` completes with no errors.
- `npm run lint` — 0 errors except one accepted shadcn/ui convention warning
  (see **Known remaining issues**).
- Served the actual production build (`vite preview`) and requested every
  one of the 92 media URLs referenced anywhere in the app — all return
  `200`.
- Requested every route (`/`, `/design-services`, `/marketing-strategy`,
  `/competitive-content`, `/creative-team`, `/web-design`, `/merch`,
  `/dashboard`, `/start-a-project`, and an unknown path) against the served
  build — all return `200` with the SPA fallback in place.

## Known remaining issues

- **`npx vercel dev` / live Safari & iPhone testing were not possible from
  this sandboxed environment** (no network access to vercel.com or physical
  iOS devices). The API route, GSAP cleanup, and all Safari-relevant video
  attributes (`playsInline`, `muted`, silent-fail autoplay) were reviewed
  and are correct, but a real deploy-preview + device pass is recommended
  before launch.
- `src/components/ui/button.jsx` triggers one `react-refresh/only-export-
  components` warning because it exports both `Button` and `buttonVariants`
  from the same file. This is the standard shadcn/ui convention (used by
  every shadcn Button file) — left as-is rather than restructured, since
  splitting it would diverge from what `npx shadcn add` regenerates.
- A handful of avatar/testimonial images (`TestimonialCarouselSection.jsx`
  in three places, `InHouseAISection.jsx`) hotlink `images.unsplash.com`
  directly. This was already the case before this pass; worth downloading
  and self-hosting those at some point for reliability, but replacing them
  risks swapping in different photos, so it was left untouched.
- `WebDesignCampaignHero.jsx` (color-building-campaign hero) and its
  `ImageCTA` shared component are not imported/rendered anywhere in the
  current app — likely leftover from an earlier version of a page. Left in
  place in case they're wired up later; not deleted since removing
  component files wasn't requested.
- Static assets under `/videos` and `/images` are **not** content-hashed, so
  the new `Cache-Control: immutable, max-age=31536000` header means any
  future replacement of an existing filename won't be picked up by
  returning visitors for up to a year. Going forward, ship asset updates
  under a new filename (or a `?v=` style versioned path) rather than
  overwriting one in place.
