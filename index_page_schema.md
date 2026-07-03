# Section-Wise Dynamic Schema (`index.tsx`)

To make the landing page 100% dynamic, your backend (CMS or Laravel API) needs to expose the following fields grouped by section. This breakdown includes text fields, arrays, images, and videos.

---

## 1. Hero Section
The top banner with the background video.
- `hero_video` (Video / MP4 URL)
- `kicker_text` (String, e.g., *"Syndicate · Now Forming"*)
- `title_part_1` (String, e.g., *"Be Part of the"*)
- `title_part_2` (String, e.g., *"Creation of an Icon"*)
- `subtitle` (Text, e.g., *"Syndicated Restomod Builds..."*)
- `cta_primary_label` (String, e.g., *"Apply for Allocation"*)
- `cta_primary_url` (String, e.g., *"/apply"*)
- `cta_secondary_label` (String, e.g., *"Explore Syndicate"*)
- `cta_secondary_url` (String, e.g., *"#intro"*)
- `hero_stats` (Array of Objects):
  - `label` (String, e.g., *"Car"*)
  - `value` (String, e.g., *"#148 / 500"*)

---

## 2. Intro Section
The text-heavy introduction below the hero.
- `kicker_text` (String, e.g., *"● Not Just Ownership"*)
- `title` (String, e.g., *"Not Just Ownership. Participation."*)
- `paragraph_1` (Text)
- `paragraph_2` (Text)
- `paragraph_3` (Text)
- `highlight_quote` (String, e.g., *"From strip-down to final drive — you are part of it."*)

---

## 3. Platform Stats Section
The 5 numbered statistics blocks.
- `powered_by_text` (String, e.g., *"Powered By TheCarCrowd"*)
- `stats_items` (Array of Objects):
  - `value` (String/Number, e.g., *"110"*)
  - `label` (String, e.g., *"CURATED ASSETS"*)

---

## 4. Three Pillars Section
- `kicker_text` (String, e.g., *"Why Syndicate"*)
- `title` (String, e.g., *"Built on three pillars."*)
- `pillars` (Array of Objects - exactly 3 items):
  - `number` (String, e.g., *"01"*)
  - `title` (String, e.g., *"One of One Build"*)
  - `media_type` (Enum: `video` | `image`)
  - `video_url` (Video URL - Optional)
  - `image_url` (Image URL - Fallback)
  - `description` (Text)

---

## 5. The Car Section
- `video_url` (Video / MP4 URL)
- `video_caption` (String, e.g., *"RS500 Reimagined"*)
- `kicker_text` (String, e.g., *"The Car"*)
- `title_part_1` (String)
- `title_part_2` (String)
- `description` (Text)
- `highlights` (Array of Strings, e.g., *["One-of-one build", "Engineering-led"]*)

---

## 6. Live Syndicates Section (Already stubbed in loader)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `syndicates` (Array of Objects):
  - `title` (String)
  - `image_url` (Image URL)
  - `allocation_price` (String)
  - `stats_text` (String, e.g., *"25 Allocations • 10 remaining"*)
  - `potential_return` (String)
  - `is_assessing` (Boolean / Placeholder flag)
  - `has_waitlist` (Boolean)
- `briefing_document_url` (File / PDF URL for the download CTA)

---

## 7. Recently Funded Section
- `kicker_text` (String)
- `title` (String)
- `funded_projects` (Array of Objects):
  - `title` (String)
  - `image_url` (Image URL)
  - `funded_date` (String, e.g., *"Dec 25"*)
  - `funded_value` (String, e.g., *"£82,000"*)
  - `member_count` (String, e.g., *"14"*)

---

## 8. Partnership / Syndicate Steps Section
- `kicker_text` (String)
- `title` (String)
- `steps` (Array of Objects):
  - `step_number` (Integer)
  - `title` (String)
  - `description` (Text)
- `footer_collab_text_1` (String, e.g., *"Powered by Syndi"*)
- `footer_collab_text_2` (String, e.g., *"In collaboration with The Car Crowd"*)

---

## 9. Build Process Section
- `background_video_url` (Video URL for the subtle background)
- `kicker_text` (String)
- `title` (String)
- `phases` (Array of Objects):
  - `phase_number` (String, e.g., *"01"*)
  - `title` (String, e.g., *"Acquisition & Strip"*)
  - `bullet_points` (Array of Strings)
- `footer_text` (String)

---

## 10. Events Section
- `kicker_text` (String)
- `title` (String)
- `events` (Array of Objects):
  - `event_type` (String, e.g., *"Syndicate Member Invitation"*)
  - `tag` (String, e.g., *"INVITE ONLY"*)
  - `title` (String)
  - `date` (String, e.g., *"TBA"*)
  - `description` (Text)

---

## 11. Partners Section
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `partners` (Array of Objects):
  - `name` (String, e.g., *"T3DMC"*)
  - `role` (String, e.g., *"3D Scanning & Digital Twin"*)

---

## 12. Benefits Section
- `kicker_text` (String)
- `title` (String)
- `benefits` (Array of Objects):
  - `icon_symbol` (String/Character, e.g., *"⬡"*)
  - `title` (String)
  - `items` (Array of Strings)
- `footer_text_1` (String)
- `footer_text_2` (String)

---

## 13. Value Proposition Section
- `background_image_url` (Image URL)
- `kicker_text` (String)
- `title` (String)
- `quote` (String)
- `propositions` (Array of Objects):
  - `title` (String, e.g., *"Shared Cost"*)
  - `description` (String, e.g., *"Of a high-value build"*)

---

## 14. Apply Section (Footer CTA)
- `kicker_text` (String)
- `title` (String)
- `bullet_points` (Array of Strings)
- `urgency_text` (String)
- `cta_email_address` (String, e.g., *"hello@syndicatedrestomod.com"*)
