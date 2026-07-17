import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, MapPin, Users, ShieldAlert, ChevronLeft, ChevronRight } from "lucide-react";
import videoPillarThree from "../assets/Hero_002.mp4";

import { getPageEvents, getFaqs } from "../lib/events";
import { useLoaderData, createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer, PageHero, useReveal } from "../components/site";

import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";

export const Route = createFileRoute("/events")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("events", {
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
      og_title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      og_description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
    });
    const eventsPromise = getPageEvents();
    const faqsPromise = getFaqs();

    const [seo, events, faqs] = await Promise.all([
      seoPromise,
      eventsPromise,
      faqsPromise,
    ]);

    return { seo, events, faqs };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
      og_title: "Events & FAQ — Syndicate | Syndicated Restomod Build",
      og_description: "Upcoming Syndicate syndicate events, track days, build open-days, and answers to frequently asked questions.",
    }),
  }),
  component: EventsPage,
});

// EVENTS moved to API/Loader
// FAQS moved to API/Loader

function EventsPage() {
  useReveal();
  const { events, faqs } = Route.useLoaderData();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedEventIdx, setSelectedEventIdx] = useState<number | null>(null);

  useEffect(() => {
    if (selectedEventIdx === null) return;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEventIdx(null);
      if (e.key === "ArrowRight") {
        setSelectedEventIdx((prev) => (prev !== null && prev < events.length - 1 ? prev + 1 : 0));
      }
      if (e.key === "ArrowLeft") {
        setSelectedEventIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : events.length - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEventIdx, events.length]);

  const currentEvent = selectedEventIdx !== null ? events[selectedEventIdx] : null;

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
        video={videoPillarThree}
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
            {events.map((ev, i) => (
              <div key={i} className="reveal">
                <div
                  onClick={() => setSelectedEventIdx(i)}
                  className="bg-carbon border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 hover:border-acid/40 hover:bg-carbon/80 cursor-pointer transition-all duration-500 group"
                >
                  <div className="md:w-32 shrink-0">
                    <div className="font-mono text-xs text-acid uppercase tracking-widest">{ev.date}</div>
                    <div className="mt-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      <span className="h-1.5 w-1.5 rounded-full bg-acid" />
                      <span className="font-mono text-[10px] text-bone/60 uppercase tracking-wider">{ev.status}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-acid transition-colors">{ev.title}</h3>
                    <p className="text-bone/60 leading-relaxed">{ev.desc}</p>
                  </div>
                  <div className="md:w-48 shrink-0 md:text-right flex flex-col md:items-end justify-center">
                    <div className="font-mono text-xs text-bone/40 uppercase tracking-widest mb-2">{ev.location}</div>
                    <span className="text-xs uppercase tracking-wider text-acid opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details Lightbox Modal */}
      <AnimatePresence>
        {selectedEventIdx !== null && currentEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-ink/95 backdrop-blur-2xl"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedEventIdx(null)} />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-carbon border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 grid md:grid-cols-12"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEventIdx(null)}
                aria-label="Close details"
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full border border-white/10 bg-carbon/80 text-bone hover:text-acid hover:border-acid/30 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Summary & Meta */}
              <div className="md:col-span-5 p-8 bg-ink/40 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between max-h-[40vh] md:max-h-[85vh] overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-acid/10 border border-acid/20 text-acid font-mono text-[10px] uppercase tracking-wider mb-4">
                      {currentEvent.status}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-gradient-bone leading-tight">
                      {currentEvent.title}
                    </h3>
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-6">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-acid shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40">Date & Time</div>
                        <div className="text-sm font-semibold text-bone">{currentEvent.date}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-acid shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40">Location</div>
                        <div className="text-sm font-semibold text-bone">{currentEvent.location}</div>
                      </div>
                    </div>

                    {currentEvent.capacity && (
                      <div className="flex items-start gap-3">
                        <Users className="w-4 h-4 text-acid shrink-0 mt-0.5" />
                        <div>
                          <div className="font-mono text-[9px] uppercase tracking-widest text-bone/40">Attendance</div>
                          <div className="text-sm text-bone/80">{currentEvent.capacity}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Left/Right Navigation inside modal */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-bone/40 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <button
                    onClick={() => setSelectedEventIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : events.length - 1))}
                    className="hover:text-acid flex items-center gap-1 transition-colors"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" /> Prev
                  </button>
                  <span>{selectedEventIdx + 1} / {events.length}</span>
                  <button
                    onClick={() => setSelectedEventIdx((prev) => (prev !== null && prev < events.length - 1 ? prev + 1 : 0))}
                    className="hover:text-acid flex items-center gap-1 transition-colors"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Description & Schedule */}
              <div className="md:col-span-7 p-8 flex flex-col justify-between max-h-[50vh] md:max-h-[85vh] overflow-y-auto">
                <div className="space-y-8">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-3">About the Event</h4>
                    <p className="text-bone/70 text-sm md:text-base leading-relaxed">
                      {currentEvent.longDesc || currentEvent.desc}
                    </p>
                  </div>

                  {currentEvent.schedule && currentEvent.schedule.length > 0 && (
                    <div>
                      <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-4">Event Schedule</h4>
                      <ol className="relative border-l border-white/10 ml-2 space-y-4">
                        {currentEvent.schedule.map((item: string, idx: number) => {
                          const [time, ...rest] = item.split(" - ");
                          const text = rest.join(" - ");
                          return (
                            <li key={idx} className="relative pl-6">
                              <span className="absolute left-[-4.5px] top-[6px] h-2 w-2 rounded-full bg-acid" />
                              <div className="font-mono text-[10px] text-acid uppercase tracking-wider mb-0.5">{time}</div>
                              <p className="text-xs text-bone/70">{text}</p>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  )}

                  {currentEvent.requirements && (
                    <div className="bg-ink/30 border border-white/5 p-4 flex gap-3 items-start">
                      <ShieldAlert className="w-4 h-4 text-acid shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-mono text-[10px] uppercase tracking-wider text-acid mb-1">Key Requirements</h5>
                        <p className="text-xs text-bone/60 leading-relaxed">{currentEvent.requirements}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                  <Link
                    to="/apply"
                    onClick={() => setSelectedEventIdx(null)}
                    className="px-6 py-2.5 bg-acid text-ink font-semibold uppercase tracking-widest text-[10px] rounded-full hover:bg-bone transition-colors"
                  >
                    Request Invite →
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ */}
      <section className="py-24 px-6 grain relative">
        <div className="mx-auto max-w-4xl">
          <div className="reveal text-center mb-16">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">02 — FAQ</div>
            <h2 className="font-display text-4xl md:text-5xl">Common Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal">
                <div
                  className={`bg-carbon border rounded-lg transition-colors duration-300 ${openFaq === i ? "border-acid/40" : "border-white/10 hover:border-white/20"}`}
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
