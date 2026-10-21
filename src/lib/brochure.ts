import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCmsAuthToken } from "./cms-auth";

export const submitBrochureForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      email: z.string().email(),
      name: z.string().optional(),
      phone: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    console.info("Server received brochure download request:", data);

    const apiUrl =
      (typeof process !== "undefined" && process.env?.VITE_API_URL) ||
      (typeof import.meta !== "undefined" && (import.meta as any)?.env?.VITE_API_URL) ||
      "https://app-api.syndicatedrestomod.com/api/v1/cms";

    const webhookUrl =
      (typeof process !== "undefined" && process.env?.LEADCONNECTOR_BROCHURE_WEBHOOK_URL) ||
      "https://services.leadconnectorhq.com/hooks/PyZUPXw40Pe4lKnp8nfa/webhook-trigger/a9855c5a-39c2-4823-aedf-20434e67e6e8";

    let visionSuccess = false;
    let ghlResponse: any = null;

    try {
      const token = await getCmsAuthToken();

      // Submit Brochure Request to Vision API contacts endpoint
      // Vision API stores to DB, sends brochure email to user + admin notification, and forwards to GHL CRM via webhook-trigger/a9855c5a-39c2-4823-aedf-20434e67e6e8
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          first_name: data.name || "Brochure Requester",
          last_name: "",
          email: data.email,
          phone: data.phone || "",
          subject: "Membership Brochure Download",
          message: "Visitor requested Syndicate Membership Brochure download from homepage.",
          source: "syndicatedrestomod",
          form_type: "membership_brochure",
          form_id: "sHZZBfFbBERdaWNPvBSB",
          logo: "public/assets/logo.jpeg",
        }),
      });

      if (res.ok) {
        const resJson = await res.json();
        console.log("Vision API processed brochure request:", resJson);
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
      console.warn("Failed to communicate with Vision API:", err.message);
    }

    // Direct fallback to GoHighLevel webhook if Vision API was not reachable or failed
    if (!visionSuccess && webhookUrl) {
      try {
        const ghlRes = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: data.name || "Brochure Requester",
            last_name: "",
            full_name: data.name || "Brochure Requester",
            email: data.email,
            phone: data.phone || "",
            message: "Visitor requested Syndicate Membership Brochure download from homepage.",
            subject: "Membership Brochure Download",
            form_type: "membership_brochure",
            form_id: "sHZZBfFbBERdaWNPvBSB",
            formId: "sHZZBfFbBERdaWNPvBSB",
            location_id: "PyZUPXw40Pe4lKnp8nfa",
            source: "syndicatedrestomod",
            submitted_at: new Date().toISOString(),
            tags: ["syndicate-brochure", "brochure-downloaded"],
          }),
        });

        if (ghlRes.ok) {
          const ghlJson = await ghlRes.json().catch(() => null);
          console.log("Direct GoHighLevel brochure webhook delivered:", ghlJson);
          return {
            success: true,
            offline: true,
            ghl_response: ghlJson,
          };
        }
      } catch (ghlErr: any) {
        console.warn("Direct GoHighLevel brochure webhook fallback failed:", ghlErr.message);
      }
    }

    return { success: true, offline: true };
  });
