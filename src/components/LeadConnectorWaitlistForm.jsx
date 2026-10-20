import React, { useState } from "react";
import { submitApplyForm } from "../lib/apply";
import { Link } from "@tanstack/react-router";

export default function LeadConnectorWaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone") || "",
      country: formData.get("country") || "",
      allocation: formData.get("allocation"),
      message: formData.get("message") || "",
    };

    try {
      const res = await submitApplyForm({ data });
      if (res.success) {
        setSubmitted(true);

        if (res.offline) {
          try {
            const submissions = JSON.parse(localStorage.getItem("apply_submissions") || "[]");
            submissions.push({ ...data, submitted_at: new Date().toISOString() });
            localStorage.setItem("apply_submissions", JSON.stringify(submissions));
          } catch (storageErr) {
            console.error("Failed to save application to localStorage:", storageErr);
          }
        }
      }
    } catch (err) {
      console.error("Failed to submit waitlist application form:", err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="reveal border border-acid bg-acid/5 p-10 text-center rounded-lg">
        <div className="font-display text-3xl text-acid mb-4">
          Waitlist Registration Received
        </div>
        <p className="text-bone/70 mb-8">
          Thank you. A member of the syndicate team will be in touch within 48 hours.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid transition-all"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="reveal space-y-6 border border-white/10 bg-carbon p-8 md:p-12 rounded-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
            First Name <span className="text-acid">*</span>
          </label>
          <input
            required
            name="firstName"
            className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
            placeholder="First name"
          />
        </div>
        <div>
          <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
            Last Name <span className="text-acid">*</span>
          </label>
          <input
            required
            name="lastName"
            className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
            placeholder="Last name"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
            Email <span className="text-acid">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
          Country of Residence
        </label>
        <input
          name="country"
          className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
          placeholder="e.g. United Kingdom, United States"
        />
      </div>

      <div>
        <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
          Allocation Interest <span className="text-acid">*</span>
        </label>
        <select
          required
          name="allocation"
          className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors rounded-lg"
        >
          <option value="">Select an option…</option>
          <option>Single allocation</option>
          <option>Multiple allocations</option>
          <option>Lead syndicate position</option>
          <option>Just exploring</option>
        </select>
      </div>

      <div>
        <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
          Tell Us About You
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors resize-none rounded-lg"
          placeholder="Your background, what drew you to Syndicate, any questions…"
        />
      </div>
      <input type="hidden" name="website" value="syndicatedrestomod" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </button>

      <p className="text-bone/40 text-xs font-mono uppercase tracking-[0.2em] text-center">
        Your information is handled confidentially.
      </p>
    </form>
  );
}
