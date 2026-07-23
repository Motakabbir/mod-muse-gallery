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
    
    const apiUrl = process.env.VITE_API_URL || "http://localhost:8000/api/v1/cms";
    try {
      const res = await fetch(`${apiUrl}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone || "N/A",
          message: `Country: ${data.country || "N/A"}\nAllocation Interest: ${data.allocation}\n\n${data.message || ""}`,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        return { success: true, offline: false };
      }
    } catch (err: any) {
      console.warn("Backend API not reachable for applications, falling back to mock/offline success:", err.message);
    }
    
    return { success: true, offline: true };
  });
