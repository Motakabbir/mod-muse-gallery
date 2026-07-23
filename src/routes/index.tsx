import { createFileRoute } from "@tanstack/react-router";
import carbonTexture from "../assets/carbon-texture.jpg";
import heroVideo from "../assets/Hero_001.mp4";
import videoCarSection from "../assets/RS500_REIMAGINED_MORPHING.mp4";
import { Link } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/site";


import {
  getLiveSyndicates,
  getEvents,
  getRecentlyFunded,
  getPillars,
  getProcess,
  getPartners,
  getSyndicateSteps,
  getBenefits
} from "../lib/syndicates";
import { useLoaderData } from "@tanstack/react-router";

import { fetchSeoMetadata, mapSeoToMeta } from "../lib/utils";

export const Route = createFileRoute("/")({
  loader: async () => {
    const seoPromise = fetchSeoMetadata("home", {
      title: "Syndicate | Syndicated Restomod Build",
      description: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open.",
      og_title: "Syndicate | Syndicated Restomod Build",
      og_description: "Syndicated restomod builds powered by TheCarCrowd.",
    });

    const syndicatesPromise = getLiveSyndicates();
    const eventsPromise = getEvents();
    const recentlyFundedPromise = getRecentlyFunded();
    const pillarsPromise = getPillars();
    const processPromise = getProcess();
    const partnersPromise = getPartners();
    const syndicateStepsPromise = getSyndicateSteps();
    const benefitsPromise = getBenefits();

    const [
      seo,
      syndicates,
      events,
      recentlyFunded,
      pillars,
      process,
      partners,
      syndicateSteps,
      benefits
    ] = await Promise.all([
      seoPromise,
      syndicatesPromise,
      eventsPromise,
      recentlyFundedPromise,
      pillarsPromise,
      processPromise,
      partnersPromise,
      syndicateStepsPromise,
      benefitsPromise
    ]);

    return {
      seo,
      syndicates,
      events,
      recentlyFunded,
      pillars,
      process,
      partners,
      syndicateSteps,
      benefits
    };
  },
  head: ({ loaderData }) => ({
    meta: mapSeoToMeta(loaderData?.seo || {
      title: "Syndicate | Syndicated Restomod Build",
      description: "Be part of the creation of an icon. A syndicated restomod build of the Ford Sierra Cosworth RS500, engineered in the open.",
      og_title: "Syndicate | Syndicated Restomod Build",
      og_description: "Syndicated restomod builds powered by TheCarCrowd.",
    }),
  }),
  component: Index,
});

// Dynamic arrays moved to API/Loader

// LIVE_SYNDICATES moved to API/Loader

// RECENTLY_FUNDED moved to API/Loader

// EVENTS moved to API/Loader



function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain flex items-center justify-center py-24 md:pt-28 md:pb-20">
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />
      <div className="absolute inset-0 noise-bg" />
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-acid/15 blur-[140px] float-slow" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-acid/10 blur-[140px] float-slow" style={{ animationDelay: "2s" }} />
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 glass-acid rounded-full px-5 py-2 mb-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <span className="h-1.5 w-1.5 rounded-full bg-acid animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-acid">Syndicate · Now Forming</span>
        </div>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-6xl animate-in fade-in slide-in-from-bottom duration-1000 delay-100">
          <span className="text-gradient-bone">Be Part of the</span>
          <br />
          <span className="text-gradient-acid">Creation of an Icon</span>
        </h1>
        <p className="mt-8 text-bone/70 text-lg md:text-xl max-w-xl animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
          Syndicated Restomod Builds — engineered in the open, owned together, driven for life.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
          <Link to="/apply" className="btn-acid">Apply for Allocation →</Link>
          <a href="#intro" className="btn-ghost">Explore Syndicate</a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl animate-in fade-in duration-1000 delay-500">
          {[
            { k: "Car", v: "#148 / 500" },
            { k: "Allocations", v: "Limited" },
            { k: "Status", v: "Forming" },
          ].map((s) => (
            <div key={s.k} className="text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40 mb-1">{s.k}</div>
              <div className="font-display text-sm md:text-base text-acid">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3 font-mono text-[10px] text-bone/40 tracking-[0.3em] uppercase">
        <span className="h-px w-8 bg-acid/60" />Scroll<span className="h-px w-8 bg-acid/60" />
      </div>
    </section>
  );
}

function SectionLabel({ kicker, title }: { kicker: string; title: React.ReactNode }) {
  return (
    <div className="reveal mb-16">
      <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">{kicker}</div>
      <h2 className="font-display text-4xl md:text-6xl leading-[1] max-w-4xl">{title}</h2>
    </div>
  );
}

function Intro() {
  return (
    <section id="intro" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel kicker="● Not Just Ownership" title={<>Not Just Ownership.<br /><span className="text-bone/40">Participation.</span></>} />
        <div className="grid md:grid-cols-2 gap-16">
          <div className="reveal space-y-6 text-bone/70 text-lg leading-relaxed">
            <p>This is not a traditional restoration. This is not passive investment.</p>
            <p>This is a <span className="text-acid">syndicated restomod build</span> where participants join the creation and future of a unique automotive asset.</p>
          </div>
          <div className="reveal space-y-6 text-bone/60 leading-relaxed">
            <p>
              Syndicate members support the project from the earliest stage — funding the development of a one-of-one car,
              staying engaged with every phase of the build, and ultimately gaining firsthand access to the finished asset
              while sharing in the potential appreciation of its value over time.
            </p>
            <p className="font-display text-bone text-xl pt-4 border-t border-white/10">
              From strip-down to final drive — you are part of it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative py-24 px-6 border-y border-white/5 bg-carbon/50 overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="relative mx-auto max-w-7xl mb-12 text-center reveal">
        <h2 className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-bone/60">
          Powered By <span className="text-bone">TheCarCrowd</span>
        </h2>
      </div>
      <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5">
        {[
          { n: "110", label: "CURATED ASSETS" },
          { n: "6000", label: "REGISTERED MEMBERS" },
          { n: "12.6", label: "ANNUAL RATE OF RETURN SINCE 2021" },
          { n: "2020", label: "FIRST CAR LAUNCHED" },
          { n: "60", label: "YEARS OF EXPERIENCE" },
        ].map((st) => (
          <div key={st.label} className="reveal text-center py-6 px-2 bg-ink/60 hover:bg-ink transition-colors group flex flex-col justify-center items-center">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-acid mb-2 group-hover:scale-105 transition-transform">{st.n}</div>
            <div className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-bone/50 text-center">{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pillars({ pillars }: { pillars: any[] }) {
  return (
    <section className="relative py-32 px-6 bg-carbon overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Why Syndicate" title={<>Built on three pillars.</>} />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <article key={p.n} className="group rounded-2xl border border-white/10 bg-ink overflow-hidden hover-lift">
              <div className="aspect-[4/5] overflow-hidden relative">
                {p.video ? (
                  <video
                    src={p.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                ) : (
                  <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute top-4 left-4 glass-acid rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-bone">PILLAR {p.n}</div>
              </div>
              <div className="p-8 -mt-16 relative">
                <h3 className="font-display text-2xl mb-4 text-gradient-bone">{p.title}</h3>
                <p className="text-bone/60 leading-relaxed">{p.body}</p>
                <div className="mt-6 h-px w-12 bg-acid/60 group-hover:w-24 transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheCar() {
  return (
    <section id="car" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 reveal">
          <div className="relative overflow-hidden border border-white/10 aspect-video">
            <video
              src={videoCarSection}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink to-transparent p-6">
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid">RS500 Reimagined</div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 reveal">
          <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">The Car</div>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] mb-8">
            The Ford Sierra Cosworth RS500. <span className="text-bone/40">Reimagined.</span>
          </h2>
          <p className="text-bone/70 leading-relaxed mb-8">
            One of the most dominant touring cars ever built and a fan-favourite road icon — reinterpreted through modern
            engineering, advanced materials, precision manufacturing, and performance optimisation.
          </p>
          <ul className="space-y-3 border-t border-white/10 pt-6">
            {[
              "One-of-one build",
              "Engineering-led, not cosmetic",
              "Heritage-informed design",
              "Built for road and track",
            ].map((h, i) => (
              <li key={h} className="flex gap-4 items-baseline">
                <span className="font-mono text-xs text-acid">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-bone/90">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function LiveSyndicates({ syndicates }: { syndicates: any[] }) {
  return (
    <section id="syndicates" className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Active Opportunities"
          title={<>Live Syndicates. <span className="text-acid">Open Allocations.</span></>}
        />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {syndicates.map((s) => (
            <article key={s.title} className={`group border ${s.isPlaceholder ? 'border-white/5' : 'border-white/10 hover:border-acid'} bg-ink overflow-hidden transition-all duration-300 flex flex-col justify-between`}>
              <div className="aspect-[16/10] overflow-hidden relative bg-carbon">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className={`h-full w-full transition-transform duration-700 ${s.containImg ? 'object-contain p-6' : 'object-cover'} ${s.isPlaceholder ? 'blur-md opacity-30 grayscale scale-110' : 'group-hover:scale-105'}`}
                />
                {!s.isPlaceholder && (
                  <div className="absolute top-4 right-4 bg-acid text-ink px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-semibold">
                    Live
                  </div>
                )}
                {s.isPlaceholder && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <span className="bg-ink/60 backdrop-blur-md border border-white/10 text-bone/80 px-4 py-2 font-mono text-[10px] tracking-widest uppercase rounded">
                      Assessing for Syndication
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <div className="font-mono text-sm text-acid mb-6">
                    {(Array.isArray(s.allocation) ? s.allocation : [s.allocation]).map((line: string, i: number) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </div>
                  <ul className="space-y-2 text-bone/60 text-sm border-t border-white/5 pt-4">
                    <li>{s.stats}</li>
                    <li className="text-bone/80 font-semibold">{s.return}</li>
                  </ul>
                </div>
                <div className="mt-8">
                  {s.waitlist ? (
                    <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="email"
                        placeholder="Email for waitlist"
                        required
                        className="bg-carbon border border-white/10 px-4 py-3 rounded-full text-bone placeholder:text-bone/40 focus:outline-none focus:border-acid w-full transition-colors text-xs text-center"
                      />
                      <button
                        type="submit"
                        className="w-full text-center py-3 border border-acid text-acid uppercase tracking-widest text-xs rounded-full hover:bg-acid/10 transition-all duration-300 font-semibold"
                      >
                        Join Waitlist
                      </button>
                    </form>
                  ) : (
                    <a
                      href="#apply"
                      className="w-full inline-block text-center py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid hover:bg-acid/5 transition-all duration-300"
                    >
                      Request Details
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Briefing PDF CTA */}
        <div className="mt-20 reveal border border-white/10 bg-ink p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-acid/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="relative z-10 lg:max-w-xl text-center lg:text-left">
            <div className="font-mono text-[10px] text-acid tracking-widest uppercase mb-3">Learn the process</div>
            <h3 className="font-display text-2xl md:text-3xl mb-3">Want the full picture?</h3>
            <p className="text-bone/60 text-sm md:text-base leading-relaxed">
              Download our comprehensive Briefing Document to dive deeper into our acquisition strategy, engineering standards, and projected returns.
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-auto flex-shrink-0">
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="bg-carbon border border-white/20 px-6 py-4 sm:py-3 rounded-full text-bone placeholder:text-bone/40 focus:outline-none focus:border-acid w-full sm:min-w-[280px] transition-colors text-sm"
              />
              <button
                type="submit"
                className="bg-acid text-ink font-semibold uppercase tracking-widest text-xs px-8 py-4 sm:py-3 rounded-full hover:bg-bone transition-colors whitespace-nowrap"
              >
                Get Briefing PDF
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecentlyFunded({ recentlyFunded }: { recentlyFunded: any[] }) {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Track Record"
          title={<>Recently Funded <span className="text-acid">Syndicates.</span></>}
        />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {recentlyFunded.map((rf) => (
            <div key={rf.title} className="group border border-white/10 bg-carbon overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={rf.img}
                  alt={rf.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md text-bone/90 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase">
                  Fully Funded
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-xl mb-4">{rf.title}</h3>
                <ul className="space-y-1.5 text-bone/50 text-xs font-mono">
                  <li>— {rf.date}</li>
                  <li>— {rf.val}</li>
                  <li>— {rf.members}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership({ steps }: { steps: any[] }) {
  return (
    <section className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Partnership"
          title={<>A New Model of <span className="text-acid">Automotive Ownership.</span></>}
        />
        <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {steps.map((s) => (
            <div key={s.n} className="reveal bg-carbon p-8 hover:bg-steel transition-colors">
              <div className="font-display text-6xl text-acid mb-6">{s.n}</div>
              <h3 className="font-display text-xl mb-3">{s.title}</h3>
              <p className="text-bone/60 text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 reveal flex items-center gap-6 justify-center text-bone/50 text-sm">
          <span className="font-mono uppercase tracking-[0.3em] text-xs">Powered by Syndi</span>
          <span className="h-px w-12 bg-white/20" />
          <span className="font-mono uppercase tracking-[0.3em] text-xs">In collaboration with The Car Crowd</span>
        </div>
      </div>
    </section>
  );
}

function BuildProcess({ process }: { process: any[] }) {
  return (
    <section id="build" className="relative py-32 px-6 overflow-hidden">
      <video
        src={videoCarSection}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      <div className="relative mx-auto max-w-7xl">
        <SectionLabel kicker="The Build Process" title={<>Engineered <span className="text-acid">in the open.</span></>} />
        <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((p) => (
            <div key={p.n} className="border-t-2 border-acid pt-6">
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-2">Phase {p.n}</div>
              <h3 className="font-display text-xl mb-6 leading-tight">{p.title}</h3>
              <ul className="space-y-2 text-bone/70 text-sm">
                {p.items.map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-acid">—</span>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="reveal mt-16 text-center font-mono text-xs uppercase tracking-[0.3em] text-bone/50">
          Every stage documented • Every decision visible
        </div>
      </div>
    </section>
  );
}

function Events({ events }: { events: any[] }) {
  return (
    <section id="events" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Syndicate Community"
          title={<>Upcoming Events & <span className="text-acid">Experiences.</span></>}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((e) => (
            <div key={e.title} className="reveal border border-white/10 bg-carbon p-8 flex flex-col justify-between hover:border-acid transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-xs text-acid tracking-widest uppercase">{e.type}</span>
                  <span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded font-mono text-[9px] text-bone/60 tracking-wider">
                    {e.tag}
                  </span>
                </div>
                <h3 className="font-display text-xl mb-2">{e.title}</h3>
                <div className="font-mono text-xs text-bone/40">{e.date}</div>
                {e.description && (
                  <p className="mt-4 text-sm text-bone/60 leading-relaxed">
                    {e.description}
                  </p>
                )}
              </div>
              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-acid hover:text-bone transition-colors"
                >
                  Request Invite <span className="font-sans text-sm">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners({ partners }: { partners: any[] }) {
  return (
    <section id="partners" className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Partners" title={<>Built with <span className="text-acid">specialists.</span></>} />
        <p className="reveal text-bone/70 max-w-2xl mb-16 -mt-8 leading-relaxed">
          The Syndicate RS500 is created with leading experts in coachbuilding, digital engineering, additive manufacturing,
          and specialist car builds.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {partners.map((p, i) => (
            <div key={p.name} className="reveal bg-carbon p-8 hover:bg-steel transition-colors">
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4">
                Partner {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-lg mb-2">{p.name}</h3>
              <p className="text-bone/50 text-sm">{p.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits({ benefits }: { benefits: any[] }) {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Syndicate Benefits" title={<>More than an <span className="text-acid">investment.</span></>} />
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="reveal border border-white/10 p-8 hover:border-acid transition-colors">
              <div className="text-acid text-4xl mb-6 font-mono">{b.icon}</div>
              <h3 className="font-display text-xl mb-4">{b.title}</h3>
              <ul className="space-y-2 text-bone/60 text-sm">
                {b.items.map((i) => <li key={i}>— {i}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="reveal text-center mt-16 font-display text-2xl md:text-3xl text-bone/80">
          This is ownership <span className="text-acid">you can feel.</span>
        </p>
      </div>
    </section>
  );
}

function Value() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <img src={carbonTexture} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="relative mx-auto max-w-6xl">
        <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid mb-4 reveal">The Value Proposition</div>
        <h2 className="reveal font-display text-4xl md:text-6xl leading-[1] mb-10 max-w-3xl">
          A Different Kind of <span className="text-acid">Return.</span>
        </h2>
        <div className="reveal max-w-2xl text-bone/70 leading-relaxed mb-16">
          <p className="border-l-2 border-acid pl-6 italic font-display text-xl text-bone">
            "Financial return is only part of the story."
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "Shared Cost", b: "Of a high-value build" },
            { t: "Exclusive Asset", b: "A one-of-one engineered car" },
            { t: "Experiential", b: "Events, driving, access" },
            { t: "Upside Potential", b: "On future sale" },
          ].map((v) => (
            <div key={v.t} className="reveal bg-ink/60 backdrop-blur border border-white/10 p-6">
              <h4 className="font-display text-lg mb-2 text-acid">{v.t}</h4>
              <p className="text-bone/60 text-sm">{v.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="apply" className="relative py-40 px-6 border-t border-white/10">
      <div className="mx-auto max-w-5xl text-center">
        <div className="reveal font-mono text-xs tracking-[0.3em] uppercase text-acid mb-6">Syndicate Availability</div>
        <h2 className="reveal font-display text-5xl md:text-7xl leading-[0.95] mb-10">
          Limited <span className="text-acid">Allocation.</span>
        </h2>
        <ul className="reveal text-bone/70 space-y-2 mb-12 inline-block text-left">
          <li>— Fixed number of syndicate positions</li>
          <li>— Strict allocation structure</li>
          <li>— Early applicants prioritised</li>
        </ul>
        <p className="reveal text-bone/50 mb-10 font-mono uppercase tracking-[0.25em] text-xs">
          Once filled, the opportunity closes.
        </p>
        <a
          href="mailto:hello@syndicatedrestomod.com"
          className="reveal inline-block px-12 py-5 bg-acid text-ink font-semibold uppercase tracking-widest rounded-full hover:bg-bone transition-colors"
        >
          Apply for Allocation
        </a>
      </div>
    </section>
  );
}

function Index() {
  useReveal();
  const {
    syndicates,
    events,
    recentlyFunded,
    pillars,
    process,
    partners,
    syndicateSteps,
    benefits
  } = Route.useLoaderData();

  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Stats />
      <Pillars pillars={pillars} />
      <TheCar />
      <LiveSyndicates syndicates={syndicates} />
      {/* <RecentlyFunded recentlyFunded={recentlyFunded} /> Disabled until syndicatedrestomod momentum */}
      <Partnership steps={syndicateSteps} />
      <BuildProcess process={process} />
      <Events events={events} />
      <Partners partners={partners} />
      <Benefits benefits={benefits} />
      <Value />
      <Apply />
      <Footer />
    </main>
  );
}
