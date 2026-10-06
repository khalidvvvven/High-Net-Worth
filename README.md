# Helen Popich Harris, APLC: website concept

Design-contest concept for a high-net-worth family law practice in Lafayette, Louisiana.
It is a static Astro site with GSAP for restrained motion.

> **Not deployed.** This is a concept awaiting approval. `vercel.json` and `netlify.toml`
> deliberately switch off automatic Git deployments, so pushing to this repository does not
> publish the site. Delete both files when the site is ready to go live.

## Presentation boards

The final DesignCrowd boards are in [`presentation-boards/`](presentation-boards):

| File | Content |
| ---- | ------- |
| `Board-01-Full-Desktop-Homepage.jpg` | Full homepage at 1440px |
| `Board-02-Hero-Design-Language.jpg` | Hero, identity evolution, palette, typography, details |
| `Board-03-Credentials-Practice.jpg` | Credential strip, practice index, recognition |
| `Board-04-Mobile.jpg` | Mobile homepage at 390px |
| `Board-05-Interior-Pages.jpg` | About, Practice Areas and Contact pages |

`presentation-boards/source/` contains the HTML layouts and the Playwright scripts that
produced the boards. To regenerate them, run `npm run build && npm run preview -- --port 4322`,
then `python capture.py` and `python render.py` from that folder.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

Append `?still` to any URL to disable motion (useful for screenshots).

## Structure

```
src/
  content/types.ts    content contract (one interface per editable field group)
  content/site.ts     shared copy: firm details, credentials, practice areas, ledger, bio facts
  layouts/Base.astro  head, SEO, JSON-LD (LegalService), header/footer, mobile contact bar
  components/         Header, Footer, Seal, Monogram, CredentialStrip, PracticeIndex,
                      RecognitionTable, LocationBand, ContactPanel, InquiryForm, CtaBand,
                      MobileActionBar, Icon
  pages/              index, about, practice-areas, contact, 404
  styles/global.css   design tokens and base system; pages.css for interior patterns
  scripts/motion.ts   GSAP entrance, reveals and hairlines (skipped for reduced motion)
```

## WordPress mapping

Each interface in `content/types.ts` maps directly to an ACF field group:

| Content        | WordPress                                               |
| -------------- | ------------------------------------------------------- |
| `Firm`         | Options page: name, phone, fax, address, directions URL |
| `Credential`   | Repeater on the Options page (label, title, issuer, years) |
| `PracticeArea` | Custom post type with `summary`, `body`, `includes`     |
| `LedgerItem`   | Repeater on the home page                               |
| `Presentation` | Repeater on the About page                              |
| Page prose     | Standard page content / flexible content blocks         |

`InquiryForm` uses plain field names (`name`, `email`, `phone`, `message`) so it can post
to Gravity Forms or WPForms unchanged. In this concept the form only validates and shows its
confirmation state. Nothing is sent.

## Sources and items to confirm before launch

- **Office details:** client letterhead and business card.
- **Education, admission, AAML Certified Arbitrator status and presentations:** AAML fellow
  profile (aaml.org), the biography source the client approved.
- **Super Lawyers years, AV Preeminent and Acadiana Profile 2025:** taken from the client
  brief. Recognition is shown typographically. The supplied AAML logo is the only official
  mark used; no other badges are recreated.
- **Photography:** all portraits are client-supplied, cropped and lightly tone-corrected. No
  location photograph is used. A photograph that is genuinely of downtown Lafayette can be
  added to the location band later.
- **Domain:** canonical URLs use the demo deployment, `https://high-net-worth.vercel.app`.
  Update `site` in `astro.config.mjs` once the client's own domain is confirmed.
- **Copy:** biography and practice copy are drafted for the client's review. Nothing in them
  is presented as a quotation from Helen.
- **Disclaimers:** the footer and form disclaimers should be reviewed against the Louisiana
  Rules of Professional Conduct (advertising) before launch.
