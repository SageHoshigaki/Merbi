# Environment variables & Vercel deployment

## Required environment variables

Set these in Vercel → Project → Settings → Environment Variables (for
Production, Preview, and Development as appropriate):

| Variable | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Yes | Server-side only. Resend API key used by `api/send-inquiry.ts`. |
| `RESEND_FROM_EMAIL` | Yes | Verified sender, e.g. `"Merbi <onboarding@resend.dev>"` for testing, or a verified domain sender for production. |
| `INQUIRY_TO_EMAIL` | Yes | Inbox that receives new project inquiries. |
| `INQUIRY_REPLY_EMAIL` | No | Reply-to address for the auto-confirmation email sent to the customer; falls back to `INQUIRY_TO_EMAIL` if unset. |
| `VITE_IMAGEKIT_URL` | No | e.g. `https://ik.imagekit.io/merbimedia`. If unset, images are served directly from `/public` — nothing breaks, ImageKit just isn't active yet. |

A `.env.example` is included in the project root listing all of the above.
Copy it to `.env` for local development (`cp .env.example .env` and fill in
real values) — `.env` itself is gitignored and was **not** included in this
delivered project since it previously contained a live API key.

## Local development

```bash
npm install
npm run dev
```

The Vite dev server proxies `/api/*` to `http://localhost:3000` (see
`vite.config.js`), so to exercise the real inquiry-form endpoint locally
you need the Vercel dev server running on port 3000 in a separate terminal:

```bash
npx vercel dev --listen 3000
```

## Production deployment (Vercel)

1. Push this project to a Git repository connected to your Vercel project
   (or run `vercel --prod` from the project root with the Vercel CLI).
2. Confirm the environment variables above are set for the Production
   environment in Vercel's dashboard.
3. Vercel will use the existing `vercel.json` (framework: `vite`,
   `npm run build`, output directory `dist`) — no changes needed there
   beyond what's already committed.
4. After the first deploy, do a manual pass over:
   - A hard refresh on a few non-root routes (e.g. `/web-design`,
     `/creative-team`) to confirm the SPA rewrite is working in production
     the same way it did locally.
   - The inquiry form end-to-end, including checking that the admin
     notification and customer confirmation emails both arrive.
   - Safari desktop and iPhone Safari specifically for video autoplay —
     this project's video attributes are already Safari/iOS-correct
     (`muted`, `playsInline`, silent-fail on blocked autoplay), but a real
     device check is worth doing since it wasn't possible from this
     sandboxed build environment.

## Confirmations

- `npm run build` passes with no errors.
- `npm run lint` passes with 0 errors except one accepted shadcn/ui
  convention warning (see CHANGELOG.md → Known remaining issues).
- Visual design, copy, layout, section order, and animation behavior are
  unchanged from the original project, with one deliberate content fix (see
  CHANGELOG.md → Bugs fixed → hero supporting copy).
