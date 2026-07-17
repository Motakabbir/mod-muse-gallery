import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHero, useReveal } from "../components/site";
import { useState } from "react";
import heroVideo from "../assets/Hero_002.mp4";

import { getDirectLines, getWorkshopAddress, submitContactForm } from "../lib/contact";
import { useLoaderData } from "@tanstack/react-router";
import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";

export const Route = createFileRoute("/contact")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("contact", {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
    });
    const directLinesPromise = getDirectLines();
    const workshopAddressPromise = getWorkshopAddress();
    
    const [seo, directLines, workshopAddress] = await Promise.all([
      seoPromise,
      directLinesPromise,
      workshopAddressPromise,
    ]);
    
    return { seo, directLines, workshopAddress };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description: "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const { directLines, workshopAddress } = Route.useLoaderData();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await submitContactForm({ data: form });
      if (res.success) {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        
        if (res.offline) {
          try {
            const submissions = JSON.parse(localStorage.getItem("contact_submissions") || "[]");
            submissions.push({ ...form, submitted_at: new Date().toISOString() });
            localStorage.setItem("contact_submissions", JSON.stringify(submissions));
          } catch (storageErr) {
            console.error("Failed to save to localStorage:", storageErr);
          }
        }
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      // Fallback
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Nav />
      <PageHero
        kicker="Get In Touch"
        title={
          <>
            Let&apos;s <span className="text-acid">Talk</span>.
          </>
        }
        subtitle="Press inquiries, partnership proposals, or questions about the syndicate — we read every message personally."
        video={heroVideo}
      />

      {/* Contact Grid */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="reveal">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">01 — Direct Lines</div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">Reach The Team</h2>
            <div className="space-y-8">
              {directLines.map((line, i) => (
                <div key={i}>
                  <div className="font-mono text-xs text-bone/40 uppercase tracking-widest mb-2">{line.label}</div>
                  <a href={`mailto:${line.email}`} className="text-lg text-bone hover:text-acid transition-colors">{line.email}</a>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="font-mono text-xs text-bone/40 uppercase tracking-widest mb-3">Workshop</div>
              <p className="text-bone/70 leading-relaxed">
                {workshopAddress.map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="reveal bg-carbon border border-white/10 rounded-lg p-8 md:p-10">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">02 — Send A Message</div>
            <h3 className="font-display text-2xl mb-8">Write To Us</h3>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-acid/10 border border-acid/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-acid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl mb-2">Message Sent</h4>
                <p className="text-bone/60">We will be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">Email</label>
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
                  <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">Subject</label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone focus:outline-none focus:border-acid/50 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="syndicate">Syndicate Application Question</option>
                    <option value="press">Press & Media</option>
                    <option value="partnership">Partnership</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs text-bone/50 uppercase tracking-widest mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-steel border border-white/10 rounded-lg px-4 py-3 text-bone placeholder:text-bone/30 focus:outline-none focus:border-acid/50 transition-colors resize-none"
                    placeholder="Tell us what is on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-6 grain relative">
        <div className="mx-auto max-w-7xl text-center reveal">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">Questions?</div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Common Questions</h2>
          <p className="text-bone/70 text-lg max-w-2xl mx-auto mb-10">
            Everything you need to know about joining the Syndicate syndicate, from allocation to ownership structure.
          </p>
          <a
            href="/events"
            className="inline-block px-10 py-4 border-2 border-white/20 text-bone text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:border-acid hover:text-acid transition-all duration-300"
          >
            View FAQ & Events
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
