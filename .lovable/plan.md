
# Syndicate — Syndicated Restomod Replica

A cinematic, dark-luxury single-page site replicating syndicatedrestomod.vercel.app, with richer visuals (AI-generated car imagery, hero video) and a sharpened modern design system.

## Stack
- Scaffold a new `web_app:Syndicate` (TanStack Start + Tailwind, default Lovable template).
- No backend needed (static marketing site). Forms link to a simple "Apply" section.

## Design system
- Palette: matte black `#0a0a0a`, carbon gray `#1a1a1a`, off-white `#f5f5f5`, signature yellow accent `#facc15`.
- Typography: bold condensed display (Bebas Neue / Archivo Black style) for headlines, Inter for body.
- Sharp corners, thin yellow rules, generous whitespace, subtle grain texture, scroll-reveal motion via Motion/React.
- Sticky transparent nav that gains background on scroll.

## Sections (single landing page)
1. **Hero** — Full-screen looping background video of a carbon-fiber RS500 panel, animated kicker `● Syndicate`, headline "Be Part of the Creation of an Icon", subline, primary "Apply for Allocation" + ghost "Explore Syndicate" CTAs.
2. **Intro** — "Not Just Ownership. Participation." with large editorial copy.
3. **Three Pillars** — 3-card grid (One-of-One Build / World-Class Partners / Exclusive Access) with generated images and pillar numbers.
4. **The Car** — Split layout, large RS500 reimagined image + key highlights list (1-of-1, engineering-led, heritage, road/track).
5. **Partnership Model** — 4-step horizontal timeline (Syndicate Formation → Build → Experience → Exit) with "Powered by Syndi / The Car Crowd" lockup.
6. **Build Process** — 4 numbered phases (Acquisition & Strip / Design & Engineering / Manufacturing / Finishing) with progress connectors.
7. **Partners** — 8 specialist partner cards (T3DMC, ASM, Coventry Metalcraft, DMC Silverstone, BAMD, MAHLE, Cornerstone, HGL/VenueServe) in a clean monochrome grid.
8. **Syndicate Benefits** — 4 icon cards (Build Access / Driving / Events / Knowledge).
9. **Value Proposition** — Pull-quote + 4 benefit tiles (Shared Cost, Exclusive Asset, Experiential, Potential Upside).
10. **Limited Allocation / CTA** — Closing band with Apply CTA.
11. **Footer** — Logo, tagline, minimal links.

## Assets
- Logo: square `SYN MOD BUILD` mark generated as a transparent PNG.
- Hero video: generate a 5s 1080p clip of slow camera glide over carbon-fiber RS500 hood/headlight.
- Images (premium/standard quality):
  - One-of-One build (workshop close-up)
  - Build partners (clean industrial shot)
  - Exclusive experience (track/event ambiance)
  - RS500 Reimagined hero (3/4 studio render)
  - Carbon detail textures for section dividers
- All images saved to `src/assets/`, imported as ES modules.

## Motion & polish
- Section fade/slide-in on scroll (Motion for React, restrained).
- Subtle parallax on hero video.
- Yellow underline hover on nav + CTA pill animation.
- Number counters on pillars and process steps animate in.

## Out of scope
- Real "Apply" form submission (CTA scrolls to a placeholder section).
- Additional subpages (`/apply`, `/the-build`, `/design-gallery`) — collapsed into anchors on the landing page.

Ready to build on approval.
