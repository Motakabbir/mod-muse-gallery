import { createFileRoute } from "@tanstack/react-router";
import pillarOne from "../assets/pillar-one-of-one.jpg";
import pillarPartners from "../assets/pillar-partners.jpg";
import pillarExperience from "../assets/pillar-experience.jpg";
import carbonTexture from "../assets/carbon-texture.jpg";
import buildProcess from "../assets/build-process.jpg";
import heroVideo from "../assets/video.mp4";
import videoPillarOne from "../assets/10825391-hd_1920_1080_24fps.mp4";
import videoCarSection from "../assets/video.mp4";
import videoPillarThree from "../assets/14209297_3840_2160_24fps.mp4";
import { Link } from "@tanstack/react-router";
import { Nav, Footer, useReveal } from "@/components/site";


export const Route = createFileRoute("/")({
  component: Index,
});

const PILLARS = [
  {
    n: "01",
    title: "One of One Build",
    video: videoPillarOne,
    img: pillarOne,
    body: "There will never be another. Car #148 — the 148th of 500 RS500s ever built — reborn as a unique, documented, investment-grade restomod.",
  },
  {
    n: "02",
    title: "World-Class Build Partners",
    img: pillarPartners,
    body: "The very best in innovative manufacturing and artisan craft — from coachbuilding to bleeding-edge additive manufacturing.",
  },
  {
    n: "03",
    title: "Exclusive Access & Experience",
    video: videoPillarThree,
    img: pillarExperience,
    body: "Designed so syndicate members experience the finished car and the journey: build visits, drive events, private invitations.",
  },
];

const PROCESS = [
  { n: "01", title: "Acquisition & Strip", items: ["Base vehicle selection", "Full teardown", "Digital scanning"] },
  { n: "02", title: "Design & Engineering", items: ["CAD modelling", "Structural optimisation", "Performance upgrades"] },
  { n: "03", title: "Manufacturing", items: ["Fabrication", "Additive manufacturing", "Precision assembly"] },
  { n: "04", title: "Finishing & Validation", items: ["Paint & livery", "Road & track testing", "Final sign-off"] },
];

const PARTNERS = [
  { name: "T3DMC", role: "3D Scanning & Digital Twin" },
  { name: "ASM Auto Recycling", role: "Chassis Dismantling & Cataloguing" },
  { name: "Coventry Metalcraft", role: "Precision Coachbuilding" },
  { name: "DMC Silverstone", role: "Assembly & Digital Manufacturing" },
  { name: "BAMD Composites", role: "Composite Structures" },
  { name: "MAHLE Group", role: "Engine Rebuild & Performance" },
  { name: "Cornerstone", role: "Non-structural Skillsets" },
  { name: "HGL / VenueServe", role: "Membership Platform & Fan Portal" },
];

const SYNDICATE_STEPS = [
  { n: 1, title: "Syndicate Formation", body: "A fixed number of participants secure allocation." },
  { n: 2, title: "Build Phase", body: "Full transparency through content and direct access." },
  { n: 3, title: "Experience Phase", body: "Driving events, track days, private access." },
  { n: 4, title: "Exit Opportunity", body: "Potential sale of the asset at premium." },
];

const BENEFITS = [
  { icon: "⚙", title: "Build Access", items: ["Workshop visits", "Engineering insight"] },
  { icon: "◎", title: "Driving Access", items: ["Road drives", "Track sessions"] },
  { icon: "✦", title: "Events", items: ["Launch", "Private experiences"] },
  { icon: "◈", title: "Knowledge", items: ["Learn the build", "Understand the engineering"] },
];

const LIVE_SYNDICATES = [
  {
    title: "Ferrari F430 V8 Manual",
    img: buildProcess,
    allocation: "£5,000 per allocation",
    stats: "27 Allocations • 10 remaining",
    return: "Potential Returns 77.1%*",
  },
  {
    title: "Audi R8 V10 Manual",
    img: buildProcess,
    allocation: "£2,000 per allocation",
    stats: "31 Allocations • 17 remaining",
    return: "Potential Returns 63.90%*",
  },
  {
    title: "Mercedes SLS AMG",
    img: buildProcess,
    allocation: "£5,000 per allocation",
    stats: "39 Allocations • 32 remaining",
    return: "Potential Returns 87.2%*",
  },
];

const RECENTLY_FUNDED = [
  {
    title: "Lamborghini Gallardo SE",
    img: buildProcess,
    date: "Funded Date — Dec 25",
    val: "Funded Value — £82,000",
    members: "Syndicate Members — 14",
  },
  {
    title: "Aston Martin V12 Vantage",
    img: buildProcess,
    date: "Funded Date — Sep 25",
    val: "Funded Value — £66,000",
    members: "Syndicate Members — 21",
  },
  {
    title: "Porsche 996 GT3 RS",
    img: buildProcess,
    date: "Funded Date — May 25",
    val: "Funded Value — £165,000",
    members: "Syndicate Members — 22",
  },
];

const EVENTS = [
  {
    type: "Casual Meet Up",
    title: "London Meet Up, May",
    tag: "INVITE ONLY",
    date: "May 2026",
  },
  {
    type: "Cars & Coffee",
    title: "Alex’s Wish Charity Event",
    tag: "Third Party Event",
    date: "June 2026",
  },
  {
    type: "Supercar Driver",
    title: "Secret Meet 2026",
    tag: "Third Party Event",
    date: "July 2026",
  },
];

const rs500HeroUrl = "https://thecarcrowd.uk/wp-content/uploads/2026/02/1764953707_1-min.webp";

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
      <div className="relative mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
        {[
          { n: "110+", label: "Curated Assets" },
          { n: "6,000+", label: "Registered Members" },
          { n: "12.6%", label: "Annual Rate of Return" },
          { n: "£2,000", label: "Low Entry Barrier" },
        ].map((st) => (
          <div key={st.label} className="reveal text-center py-6 bg-ink/60 hover:bg-ink transition-colors group">
            <div className="font-display text-4xl md:text-5xl lg:text-6xl text-gradient-acid mb-2 group-hover:scale-105 transition-transform">{st.n}</div>
            <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-bone/50">{st.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section className="relative py-32 px-6 bg-carbon overflow-hidden">
      <div className="absolute inset-0 noise-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Why Syndicate" title={<>Built on three pillars.</>} />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {PILLARS.map((p) => (
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
                <div className="absolute top-4 left-4 glass-acid rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.3em] text-acid">PILLAR {p.n}</div>
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
              <div className="font-mono text-xs tracking-[0.3em] uppercase text-acid">VRS500 Reimagined</div>
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

function LiveSyndicates() {
  return (
    <section id="syndicates" className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Active Opportunities"
          title={<>Live Syndicates. <span className="text-acid">Open Allocations.</span></>}
        />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {LIVE_SYNDICATES.map((s) => (
            <article key={s.title} className="group border border-white/10 bg-ink overflow-hidden hover:border-acid transition-all duration-300 flex flex-col justify-between">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-acid text-ink px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase font-semibold">
                  Live
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl mb-2">{s.title}</h3>
                  <div className="font-mono text-sm text-acid mb-6">{s.allocation}</div>
                  <ul className="space-y-2 text-bone/60 text-sm border-t border-white/5 pt-4">
                    <li>{s.stats}</li>
                    <li className="text-bone/80 font-semibold">{s.return}</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <a
                    href="#apply"
                    className="w-full inline-block text-center py-3 border border-white/20 text-bone uppercase tracking-widest text-xs rounded-full hover:border-acid hover:text-acid hover:bg-acid/5 transition-all duration-300"
                  >
                    Request Details
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RecentlyFunded() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Track Record"
          title={<>Recently Funded <span className="text-acid">Syndicates.</span></>}
        />
        <div className="reveal-stagger grid md:grid-cols-3 gap-8">
          {RECENTLY_FUNDED.map((rf) => (
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

function Partnership() {
  return (
    <section className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Partnership"
          title={<>A New Model of <span className="text-acid">Automotive Ownership.</span></>}
        />
        <div className="grid md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {SYNDICATE_STEPS.map((s) => (
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

function BuildProcess() {
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
          {PROCESS.map((p) => (
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

function Events() {
  return (
    <section id="events" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel
          kicker="Syndicate Community"
          title={<>Upcoming Events & <span className="text-acid">Experiences.</span></>}
        />
        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((e) => (
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

function Partners() {
  return (
    <section id="partners" className="relative py-32 px-6 bg-carbon">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Partners" title={<>Built with <span className="text-acid">specialists.</span></>} />
        <p className="reveal text-bone/70 max-w-2xl mb-16 -mt-8 leading-relaxed">
          The Syndicate RS500 is created with leading experts in coachbuilding, digital engineering, additive manufacturing,
          and specialist car builds.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {PARTNERS.map((p, i) => (
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

function Benefits() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionLabel kicker="Syndicate Benefits" title={<>More than an <span className="text-acid">investment.</span></>} />
        <div className="grid md:grid-cols-4 gap-6">
          {BENEFITS.map((b) => (
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
  return (
    <main className="bg-ink text-bone overflow-x-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Stats />
      <Pillars />
      <TheCar />
      <LiveSyndicates />
      <RecentlyFunded />
      <Partnership />
      <BuildProcess />
      <Events />
      <Partners />
      <Benefits />
      <Value />
      <Apply />
      <Footer />
    </main>
  );
}
