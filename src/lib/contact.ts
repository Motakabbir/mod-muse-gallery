import { createServerFn } from '@tanstack/react-start';
import { z } from 'zod';

export const getDirectLines = async () => {
  return [
    { label: "General Inquiries", email: "hello@synmod.build" },
    { label: "Syndicate Applications", email: "apply@synmod.build" },
    { label: "Press & Media", email: "press@synmod.build" },
    { label: "Partnerships", email: "partners@synmod.build" },
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
    
    const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
    try {
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          first_name: data.name.split(" ")[0] || "",
          last_name: data.name.split(" ").slice(1).join(" ") || "",
          email: data.email,
          phone: "N/A",
          message: `Subject: ${data.subject}\n\n${data.message}`,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        return { success: true, offline: false };
      }
    } catch (err: any) {
      console.warn("Backend API not reachable, falling back to mock/offline success:", err.message);
    }
    
    return { success: true, offline: true };
  });
