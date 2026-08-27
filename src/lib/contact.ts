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
        return { success: true, offline: false };
      }
    } catch (err: any) {
      console.warn("Failed to send email via Resend:", err.message);
    }
    
    return { success: true, offline: true };
  });
