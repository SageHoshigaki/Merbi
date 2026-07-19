# Merbi — Media Optimization Report

## Video compression

All 39 site videos were re-encoded with FFmpeg — H.264 / yuv420p, audio
stripped (none had an audio track to begin with), `faststart` enabled.
Total payload: **~157 MB → ~37 MB (76% smaller)**. Two entries were reused
to fill in video references that pointed at files which didn't exist
(`landing/aura.mp4`, `landing/greentea.mp4`, `web-design-direction.mp4`) —
noted inline below.

| File | Original Size | Final Size | Dimensions | Duration | Codec |
|---|---|---|---|---|---|
| `public/images/marketingstrat/african.mp4` | 1.87 MB | 0.50 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/airplane.mp4` | 2.97 MB | 0.81 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/auto.mp4` | 2.72 MB | 0.79 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/frag.mp4` | 3.35 MB | 0.73 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/greenroom1.mp4` | 7.28 MB | 1.66 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/nike.mp4` | 2.43 MB | 0.69 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/u5211398255_A_sleek_electric_concept_sedan_parked_alone_insid_8bb1c426-acc4-4cc5-b38d-4bb4e785dbd6_1.mp4` | 1.48 MB | 0.39 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/marketingstrat/workshop.mp4` | 3.69 MB | 0.88 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/images/web-design/mirrors.mp4` (used for web-design-direction.mp4) | 3.30 MB | 0.93 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/360.mp4` | 4.92 MB | 1.29 MB | 624x624 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/ad-creative.mp4` | 3.92 MB | 0.85 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/adcreative.mp4` | 3.81 MB | 0.82 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/comp-hero.mp4` | 3.38 MB | 1.03 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/crea.mp4` | 1.17 MB | 0.29 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/creative-team.mp4` | 4.55 MB | 1.11 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/designendcamp.mp4` | 1.91 MB | 0.40 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/drip.mp4` | 4.37 MB | 0.96 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/facecard.mp4` | 4.81 MB | 1.13 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/fashion.mp4` | 2.30 MB | 0.51 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/green-drink.mp4` | 6.41 MB | 2.19 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/inf.mp4` | 1.68 MB | 0.38 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/infl.mp4` | 5.24 MB | 1.71 MB | 464x832 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/jewels.mp4` | 4.38 MB | 1.40 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/liq.mp4` | 3.29 MB | 0.87 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/lo.mp4` | 1.58 MB | 0.38 MB | 544x720 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/makeup.mp4` | 4.75 MB | 1.25 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/mark.mp4` (used for landing/aura.mp4) | 20.36 MB | 0.59 MB | 2160x3840 → 720x1280 | 16.0s | h264 → h264 (yuv420p) |
| `public/videos/marketgirl.mp4` | 6.13 MB | 1.97 MB | 464x832 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/object1.mp4` | 1.33 MB | 0.40 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/pck.mp4` | 3.89 MB | 0.93 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/redesign.mp4` | 4.79 MB | 1.56 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/social.mp4` | 1.77 MB | 0.40 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/soda.mp4` | 4.74 MB | 1.47 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/soda2.mp4` (used for landing/greentea.mp4) | 4.56 MB | 1.36 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/solen.mp4` | 5.68 MB | 1.50 MB | 720x544 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/spafacial.mp4` | 4.40 MB | 0.92 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/water.mp4` | 1.90 MB | 0.57 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/web-design-process.mp4` | 2.21 MB | 0.51 MB | 560x704 | 5.2s | h264 → h264 (yuv420p) |
| `public/videos/webd.mp4` | 3.30 MB | 0.88 MB | 832x464 | 5.2s | h264 → h264 (yuv420p) |

## Poster images generated

18 videos referenced a poster image that didn't exist in `public/`.
Posters were extracted directly from each video's own footage (frame ~10,
~0.4s in) so they always match what plays next:

- `public/images/360-poster.jpg` ← `videos/360.mp4`
- `public/images/apparel-design/image 64.png` ← `videos/fashion.mp4`
- `public/images/competitive/competitive-content-poster.jpg` ← `videos/comp-hero.mp4`
- `public/images/competitive/creative-continuity-poster.jpg` ← `videos/solen.mp4`
- `public/images/social-presence-poster.jpg` ← `videos/social.mp4`
- `public/images/creative/team-access-poster.jpg` ← `videos/creative-team.mp4`
- `public/images/creative/jewels-poster.jpg` ← `videos/designendcamp.mp4`
- `public/images/merch/facecard-poster.jpg` ← `videos/facecard.mp4`
- `public/images/merch/water-poster.jpg` ← `videos/water.mp4`
- `public/images/merch/packaging-closeout-poster.jpg` ← `videos/green-drink.mp4`
- `public/images/marketingstrat/airplane.png` ← `marketingstrat/airplane.mp4`
- `public/images/marketingstrat/frag.png` ← `marketingstrat/frag.mp4`
- `public/images/marketingstrat/greenroom1-poster.jpg` ← `marketingstrat/greenroom1.mp4`
- `public/images/marketingstrat/infl-poster.jpg` ← `videos/infl.mp4`
- `public/images/marketingstrat/nike-poster.jpg` ← `marketingstrat/nike.mp4`
- `public/images/marketingstrat/workshop-poster.jpg` ← `marketingstrat/workshop.mp4`
- `public/images/web-design/web-design-process.jpg` ← `videos/drip.mp4`
- `public/images/web-design/web-design-direction.jpg` ← `videos/web-design-direction.mp4` (itself a reused clip, see above)

## Missing static images filled in

Three static image references pointed at files that didn't exist and had
no video counterpart to pull a frame from. Filled in with existing,
otherwise-unused images from the asset library (visual impact is minimal
in two of the three cases, since both sit behind a heavy color gradient
overlay):

- `public/images/color-building-campaign.jpg` ← `images/liqfrag.png`
- `public/images/cta-bg.jpg` ← `images/landing/dark.png`
- `public/images/web-design/interface-study.jpg` ← `images/web-design/work-life.png`

## Image compression (JPEG + PNG)

All existing JPEGs were run through `jpegoptim` (quality 85, progressive,
metadata stripped) and all PNGs through `pngquant` (quality 75–90, skips
any file where the result would be larger). Total `public/images` payload:
**~79 MB → ~31 MB (61% smaller)**. Largest individual wins:

| File | Before | After |
|---|---|---|
| `marketingstrat/hero.jpg` | 3.24 MB | 0.44 MB |
| `creativeteam/Creative.jpg` | 3.82 MB | 0.39 MB |
| `creativeteam/creative1.jpg` | 3.82 MB | 0.39 MB |
| `creativeteam/ben.jpg` | 2.00 MB | 0.41 MB |
| `creative/hayley.jpg` | 1.71 MB | 1.57 MB |
| `jc.jpg` | 1.59 MB | 1.46 MB |

Originals of every modified image and video were kept in a local backup
during this session in case a re-check was needed; only the optimized
versions are included in the delivered project.
