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
    
    if (!process.env.RESEND_API_KEY) {
      console.error("Error: RESEND_API_KEY environment variable is not defined!");
      return { success: true, offline: true };
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Syndicate Forms <forms@syndicatedrestomod.com>",
          to: ["hello@syndicatedrestomod.com"],
          reply_to: data.email,
          subject: `New Syndicate Application from ${data.firstName} ${data.lastName}`,
          html: `
            <h3>New Syndicate Application</h3>
            <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
            <p><strong>Country:</strong> ${data.country || "N/A"}</p>
            <p><strong>Allocation Interest:</strong> ${data.allocation}</p>
            <p><strong>Message:</strong></p>
            <p>${(data.message || "N/A").replace(/\n/g, '<br/>')}</p>
          `,
        }),
      });

      if (res.ok) {
        console.log("Email successfully sent via Resend.");
        return { success: true, offline: false };
      } else {
        const errText = await res.text();
        console.error(`Resend API returned error status ${res.status}:`, errText);
      }
    } catch (err: any) {
      console.error("Failed to send email via Resend (network error):", err.message);
    }
    
    return { success: true, offline: true };
  });
