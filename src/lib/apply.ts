import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

export const getApplySteps = async () => {
  return [
    { n: "01", t: "Register Interest", b: "Submit the form below. We respond within 48 hours." },
    { n: "02", t: "Discovery Call", b: "A 30-min call to walk through the syndicate model and answer questions." },
    { n: "03", t: "Allocation Offer", b: "Receive a formal allocation document outlining cost, structure, and timeline." },
    { n: "04", t: "Secure Position", b: "Sign and fund. You're in. Welcome to Syndicate." },
  ];
};

export const submitApplyForm = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      firstName: z.string(),
      lastName: z.string(),
      email: z.string().email(),
      phone: z.string().optional(),
      country: z.string().optional(),
      allocation: z.string(),
      message: z.string().optional(),
    })
  )
  .handler(async ({ data }) => {
    console.info("Server received application submission:", data);
    
    const formattedMessage = `Allocation Interest: ${data.allocation}
Country of Residence: ${data.country || "N/A"}

Message:
${data.message || "N/A"}`;

    const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";

    try {
      // 1. Authenticate with CMS
      const loginRes = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email: process.env.CMS_AUTH_EMAIL || "",
          password: process.env.CMS_AUTH_PASSWORD || "",
        }),
      });

      let token = "";
      if (loginRes.ok) {
        const loginJson = await loginRes.json();
        if ((loginJson.status || loginJson.success) && loginJson.data && loginJson.data.token) {
          token = loginJson.data.token;
        }
      } else {
        console.warn("Failed to login to Vision API:", loginRes.status, await loginRes.text());
      }

      // 2. Submit Application Form
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || "",
          message: formattedMessage,
          subject: "Register Your Interest",
          source: "syndicatedrestomod",
        }),
      });

      if (res.ok) {
        return { success: true, offline: false };
      } else {
        const errText = await res.text();
        console.warn("Vision API returned non-OK status:", res.status, errText);
      }
    } catch (err: any) {
      console.warn("Failed to send application via Vision API:", err.message);
    }
    
    return { success: true, offline: true };
  });
