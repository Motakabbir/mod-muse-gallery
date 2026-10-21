import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getCmsAuthToken } from "./cms-auth";

export const getApplySteps = async () => {
  return [
    { n: "01", t: "Register Interest", b: "Submit the form below. We respond within 48 hours." },
    {
      n: "02",
      t: "Discovery Call",
      b: "A 30-min call to walk through the syndicate model and answer questions.",
    },
    {
      n: "03",
      t: "Allocation Offer",
      b: "Receive a formal allocation document outlining cost, structure, and timeline.",
    },
    { n: "04", t: "Secure Position", b: "Sign and fund. You're in. Welcome to Syndicate." },
  ];
};

export const submitApplyForm = createServerFn({ method: "POST" })
  .inputValidator(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string().optional(),
      country: z.string().optional(),
      allocation: z.string(),
      message: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    console.info("Server received application submission:", data);

    const formattedMessage = `Allocation Interest: ${data.allocation}
Country of Residence: ${data.country || "N/A"}

Message:
${data.message || "N/A"}`;

    const apiUrl =
      (typeof process !== "undefined" && process.env?.VITE_API_URL) ||
      (typeof import.meta !== "undefined" && (import.meta as any)?.env?.VITE_API_URL) ||
      "https://app-api.syndicatedrestomod.com/api/v1/cms";

    const webhookUrl =
      (typeof process !== "undefined" && process.env?.LEADCONNECTOR_WAITLIST_WEBHOOK_URL) ||
      "https://services.leadconnectorhq.com/hooks/PyZUPXw40Pe4lKnp8nfa/webhook-trigger/cee14e59-01e0-48d8-8cdd-05e5272f120c";

    let visionSuccess = false;
    let ghlResponse: any = null;

    try {
      const token = await getCmsAuthToken();

      // Submit Waitlist Application to Vision API contacts endpoint
      // The Vision API backend stores to DB and delivers to GoHighLevel CRM via webhook-trigger/cee14e59-01e0-48d8-8cdd-05e5272f120c
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || "",
          country: data.country || "",
          allocation: data.allocation,
          message: formattedMessage,
          subject: "Waitlist Registration",
          source: "syndicatedrestomod",
          form_type: "join_waitlist",
          form_id: "Lonj9phXn94KhmHMY7a8",
          logo: "public/assets/logo.jpeg",
        }),
      });

      if (res.ok) {
        const resJson = await res.json();
        console.log("Vision API processed application:", resJson);
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
            first_name: data.firstName,
            last_name: data.lastName,
            full_name: `${data.firstName} ${data.lastName}`.trim(),
            email: data.email,
            phone: data.phone || "",
            country: data.country || "",
            allocation: data.allocation,
            allocation_interest: data.allocation,
            BwFb3QA5JETKNo1vobQc: data.allocation,
            message: formattedMessage,
            tell_us_about_you: data.message || "",
            qU2G8QyA7QAhCXzf3Hms: data.message || "",
            subject: "Waitlist Registration",
            form_type: "join_waitlist",
            form_id: "Lonj9phXn94KhmHMY7a8",
            formId: "Lonj9phXn94KhmHMY7a8",
            location_id: "PyZUPXw40Pe4lKnp8nfa",
            source: "syndicatedrestomod",
            submitted_at: new Date().toISOString(),
            tags: ["syndicate-waitlist", "waitlist"],
          }),
        });

        if (ghlRes.ok) {
          const ghlJson = await ghlRes.json().catch(() => null);
          console.log("Direct GoHighLevel webhook delivered:", ghlJson);
          return {
            success: true,
            offline: true,
            ghl_response: ghlJson,
          };
        }
      } catch (ghlErr: any) {
        console.warn("Direct GoHighLevel webhook fallback failed:", ghlErr.message);
      }
    }

    return { success: true, offline: true };
  });
