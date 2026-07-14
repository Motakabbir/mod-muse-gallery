# Syndicate Pages Dynamic Schema

This document outlines the required schema fields (text, booleans, images, videos, arrays) to make all pages (including the home page and sub-pages) in the Syndicate platform dynamic. It acts as a blueprint for the CMS or backend database tables.

---

## 1. Home Page (`index.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String, potentially containing HTML/spans)
- `subtitle` (Text)
- `stats` (Array of Objects - *currently hardcoded*):
  - `k` (String, Label e.g., "Car")
  - `v` (String, Value e.g., "#148 / 500")

### Intro Section
- `kicker_text` (String)
- `title` (String)
- `paragraph_1` (Text)
- `paragraph_2` (Text)

### Stats Section
- `kicker_text` (String)
- `stats` (Array of Objects - *currently hardcoded*):
  - `n` (String/Number)
  - `label` (String)

### Pillars Section
- `kicker_text` (String)
- `title` (String)
- `pillars` (Array of Objects via `getPillars`):
  - `n` (String)
  - `title` (String)
  - `video` (Video URL, optional)
  - `img` (Image URL)
  - `body` (Text)

### The Car Section
- `video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `highlights` (Array of Strings - *currently hardcoded*)

### Live Syndicates Section
- `kicker_text` (String)
- `title` (String)
- `syndicates` (Array of Objects via `getLiveSyndicates`):
  - `title` (String)
  - `img` (Image URL)
  - `allocation` (String)
  - `stats` (String)
  - `return` (String)
  - `isPlaceholder` (Boolean)
  - `waitlist` (Boolean)

### Partnership Section
- `kicker_text` (String)
- `title` (String)
- `steps` (Array of Objects via `getSyndicateSteps`):
  - `n` (Number)
  - `title` (String)
  - `body` (Text)

### Build Process Section
- `kicker_text` (String)
- `title` (String)
- `process` (Array of Objects via `getProcess`):
  - `n` (String)
  - `title` (String)
  - `items` (Array of Strings)

### Events Section (Home)
- `kicker_text` (String)
- `title` (String)
- `events` (Array of Objects via `getEvents`):
  - `type` (String)
  - `title` (String)
  - `tag` (String)
  - `description` (Text, optional)
  - `date` (String)

### Partners Section
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `partners` (Array of Objects via `getPartners`):
  - `name` (String)
  - `role` (String)

### Benefits Section
- `kicker_text` (String)
- `title` (String)
- `benefits` (Array of Objects via `getBenefits`):
  - `icon` (String)
  - `title` (String)
  - `items` (Array of Strings)

### Value Proposition Section
- `kicker_text` (String)
- `title` (String)
- `quote` (Text)
- `values` (Array of Objects - *currently hardcoded*):
  - `t` (String, Title)
  - `b` (String, Body)

### Apply CTA Section
- `kicker_text` (String)
- `title` (String)
- `bullets` (Array of Strings - *currently hardcoded*)
- `note` (String)

---

## 2. About Page (`about.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String, potentially containing HTML/spans)
- `subtitle` (Text)

### Mission Section
- `kicker_text` (String, e.g., *"01 — Mission"*)
- `title` (String)
- `paragraph_1` (Text)
- `paragraph_2` (Text)
- `detail_image_url` (Image URL)

### Principles Section
- `kicker_text` (String)
- `title` (String)
- `principles` (Array of Objects via `getPrinciples`):
  - `num` (String, e.g., *"01"*)
  - `title` (String, e.g., *"Analog Soul"*)
  - `text` (Text)

### Leadership (Architects) Section
- `kicker_text` (String)
- `title` (String)
- `architects` (Array of Objects via `getArchitects`):
  - `name` (String)
  - `role` (String)
  - `bio` (Text)
  - `img` (Image URL - optional, uses initials fallback if empty)

### CTA Section
- `title` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 3. Events Page (`events.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `subtitle` (Text)

### Upcoming Events Calendar
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `events` (Array of Objects via `getPageEvents`):
  - `date` (String, e.g., *"MAR 2026"*)
  - `status` (String, e.g., *"Members Only"*)
  - `title` (String)
  - `desc` (Text, short description)
  - `longDesc` (Text, long description for details modal)
  - `location` (String, e.g., *"Silverstone Park, UK"*)
  - `capacity` (String, optional)
  - `schedule` (Array of Strings, e.g., *"10:00 - Arrival"*)
  - `requirements` (Text, optional)

### FAQ Section
- `kicker_text` (String)
- `title` (String)
- `faqs` (Array of Objects via `getFaqs`):
  - `q` (String, question)
  - `a` (Text, answer)

### CTA Section
- `title` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 4. Design Gallery Page (`design-gallery.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `subtitle` (Text)

### Gallery Grid
- `items` (Array of Objects via `getGalleryItems`):
  - `img` (Image URL, optional)
  - `video` (Video URL, optional)
  - `t` (String, Title)
  - `tag` (String, e.g., *"Render"*)
  - `desc` (Text, description for details modal)
  - `span` (String, optional layout hints e.g., *"md:col-span-2 md:row-span-2"*)
  - `details` (Array of Objects, optional):
    - `label` (String)
    - `value` (String)

### CTA Section
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `primary_cta_label` (String)
- `primary_cta_url` (String)
- `secondary_cta_label` (String)
- `secondary_cta_url` (String)

---

## 5. The Build Page (`the-build.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `subtitle` (Text)

### Build Phases Section
- `phases` (Array of Objects via `getPhases`):
  - `n` (String, Phase Number, e.g., *"01"*)
  - `t` (String, Title)
  - `img` (Image URL, optional)
  - `video` (Video URL, optional)
  - `body` (Text)
  - `bullets` (Array of Strings)
  - `partner` (String)

### Specification Section
- `kicker_text` (String)
- `title` (String)
- `specs` (Array of Objects via `getSpecs`):
  - `l` (String, Label e.g., *"Engine"*)
  - `v` (String, Value e.g., *"550+ bhp"*)

### CTA Section
- `title` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 6. Apply Page (`apply.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `subtitle` (Text)

### How It Works Section
- `kicker_text` (String)
- `steps` (Array of Objects via `getApplySteps`):
  - `n` (String, Step Number)
  - `t` (String, Title)
  - `b` (Text, Body/Description)

### Application Form Section
- `kicker_text` (String)
- `title` (String)
- `allocation_interest_options` (Array of Strings - for the dropdown)
- `success_message_title` (String)
- `success_message_body` (Text)

---

## 7. Contact Page (`contact.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title` (String)
- `subtitle` (Text)

### Direct Lines Section
- `kicker_text` (String)
- `title` (String)
- `directLines` (Array of Objects via `getDirectLines`):
  - `label` (String, e.g., *"General Inquiries"*)
  - `email` (String)
- `workshop_kicker` (String)
- `workshopAddress` (Array of Strings via `getWorkshopAddress`, representing multi-line address)

### Contact Form 
- `kicker_text` (String)
- `title` (String)
- `subject_dropdown_options` (Array of Strings)
- `success_message_title` (String)
- `success_message_body` (Text)

### FAQ Preview Section
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)
