import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, useReveal } from "../components/site";
import { useState } from "react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & FAQ — Vision148 | Syndicated Restomod Build" },
      { name: "description", content: "Upcoming Vision148 syndicate events, track days, build open-days, and answers to frequently asked questions." },
      { property: "og:title", content: "Events & FAQ — Vision148 | Syndicated Restomod Build" },
      { property: "og:description", content: "Upcoming Vision148 syndicate events, track days, build open-days, and answers to frequently asked questions." },
    ],
  }),
  component: EventsPage,
});

const EVENTS = [
  {
    date: "MAR 2026",
    title: "Build Facility Open Day",
    desc: "Exclusive behind-the-scenes access for confirmed syndicate members. See the chassis in progress, meet the fabrication team, and review panel fitment firsthand.",
    location: "Silverstone Park, UK",
    status: "Members Only",
  },
  {
    date: "JUN 2026",
    title: "Goodwood Members' Meeting",
    desc: "Vision148 will have a dedicated paddock presence. Syndicate members receive hospitality passes and grid walk access.",
    location: "Goodwood Circuit, UK",
    status: "Public + Members",
  },
  {
    date: "SEP 2026",
    title: "Design Review Weekend",
    desc: "Final design sign-off event. Members vote on remaining specification choices: wheel finish, interior stitch colour, and livery details.",
    location: "Silverstone Park, UK",
    status: "Members Only",
  },
  {
    date: "NOV 2026",
    title: "Track Day — Anglesey Circuit",
    desc: "First shakedown and member track experience. Professional instruction provided. Photography and videography included.",
    location: "Anglesey, Wales",
    status: "Members Only",
  },
];

const FAQS = [
  {
    q: "What is a syndicated restomod?",
    a: "Instead of one owner funding an entire build, a small group of enthusiasts co-invest in a single vehicle. Each member gets allocated drive time, event access, and equity in the appreciating asset — all managed by Vision148.",
  },
  {
    q: "How much does allocation cost?",
    a: "Syndicate slots start at £48,000 per share for the Vision148 RS500 build. This covers your proportional build cost, insurance, storage, maintenance, and event access for the first 24 months.",
  },
  {
    q: "How many shares are available?",
    a: "Each build is strictly capped at 12 shares. This ensures meaningful access for every member while preserving the exclusivity that makes these cars special.",
  },
  {
    q: "Can I sell my share?",
    a: "Yes. Shares can be transferred to approved buyers through Vision148 at any time. We handle the valuation, documentation, and introduction to the buyer pool.",
  },
  {
    q: "What happens if the build goes over budget?",
    a: "Build costs are fixed at the point of allocation. Any overruns are absorbed by Vision148 and our partner network. Your share price will not change post-commitment.",
  },
  {
    q: "Do I get to drive the car?",
    a: "Absolutely. Every member receives an annual allocation of drive days, track sessions, and road tours. The schedule is coordinated democratically through the member portal.",
  },
  {
    q: "Where is the car stored?",
    a: "Vehicles are stored in a climate-controlled secure facility at Silverstone Park, maintained by our in-house team. Members can arrange visits by appointment.",
  },
  {
    q: "How do I apply?",
    a: "Submit an application through our Apply page. We review every application personally and aim to respond within 7 business days. A brief phone call is part of the process.",
  },
];

function EventsPage() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-ink text-bone">
      <Nav />
      <PageHero
        kicker="Community"
        title={
          <>
            Events & <span className="text-acid">Answers</span>.
          </>
        }
        subtitle="Join us at the track, in the workshop, and everywhere in between. Every question answered below."
        image="/src/assets/pillar-experience.jpg"
      />

      {/* Events */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">01 — Calendar</div>
              <h2 className="font-display text-4xl md:text-5xl">Upcoming Events</h2>
            </div>
            <p className="text-bone/60 max-w-md">
              From build open-days to track experiences, the syndicate calendar is designed to maximise your connection to the car and the community.
            </p>
          </div>

          <div className="space-y-6">
            {EVENTS.map((ev, i) => (
              <div
                key={i}
                className="reveal bg-carbon border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-acid/30 transition-colors duration-500"
              >
                <div className="md:w-32 shrink-0">
                  <div className="font-mono text-xs text-acid uppercase tracking-widest">{ev.date}</div>
                  <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                    <span className="font-mono text-[10px] text-bone/60 uppercase tracking-wider">{ev.status}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl mb-2">{ev.title}</h3>
                  <p className="text-bone/60 leading-relaxed">{ev.desc}</p>
                </div>
                <div className="md:w-48 shrink-0 text-right">
                  <div className="font-mono text-xs text-bone/40 uppercase tracking-widest">{ev.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 grain relative">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">02 — FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className={`reveal bg-carbon border rounded-lg transition-colors duration-300 ${openFaq === i ? "border-acid/40" : "border-white/10 hover:border-white/20"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-display text-lg pr-4">{faq.q}</span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-acid border-acid text-ink rotate-45" : "text-bone/60"}`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-bone/70 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-white/10">
        <div className="reveal mx-auto max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl leading-[0.95] mb-6">
            Still Have <span className="text-acid">Questions</span>?
          </h2>
          <p className="text-bone/70 text-lg mb-10 max-w-xl mx-auto">
            We are happy to talk through anything that is not covered above. No obligation, no pressure.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 border-2 border-acid text-acid text-sm uppercase tracking-[0.25em] font-semibold rounded-full hover:bg-acid hover:text-ink transition-all duration-300"
          >
            Contact The Team
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
