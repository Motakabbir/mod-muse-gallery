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

    try {
      const token = await getCmsAuthToken();

      // Submit Brochure Request to Vision API contacts endpoint
      // Vision API stores to DB, sends brochure email to user + admin notification, and forwards to GHL CRM (form sHZZBfFbBERdaWNPvBSB)
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
        return {
          success: true,
          offline: false,
          ghl_response: resJson?.data?.ghl_response || null,
          data: resJson?.data,
        };
      } else {
        const errText = await res.text();
        console.warn("Vision API returned non-OK status:", res.status, errText);
      }
    } catch (err: any) {
      console.warn("Failed to communicate with Vision API:", err.message);
    }

    return { success: true, offline: true };
  });
