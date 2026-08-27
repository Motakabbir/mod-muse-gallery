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
          subject: data.subject ? `Syndicate Contact Form: ${data.subject}` : "New Contact Form Submission",
          html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message.replace(/\n/g, '<br/>')}</p>
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
