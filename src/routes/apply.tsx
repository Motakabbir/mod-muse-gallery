import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Nav, Footer, useReveal, PageHero } from "@/components/site";
import heroImg from "../assets/rs500-hero.jpg";
import heroVideo from "../assets/video.mp4";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply for Allocation | Syndicate" },
      { name: "description", content: "Apply for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available." },
      { property: "og:title", content: "Apply for Allocation | Syndicate" },
      { property: "og:description", content: "Limited syndicate positions for the Syndicate RS500 build." },
    ],
  }),
  component: ApplyPage,
});

const STEPS = [
  { n: "01", t: "Register Interest", b: "Submit the form below. We respond within 48 hours." },
  { n: "02", t: "Discovery Call", b: "A 30-min call to walk through the syndicate model and answer questions." },
  { n: "03", t: "Allocation Offer", b: "Receive a formal allocation document outlining cost, structure, and timeline." },
  { n: "04", t: "Secure Position", b: "Sign and fund. You're in. Welcome to Syndicate." },
];

function ApplyPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="bg-ink text-bone overflow-x-hidden min-h-screen">
      <Nav />
      <PageHero
        kicker="Syndicate Availability"
        title={<>Apply for <span className="text-acid">Allocation.</span></>}
        subtitle="A fixed number of syndicate positions. Strict allocation structure. Early applicants prioritised. Once filled, the opportunity closes."
        video={heroVideo}
      />

      <section className="py-24 px-6 bg-carbon border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-12 reveal">How It Works</div>
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {STEPS.map((s) => (
              <div key={s.n} className="reveal bg-carbon p-8 hover:bg-steel transition-colors">
                <div className="font-display text-5xl text-acid mb-6">{s.n}</div>
                <h3 className="font-display text-xl mb-3">{s.t}</h3>
                <p className="text-bone/60 text-sm leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="mx-auto max-w-3xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal">Application Form</div>
          <h2 className="reveal font-display text-4xl md:text-5xl leading-[1] mb-12">
            Register Your <span className="text-acid">Interest.</span>
          </h2>

          {submitted ? (
            <div className="reveal border border-acid bg-acid/5 p-10 text-center">
              <div className="font-display text-3xl text-acid mb-4">Application Received</div>
              <p className="text-bone/70 mb-8">
                Thank you. A member of the syndicate team will be in touch within 48 hours.
              </p>
              <Link to="/" className="inline-block px-8 py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid transition-all">
                Back to Home
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="reveal space-y-6 border border-white/10 bg-carbon p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="First Name" name="firstName" required />
                <Field label="Last Name" name="lastName" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Country of Residence" name="country" />
              <div>
                <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
                  Allocation Interest
                </label>
                <select
                  required
                  name="allocation"
                  className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors"
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
                  className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors resize-none"
                  placeholder="Your background, what drew you to Syndicate, any questions…"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-acid text-ink font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-bone transition-colors"
              >
                Submit Application
              </button>
              <p className="text-bone/40 text-xs font-mono uppercase tracking-[0.2em] text-center">
                Your information is handled confidentially.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-xs tracking-[0.3em] uppercase text-bone/60 mb-2">
        {label} {required && <span className="text-acid">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-ink border border-white/10 px-4 py-3 text-bone focus:border-acid outline-none transition-colors"
      />
    </div>
  );
}