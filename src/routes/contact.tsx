import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, PageHero, useReveal } from "../components/site";
import { useState } from "react";
import heroVideo from "../assets/video/hero-002.mp4";
import hero002Poster from "../assets/image/posters/hero-002-poster.webp";

import { getDirectLines, getWorkshopAddress } from "../lib/contact";
import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";
import LeadConnectorForm from "../components/LeadConnectorForm";
import LeadConnectorBooking from "../components/LeadConnectorBooking";

export const Route = createFileRoute("/contact")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("contact", {
      title: "Contact — Syndicate | Syndicated Restomod Build",
      description:
        "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      og_title: "Contact — Syndicate | Syndicated Restomod Build",
      og_description:
        "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
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
    meta: mapSeoToMeta(
      loaderData?.seo || {
        title: "Contact — Syndicate | Syndicated Restomod Build",
        description:
          "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
        og_title: "Contact — Syndicate | Syndicated Restomod Build",
        og_description:
          "Get in touch with the Syndicate team. Press, partnership, and syndicate inquiries welcome.",
      },
    ),
  }),
  component: ContactPage,
});

function ContactPage() {
  useReveal();
  const { directLines, workshopAddress } = Route.useLoaderData();

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
        poster={hero002Poster}
      />

      {/* Contact Grid */}
      <section className="py-24 px-6 border-b border-white/10">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16">
          {/* Info */}
          <div className="reveal">
            <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">
              01 — Direct Lines
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
              Reach The Team
            </h2>
            <div className="space-y-8">
              {directLines.map((line, i) => (
                <div key={i}>
                  <div className="font-mono text-xs text-bone/40 uppercase tracking-widest mb-2">
                    {line.label}
                  </div>
                  <a
                    href={`mailto:${line.email}`}
                    className="text-lg text-bone hover:text-acid transition-colors"
                  >
                    {line.email}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="font-mono text-xs text-bone/40 uppercase tracking-widest mb-3">
                Workshop
              </div>
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
          <LeadConnectorForm />
        </div>
      </section>

      {/* Booking Section */}
      <LeadConnectorBooking />

      {/* FAQ Preview */}
      <section className="py-24 px-6 grain relative">
        <div className="mx-auto max-w-7xl text-center reveal">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">
            Questions?
          </div>
          <h2 className="font-display text-4xl md:text-5xl mb-6">Common Questions</h2>
          <p className="text-bone/70 text-lg max-w-2xl mx-auto mb-10">
            Everything you need to know about joining the Syndicate syndicate, from allocation to
            ownership structure.
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
