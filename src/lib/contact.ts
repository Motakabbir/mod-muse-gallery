import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCmsAuthToken } from "./cms-auth";

export const getDirectLines = async () => {
  return [{ label: "General Inquiries", email: "hello@syndicatedrestomod.com" }];
};

export const getWorkshopAddress = async () => {
  return [
    "Syndicate Build Facility",
    "Unit 7, Silverstone Park",
    "Northamptonshire, NN12 8TN",
    "United Kingdom",
  ];
};

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      name: z.string(),
      email: z.string().email(),
      phone: z.string().optional(),
      subject: z.string().optional(),
      message: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    console.info("Server received contact submission:", data);

    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const apiUrl =
      (typeof process !== "undefined" && process.env?.VITE_API_URL) ||
      (typeof import.meta !== "undefined" && (import.meta as any)?.env?.VITE_API_URL) ||
      "https://app-api.syndicatedrestomod.com/api/v1/cms";

    const webhookUrl =
      (typeof process !== "undefined" && process.env?.LEADCONNECTOR_CONTACT_WEBHOOK_URL) ||
      "https://services.leadconnectorhq.com/hooks/PyZUPXw40Pe4lKnp8nfa/webhook-trigger/86fc6989-e868-4ed1-8371-ffc216148ffb";

    let visionSuccess = false;
    let ghlResponse: any = null;

    try {
      const token = await getCmsAuthToken();

      // Submit Contact Form to Vision API contacts endpoint
      // Vision API stores to DB, sends confirmation/admin emails, and pushes to GoHighLevel CRM via webhook-trigger/86fc6989-e868-4ed1-8371-ffc216148ffb
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: data.email,
          phone: data.phone || "",
          message: data.message || "",
          subject: data.subject || "Contact Form Submission",
          source: "syndicatedrestomod",
          form_type: "contact_us",
          form_id: "mMBQhJ1CQZbDVHHlPuXm",
          logo: "public/assets/logo.jpeg",
        }),
      });

      if (res.ok) {
        const resJson = await res.json();
        console.log("Vision API processed contact message:", resJson);
        visionSuccess = true;
        ghlResponse = resJson?.data?.ghl_response || null;
        return {
          success: true,
          offline: false,
          ghl_response: ghlResponse,
          data: resJson?.data,
        };
      } else {
        const errText = await res.text();
        console.warn("Vision API returned non-OK status:", res.status, errText);
      }
    } catch (err: any) {
      console.warn("Failed to send contact via Vision API:", err.message);
    }

    // Direct fallback to GoHighLevel webhook if Vision API was not reachable or failed
    if (!visionSuccess && webhookUrl) {
      try {
        const ghlRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            full_name: data.name.trim(),
            email: data.email,
            phone: data.phone || "",
            message: data.message || "",
            subject: data.subject || "Contact Form Submission",
            form_type: "contact_us",
            form_id: "mMBQhJ1CQZbDVHHlPuXm",
            formId: "mMBQhJ1CQZbDVHHlPuXm",
            location_id: "PyZUPXw40Pe4lKnp8nfa",
            source: "syndicatedrestomod",
            submitted_at: new Date().toISOString(),
            tags: ["syndicate-contact", "website-lead"],
          }),
        });

        if (ghlRes.ok) {
          const ghlJson = await ghlRes.json().catch(() => null);
          console.log("Direct GoHighLevel contact webhook delivered:", ghlJson);
          return {
            success: true,
            offline: true,
            ghl_response: ghlJson,
          };
        }
      } catch (ghlErr: any) {
        console.warn("Direct GoHighLevel contact webhook fallback failed:", ghlErr.message);
      }
    }

    return { success: true, offline: true };
  });
