import React, { useEffect } from "react";

const CALENDAR_ID = "1GagFz0R8XwQeBU6FEe2";

export default function LeadConnectorBooking() {
  useEffect(() => {
    const src = "https://link.msgsndr.com/js/form_embed.js";

    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-24 px-6 border-b border-white/10 bg-ink relative">
      <div className="mx-auto max-w-5xl">
        <div className="text-center reveal mb-12">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">
            03 — Book An Appointment
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-bone mb-4">
            Schedule A Consultation
          </h2>
          <p className="text-bone/70 text-base md:text-lg max-w-2xl mx-auto">
            Choose a convenient date and time to meet the Syndicate team at our build facility.
          </p>
        </div>

        <div className="reveal bg-carbon border border-white/10 rounded-2xl overflow-hidden p-2 md:p-6 shadow-2xl">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`}
            id={`${CALENDAR_ID}_booking`}
            title="Schedule a Consultation"
            style={{
              width: "100%",
              minHeight: "780px",
              border: "none",
              borderRadius: "12px",
              background: "transparent",
            }}
            scrolling="no"
            loading="lazy"
            allow="payment"
          />
        </div>
      </div>
    </section>
  );
}
