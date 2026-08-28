import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

export const getDirectLines = async () => {
  return [
    { label: "General Inquiries", email: "hello@syndicatedrestomod.com" },
    { label: "Syndicate Applications", email: "hello@syndicatedrestomod.com " },
    { label: "Press & Media", email: "press@syndicatedrestomod.com" },
    { label: "Partnerships", email: "partners@syndicatedrestomod.com" },
  ];
};

export const getWorkshopAddress = async () => {
  return [
    "Syndicate Build Facility",
    "Unit 7, Silverstone Park",
    "Northamptonshire, NN12 8TN",
    "United Kingdom"
  ];
};

export const submitContactForm = createServerFn({ method: 'POST' })
  .inputValidator(
    z.object({
      name: z.string(),
      email: z.string().email(),
      subject: z.string(),
      message: z.string(),
    })
  )
  .handler(async ({ data }) => {
    console.info("Server received contact submission:", data);
    
    const nameParts = data.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

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

      // 2. Submit Contact Form
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: data.email,
          phone: "",
          message: data.message,
          subject: data.subject || "Contact Form Submission",
          source: "syndicatedrestomod",
        }),
      });

      if (res.ok) {
        console.log("Email successfully sent via Resend.");
        return { success: true, offline: false };
      } else {
        const errText = await res.text();
        console.warn("Vision API returned non-OK status:", res.status, errText);
      }
    } catch (err: any) {
      console.warn("Failed to send contact via Vision API:", err.message);
    }
    
    return { success: true, offline: true };
  });
