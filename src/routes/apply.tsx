import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, useReveal, PageHero } from "@/components/site";
import heroVideo from "../assets/video/hero-001.mp4";
import heroPoster from "../assets/image/posters/hero-001-poster.webp";

import { getApplySteps } from "../lib/apply";
import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";
import LeadConnectorWaitlistForm from "../components/LeadConnectorWaitlistForm";

export const Route = createFileRoute("/apply")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("apply", {
      title: "Join Waitlist | Syndicate",
      description:
        "Join the waitlist for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available.",
      og_title: "Join Waitlist | Syndicate",
      og_description: "Join the waitlist for the limited Syndicate RS500 build.",
    });
    const stepsPromise = getApplySteps();
    const [seo, steps] = await Promise.all([seoPromise, stepsPromise]);
    return { seo, steps };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(
      loaderData?.seo || {
        title: "Join Waitlist | Syndicate",
        description:
          "Join the waitlist for a syndicate allocation in the Syndicate Ford Sierra Cosworth RS500 restomod build. Limited positions available.",
        og_title: "Join Waitlist | Syndicate",
        og_description: "Join the waitlist for the limited Syndicate RS500 build.",
      },
    ),
  }),
  component: ApplyPage,
});

// STEPS moved to API/Loader

function ApplyPage() {
  useReveal();
  const { steps } = Route.useLoaderData();
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const scrollToTarget = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const timer = setTimeout(scrollToTarget, 100);
    window.addEventListener("hashchange", scrollToTarget);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToTarget);
    };
  }, []);

  return (
    <main className="bg-ink text-bone overflow-x-hidden min-h-screen">
      <Nav />
      <PageHero
        kicker="Waitlist Registration"
        title={
          <>
            Join <span className="text-acid">Waitlist.</span>
          </>
        }
        subtitle="A fixed number of syndicate positions. Strict allocation structure. Join the waitlist to receive priority access before allocations open."
        video={heroVideo}
        poster={heroPoster}
      >
        <div className="mt-8">
          <a href="#waitlist-form" className="btn-acid inline-flex items-center gap-2">
            Go to Waitlist Form ↓
          </a>
        </div>
      </PageHero>

      <section className="py-24 px-6 bg-carbon border-b border-white/10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-12 reveal">
            How It Works
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {steps.map((s) => (
              <div key={s.n} className="reveal bg-carbon p-8 hover:bg-steel transition-colors">
                <div className="font-display text-5xl text-acid mb-6">{s.n}</div>
                <h3 className="font-display text-xl mb-3">{s.t}</h3>
                <p className="text-bone/60 text-sm leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist-form" className="py-32 px-6 scroll-mt-20">
        <div id="waitlist" className="scroll-mt-24" />
        <div id="form" className="scroll-mt-24" />
        <div className="mx-auto max-w-3xl">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal">
            Waitlist Form
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl leading-[1] mb-4">
            Join <span className="text-acid">Waitlist.</span>
          </h2>
          <p className="reveal text-bone/60 text-lg leading-relaxed mb-12">
            Register to join our waitlist. Allocations will be limited but let us know your
            allocation preference.
          </p>

          <LeadConnectorWaitlistForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
