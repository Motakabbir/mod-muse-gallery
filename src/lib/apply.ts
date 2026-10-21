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

    try {
      const token = await getCmsAuthToken();

      // Submit Waitlist Application to Vision API contacts endpoint
      // The Vision API backend stores to DB, sends confirmation/admin emails, and pushes to GoHighLevel CRM
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
