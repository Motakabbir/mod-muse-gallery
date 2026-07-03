# Syndicate Project Pages & Dynamic Content Analysis

Based on the React codebase in `/media/dolar/office/projects/syndicate`, here is the breakdown of the current pages and the specific parts within them that are currently hardcoded and should be made dynamic (i.e. fetched from a CMS, Database, or API).

## 1. List of Pages in the Project (`src/routes/`)

The application uses TanStack Router. Here are the core pages:
- `index.tsx` (Home / Landing Page)
- `about.tsx` (About Us)
- `the-build.tsx` (The Build Process)
- `events.tsx` (Syndicate Events)
- `design-gallery.tsx` (Design Gallery)
- `apply.tsx` (Application / Onboarding)
- `contact.tsx` (Contact Us)

---

## 2. Parts That Need to Be Dynamic

Currently, the data powering the user interface is hardcoded as `const` arrays directly inside the page components. For a scalable SaaS/Syndicate platform, these should be moved to a backend database or headless CMS.

### A. Home Page (`index.tsx`)
This page is heavily data-driven but currently relies on hardcoded arrays:
- **`PILLARS` array**: The "Why Syndicate" section (titles, videos, images, body text).
- **`PROCESS` array**: The step-by-step build process.
- **`PARTNERS` array**: The list of build partners (e.g., T3DMC, ASM Auto Recycling, etc.) and their roles.
- **`SYNDICATE_STEPS` array**: The partnership and ownership model steps.
- **`BENEFITS` array**: Ownership benefits (Build Access, Driving Access, etc.).
- **`LIVE_SYNDICATES` array**: The most critical data block! The active syndicates (e.g., Vision148 Sierra Cosworth, Mercedes SLS AMG), their allocations, stats, and potential returns. This MUST be dynamic.
- **`RECENTLY_FUNDED` array**: Past successful syndicates.
- **`EVENTS` array**: Upcoming member invitations and events (Secret Meet 2026, etc.).

### B. About Page (`about.tsx`)
- **Principles/Values**: The "What Drives Us" section (Analog Soul, Engineering Integrity, etc.) is a hardcoded array.
- **Leadership/Team**: The "The Architects" section (Marcus Hale, Simon Kiero Watson, etc.) is hardcoded. This should ideally be pulled from a `Team Members` API endpoint.
- **Hero & Mission Text**: The narrative text could be managed via a CMS to allow marketing teams to update the copy without code changes.

### C. Events Page (`events.tsx`)
- **Event Listings**: Like the Home page, the events shown here should be pulled dynamically from an `Events` database table, allowing administrators to add dates, descriptions, and tag them as "INVITE ONLY".

### D. The Build Page (`the-build.tsx`)
- **Build Phases & Updates**: This page likely tracks the progress of a car build. The timeline, status updates, and associated images/videos should be fully dynamic, driven by a backend "Build Progress" module.

### E. Design Gallery (`design-gallery.tsx`)
- **Gallery Images & Meta**: The image assets, alt texts, and gallery categories should be managed via a backend media manager rather than imported statically as assets.

### F. Global Elements
- **Navigation & Footer (`src/components/site`)**: Social links, contact emails (`hello@syndicatedrestomod.com`), and dynamic menu items (if new pages are added via CMS) should be configurable.

## Recommended Next Steps
1. **Create API Endpoints**: Set up backend routes (likely in your Laravel/SaaS backend) to serve `Live Syndicates`, `Events`, `Partners`, and `Team Members`.
2. **Implement Data Fetching**: Use TanStack Query (React Query) or `loader` functions in TanStack Router to fetch this data before rendering the pages.
3. **Replace Static Arrays**: Strip out the `const` arrays in the `.tsx` files and map over the API responses instead.
