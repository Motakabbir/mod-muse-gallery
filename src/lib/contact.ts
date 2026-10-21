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

    try {
      const token = await getCmsAuthToken();

      // Submit Contact Form to Vision API contacts endpoint
      // Vision API stores to DB, sends confirmation/admin emails, and pushes to GoHighLevel CRM form mMBQhJ1CQZbDVHHlPuXm
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
      console.warn("Failed to send contact via Vision API:", err.message);
    }

    return { success: true, offline: true };
  });
