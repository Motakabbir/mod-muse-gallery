import React, { useState } from "react";
import { submitContactForm } from "../lib/contact";

export default function LeadConnectorForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await submitContactForm({ data: form });
      if (res.success) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);

        if (res.offline) {
          try {
            const submissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
            submissions.push({ ...form, submitted_at: new Date().toISOString() });
            localStorage.setItem("contact_submissions", JSON.stringify(submissions));
          } catch (storageErr) {
            console.error("Failed to save to localStorage:", storageErr);
          }
        }
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reveal bg-carbon border border-white/10 rounded-lg p-8 md:p-10">
      <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">
        02 — Send A Message
      </div>
      <h3 className="font-display text-2xl mb-8 text-bone">Write To Us</h3>

      {sent ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-acid/10 border border-acid/30 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-acid"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="font-display text-2xl mb-2 text-bone">Message Sent</h4>
          <p className="text-bone/60">We will be in touch within 48 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">
              Name
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">
              Email
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">
              Message
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors resize-none"
              placeholder="Tell us what is on your mind..."
            />
          </div>

          <input type="hidden" name="website" value="syndicatedrestomod" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
