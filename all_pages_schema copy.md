# Syndicate Sub-Pages Dynamic Schema

This document outlines the required schema fields (text, booleans, images, videos, arrays) to make all secondary pages in the Syndicate platform dynamic. It acts as a blueprint for the CMS or backend database tables.

---

## 1. About Page (`about.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### Mission Section
- `kicker_text` (String, e.g., *"01 — Mission"*)
- `title_part_1` (String)
- `title_part_2` (String)
- `paragraph_1` (Text)
- `paragraph_2` (Text)
- `detail_image_url` (Image URL)

### Principles Section
- `kicker_text` (String)
- `title` (String)
- `principles` (Array of Objects):
  - `number` (String, e.g., *"01"*)
  - `title` (String, e.g., *"Analog Soul"*)
  - `text` (Text)

### Leadership (Architects) Section
- `kicker_text` (String)
- `title` (String)
- `architects` (Array of Objects):
  - `name` (String)
  - `role` (String)
  - `bio` (Text)
  - `avatar_url` (Image URL - *Currently uses initials fallback*)

### CTA Section
- `title_part_1` (String)
- `title_part_2` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 2. Events Page (`events.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### Upcoming Events Calendar
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `events` (Array of Objects):
  - `date_string` (String, e.g., *"MAR 2026"*)
  - `access_status` (String, e.g., *"Members Only"*)
  - `title` (String)
  - `description` (Text)
  - `location` (String, e.g., *"Silverstone Park, UK"*)

### FAQ Section
- `kicker_text` (String)
- `title` (String)
- `faqs` (Array of Objects):
  - `question` (String)
  - `answer` (Text)

### CTA Section
- `title_part_1` (String)
- `title_part_2` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 3. Design Gallery Page (`design-gallery.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### Gallery Grid
- `gallery_items` (Array of Objects):
  - `image_url` (Image URL)
  - `title` (String, e.g., *"RS500 Reimagined"*)
  - `tag` (String, e.g., *"Render"*)
  - `span_classes` (String, e.g., *"md:col-span-2 md:row-span-2"* - Optional layout hints)

### CTA Section
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `description` (Text)
- `primary_cta_label` (String)
- `primary_cta_url` (String)
- `secondary_cta_label` (String)
- `secondary_cta_url` (String)

---

## 4. The Build Page (`the-build.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### Build Phases Section
- `phases` (Array of Objects):
  - `phase_number` (String, e.g., *"01"*)
  - `title` (String, e.g., *"Acquisition & Strip"*)
  - `image_url` (Image URL)
  - `body_text` (Text)
  - `bullets` (Array of Strings)
  - `partner_name` (String, e.g., *"ASM Auto Recycling"*)

### Specification Section
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `specs` (Array of Objects):
  - `label` (String, e.g., *"Engine"*)
  - `value` (String, e.g., *"550+ bhp"*)

### CTA Section
- `title_part_1` (String)
- `title_part_2` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)

---

## 5. Apply Page (`apply.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### How It Works Section
- `kicker_text` (String)
- `steps` (Array of Objects):
  - `step_number` (String, e.g., *"01"*)
  - `title` (String, e.g., *"Register Interest"*)
  - `description` (Text)

### Form Configuration (Optional Backend Management)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `allocation_interest_options` (Array of Strings - for the dropdown)
- `success_message_title` (String, e.g., *"Application Received"*)
- `success_message_body` (Text)

---

## 6. Contact Page (`contact.tsx`)

### Hero Section
- `hero_video_url` (Video URL)
- `kicker_text` (String)
- `title_part_1` (String)
- `title_part_2` (String)
- `subtitle` (Text)

### Direct Lines Section
- `kicker_text` (String)
- `title` (String)
- `direct_lines` (Array of Objects):
  - `department_name` (String, e.g., *"General Inquiries"*)
  - `email_address` (String)
- `workshop_kicker` (String)
- `workshop_address_text` (Text, supporting multi-line)

### Contact Form 
- `kicker_text` (String)
- `title` (String)
- `subject_dropdown_options` (Array of Strings)

### FAQ Preview Section
- `kicker_text` (String)
- `title` (String)
- `description` (Text)
- `cta_label` (String)
- `cta_url` (String)
